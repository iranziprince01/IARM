'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const donationSchema = z.object({
  amount: z.string().min(1, 'Please enter an amount'),
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
  country: z.string().min(1, 'Please select your country'),
  message: z.string().optional(),
});

type DonationFormData = z.infer<typeof donationSchema>;

const paymentMethods = {
  canada: [
    { value: 'credit-debit', label: 'Credit/Debit Card', icon: CreditCardIcon, description: 'Visa, Mastercard, American Express' },
    { value: 'interac', label: 'Interac e-Transfer', icon: BuildingLibraryIcon, description: 'Send via your online banking' },
    { value: 'bank-transfer', label: 'Bank Transfer', icon: BuildingLibraryIcon, description: 'Direct bank transfer' },
  ],
  international: [
    { value: 'paypal', label: 'PayPal', icon: GlobeAltIcon, description: 'PayPal account or guest checkout' },
    { value: 'credit-debit', label: 'Credit/Debit Card', icon: CreditCardIcon, description: 'Visa, Mastercard, American Express' },
    { value: 'bank-transfer', label: 'Bank Transfer', icon: BuildingLibraryIcon, description: 'International wire transfer' },
  ],
};

const presetAmounts = [25, 50, 100, 250, 500, 1000];

export default function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
  });

  const paymentMethod = watch('paymentMethod');
  const country = watch('country');

  const availablePaymentMethods = selectedCountry === 'CA' 
    ? paymentMethods.canada 
    : selectedCountry && selectedCountry !== ''
    ? paymentMethods.international
    : [];

  const onSubmit = async (data: DonationFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Handle different payment methods
      if (data.paymentMethod === 'credit-debit') {
        // Stripe Checkout for credit/debit cards
        const response = await fetch('/api/stripe/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: data.amount,
            fullName: data.fullName,
            email: data.email,
            message: data.message || '',
            paymentMethod: data.paymentMethod,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create checkout session');
        }

        const { url } = await response.json();
        
        if (url) {
          // Redirect to Stripe Checkout
          window.location.href = url;
        } else {
          throw new Error('No checkout URL received');
        }
      } else if (data.paymentMethod === 'bank-transfer') {
        // PLACEHOLDER: Bank transfer API
        const response = await fetch('/api/stripe/bank-transfer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: data.amount,
            fullName: data.fullName,
            email: data.email,
            message: data.message || '',
          }),
        });

        const result = await response.json();
        
        if (response.status === 501) {
          // Feature not yet available
          setSubmitStatus('error');
          alert(result.message || 'Bank transfer is not yet available. Please use credit/debit card.');
        } else {
          throw new Error(result.error || 'Failed to process bank transfer');
        }
      } else if (data.paymentMethod === 'interac') {
        // PLACEHOLDER: Interac e-Transfer API
        const response = await fetch('/api/stripe/interac', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: data.amount,
            fullName: data.fullName,
            email: data.email,
            message: data.message || '',
          }),
        });

        const result = await response.json();
        
        if (response.status === 501) {
          // Feature not yet available
          setSubmitStatus('error');
          alert(result.message || 'Interac e-Transfer is not yet available. Please use credit/debit card.');
        } else {
          throw new Error(result.error || 'Failed to process Interac e-Transfer');
        }
      } else {
        throw new Error('Invalid payment method selected');
      }
    } catch (error) {
      console.error('Donation error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-gold-600">
        Make a Donation
      </h2>

      <div className="space-y-5">
        {/* Country Selection */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <GlobeAltIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="country"
              {...register('country')}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setValue('country', e.target.value);
                setValue('paymentMethod', ''); // Reset payment method when country changes
              }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors appearance-none bg-white"
            >
              <option value="">Select your country</option>
              <option value="CA">Canada</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          {errors.country && (
            <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Donation Amount (CAD) <span className="text-red-500">*</span>
          </label>
          
          {/* Preset Amounts */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setValue('amount', amount.toString())}
                className="px-4 py-2 border-2 border-gold-300 rounded-lg hover:bg-gold-50 hover:border-gold-500 transition-colors font-semibold text-gray-700"
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="relative">
            <CurrencyDollarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              id="amount"
              {...register('amount')}
              placeholder="Enter custom amount"
              min="1"
              step="0.01"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            />
          </div>
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
          )}
        </div>

        {/* Payment Method */}
        {selectedCountry && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {availablePaymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <label
                    key={method.value}
                    className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === method.value
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                  >
                    <input
                      type="radio"
                      {...register('paymentMethod')}
                      value={method.value}
                      className="mt-1"
                    />
                    <Icon className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{method.label}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                    </div>
                  </label>
                );
              })}
            </div>
            {errors.paymentMethod && (
              <p className="mt-1 text-sm text-red-600">{errors.paymentMethod.message}</p>
            )}
          </div>
        )}

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="fullName"
              {...register('fullName')}
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              {...register('email')}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Optional Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message (Optional)
          </label>
          <textarea
            id="message"
            {...register('message')}
            placeholder="Add a personal message or note"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Continue to Payment'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            Thank you for your donation! You will be redirected to complete your payment.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        {/* Security Note */}
        <p className="text-xs text-gray-500 text-center">
          🔒 Your payment information is secure and encrypted. We never store your payment details.
        </p>
      </div>
    </motion.form>
  );
}


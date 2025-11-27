'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

const prayerRequestSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  prayerRequest: z.string().min(10, 'Please share your prayer request (at least 10 characters)'),
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

export default function PrayerRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
  });

  const onSubmit = async (data: PrayerRequestFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real application, you would send this to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Prayer request form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-purple-600">
        Prayer Request Form
      </h2>

      <div className="space-y-5">
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Address */}
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
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              placeholder="Enter your phone number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Prayer Request */}
        <div>
          <label
            htmlFor="prayerRequest"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Prayer Request <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <HandRaisedIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="prayerRequest"
              rows={5}
              {...register('prayerRequest')}
              placeholder="Share your prayer request..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
            />
          </div>
          {errors.prayerRequest && (
            <p className="mt-1 text-sm text-red-600">{errors.prayerRequest.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your prayer request has been submitted. Our prayer team will be praying for you.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            Something went wrong. Please try again.
          </div>
        )}

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Have questions?{' '}
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold">
            Contact us
          </a>
        </p>
      </div>
    </motion.form>
  );
}


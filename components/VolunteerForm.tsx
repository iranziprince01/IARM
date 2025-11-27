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
  HomeIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';

const volunteerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  homeAddress: z.string().min(5, 'Home address must be at least 5 characters'),
  ministry: z.string().min(1, 'Please select a ministry'),
  availability: z.string().min(1, 'Please select your availability'),
  reason: z.string().min(10, 'Please share your reason for volunteering (at least 10 characters)'),
});

type VolunteerFormData = z.infer<typeof volunteerSchema>;

const ministries = [
  'Worship & Music Ministry',
  'Children\'s Ministry',
  'Youth Ministry',
  'Outreach & Missions',
  'Administration & Hospitality',
];

const availabilityOptions = [
  'Sunday Mornings',
  'Sunday Evenings',
  'Wednesday Evenings',
  'Thursday Evenings',
  'Weekdays',
  'Weekends',
  'Flexible',
];

export default function VolunteerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real application, you would send this to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Volunteer form data:', data);
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
        Volunteering Form
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

        {/* Home Address */}
        <div>
          <label
            htmlFor="homeAddress"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Home Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <HomeIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              id="homeAddress"
              rows={3}
              {...register('homeAddress')}
              placeholder="Enter your home address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
            />
          </div>
          {errors.homeAddress && (
            <p className="mt-1 text-sm text-red-600">{errors.homeAddress.message}</p>
          )}
        </div>

        {/* Where do you want to volunteer? */}
        <div>
          <label
            htmlFor="ministry"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Where do you want to volunteer? <span className="text-red-500">*</span>
          </label>
          <select
            id="ministry"
            {...register('ministry')}
            className="w-full px-4 py-3 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          >
            <option value="">Select a ministry</option>
            {ministries.map((ministry) => (
              <option key={ministry} value={ministry}>
                {ministry}
              </option>
            ))}
          </select>
          {errors.ministry && (
            <p className="mt-1 text-sm text-red-600">{errors.ministry.message}</p>
          )}
        </div>

        {/* Your Availability */}
        <div>
          <label
            htmlFor="availability"
            className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2"
          >
            Your Availability <span className="text-red-500">*</span>
            <InformationCircleIcon className="w-4 h-4 text-gray-400" />
          </label>
          <select
            id="availability"
            {...register('availability')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          >
            <option value="">Select your availability</option>
            {availabilityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.availability && (
            <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
          )}
        </div>

        {/* Why do you want to volunteer? */}
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Why do you want to volunteer? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            rows={4}
            {...register('reason')}
            placeholder="Share your reason for volunteering"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
          />
          {errors.reason && (
            <p className="mt-1 text-sm text-red-600">{errors.reason.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Volunteering Request'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your volunteering request has been submitted successfully. We'll be in touch soon.
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


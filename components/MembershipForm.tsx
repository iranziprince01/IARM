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
  CalendarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const membershipSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  homeAddress: z.string().min(5, 'Home address must be at least 5 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  maritalStatus: z.string().min(1, 'Please select your marital status'),
  baptised: z.string().min(1, 'Please select if you are baptised'),
  spouseName: z.string().optional(),
  ministry: z.string().min(1, 'Please select a ministry option'),
  attendanceDuration: z.string().min(1, 'Please select how long you have been attending'),
  reason: z.string().min(10, 'Please share your reason for becoming a member (at least 10 characters)'),
}).refine((data) => {
  // If marital status is "Married", spouseName is required
  if (data.maritalStatus === 'Married' && !data.spouseName) {
    return false;
  }
  return true;
}, {
  message: 'Spouse name is required if you are married',
  path: ['spouseName'],
});

type MembershipFormData = z.infer<typeof membershipSchema>;

const attendanceOptions = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  '1-2 years',
  'More than 2 years',
];

const maritalStatusOptions = [
  'Single',
  'Married',
  'Divorced',
  'Widowed',
  'Separated',
];

const baptisedOptions = [
  'Yes',
  'No',
];

const ministryOptions = [
  'None',
  'Worship & Music Ministry',
  'Children\'s Ministry',
  'Youth Ministry',
  'Women\'s Ministry',
  'Men\'s Ministry',
  'Outreach & Missions',
  'Administration & Hospitality',
];

export default function MembershipForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
  });

  const maritalStatusValue = watch('maritalStatus');

  const onSubmit = async (data: MembershipFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // In a real application, you would send this to an API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Membership form data:', data);
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
        Membership Registration Form
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

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="date"
              id="dateOfBirth"
              {...register('dateOfBirth')}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            />
          </div>
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>

        {/* Marital Status */}
        <div>
          <label
            htmlFor="maritalStatus"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Marital Status <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <HeartIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="maritalStatus"
              {...register('maritalStatus')}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
            >
              <option value="">Select marital status</option>
              {maritalStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          {errors.maritalStatus && (
            <p className="mt-1 text-sm text-red-600">{errors.maritalStatus.message}</p>
          )}
        </div>

        {/* Baptised */}
        <div>
          <label
            htmlFor="baptised"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Are you baptised? <span className="text-red-500">*</span>
          </label>
          <select
            id="baptised"
            {...register('baptised')}
            className="w-full px-4 py-3 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          >
            <option value="">Select an option</option>
            {baptisedOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.baptised && (
            <p className="mt-1 text-sm text-red-600">{errors.baptised.message}</p>
          )}
        </div>

        {/* Spouse Name - Conditional */}
        {maritalStatusValue === 'Married' && (
          <div>
            <label
              htmlFor="spouseName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Spouse Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="spouseName"
                {...register('spouseName')}
                placeholder="Enter your spouse's name"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
            </div>
            {errors.spouseName && (
              <p className="mt-1 text-sm text-red-600">{errors.spouseName.message}</p>
            )}
          </div>
        )}

        {/* Ministry you want to join */}
        <div>
          <label
            htmlFor="ministry"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Ministry you want to join <span className="text-red-500">*</span>
          </label>
          <select
            id="ministry"
            {...register('ministry')}
            className="w-full px-4 py-3 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          >
            <option value="">Select a ministry</option>
            {ministryOptions.map((ministry) => (
              <option key={ministry} value={ministry}>
                {ministry}
              </option>
            ))}
          </select>
          {errors.ministry && (
            <p className="mt-1 text-sm text-red-600">{errors.ministry.message}</p>
          )}
        </div>

        {/* How long have you been attending? */}
        <div>
          <label
            htmlFor="attendanceDuration"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            How long have you been attending? <span className="text-red-500">*</span>
          </label>
          <select
            id="attendanceDuration"
            {...register('attendanceDuration')}
            className="w-full px-4 py-3 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
          >
            <option value="">Select duration</option>
            {attendanceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.attendanceDuration && (
            <p className="mt-1 text-sm text-red-600">{errors.attendanceDuration.message}</p>
          )}
        </div>

        {/* Why do you want to become a member? */}
        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Why do you want to become a member? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            rows={4}
            {...register('reason')}
            placeholder="Share your reason for becoming a member"
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
          {isSubmitting ? 'Submitting...' : 'Submit Membership Request'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your membership request has been submitted successfully. We'll be in touch soon.
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


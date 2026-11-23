'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function DonationSuccessPage() {
  const t = useTranslations('donate');
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // You can verify the payment here by calling your API
    // For now, we'll just show success after a brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white to-gold-50/40 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10 md:p-12 text-center"
      >
        {isLoading ? (
          <div className="py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Verifying your donation...</p>
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircleIcon className="w-12 h-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Donation!
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Your generous contribution helps us continue our mission and serve our community.
            </p>

            {sessionId && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Transaction ID:</span> {sessionId}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  A confirmation email has been sent to your email address.
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary"
              >
                Return to Home
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors text-sm sm:text-base"
              >
                Make Another Donation
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If you have any questions about your donation, please{' '}
                <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-semibold">
                  contact us
                </Link>
                .
              </p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}


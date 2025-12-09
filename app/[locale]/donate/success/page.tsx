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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center px-4 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 text-center"
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors"
              >
                Return to Home
              </Link>
              <Link
                href="/donate"
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
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


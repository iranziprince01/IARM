'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

interface BibleVerseProps {
  verse: string;
  reference: string;
  variant?: 'default' | 'highlighted' | 'minimal';
  className?: string;
}

export default function BibleVerse({
  verse,
  reference,
  variant = 'default',
  className = '',
}: BibleVerseProps) {
  const baseClasses = 'relative overflow-hidden rounded-xl';
  
  if (variant === 'highlighted') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${baseClasses} bg-gradient-to-r from-gold-500 to-gold-600 p-8 text-white shadow-xl ${className}`}
      >
        <div className="flex items-start space-x-4">
          <BookOpenIcon className="w-8 h-8 text-gold-100 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-medium leading-relaxed italic mb-4 text-gold-50">
              "{verse}"
            </p>
            <p className="text-base md:text-lg font-semibold text-gold-100 text-right">
              — {reference}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${baseClasses} bg-white border-2 border-gold-200 p-6 ${className}`}
      >
        <div className="flex items-start space-x-3">
          <BookOpenIcon className="w-6 h-6 text-gold-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="text-lg font-medium leading-relaxed italic text-gray-700 mb-2">
              "{verse}"
            </p>
            <p className="text-sm font-semibold text-gold-600 text-right">
              — {reference}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${baseClasses} bg-gradient-to-br from-blue-50 via-gold-50 to-white p-8 border-l-4 border-gold-500 shadow-lg ${className}`}
    >
      <div className="flex items-start space-x-4">
        <BookOpenIcon className="w-8 h-8 text-gold-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-gray-800 mb-4">
            "{verse}"
          </p>
          <p className="text-base md:text-lg font-semibold text-gold-600 text-right">
            — {reference}
          </p>
        </div>
      </div>
    </motion.div>
  );
}


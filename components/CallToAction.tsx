'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultLocale } from '@/i18n/request';

export default function CallToAction() {
  const t = useTranslations('cta');
  const tHome = useTranslations('home');
  const locale = useLocale();

  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gold-100">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={locale === defaultLocale ? '/contact' : `/${locale}/contact`}
              className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('visit')}
            </Link>
            <Link
              href={locale === defaultLocale ? '/contact#donate' : `/${locale}/contact#donate`}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              {tHome('donate')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


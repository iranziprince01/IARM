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
    <section className="section-padding section-bg-accent">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto py-2 sm:py-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[1.85rem] xl:text-[2.1rem] font-bold mb-3 md:mb-4">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mb-6 md:mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href={locale === defaultLocale ? '/contact' : `/${locale}/contact`}
              prefetch={true}
              className="w-full sm:w-auto bg-white text-gold-600 hover:bg-gold-50 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              {t('visit')}
            </Link>
            <Link
              href={locale === defaultLocale ? '/contact#donate' : `/${locale}/contact#donate`}
              prefetch={true}
              className="w-full sm:w-auto bg-transparent border-2 border-white/90 text-white hover:bg-white hover:text-gold-600 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 text-sm"
            >
              {tHome('donate')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
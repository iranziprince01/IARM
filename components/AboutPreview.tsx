'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { defaultLocale } from '@/i18n/request';

export default function AboutPreview() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-secondary text-center mb-8">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">{t('church')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">{t('congregation')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md md:col-span-2"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">{t('ministry')}</p>
            </motion.div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              href={locale === defaultLocale ? '/about' : `/${locale}/about`}
              className="btn-primary inline-block"
            >
              {t('title')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


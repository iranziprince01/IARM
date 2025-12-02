'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import { defaultLocale } from '@/i18n/request';

export default function SermonsContent() {
  const t = useTranslations('sermons');
  const locale = useLocale();

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('comingSoon')}
        backgroundImage="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church sermons and messages"
      />

      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12 text-center"
          >
            <div className="mb-6 flex justify-center">
              <VideoCameraIcon className="w-20 h-20 text-gold-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('latest')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-justify mb-8">
              {t('workingOn')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getPath('/contact')}
                prefetch={true}
                className="btn-primary"
              >
                {t('visitUs')}
              </Link>
              <Link
                href={getPath('/services-sermons')}
                prefetch={true}
                className="btn-secondary"
              >
                {t('serviceTimes')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


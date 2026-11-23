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
        backgroundImage="/images/foundation/002.jpg"
        backgroundImageAlt="Church sermons and messages"
      />

      <section className="section-padding section-bg-white">
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
            className="max-w-4xl mx-auto bg-white rounded-xl border-2 border-gray-300 shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center"
          >
            <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
              <VideoCameraIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gold-600" />
            </div>
            <h2 className="card-title mb-2">
              {t('latest')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed text-justify mb-6 sm:mb-8">
              {t('workingOn')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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


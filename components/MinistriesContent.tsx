'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
  HeartIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';
import { defaultLocale } from '@/i18n/request';

export default function MinistriesContent() {
  const t = useTranslations('ministries');
  const locale = useLocale();

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  const ministries = [
    { key: 'worship', Icon: MusicalNoteIcon, color: 'from-blue-500 to-blue-600' },
    { key: 'youth', Icon: UserGroupIcon, color: 'from-blue-400 to-blue-500' },
    { key: 'children', Icon: UserIcon, color: 'from-gold-400 to-gold-500' },
    { key: 'women', Icon: HeartIcon, color: 'from-blue-600 to-blue-700' },
    { key: 'men', Icon: BriefcaseIcon, color: 'from-blue-500 to-blue-600' },
    { key: 'missions', Icon: GlobeAltIcon, color: 'from-gold-500 to-gold-600' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/002.jpg"
        backgroundImageAlt="Church ministries and service"
      />

      <section className="section-padding section-bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-10 md:mb-14"
          >
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-modern overflow-hidden border-2 border-gray-300 hover:border-gray-400 p-0"
              >
                <div
                  className={`h-24 sm:h-28 md:h-32 bg-gradient-to-r ${ministry.color} flex items-center justify-center`}
                >
                  <ministry.Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {t(ministry.key)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    {t(`${ministry.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/002.jpg',
          '/images/foundation/005.jpg',
          '/images/foundation/006.jpg',
          '/images/foundation/008.jpg',
        ]}
        title="Ministry in Action"
        subtitle="See how our ministries serve and impact lives in our community"
        columns={4}
        className="section-bg-soft"
      />

      <section className="section-padding section-bg-warm">
        <div className="container-custom">
          {/* Refugee Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8"
            id="refugee"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 rounded-xl p-5 sm:p-6 md:p-8 text-white shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{t('refugeeSupport')}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gold-100 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
                {t('refugeeSupportDesc')}
              </p>
              <Link
                href={getPath('/foundation')}
                prefetch={true}
                className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                {t('getInvolved')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


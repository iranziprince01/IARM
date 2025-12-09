'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';
import {
  UserIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

export default function LeadershipContent() {
  const t = useTranslations('leadership');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church leadership and pastoral team"
      />

      {/* Senior Pastor Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-gold-600 mb-3 sm:mb-4">
                {t('seniorPastor')}
              </h2>
            </motion.div>

            {/* Two Separate Cards - Parallel Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
              {/* Portrait Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/foundation/012.jpg"
                    alt={t('seniorPastorName')}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    loading="lazy"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                  {/* Decorative border accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500"></div>
                </div>
              </motion.div>

              {/* Bio Card - Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
              >
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {t('seniorPastorName')}
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg">
                    {t('seniorPastorTitle')}
                  </div>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 sm:pl-6">
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                    {t('seniorPastorBio')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-blue-600 mb-3 sm:mb-4">
                {t('pastors')}
              </h2>
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl max-w-2xl mx-auto mb-6 sm:mb-8">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('pastorsDesc')}
                </p>
              </div>
            </motion.div>

            {/* Pastors Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
              {/* Pastor 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t('pastor1Name')}
                  </h3>
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-xs sm:text-sm">
                    {t('pastor1Title')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('pastor1Bio')}
                </p>
              </motion.div>

              {/* Pastor 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t('pastor2Name')}
                  </h3>
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-xs sm:text-sm">
                    {t('pastor2Title')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('pastor2Bio')}
                </p>
              </motion.div>

              {/* Pastor 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t('pastor3Name')}
                  </h3>
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-xs sm:text-sm">
                    {t('pastor3Title')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('pastor3Bio')}
                </p>
              </motion.div>

              {/* Pastor 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {t('pastor4Name')}
                  </h3>
                  <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg text-xs sm:text-sm">
                    {t('pastor4Title')}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('pastor4Bio')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/007.jpg',
          '/images/foundation/009.jpg',
          '/images/foundation/011.jpg',
          '/images/foundation/010.jpg',
        ]}
        title="Our Leadership Team"
        subtitle="Meet the dedicated leaders who guide and serve our community"
        columns={4}
      />

      {/* Other Church Leaders Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-gold-500 to-blue-600 rounded-full flex items-center justify-center">
                  <BriefcaseIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('otherLeaders')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl mx-4 sm:mx-6"
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                {t('otherLeadersDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


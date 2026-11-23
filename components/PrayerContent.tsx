'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PrayerRequestForm from './PrayerRequestForm';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';

export default function PrayerContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('prayer');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church prayer ministry"
      />

      <section className="section-padding section-bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-14"
          >
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="card-soft">
                <h2 className="card-title mb-2">
                  {t('ministry')}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4 sm:mb-6">
                  {t('ministryDesc')}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {t('weekly')}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {t('weeklyDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {t('requests')}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {t('requestsDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {t('team')}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {t('teamDesc')}
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 sm:p-8 text-white text-center">
                  <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{t('join')}</h2>
                  <p className="text-sm text-gold-100 leading-relaxed text-justify">
                    {t('joinDesc')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <div>
              <PrayerRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/003.jpg',
          '/images/foundation/006.jpg',
          '/images/foundation/010.jpg',
        ]}
        title="Prayer & Fellowship"
        subtitle="Join us in prayer and experience the power of community intercession"
        columns={3}
      />
    </div>
  );
}


'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PrayerRequestForm from './PrayerRequestForm';
import PageHero from './PageHero';

export default function PrayerContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('prayer');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church prayer ministry"
      />

      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('ministry')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {t('ministryDesc')}
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('weekly')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {t('weeklyDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('requests')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {t('requestsDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('team')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
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
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">{t('join')}</h2>
                  <p className="text-lg text-gold-100 leading-relaxed text-justify">
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
    </div>
  );
}


'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import VolunteerForm from './VolunteerForm';
import PageHero from './PageHero';

export default function VolunteerContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('volunteer');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church volunteer service"
      />

      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
          >
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('opportunities')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
                  {t('opportunitiesDesc')}
                </p>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Worship & Music Ministry</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Children's Ministry</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Youth Ministry</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Outreach & Missions</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Administration & Hospitality</span>
                  </li>
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-5 sm:p-6 md:p-8 text-white text-center"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('ready')}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gold-100 leading-relaxed text-justify">
                  {t('readyDesc')}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <div>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


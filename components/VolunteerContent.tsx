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
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church volunteer service"
      />

      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
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
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('opportunities')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {t('opportunitiesDesc')}
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Worship & Music Ministry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Children's Ministry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Youth Ministry</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Outreach & Missions</span>
                  </li>
                  <li className="flex items-start space-x-3">
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
                className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white text-center"
              >
                <h2 className="text-2xl font-bold mb-4">{t('ready')}</h2>
                <p className="text-lg text-gold-100 leading-relaxed text-justify">
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


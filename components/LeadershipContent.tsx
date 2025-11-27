'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
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
        backgroundImage="https://images.unsplash.com/photo-1529070538774-1843d3265d82?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church leadership and pastoral team"
      />

      {/* Senior Pastor Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <UserIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-gold-600 mb-4">
                {t('seniorPastor')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {t('seniorPastorName')}
              </h3>
              <p className="text-lg text-gold-600 font-semibold mb-6">
                {t('seniorPastorTitle')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('seniorPastorBio')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="section-padding bg-gradient-to-br from-gold-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <UserGroupIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-blue-600 mb-4">
                {t('pastors')}
              </h2>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-md max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {t('pastorsDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('pastorsDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Church Leaders Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-blue-600 rounded-full flex items-center justify-center">
                  <BriefcaseIcon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="heading-secondary text-gray-900 mb-4">
                {t('otherLeaders')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('otherLeadersDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


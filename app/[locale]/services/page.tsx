'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  HandRaisedIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'sunday',
      time: t('sundayTime'),
      desc: t('sundayDesc'),
      Icon: BuildingOfficeIcon,
    },
    {
      key: 'prayer',
      time: t('prayerTime'),
      desc: t('prayerDesc'),
      Icon: HandRaisedIcon,
    },
    {
      key: 'bible',
      time: t('bibleTime'),
      desc: t('bibleDesc'),
      Icon: BookOpenIcon,
    },
  ];

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-gold-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="heading-primary">{t('title')}</h1>
            <p className="text-xl text-gray-700 mt-4">
              Join us for worship, prayer, and fellowship throughout the week.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="mb-4 flex justify-center">
                  <service.Icon className="w-16 h-16 text-gold-600" />
                </div>
                <h3 className="text-2xl font-bold text-gold-600 mb-3">
                  {t(service.key)}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.time}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">What to Expect</h2>
            <p className="text-lg text-gold-100 leading-relaxed">
              Our services are welcoming and inclusive, featuring inspiring
              messages, uplifting music, and warm fellowship. We offer worship
              in English with additional support in French and Kinyarwanda. Whether you're visiting for
              the first time or are a regular member, you'll find a place to
              belong and grow in faith.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


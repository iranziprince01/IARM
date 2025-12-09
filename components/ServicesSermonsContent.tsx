'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  HandRaisedIcon,
  BookOpenIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';

export default function ServicesSermonsContent() {
  const t = useTranslations('services');
  const tSermons = useTranslations('sermons');
  const tServicesSermons = useTranslations('servicesSermons');

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
    <div>
      {/* Hero Section */}
      <PageHero
        title={tServicesSermons('title')}
        subtitle={tServicesSermons('subtitle')}
        backgroundImage="/images/foundation/004.jpg"
        backgroundImageAlt="Church worship service"
      />

      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
          </motion.div>

          {/* Service Times */}
          <div className="mb-16">
            <h2 className="heading-secondary text-center mb-8">
              {t('title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-center"
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
                  <p className="text-gray-700 leading-relaxed text-justify mt-4">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sermons Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-xl p-12 text-center"
            >
              <div className="mb-6 flex justify-center">
                <VideoCameraIcon className="w-20 h-20 text-gold-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {tSermons('title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-justify mb-8">
                {tSermons('comingSoon')}
              </p>
            </motion.div>
          </div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 space-y-8 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">{tServicesSermons('whatToExpect')}</h2>
              <p className="text-lg text-gold-100 leading-relaxed text-justify">
                {tServicesSermons('whatToExpectDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


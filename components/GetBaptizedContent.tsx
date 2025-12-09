'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import BaptismRequestForm from './BaptismRequestForm';
import PageHero from './PageHero';

export default function GetBaptizedContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('baptism');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church baptism"
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
                  {t('about')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify mb-6">
                  {t('aboutDesc')}
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t('why')}
                    </h3>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('whyDesc')}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('whyDesc2')}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('whyDesc3')}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t('process')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify mb-4">
                      {t('processDesc')}
                    </p>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('process1')}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('process2')}</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-gold-500 font-bold mt-1">•</span>
                        <span className="text-justify">{t('process3')}</span>
                      </li>
                    </ul>
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
                  <h2 className="text-2xl font-bold mb-4">{t('ready')}</h2>
                  <p className="text-lg text-gold-100 leading-relaxed text-justify">
                    {t('readyDesc')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <div>
              <BaptismRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


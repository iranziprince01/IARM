'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import MembershipForm from './MembershipForm';
import PageHero from './PageHero';

export default function BecomeMemberContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('membership');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church membership"
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
                  {t('process')}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
                  {t('processDesc')}
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t('attend')}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                        {t('attendDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t('class')}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                        {t('classDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        {t('commitment')}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                        {t('commitmentDesc')}
                      </p>
                    </div>
                  </div>
                </div>
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
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


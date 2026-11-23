'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import MembershipForm from './MembershipForm';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';

export default function BecomeMemberContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('membership');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church membership"
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
                  {t('process')}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
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
                      <p className="text-sm text-gray-700 leading-relaxed text-justify">
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
                      <p className="text-sm text-gray-700 leading-relaxed text-justify">
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
                      <p className="text-sm text-gray-700 leading-relaxed text-justify">
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
                className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 sm:p-8 text-white text-center"
              >
                <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">{t('ready')}</h2>
                <p className="text-sm text-gold-100 leading-relaxed text-justify">
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

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/001.jpg',
          '/images/foundation/002.jpg',
          '/images/foundation/003.jpg',
        ]}
        title="Our Church Family"
        subtitle="Become part of a welcoming and supportive community"
        columns={3}
      />
    </div>
  );
}


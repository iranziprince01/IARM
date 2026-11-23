'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import VolunteerForm from './VolunteerForm';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';

export default function VolunteerContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('volunteer');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/010.jpg"
        backgroundImageAlt="Church volunteer service"
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
                  {t('opportunities')}
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
                  {t('opportunitiesDesc')}
                </p>
                <ul className="space-y-3 sm:space-y-4 text-sm text-gray-700">
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Worship & Music Ministry</span>
                  </li>
                  <li className="flex items-start space-x-2 sm:space-x-3">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">Children&apos;s Ministry</span>
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
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/010.jpg',
          '/images/foundation/004.jpg',
          '/images/foundation/006.jpg',
        ]}
        title="Volunteer Opportunities"
        subtitle="Join our dedicated volunteers making a difference in the community"
        columns={3}
      />
    </div>
  );
}


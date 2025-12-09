'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import DonationForm from './DonationForm';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';
import { defaultLocale } from '@/i18n/request';

export default function DonateContent() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('donate');

  const getContactPath = () => {
    return locale === defaultLocale ? '/contact' : `/${locale}/contact`;
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/005.jpg"
        backgroundImageAlt="Church giving and donation"
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
            {/* Left Side - Donation Form */}
            <div>
              <DonationForm />
            </div>

            {/* Right Side - Information */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-xl"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('ways')}
                </h2>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t('inPerson')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {t('inPersonDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t('eTransfer')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {t('eTransferDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t('bankTransfer')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {t('bankTransferDesc')}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 text-white"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t('everyGift')}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gold-100 leading-relaxed text-justify mb-4 sm:mb-5 md:mb-6">
                  {t('everyGiftDesc')}
                </p>
                <Link
                  href={getContactPath()}
                  prefetch={true}
                  className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/005.jpg',
          '/images/foundation/008.jpg',
          '/images/foundation/004.jpg',
          '/images/foundation/006.jpg',
        ]}
        title="Impact of Your Generosity"
        subtitle="See how your donations transform lives and support our ministry"
        columns={4}
      />
    </div>
  );
}


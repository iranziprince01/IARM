'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import DonationForm from './DonationForm';
import PageHero from './PageHero';
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
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church giving and donation"
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
            {/* Left Side - Donation Form */}
            <div>
              <DonationForm />
            </div>

            {/* Right Side - Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('ways')}
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('inPerson')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {t('inPersonDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('eTransfer')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {t('eTransferDesc')}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('bankTransfer')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
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
                className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white"
              >
                <h2 className="text-2xl font-bold mb-4">{t('everyGift')}</h2>
                <p className="text-lg text-gold-100 leading-relaxed text-justify mb-6">
                  {t('everyGiftDesc')}
                </p>
                <Link
                  href={getContactPath()}
                  className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


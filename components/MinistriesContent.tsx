'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
  HeartIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import { defaultLocale } from '@/i18n/request';

export default function MinistriesContent() {
  const t = useTranslations('ministries');
  const locale = useLocale();

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  const ministries = [
    { key: 'worship', Icon: MusicalNoteIcon, color: 'from-blue-500 to-blue-600' },
    { key: 'youth', Icon: UserGroupIcon, color: 'from-blue-400 to-blue-500' },
    { key: 'children', Icon: UserIcon, color: 'from-gold-400 to-gold-500' },
    { key: 'women', Icon: HeartIcon, color: 'from-blue-600 to-blue-700' },
    { key: 'men', Icon: BriefcaseIcon, color: 'from-blue-500 to-blue-600' },
    { key: 'missions', Icon: GlobeAltIcon, color: 'from-gold-500 to-gold-600' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle="Discover how you can get involved and grow in faith through our various ministries."
        backgroundImage="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church ministries and service"
      />

      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${ministry.color} flex items-center justify-center`}
                >
                  <ministry.Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(ministry.key)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {t(`${ministry.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Refugee Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 space-y-8"
            id="refugee"
          >
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 rounded-xl p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Refugee Support Programs</h2>
              <p className="text-lg text-gold-100 leading-relaxed text-justify mb-6">
                Our church maintains active partnerships with congregations and
                refugee communities in Uganda, Kenya, and Rwanda. Through these
                collaborations we offer support for vulnerable families, education
                assistance for refugee children, distribution of Bibles and
                Christian resources, community development programs, pastoral and
                ministry support, and strengthening local churches.
              </p>
              <Link
                href={getPath('/foundation')}
                className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


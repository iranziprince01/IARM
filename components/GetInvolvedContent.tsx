'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  HandRaisedIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import { defaultLocale } from '@/i18n/request';

export default function GetInvolvedContent({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const tPage = useTranslations('getInvolvedPage');

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  const involvementOptions = [
    {
      key: 'volunteer',
      title: 'Volunteer',
      desc: 'Serve in various ministries and make a difference in our community.',
      href: getPath('/get-involved/volunteer'),
      Icon: UserGroupIcon,
    },
    {
      key: 'becomeMember',
      title: 'Become a Member',
              desc: 'Join our church family and become an official member.',
      href: getPath('/get-involved/become-member'),
      Icon: UserGroupIcon,
    },
    {
      key: 'prayer',
      title: 'Prayer',
      desc: 'Join our prayer groups and intercessory prayer ministry.',
      href: getPath('/get-involved/prayer'),
      Icon: HandRaisedIcon,
    },
    {
      key: 'getBaptized',
      title: 'Get Baptized',
      desc: 'Take the next step in your faith journey through baptism.',
      href: getPath('/get-involved/get-baptized'),
      Icon: StarIcon,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={tPage('title')}
        subtitle={tPage('subtitle')}
        backgroundImage="/images/foundation/004.jpg"
        backgroundImageAlt="Church community involvement"
      />

      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
              >
                <div className="h-24 sm:h-28 md:h-32 bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center">
                  <option.Icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {t(option.key)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-3 sm:mb-4">
                    {option.desc}
                  </p>
                  <Link href={option.href} prefetch={true} className="inline-block btn-primary">
                    {tPage('learnMore')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


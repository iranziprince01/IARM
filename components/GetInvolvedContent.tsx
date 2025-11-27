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
        title="Get Involved"
        subtitle="There are many ways to get involved and grow in your faith. Find the opportunity that's right for you."
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church community involvement"
      />

      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={option.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div                 className="h-32 bg-gradient-to-r from-gold-500 to-gold-600 flex items-center justify-center">
                  <option.Icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {t(option.key)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify mb-4">
                    {option.desc}
                  </p>
                  <Link href={option.href} className="inline-block btn-primary">
                    Learn More
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


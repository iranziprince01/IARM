'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UserGroupIcon,
  HandRaisedIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';
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
        backgroundImage="/images/foundation/004.jpg"
        backgroundImageAlt="Church community involvement"
      />

      <section className="section-padding section-bg-white">
        <div className="container-custom">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {involvementOptions.map((option, index) => {
              // Map each option to a relevant foundation image
              const optionImages = [
                '/images/foundation/010.jpg', // volunteer
                '/images/foundation/001.jpg', // become member
                '/images/foundation/003.jpg', // prayer
                '/images/foundation/006.jpg', // get baptized
              ];
              
              return (
                <motion.div
                  key={option.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-modern overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 group p-0"
                >
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <Image
                      src={optionImages[index]}
                      alt={option.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                        <option.Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="card-title mb-1.5">
                      {t(option.key)}
                    </h3>
                    <p className="card-body text-justify mb-3">
                      {option.desc}
                    </p>
                    <Link href={option.href} prefetch={true} className="inline-block btn-primary">
                      {tPage('learnMore')}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


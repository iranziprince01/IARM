'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MusicalNoteIcon,
  UserGroupIcon,
  UserIcon,
  HeartIcon,
  BriefcaseIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';

export default function MinistriesPreview() {
  const t = useTranslations('ministries');
  const locale = useLocale();

  const ministries = [
    { key: 'worship', Icon: MusicalNoteIcon, iconBg: 'bg-gold-50', iconColor: 'text-gold-600' },
    { key: 'youth', Icon: UserGroupIcon, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { key: 'children', Icon: UserIcon, iconBg: 'bg-gold-50', iconColor: 'text-gold-600' },
    { key: 'women', Icon: HeartIcon, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { key: 'men', Icon: BriefcaseIcon, iconBg: 'bg-gold-50', iconColor: 'text-gold-600' },
    { key: 'missions', Icon: GlobeAltIcon, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  ];

  return (
    <section className="section-padding section-bg-warm">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="heading-secondary">{t('title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-modern text-center"
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-11 h-11 rounded-full ${ministry.iconBg} flex items-center justify-center`}
                >
                  <ministry.Icon className={`w-5 h-5 ${ministry.iconColor}`} />
                </div>
              </div>
              <h3 className="card-title mb-1.5">
                {t(`${ministry.key}`)}
              </h3>
              <p className="card-body">
                {t(`${ministry.key}Desc`)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <Link 
            href={locale === defaultLocale ? '/ministries' : `/${locale}/ministries`}
            prefetch={true}
            className="btn-primary"
          >
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
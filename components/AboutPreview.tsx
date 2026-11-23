'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BuildingLibraryIcon, UsersIcon, HeartIcon } from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';

export default function AboutPreview() {
  const t = useTranslations('about');
  const locale = useLocale();

  const cards = [
    { text: t('church'), Icon: BuildingLibraryIcon, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
    { text: t('congregation'), Icon: UsersIcon, iconBg: 'bg-gold-50', iconColor: 'text-gold-600' },
    { text: t('ministry'), Icon: HeartIcon, iconBg: 'bg-blue-50', iconColor: 'text-blue-600', span: true },
  ];

  return (
    <section className="section-padding section-bg-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="content-readable"
        >
          <h2 className="heading-secondary text-center mb-8 md:mb-10">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-soft ${card.span ? 'md:col-span-2' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center mx-auto sm:mx-0`}
                  >
                    <card.Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <p className="card-body text-justify flex-1">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-10 text-center">
            <Link
              href={locale === defaultLocale ? '/about' : `/${locale}/about`}
              prefetch={true}
              className="btn-primary inline-block"
            >
              {t('title')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
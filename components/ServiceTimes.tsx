'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SunIcon, HandRaisedIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';

export default function ServiceTimes() {
  const t = useTranslations('services');
  const locale = useLocale();

  const services = [
    {
      key: 'sunday',
      time: t('sundayTime'),
      desc: t('sundayDesc'),
      Icon: SunIcon,
      iconBg: 'bg-gold-50',
      iconColor: 'text-gold-600',
    },
    {
      key: 'prayer',
      time: t('prayerTime'),
      desc: t('prayerDesc'),
      Icon: HandRaisedIcon,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      key: 'bible',
      time: t('bibleTime'),
      desc: t('bibleDesc'),
      Icon: BookOpenIcon,
      iconBg: 'bg-gold-50',
      iconColor: 'text-gold-600',
    },
  ];

  return (
    <section className="section-padding section-bg-cool">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-soft bg-gradient-to-br from-white to-gold-50/40 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-11 h-11 rounded-full ${service.iconBg} flex items-center justify-center`}
                  >
                    <service.Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                </div>
                <h3 className="card-title text-gold-600 mb-1.5">
                  {t(service.key)}
                </h3>
                <p className="card-subtitle mb-2">
                  {service.time}
                </p>
                <p className="card-body">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 md:mt-10 text-center">
            <Link 
              href={locale === defaultLocale ? '/services-sermons' : `/${locale}/services-sermons`}
              prefetch={true}
              className="btn-primary"
            >
              {t('title')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
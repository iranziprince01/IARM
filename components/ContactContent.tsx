'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import ImageGallery from './ImageGallery';
import {
  CalendarIcon,
  BookOpenIcon,
  HandRaisedIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';
import { defaultLocale } from '@/i18n/request';

export default function ContactContent() {
  const t = useTranslations('contact');
  const locale = useLocale();

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/002.jpg"
        backgroundImageAlt="Church community and contact"
      />

      {/* Contact Information & Form */}
      <section className="section-padding section-bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-16 items-start lg:items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="card-soft mb-4 sm:mb-6">
                <h2 className="heading-secondary mb-3 sm:mb-4">{t('visit')}</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700">
                  <div>
                    <p>
                      <span className="font-semibold text-gold-600">
                        Address:
                      </span>
                      <br />
                      <span className="text-justify">{t('address')}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold text-gold-600">
                        {t('phone')}:
                      </span>
                      <br />
                      <a
                        href="tel:+15877786406"
                        className="hover:text-gold-600 transition-colors"
                      >
                        {t('phone1')}
                      </a>
                      <br />
                      <a
                        href="tel:+18254617431"
                        className="hover:text-gold-600 transition-colors"
                      >
                        {t('phone2')}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold text-gold-600">
                        {t('email')}:
                      </span>
                      <br />
                      <a
                        href="mailto:info@iarmministries.org"
                        className="hover:text-gold-600 transition-colors"
                      >
                        info@iarmministries.org
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-soft">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t('serviceTimes')}
                </h3>
                <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-700">
                  <li className="text-justify">{t('sunday')}</li>
                  <li className="text-justify">{t('wednesday')}</li>
                  <li className="text-justify">{t('thursday')}</li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Find Us on Map
                </h3>
                <div className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-sm border-2 border-gray-300">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('6110 Fulton Road, Edmonton, AB T6A 3T3, Canada')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    title="HOPE COMMUNITY GOSPER International Ministry Location - 6110 Fulton Road, Edmonton, AB T6A 3T3"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('6110 Fulton Road, Edmonton, AB T6A 3T3, Canada')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-600 hover:text-gold-700 underline transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-soft self-start"
              style={{ height: 'fit-content' }}
            >
              <h2 className="heading-secondary mb-4 sm:mb-5 md:mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        className="section-padding section-bg-accent"
        id="donate"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              {t('supportMinistry')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed text-justify mb-6 sm:mb-8">
              {t('supportMinistryDesc')}
            </p>
            <Link
              href={getPath('/donate')}
              className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm sm:text-base"
            >
              {t('donateNow')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events and Resources Section */}
      <section className="section-padding section-bg-warm" id="events-resources">
        <div className="container-custom">
          <div className="content-readable">
            {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
          >
              <h2 className="heading-secondary mb-6">{t('eventsResources')}</h2>
          </motion.div>

          {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-10 md:mb-14"
            >
              <div className="max-w-4xl mx-auto">
                <div className="card-soft hover:shadow-md transition-shadow border-2 border-gray-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-md">
                        <CalendarIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {t('upcomingEvents')}
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t('upcomingEventsDesc')}
                </p>
                    </div>
                  </div>
            </div>
          </div>
            </motion.div>

          {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 md:mb-14"
            >
              <h3 className="heading-secondary text-center mb-10 md:mb-14">Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {[
                {
                  title: t('resources.bibleStudy'),
                  desc: t('resources.bibleStudyDesc'),
                  Icon: BookOpenIcon,
                    color: 'from-blue-500 to-blue-600',
                },
                {
                  title: t('resources.prayerRequests'),
                  desc: t('resources.prayerRequestsDesc'),
                  Icon: HandRaisedIcon,
                    color: 'from-gold-500 to-gold-600',
                },
                {
                  title: t('resources.ministryResources'),
                  desc: t('resources.ministryResourcesDesc'),
                  Icon: BriefcaseIcon,
                    color: 'from-blue-600 to-blue-700',
                },
                {
                  title: t('resources.communitySupport'),
                  desc: t('resources.communitySupportDesc'),
                  Icon: UserGroupIcon,
                    color: 'from-gold-600 to-gold-700',
                },
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500"
                >
                    <div className={`w-14 h-14 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <resource.Icon className="w-7 h-7 text-white" />
                  </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h4>
                    <p className="text-base text-gray-700 leading-relaxed text-left">{resource.desc}</p>
                </motion.div>
              ))}
            </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}


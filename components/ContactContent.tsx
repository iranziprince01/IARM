'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import {
  CalendarIcon,
  BookOpenIcon,
  HandRaisedIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import PageHero from './PageHero';

export default function ContactContent() {
  const t = useTranslations('contact');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Church community and contact"
      />

      {/* Contact Information & Form */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <h2 className="heading-secondary mb-4">{t('visit')}</h2>
                <div className="space-y-4 text-lg text-gray-700">
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
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('serviceTimes')}
                </h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li className="text-justify">{t('sunday')}</li>
                  <li className="text-justify">{t('wednesday')}</li>
                  <li className="text-justify">{t('thursday')}</li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Find Us on Map
                </h3>
                <div className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('6110 Fulton Road, Edmonton, AB T6A 3T3, Canada')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    title="International Anglican Revival Church of Edmonton Location - 6110 Fulton Road, Edmonton, AB T6A 3T3"
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
              className="bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="heading-secondary mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        className="section-padding bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 text-white"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('supportMinistry')}
            </h2>
            <p className="text-xl text-gold-100 leading-relaxed text-justify mb-8">
              {t('supportMinistryDesc')}
            </p>
            <a
              href="#"
              className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('donateNow')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Events and Resources Section */}
      <section className="section-padding bg-gradient-to-br from-gold-50 via-white to-gold-50" id="events-resources">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="heading-secondary">{t('eventsResources')}</h2>
            <div className="bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto mt-4">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                {t('eventsResourcesDesc')}
              </p>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="heading-secondary text-center mb-8">
              {t('upcomingEvents')}
            </h3>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <CalendarIcon className="w-20 h-20 text-gold-600" />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {t('upcomingEventsDesc')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Resources */}
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-secondary text-center mb-8">Resources</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: t('resources.bibleStudy'),
                  desc: t('resources.bibleStudyDesc'),
                  Icon: BookOpenIcon,
                },
                {
                  title: t('resources.prayerRequests'),
                  desc: t('resources.prayerRequestsDesc'),
                  Icon: HandRaisedIcon,
                },
                {
                  title: t('resources.ministryResources'),
                  desc: t('resources.ministryResourcesDesc'),
                  Icon: BriefcaseIcon,
                },
                {
                  title: t('resources.communitySupport'),
                  desc: t('resources.communitySupportDesc'),
                  Icon: UserGroupIcon,
                },
              ].map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 flex justify-center">
                    <resource.Icon className="w-12 h-12 text-gold-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">{resource.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50" id="volunteer">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-secondary mb-4">{t('getInvolved')}</h2>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('getInvolvedDesc')}
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary"
            >
              Contact Us to Volunteer
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


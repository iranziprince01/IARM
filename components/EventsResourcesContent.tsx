'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  BookOpenIcon,
  HandRaisedIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function EventsResourcesContent() {
  const t = useTranslations('contact');
  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="heading-primary">{t('eventsResources')}</h1>
            <div className="bg-white rounded-xl p-6 shadow-xl max-w-3xl mx-auto mt-4">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                {t('eventsResourcesDesc')}
              </p>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="heading-secondary text-center mb-8">
              {t('upcomingEvents')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-xl p-8 text-center"
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
            <h2 className="heading-secondary text-center mb-8">{t('eventsResources')}</h2>
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
                  className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="mb-4 flex justify-center">
                    <resource.Icon className="w-12 h-12 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">{resource.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


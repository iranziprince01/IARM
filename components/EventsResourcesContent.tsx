'use client';

import { motion } from 'framer-motion';
import {
  CalendarIcon,
  BookOpenIcon,
  HandRaisedIcon,
  BriefcaseIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function EventsResourcesContent() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-gold-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="heading-primary">Events and Resources</h1>
            <div className="bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto mt-4">
              <p className="text-xl text-gray-700 leading-relaxed text-justify">
                Stay connected with our community through events and helpful
                resources.
              </p>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="heading-secondary text-center mb-8">
              Upcoming Events
            </h2>
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
                  Check back soon for upcoming events and activities. We're
                  planning exciting gatherings, workshops, and community
                  outreach programs.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Resources */}
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: 'Bible Study Materials',
                  desc: 'Access study guides and resources for your spiritual growth.',
                  Icon: BookOpenIcon,
                },
                {
                  title: 'Prayer Requests',
                  desc: 'Submit prayer requests and join our prayer community.',
                  Icon: HandRaisedIcon,
                },
                {
                  title: 'Ministry Resources',
                  desc: 'Resources for serving in various ministries.',
                  Icon: BriefcaseIcon,
                },
                {
                  title: 'Community Support',
                  desc: 'Information about community services and support programs.',
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


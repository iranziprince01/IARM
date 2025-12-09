'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HandRaisedIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

export default function AboutContent() {
  const t = useTranslations('about');
  const tAfrica = useTranslations('africa');
  const tPartners = useTranslations('partners');

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        backgroundImage="/images/foundation/002.jpg"
        backgroundImageAlt="Church community and fellowship"
      />

      {/* Church Description */}
      <section className="section-padding bg-gray-100" id="about">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('church')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('congregation')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md md:col-span-2"
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('ministry')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100" id="mission">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-secondary text-gold-600 mb-3 sm:mb-4">
                {t('vision')}
              </h2>
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('visionText')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-secondary text-gold-600 mb-3 sm:mb-4">
                {t('mission')}
              </h2>
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  {t('missionText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100" id="values">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-blue-600 mb-3 sm:mb-4">
                {t('coreValues')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t('coreValuesDesc')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    These values are not just words on a page—they are the living principles that guide our daily interactions, ministry decisions, and community engagement. We strive to embody these values in everything we do, from our worship services to our outreach programs.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.raw('values').map((value: { title: string; description: string }, index: number) => {
                const icons = [
                  StarIcon, // Faith
                  HeartIcon, // Love
                  HandRaisedIcon, // Service
                  UserGroupIcon, // Community
                  ShieldCheckIcon, // Integrity
                ];
                const Icon = icons[index];
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-gold-500 to-gold-600',
                  'from-blue-600 to-blue-700',
                  'from-gold-600 to-gold-700',
                  'from-blue-500 to-gold-500',
                ];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Marks of Mission */}
      <section className="section-padding bg-gray-100" id="marks">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-secondary mb-8">{t('marks')}</h2>
              <div className="bg-white rounded-xl p-6 shadow-xl mb-8">
                <ul className="space-y-4">
                  {t.raw('marksList').map((mark: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-3 text-lg text-gray-700"
                    >
                      <span className="text-gold-500 font-bold text-xl mt-1">
                        •
                      </span>
                      <span className="text-justify">{mark}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-xl"
            >
              <h2 className="heading-secondary mb-6">{t('leadership')}</h2>
              <h3 className="text-2xl font-bold text-gold-600 mb-4">
                {t('pastor')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {t('pastorBio')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Africa Work */}
      <section className="section-padding bg-gray-100" id="africa">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-secondary mb-6">{tAfrica('title')}</h2>
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl mb-6">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {tAfrica('description')}
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('support')}</span>
                  </li>
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('education')}</span>
                  </li>
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('bibles')}</span>
                  </li>
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('development')}</span>
                  </li>
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('pastoral')}</span>
                  </li>
                  <li className="flex items-start space-x-3 text-lg text-gray-700">
                    <span className="text-gold-500 font-bold mt-1">•</span>
                    <span className="text-justify">{tAfrica('strengthening')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100" id="faith">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-secondary text-blue-600 mb-4">
                {t('statementOfFaith')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t('statementOfFaithDesc')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Our statement of faith is based on the historic Christian creeds and the authority of Scripture. We are committed to sound biblical teaching and the proclamation of the Gospel.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {t.raw('statementOfFaithItems').map((item: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-xl"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-gold-500 font-bold text-xl mt-1">•</span>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify flex-1">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-gray-100" id="history">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-secondary text-gold-600 mb-4">
                {t('history')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t('historyDesc')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    Our church community reflects the diversity of God's kingdom, bringing together people from various backgrounds, languages, and cultures to worship and serve together in unity.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {t.raw('historyContent').map((content: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-xl"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100"
        id="partners"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-secondary mb-6">{tPartners('title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { key: 'diocese', label: tPartners('diocese') },
                  { key: 'organizations', label: tPartners('organizations') },
                  { key: 'global', label: tPartners('global') },
                  { key: 'individuals', label: tPartners('individuals') },
                ].map((partner, index) => (
                  <motion.div
                    key={partner.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl p-6 shadow-xl"
                  >
                    <p className="text-lg text-gray-700 text-center">
                      <span className="font-semibold text-gold-600">
                        {partner.label}
                      </span>
                    </p>
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


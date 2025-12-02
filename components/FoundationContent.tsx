'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from './PageHero';
import {
  HomeIcon,
  HeartIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  HandRaisedIcon,
  StarIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';

export default function FoundationContent() {
  const t = useTranslations('foundation');
  const tFoundation = useTranslations('foundation');
  const locale = useLocale();

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  const valueIcons = [
    HeartIcon,
    ShieldCheckIcon,
    HandRaisedIcon,
    StarIcon,
    UserGroupIcon,
  ];

  const programIcons = [
    HomeIcon,
    HeartIcon,
    ShieldCheckIcon,
    AcademicCapIcon,
    BookOpenIcon,
    UserGroupIcon,
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Refugee support and community care"
      />

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-2xl p-6 shadow-xl border-4 border-gray-900">
                  <Image
                    src="/foundation-logo.png"
                    alt="Shelter of Refugee Seniors International Ministries Logo"
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                    quality={85}
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
              </div>
              <h2 className="heading-secondary text-blue-600 mb-6">
                {t('about')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t('aboutDesc')}
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
                    Through our foundation, we work tirelessly to provide hope, support, and resources to those who need it most, demonstrating God's love in practical and meaningful ways.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-gold-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {t('mission')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {t('missionText')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  We are committed to creating sustainable solutions that address both immediate needs and long-term development, ensuring that our impact extends far beyond temporary assistance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gold-50 to-blue-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gold-600 mb-4">
                {t('vision')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {t('visionText')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  Our vision is to see transformed communities where every individual has the opportunity to thrive, grow, and contribute meaningfully to society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-br from-gold-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-secondary text-gray-900 mb-4">
                {t('values')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.raw('valuesList').map(
                (
                  value: { title: string; desc: string },
                  index: number
                ) => {
                  const Icon = valueIcons[index];
                  const colors = [
                    'from-red-500 to-pink-500',
                    'from-blue-500 to-blue-600',
                    'from-gold-500 to-gold-600',
                    'from-purple-500 to-purple-600',
                    'from-teal-500 to-teal-600',
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {value.desc}
                      </p>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-secondary text-gray-900 mb-4">
                {t('programs')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.raw('programsList').map(
                (
                  program: { title: string; desc: string },
                  index: number
                ) => {
                  const Icon = programIcons[index];
                  const colors = [
                    'from-blue-500 to-blue-600',
                    'from-gold-500 to-gold-600',
                    'from-green-500 to-green-600',
                    'from-purple-500 to-purple-600',
                    'from-teal-500 to-teal-600',
                    'from-orange-500 to-orange-600',
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {program.desc}
                      </p>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-gold-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('impact')}
              </h2>
              <p className="text-lg md:text-xl text-gold-100 leading-relaxed mb-8">
                {t('impactDesc')}
              </p>
              <Link
                href={getPath('/donate')}
                prefetch={true}
                className="inline-block bg-white text-gold-600 hover:bg-gold-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                {tButtons('donateNow').replace(' →', '')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="heading-secondary text-gray-900 mb-4">
                {t('getInvolved')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-md"
                >
                  <p className="text-lg text-gray-700 leading-relaxed text-justify">
                    {t('getInvolvedDesc')}
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
                    Your involvement, whether through volunteering, prayer, or financial support, makes a real difference in the lives of those we serve. Together, we can create lasting change.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  key: 'donate',
                  Icon: CurrencyDollarIcon,
                  color: 'from-gold-500 to-gold-600',
                },
                {
                  key: 'volunteer',
                  Icon: HandRaisedIcon,
                  color: 'from-blue-500 to-blue-600',
                },
                {
                  key: 'pray',
                  Icon: HeartIcon,
                  color: 'from-purple-500 to-purple-600',
                },
                {
                  key: 'partner',
                  Icon: BuildingOfficeIcon,
                  color: 'from-teal-500 to-teal-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <item.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`${item.key}`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify mb-4">
                    {t(`${item.key}Desc`)}
                  </p>
                  {item.key === 'donate' && (
                    <Link
                      href={getPath('/donate')}
                      prefetch={true}
                      className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm"
                    >
                      {tButtons('donateNow')}
                    </Link>
                  )}
                  {item.key === 'volunteer' && (
                    <Link
                      href={getPath('/get-involved/volunteer')}
                      prefetch={true}
                      className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-sm"
                    >
                      {tButtons('volunteerNow')}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


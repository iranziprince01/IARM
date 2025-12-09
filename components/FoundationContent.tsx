'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from './PageHero';
import {
  HeartIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { defaultLocale } from '@/i18n/request';
import { useState } from 'react';

export default function FoundationContent() {
  const t = useTranslations('foundation');
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  // Gallery images
  const galleryImages = [
    '/images/foundation/001.jpg',
    '/images/foundation/002.jpg',
    '/images/foundation/003.jpg',
    '/images/foundation/004.jpg',
    '/images/foundation/005.jpg',
    '/images/foundation/006.jpg',
    '/images/foundation/007.jpg',
    '/images/foundation/008.jpg',
    '/images/foundation/009.jpg',
    '/images/foundation/010.jpg',
    '/images/foundation/011.jpg',
  ];

  const valueIcons = [
    HeartIcon,
    ShieldCheckIcon,
    HandRaisedIcon,
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/images/foundation/005.jpg"
        backgroundImageAlt="Refugee support and community care"
      />

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl border-2 sm:border-4 border-gray-900">
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
              <h2 className="heading-secondary text-blue-600 mb-4 sm:mb-5 md:mb-6">
                {t('about')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('aboutDesc')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-md relative overflow-hidden"
                >
                  <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/001.jpg"
                      alt="Refugee seniors receiving support"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                Our Gallery
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Capturing moments of hope, care, and transformation in the lives of refugee seniors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 px-4 sm:px-6">
              {galleryImages.map((image, index) => {
                // Images 007 (index 6) and 009 (index 8) need special positioning to show faces
                const isPersonImage = index === 6 || index === 8; // 007.jpg and 009.jpg
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative aspect-square rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`Foundation activity ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={isPersonImage ? { objectPosition: 'center 30%' } : undefined}
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Vision Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gold-600 mb-6 sm:mb-8 text-center">
                {t('vision')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/002.jpg"
                      alt="Vision - Dignity and peace"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('visionText1')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/003.jpg"
                      alt="Vision - Haven of hope"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('visionText2')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/004.jpg"
                      alt="Vision - Empowered lives"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('visionText3')}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-blue-600 mb-6 sm:mb-8 text-center">
                {t('mission')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl border-l-4 border-blue-500"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/005.jpg"
                      alt="Mission - Holistic care"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('missionText1')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border-l-4 border-gold-500"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/006.jpg"
                      alt="Mission - Dignity and quality of life"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('missionText2')}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg border-l-4 border-purple-500"
                >
                  <div className="relative w-full h-40 sm:h-44 md:h-48 mb-3 sm:mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/images/foundation/007.jpg"
                      alt="Mission - Safe lodging and support"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                    {t('missionText3')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('values')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
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
                  ];

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-200"
                    >
                      <div className="relative w-full h-44 sm:h-48 md:h-56 mb-4 sm:mb-5 md:mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={`/images/foundation/${index === 0 ? '008' : index === 1 ? '009' : '010'}.jpg`}
                          alt={value.title}
                          fill
                          className="object-cover"
                          style={{ objectPosition: index === 1 ? 'center 30%' : 'center top' }}
                          loading="lazy"
                          quality={85}
                        />
                      </div>
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${colors[index]} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
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

      {/* Recent Activities */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('recentActivities')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-12 shadow-xl border-2 sm:border-4 border-gold-500 mx-4 sm:mx-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <CurrencyDollarIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      Making a Difference
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify mb-3 sm:mb-4">
                    {t('recentActivity1')}
                  </p>
                  <div className="bg-gold-50 rounded-lg p-3 sm:p-4 border-l-4 border-gold-500">
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="font-bold text-gold-600">Impact:</span> 85 refugee seniors received essential bedding supplies, improving their comfort and quality of life in the Mbarara Refugee Camp.
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/foundation/010.jpg"
                    alt="Recent activity - Bed covers distribution"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('challenges')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Understanding the complex challenges faced by elder refugees helps us better serve their needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
              {t.raw('challengesList').map(
                (
                  challenge: { title: string; desc: string },
                  index: number
                ) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow border-l-4 border-red-500"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ExclamationTriangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">
                        {challenge.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {challenge.desc}
                      </p>
                    </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Proposed Solutions */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('proposedSolutions')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                Our comprehensive approach to addressing the needs of refugee seniors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
              {t.raw('solutionsList').map(
                (
                  solution: { title: string; desc: string },
                  index: number
                ) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-blue-500"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                      <LightBulbIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                      {solution.desc}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6"
            >
              <h2 className="heading-secondary text-gray-900 mb-3 sm:mb-4">
                {t('getInvolved')}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6">
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
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-200"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6`}
                  >
                    <item.Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {t(`${item.key}`)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-3 sm:mb-4">
                    {t(`${item.key}Desc`)}
                  </p>
                  {item.key === 'donate' && (
                    <Link
                      href={getPath('/donate')}
                      prefetch={true}
                      className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors text-xs sm:text-sm"
                    >
                      {t('donateNow')}
                    </Link>
                  )}
                  {item.key === 'volunteer' && (
                    <Link
                      href={getPath('/get-involved/volunteer')}
                      prefetch={true}
                      className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm"
                    >
                      {t('volunteerNow')}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              quality={95}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-1.5 sm:p-2 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

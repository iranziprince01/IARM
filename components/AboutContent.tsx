'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import ImageGallery from './ImageGallery';
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HandRaisedIcon,
  StarIcon,
  GlobeAltIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  LightBulbIcon,
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
      <section className="section-padding section-bg-white" id="about">
        <div className="container-custom">
          <div className="content-readable">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-soft"
              >
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {t('church')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-soft"
              >
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {t('congregation')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-soft md:col-span-2"
              >
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {t('ministry')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding section-bg-soft" id="mission">
        <div className="container-custom">
          <div className="content-readable">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
                className="group"
            >
                <h2 className="heading-secondary text-gold-600 mb-4 md:mb-5">
                {t('vision')}
              </h2>
                <div className="card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-gold-100/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {t('visionText')}
                </p>
                  </div>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="group"
            >
                <h2 className="heading-secondary text-gold-600 mb-4 md:mb-5">
                {t('mission')}
              </h2>
                <div className="card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <HeartIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {t('missionText')}
                </p>
                  </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery
        images={[
          '/images/foundation/001.jpg',
          '/images/foundation/003.jpg',
          '/images/foundation/004.jpg',
          '/images/foundation/006.jpg',
          '/images/foundation/008.jpg',
          '/images/foundation/010.jpg',
        ]}
        title="Our Community in Action"
        subtitle="Witness the love, fellowship, and service that define our church family"
        columns={3}
        className="section-bg-warm"
      />

      {/* Core Values */}
      <section className="section-padding section-bg-cool" id="values">
        <div className="container-custom">
          <div className="content-readable">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <h2 className="heading-secondary text-blue-600 mb-3 sm:mb-4">
                {t('coreValues')}
              </h2>
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
                    className="card-soft hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
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
      <section className="section-padding section-bg-white" id="marks">
        <div className="container-custom">
          <div className="content-readable">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <h2 className="heading-secondary text-blue-600 mb-4">{t('marks')}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {t.raw('marksList').map((mark: string, index: number) => {
                const icons = [
                  GlobeAltIcon,
                  BookOpenIcon,
                  HeartIcon,
                  HandRaisedIcon,
                  UserGroupIcon,
                  CheckCircleIcon,
                ];
                const Icon = icons[index] || CheckCircleIcon;
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-gold-500 to-gold-600',
                  'from-blue-600 to-blue-700',
                  'from-gold-600 to-gold-700',
                  'from-blue-500 to-gold-500',
                  'from-gold-500 to-blue-500',
                ];
                const bgGradients = [
                  'from-blue-50 to-blue-100/50',
                  'from-gold-50 to-gold-100/50',
                  'from-blue-50 to-blue-100/50',
                  'from-gold-50 to-gold-100/50',
                  'from-blue-50 to-gold-50',
                  'from-gold-50 to-blue-50',
                ];

                return (
            <motion.div
                    key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500"
            >
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[index]} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                    <div className="relative">
                      <div className={`w-14 h-14 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed text-justify font-medium">
                        {mark}
              </p>
                    </div>
            </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Africa Work */}
      <section className="section-padding section-bg-mist" id="africa">
        <div className="container-custom">
          <div className="content-readable">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <h2 className="heading-secondary text-gold-600 mb-4">{tAfrica('title')}</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  {tAfrica('description')}
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { key: 'support', icon: HeartIcon, color: 'from-blue-500 to-blue-600', bgColor: 'from-blue-50 to-blue-100/50' },
                { key: 'education', icon: AcademicCapIcon, color: 'from-gold-500 to-gold-600', bgColor: 'from-gold-50 to-gold-100/50' },
                { key: 'bibles', icon: BookOpenIcon, color: 'from-blue-600 to-blue-700', bgColor: 'from-blue-50 to-blue-100/50' },
                { key: 'development', icon: BuildingOfficeIcon, color: 'from-gold-600 to-gold-700', bgColor: 'from-gold-50 to-gold-100/50' },
                { key: 'pastoral', icon: UserGroupIcon, color: 'from-blue-500 to-gold-500', bgColor: 'from-blue-50 to-gold-50' },
                { key: 'strengthening', icon: ShieldCheckIcon, color: 'from-gold-500 to-blue-500', bgColor: 'from-gold-50 to-blue-50' },
              ].map((item, index) => {
                const Icon = item.icon;
                const textKey = item.key as 'support' | 'education' | 'bibles' | 'development' | 'pastoral' | 'strengthening';
                
                return (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="card-title mb-2">
                        {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed text-left">
                        {tAfrica(textKey)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding section-bg-soft" id="faith">
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
              <h2 className="heading-secondary text-blue-600 mb-6">
                {t('statementOfFaith')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-blue-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <ShieldCheckIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed text-left break-words overflow-wrap-anywhere">
                    {t('statementOfFaithDesc')}
                  </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-gold-100/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                      <StarIcon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed text-left break-words overflow-wrap-anywhere">
                    Our statement of faith is based on the historic Christian creeds and the authority of Scripture. We are committed to sound biblical teaching and the proclamation of the Gospel.
                  </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Statement Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {t.raw('statementOfFaithItems').map((item: string, index: number) => {
                const icons = [
                  StarIcon, // God
                  HeartIcon, // Jesus
                  ShieldCheckIcon, // Holy Spirit
                  BookOpenIcon, // Bible
                  CheckCircleIcon, // Resurrection
                  UserGroupIcon, // Unity
                ];
                const Icon = icons[index] || CheckCircleIcon;
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-gold-500 to-gold-600',
                  'from-blue-600 to-blue-700',
                  'from-gold-600 to-gold-700',
                  'from-blue-500 to-gold-500',
                  'from-gold-500 to-blue-500',
                ];
                const bgGradients = [
                  'from-blue-50 to-blue-100/50',
                  'from-gold-50 to-gold-100/50',
                  'from-blue-50 to-blue-100/50',
                  'from-gold-50 to-gold-100/50',
                  'from-blue-50 to-gold-50',
                  'from-gold-50 to-blue-50',
                ];

                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 overflow-hidden"
                >
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[index]} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative flex items-start gap-4">
                      {/* Icon Badge */}
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${colors[index]} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700 leading-relaxed text-left break-words overflow-wrap-anywhere">
                      {item}
                    </p>
                      </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding section-bg-warm" id="history">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <h2 className="heading-secondary text-gold-600">
                {t('history')}
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 xs:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 transform md:-translate-x-1/2 hidden md:block" />
              
              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-16">
                {t.raw('historyContent').map((content: string, index: number) => {
                  const icons = [LightBulbIcon, BuildingOfficeIcon, GlobeAltIcon];
                  const Icon = icons[index] || StarIcon;
                  const colors = [
                    'from-blue-500 to-blue-600',
                    'from-gold-500 to-gold-600',
                    'from-blue-600 to-blue-700',
                  ];
                  const bgGradients = [
                    'from-blue-50 to-blue-100/50',
                    'from-gold-50 to-gold-100/50',
                    'from-blue-50 to-blue-100/50',
                  ];
                  const isEven = index % 2 === 0;

                  return (
                <motion.div
                  key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className={`relative flex items-start md:items-center ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 xs:left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                        <div className="relative">
                          <div className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center shadow-lg border-2 xs:border-3 sm:border-4 border-white`}>
                            <Icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          {/* Step Number Badge */}
                          <div className="absolute -top-1.5 xs:-top-2 -right-1.5 xs:-right-2 w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gold-300">
                            <span className="text-[10px] xs:text-xs font-bold text-gold-600">{index + 1}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className={`ml-20 xs:ml-24 sm:ml-28 md:ml-0 md:w-5/12 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}>
                        <div className="group relative card-soft hover:shadow-md transition-all duration-300 border-2 border-gray-300 hover:border-gold-500 overflow-hidden">
                          {/* Hover Gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[index]} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                          
                          {/* Content */}
                          <div className="relative">
                            <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    {content}
                  </p>
                          </div>
                        </div>
                      </div>
                </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section
        className="section-padding section-bg-cool"
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
                    className="card-soft"
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


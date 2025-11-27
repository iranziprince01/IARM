'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import {
  DocumentTextIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  InformationCircleIcon,
  UserIcon,
  EnvelopeIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function TermsContent() {
  const t = useTranslations('terms');

  const sections = [
    {
      key: 'agreement',
      Icon: CheckCircleIcon,
      color: 'from-gold-500 to-gold-600',
    },
    {
      key: 'license',
      Icon: DocumentTextIcon,
      color: 'from-gold-500 to-gold-600',
    },
    {
      key: 'restrictions',
      Icon: LockClosedIcon,
      color: 'from-blue-600 to-blue-700',
    },
    {
      key: 'disclaimer',
      Icon: ExclamationTriangleIcon,
      color: 'from-gold-600 to-gold-700',
    },
    {
      key: 'limitations',
      Icon: ShieldCheckIcon,
      color: 'from-blue-500 to-gold-500',
    },
    {
      key: 'accuracy',
      Icon: InformationCircleIcon,
      color: 'from-gold-500 to-blue-500',
    },
    {
      key: 'links',
      Icon: DocumentTextIcon,
      color: 'from-blue-600 to-blue-700',
    },
    {
      key: 'modifications',
      Icon: ScaleIcon,
      color: 'from-gold-500 to-gold-600',
    },
    {
      key: 'governing',
      Icon: ScaleIcon,
      color: 'from-blue-500 to-blue-600',
    },
    {
      key: 'contact',
      Icon: EnvelopeIcon,
      color: 'from-gold-500 to-gold-600',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        backgroundImageAlt="Terms and conditions"
      />

      {/* Introduction */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t('introduction.title')}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('introduction.lastUpdated')}:{' '}
                {new Date().toLocaleDateString()}
              </p>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  {t('introduction.content')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      {sections.map((section, index) => (
        <section
          key={section.key}
          className={`section-padding ${
            index % 2 === 0
              ? 'bg-gradient-to-br from-gold-50 via-white to-gold-50'
              : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
          }`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mr-4`}
                  >
                    <section.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {t(`${section.key}.title`)}
                  </h2>
                </div>
                <div className="space-y-4">
                  {(() => {
                    try {
                      const rawData = t.raw(section.key) as any;
                      const content = rawData?.content;
                      if (Array.isArray(content)) {
                        return content.map(
                          (paragraph: string, pIndex: number) => (
                            <p key={pIndex} className="text-lg text-gray-700 leading-relaxed text-justify mb-4">
                              {paragraph}
                            </p>
                          )
                        );
                      } else if (typeof content === 'string') {
                        return (
                          <p className="text-lg text-gray-700 leading-relaxed text-justify">
                            {content}
                          </p>
                        );
                      }
                    } catch (e) {
                      // Fallback if translation is missing
                      return null;
                    }
                    return null;
                  })()}
                  {(() => {
                    try {
                      const rawData = t.raw(section.key) as any;
                      const list = rawData?.list;
                      if (Array.isArray(list) && list.length > 0) {
                        return (
                          <ul className="space-y-3 mt-4">
                            {list.map((item: string, itemIndex: number) => (
                              <li
                                key={itemIndex}
                                className="flex items-start space-x-3 text-lg text-gray-700"
                              >
                                <span className="text-gold-500 font-bold text-xl mt-1">
                                  •
                                </span>
                                <span className="text-justify">{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                    } catch (e) {
                      // Fallback if translation is missing
                      return null;
                    }
                    return null;
                  })()}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}


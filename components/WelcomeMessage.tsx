'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WelcomeMessage() {
  const t = useTranslations('home');

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-gold-50 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4 sm:px-6"
          >
            {/* Text Section - Now on Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 shadow-xl border-l-4 border-gold-500 order-2 md:order-1 flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-5 relative overflow-hidden group"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-50 to-transparent opacity-50 rounded-bl-full"></div>
              <div className="relative z-10 -mt-2 md:-mt-3">
                <p className="text-blue-600 font-semibold text-xs md:text-sm mb-1.5 md:mb-2 tracking-wide">
                  {t('welcomeGreeting')}
                </p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 md:mb-3 leading-tight">
                  <span className="text-blue-600">{t('welcomeTitle1')}</span>
                  <br />
                  <span className="text-gold-600 bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                    {t('welcomeTitle2')}
                  </span>
                </h2>
              </div>
              
              <div className="space-y-4 relative z-10">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage1')}
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage2')}
                </p>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage3')}
                </p>
              </div>

              <div className="pt-4 md:pt-5 border-t-2 border-gold-200 relative z-10 mt-2 md:mt-3">
                <p className="text-blue-600 font-bold text-sm md:text-base">
                  {t('pastorName')}
                </p>
              </div>
            </motion.div>

            {/* Image Section - Now on Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-gold-500 order-1 md:order-2 group"
            >
              <Image
                src="/images/foundation/011.jpg"
                alt="Apostle Rev. Jean Nsengiyumva and spouse"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center center' }}
                loading="lazy"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
              {/* Subtle frame effect */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


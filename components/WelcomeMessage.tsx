'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WelcomeMessage() {
  const t = useTranslations('home');

  return (
    <section className="section-padding section-bg-white">
      <div className="container-custom">
        <div className="content-readable">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 lg:gap-10 items-stretch"
          >
            {/* Text Section - Now on Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card-modern border-l-4 border-l-gold-500 order-2 md:order-1 flex flex-col justify-center space-y-4 md:space-y-5 relative group"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-50 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>
              <div className="relative z-10">
                <p className="text-blue-600 font-semibold text-sm mb-2 tracking-wide">
                  {t('welcomeGreeting')}
                </p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-2 md:mb-3 leading-tight">
                  <span className="text-blue-600">{t('welcomeTitle1')}</span>
                  <br />
                  <span className="text-gold-600 bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                    {(() => {
                      const title2 = t('welcomeTitle2');
                      // Split "HOPE COMMUNITY GOSPER International Ministry!" into 2 lines
                      if (title2.includes('HOPE COMMUNITY GOSPER')) {
                        const before = title2.substring(0, title2.indexOf('HOPE COMMUNITY GOSPER'));
                        const after = title2.substring(title2.indexOf('HOPE COMMUNITY GOSPER') + 'HOPE COMMUNITY GOSPER'.length);
                        return (
                          <>
                            {before}HOPE COMMUNITY GOSPER<br />{after}
                          </>
                        );
                      }
                      return title2;
                    })()}
                  </span>
                </h2>
              </div>
              
              <div className="space-y-4 relative z-10">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage1')}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage2')}
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                  {t('welcomeMessage3')}
                </p>
              </div>

              <div className="pt-4 md:pt-5 border-t border-gold-200 relative z-10 mt-auto">
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
              className="relative w-full min-h-[280px] sm:min-h-[360px] md:min-h-[440px] lg:min-h-[520px] rounded-2xl overflow-hidden shadow-md border border-gold-200/80 order-1 md:order-2 group"
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
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
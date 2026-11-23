'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { defaultLocale } from '@/i18n/request';

export default function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  const title = t('title');
  const isEnglishWelcome = title.includes(
    'Welcome to HOPE COMMUNITY GOSPER International Ministry'
  );
  const isLocalizedWelcome = title.includes(
    'HOPE COMMUNITY GOSPER International Ministry'
  );

  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      {/* Full-bleed visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Worship and Praise"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Readable, photographic overlay — brand blues, restrained gold */}
        <div className="absolute inset-0 bg-blue-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/55 to-blue-900/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-gold-700/15" />
      </div>

      {/* Soft handoff into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 sm:h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 w-full px-4 sm:px-5 lg:px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl xl:max-w-4xl text-center">
          {/* Brand-led headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {isEnglishWelcome ? (
              <h1 className="text-white tracking-tight">
                <span className="block text-sm sm:text-base md:text-lg font-medium text-white/80 mb-3 sm:mb-4">
                  Welcome to
                </span>
                <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.1]">
                  HOPE COMMUNITY GOSPER
                </span>
                <span className="mt-1.5 sm:mt-2 block text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-semibold tracking-wide text-gold-300">
                  International Ministry
                </span>
              </h1>
            ) : isLocalizedWelcome ? (
              <h1 className="text-white tracking-tight">
                <span className="block text-sm sm:text-base md:text-lg font-medium text-white/80 mb-3 sm:mb-4">
                  {title.split('HOPE COMMUNITY GOSPER International Ministry')[0].trim()}
                </span>
                <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.1]">
                  HOPE COMMUNITY GOSPER
                </span>
                <span className="mt-1.5 sm:mt-2 block text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-semibold tracking-wide text-gold-300">
                  International Ministry
                </span>
              </h1>
            ) : (
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                {title}
              </h1>
            )}
          </motion.div>

          {/* Quiet gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 sm:mt-6 h-px w-14 sm:w-16 origin-center bg-gold-400/80"
            aria-hidden="true"
          />

          {/* Supporting line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed font-light"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3"
          >
            <a
              href="https://www.youtube.com/@InternationalAnglicanRevivalMi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl text-sm transition-colors duration-300 shadow-sm"
            >
              {t('worshipWithUs')}
            </a>
            <Link
              href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
              prefetch={true}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 bg-transparent hover:bg-white/10 text-white font-semibold rounded-xl text-sm border border-white/45 hover:border-white/70 transition-colors duration-300"
            >
              {t('donate')}
            </Link>
          </motion.div>

          {/* Editorial verse — not a glass card */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mx-auto mt-10 sm:mt-12 max-w-lg border-t border-white/20 pt-5 sm:pt-6"
          >
            <p className="text-sm sm:text-base text-white/80 italic leading-relaxed font-light">
              &ldquo;{t('bibleVerse')}&rdquo;
            </p>
            <cite className="mt-2.5 block text-xs not-italic font-semibold tracking-wide text-gold-300/95">
              {t('bibleVerseRef')}
            </cite>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { defaultLocale } from '@/i18n/request';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Build navigation paths - use locale prefix only for non-default locale
  const getPath = (path: string) => {
    const basePath = path === 'home' ? '' : `/${path}`;
    return locale === defaultLocale ? basePath || '/' : `/${locale}${basePath || ''}`;
  };

  const navItems = [
    { key: 'home', href: getPath('home') },
    { key: 'about', href: getPath('about') },
    { key: 'ministries', href: getPath('ministries') },
    { key: 'sermons', href: getPath('sermons') },
    { key: 'foundation', href: getPath('foundation') },
  ];

  const getInvolvedItems = [
    { key: 'volunteer', href: locale === defaultLocale ? '/get-involved/volunteer' : `/${locale}/get-involved/volunteer` },
    { key: 'becomeMember', href: locale === defaultLocale ? '/get-involved/become-member' : `/${locale}/get-involved/become-member` },
    { key: 'requestPrayer', href: locale === defaultLocale ? '/get-involved/prayer' : `/${locale}/get-involved/prayer` },
    { key: 'getBaptized', href: locale === defaultLocale ? '/get-involved/get-baptized' : `/${locale}/get-involved/get-baptized` },
  ];

  const isActive = (href: string) => {
    // Handle both with and without locale prefix
    const currentPath = pathname;
    const hrefWithLocale = currentPath.startsWith(`/${locale}`) 
      ? href 
      : href.replace(`/${locale}`, '') || '/';
    const hrefWithoutLocale = href.replace(`/${locale}`, '') || '/';
    
    return currentPath === href || 
           currentPath === hrefWithLocale || 
           currentPath === hrefWithoutLocale ||
           currentPath.startsWith(href + '/') ||
           currentPath.startsWith(hrefWithLocale + '/') ||
           currentPath.startsWith(hrefWithoutLocale + '/');
  };

  return (
    <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-sm border-b border-gray-100/80'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
      <nav className="container-custom py-2.5 md:py-3 px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5">
          {/* Logo - Left Aligned */}
          <Link href={locale === defaultLocale ? '/' : `/${locale}`} className="flex items-center flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <Image
                src="/logos/Logo.png"
                alt="HOPE COMMUNITY GOSPER International Ministry Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 44px, (max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 whitespace-nowrap flex-1 justify-center max-w-2xl mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                prefetch={true}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 text-xs xl:text-sm font-semibold ${
                  isActive(item.href)
                    ? 'bg-gold-500 text-white'
                    : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            
            {/* Get Involved Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsGetInvolvedOpen(true)}
              onMouseLeave={() => setIsGetInvolvedOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg transition-colors duration-200 text-xs xl:text-sm font-semibold ${
                  isActive(locale === defaultLocale ? '/get-involved' : `/${locale}/get-involved`)
                    ? 'bg-gold-500 text-white'
                    : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                }`}
              >
                {t('getInvolved')}
                <svg
                  className="inline-block ml-1 w-3.5 h-3.5 xl:w-4 xl:h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGetInvolvedOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border-2 border-gray-300 py-2 z-50">
                  {getInvolvedItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      prefetch={true}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

              <Link
                href={locale === defaultLocale ? '/contact' : `/${locale}/contact`}
                prefetch={true}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 text-xs xl:text-sm font-semibold ${
                  isActive(locale === defaultLocale ? '/contact' : `/${locale}/contact`)
                    ? 'bg-gold-500 text-white'
                    : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                }`}
              >
                {t('contact')}
              </Link>
            </div>

            {/* Donate and Language Switcher - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 2xl:space-x-3 flex-shrink-0">
              <Link
                href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
                prefetch={true}
                className="group relative px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-white font-bold text-xs xl:text-sm shadow-lg hover:shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1 xl:gap-1.5">
                  <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {t('donate')}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <LanguageSwitcher />
            </div>

          {/* Mobile Menu Button and Actions */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
            <Link
              href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
              prefetch={true}
              className="group relative px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="hidden sm:inline">{t('donate')}</span>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gold-600"
              aria-label="Toggle menu"
            >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-5 pt-2 space-y-1 border-t border-gray-100"
            >
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                    isActive(item.href)
                      ? 'bg-gold-500 text-white'
                      : 'text-gray-700 hover:bg-gold-50'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Get Involved */}
              <div className="px-1 py-2">
                <button
                  onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                  className="w-full text-left px-3 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gold-50 transition-colors"
                >
                  {t('getInvolved')}
                  <svg
                    className={`inline-block ml-1 w-4 h-4 transition-transform ${
                      isGetInvolvedOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isGetInvolvedOpen && (
                  <div className="mt-1 ml-2 space-y-0.5 pb-2">
                    {getInvolvedItems.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        prefetch={true}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsGetInvolvedOpen(false);
                        }}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-gold-600 rounded-lg hover:bg-gold-50 transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

                      <Link
                        href={locale === defaultLocale ? '/contact' : `/${locale}/contact`}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                          isActive(locale === defaultLocale ? '/contact' : `/${locale}/contact`)
                            ? 'bg-gold-500 text-white'
                            : 'text-gray-700 hover:bg-gold-50'
                        }`}
                      >
                        {t('contact')}
                      </Link>

                      <Link
                        href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
                        prefetch={true}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group relative block px-4 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 text-white font-bold text-center shadow-lg hover:shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          {t('donate')}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Link>

              <div className="pt-4 pb-2 px-1">
                <LanguageSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

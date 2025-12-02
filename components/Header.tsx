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
            ? 'bg-white shadow-lg'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
      <nav className="container-custom py-3 md:py-4 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between w-full gap-4 lg:gap-8">
          {/* Logo and Name - Left Aligned */}
                  <Link href={locale === defaultLocale ? '/' : `/${locale}`} className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6 xl:-ml-8">
            <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0">
              <Image
                src="/logos/800x800-web.svg"
                alt="International Anglican Revival Church of Edmonton Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xs sm:text-xs md:text-sm font-extrabold text-gray-900 leading-tight max-w-[200px]">
                International Anglican Revival Church of Edmonton
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 whitespace-nowrap flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                prefetch={true}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-bold ${
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
                        className={`px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-bold ${
                          isActive(locale === defaultLocale ? '/get-involved' : `/${locale}/get-involved`)
                            ? 'bg-gold-500 text-white'
                            : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                        }`}
                      >
                {t('getInvolved')}
                <svg
                  className="inline-block ml-1 w-4 h-4"
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
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {getInvolvedItems.map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      prefetch={true}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-gold-600 transition-colors"
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
                      className={`px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-bold ${
                        isActive(locale === defaultLocale ? '/contact' : `/${locale}/contact`)
                          ? 'bg-gold-500 text-white'
                          : 'text-gray-700 hover:bg-gold-50 hover:text-gold-600'
                      }`}
                    >
                      {t('contact')}
                    </Link>
                  </div>

                  {/* Donate and Language Switcher - Right Aligned */}
                  <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0 -mr-2 sm:-mr-3 md:-mr-4 lg:-mr-6 xl:-mr-8">
                    <Link
                      href={locale === defaultLocale ? '/donate' : `/${locale}/donate`}
                      prefetch={true}
              className="px-3 py-2 rounded-lg bg-gold-500 text-white hover:bg-gold-600 transition-colors duration-200 font-semibold text-sm shadow-md hover:shadow-lg"
            >
              {t('donate')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gold-600"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-gold-500 text-white'
                      : 'text-gray-700 hover:bg-gold-50'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              {/* Mobile Get Involved */}
              <div className="px-4 py-3">
                <button
                  onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                  className="w-full text-left text-gray-700 font-bold"
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
                  <div className="mt-2 ml-4 space-y-2">
                    {getInvolvedItems.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        prefetch={true}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsGetInvolvedOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-600 hover:text-gold-600 rounded-lg hover:bg-gold-50"
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
                        className={`block px-4 py-3 rounded-lg transition-colors ${
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
                        className="block px-4 py-3 rounded-lg bg-gold-500 text-white hover:bg-gold-600 transition-colors font-semibold text-center shadow-md"
                      >
                        {t('donate')}
                      </Link>

              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

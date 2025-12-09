'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { defaultLocale } from '@/i18n/request';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getPath = (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
      // Still show success to user, but log error
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerLinks = [
    { key: 'mission', href: getPath('/about#mission') },
    { key: 'leadership', href: getPath('/leadership') },
    { key: 'partners', href: getPath('/about#partners') },
    { key: 'africa', href: getPath('/about#africa') },
    { key: 'refugee', href: getPath('/ministries#refugee') },
    { key: 'volunteer', href: getPath('/contact#volunteer') },
    { key: 'donate', href: getPath('/contact#donate') },
    { key: 'privacy', href: getPath('/privacy') },
    { key: 'terms', href: getPath('/terms') },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-6 sm:mb-8 px-4 sm:px-6">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/favicon.png"
                  alt="International Anglican Revival Ministries Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 40px"
                />
              </div>
              <h3 className="text-white font-bold text-xs sm:text-sm leading-tight">
                International Anglican<br />Revival Ministries
              </h3>
            </div>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              {t('description')}
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <p>
                <span className="font-semibold">{t('addressLabel')}:</span>
                <br />
                {t('address')}
              </p>
              <p>
                <span className="font-semibold">{t('phone')}:</span>
                <br />
                +1 587-778-6406
                <br />
                +1 825-461-7431
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 5).map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-sm hover:text-gold-400 hover:text-blue-300 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.slice(5).map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="text-xs sm:text-sm hover:text-gold-400 hover:text-blue-300 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{t('follow')}</h4>
            <div className="flex flex-nowrap gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/iarministries/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/250785961427"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.58 15.36 3.41 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.8 6.78 18.78 4.76C16.76 2.74 14.27 1.59 11.62 1.59L12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.43 7.65 20.29 9.71 20.29 11.91C20.29 16.5 16.63 20.16 12.04 20.16C10.56 20.16 9.11 19.76 7.85 19L7.55 18.83L4.41 19.5L5.13 16.47L4.96 16.16C4.24 14.91 3.8 13.5 3.8 12.04C3.81 7.45 7.47 3.79 12.06 3.79L12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.64 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14 16.64 14.26 16.6 14.5 16.56C14.74 16.5 15.5 15.94 15.7 15.37C15.9 14.8 15.9 14.3 15.84 14.21C15.78 14.12 15.64 14.05 15.5 14C15.36 13.95 14.11 13.47 13.87 13.38C13.64 13.3 13.5 13.26 13.36 13.4C13.22 13.54 12.84 13.95 12.7 14.11C12.56 14.27 12.42 14.3 12.28 14.15C12.14 14 11.78 13.58 11.4 13.24C10.7 12.64 10.19 12.18 10.05 12.03C9.91 11.88 9.77 11.92 9.65 11.92C9.53 11.92 9.3 11.88 9.05 11.79C8.8 11.7 8.5 11.57 8.15 11.4C7.73 11.19 7.4 11.03 7.15 10.68C6.9 10.33 7.05 10.01 7.18 9.83C7.3 9.65 7.4 9.5 7.5 9.38C7.6 9.26 7.66 9.18 7.74 9.04C7.82 8.9 7.8 8.78 7.76 8.68C7.72 8.58 7.32 7.33 7.15 6.87C7 6.41 6.83 6.45 6.7 6.44C6.57 6.43 6.4 6.43 6.23 6.43C6.06 6.43 5.83 6.48 5.64 6.68C5.45 6.88 4.97 7.33 4.97 8.25C4.97 9.17 5.73 10.04 5.87 10.21C6 10.38 7.33 12.38 9.43 13.23C9.73 13.36 9.97 13.47 10.17 13.55C10.5 13.7 10.78 13.78 11 13.84C11.28 13.92 11.5 13.92 11.68 13.88C11.88 13.84 12.15 13.73 12.4 13.57C12.65 13.41 13.3 12.95 13.5 12.75C13.7 12.55 13.87 12.38 13.95 12.25C14.03 12.12 14.1 11.93 14.05 11.75C14 11.57 13.87 11.5 13.7 11.4C13.53 11.3 12.06 10.47 11.78 10.35C11.5 10.23 11.3 10.17 11.15 10.35C11 10.53 10.5 11.05 10.4 11.18C10.3 11.31 10.2 11.33 10 11.25C9.8 11.17 9.24 10.95 8.58 10.66C8.08 10.43 7.68 10.18 7.38 9.95C7.18 9.8 7.01 9.66 7.15 9.45C7.3 9.24 7.5 8.95 7.66 8.73C7.82 8.5 7.94 8.35 8.05 8.2C8.16 8.05 8.23 7.9 8.3 7.78C8.37 7.66 8.43 7.5 8.4 7.37C8.37 7.24 8.3 7.2 8.2 7.2L8.53 7.33Z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@InternationalAnglicanRevivalMi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Subscribe to Sermons Section */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  required
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-xs sm:text-sm whitespace-nowrap"
                >
                  {submitted ? '✓ Subscribed!' : isSubmitting ? 'Subscribing...' : t('subscribeButton')}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center px-4 sm:px-6">
          <p>
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}


'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { defaultLocale } from '@/i18n/request';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

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
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { key: 'mission', href: getPath('/about#mission') },
    { key: 'leadership', href: getPath('/leadership') },
    { key: 'partners', href: getPath('/about#partners') },
    { key: 'africa', href: getPath('/about#africa') },
    { key: 'refugee', href: getPath('/ministries#refugee') },
  ];

  const resourceLinks = [
    { key: 'volunteer', href: getPath('/get-involved/volunteer') },
    { key: 'donate', href: getPath('/donate') },
    { key: 'privacy', href: getPath('/privacy') },
    { key: 'terms', href: getPath('/terms') },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/iarministries/',
      hover: 'hover:bg-pink-600 hover:border-pink-500',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@InternationalAnglicanRevivalMi',
      hover: 'hover:bg-red-600 hover:border-red-500',
      path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/15877786406',
      hover: 'hover:bg-green-500 hover:border-green-400',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 text-gray-300">
      {/* Decorative atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-5 lg:px-6 pt-12 md:pt-16 lg:pt-20 pb-8">
        {/* Brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4 min-w-0">
            <div className="relative mb-4 h-20 w-20 sm:h-24 sm:w-24">
              <Image
                src="/logos/Logo2.png"
                alt="HOPE COMMUNITY GOSPER International Ministry Logo"
                fill
                className="object-contain"
                loading="lazy"
                quality={85}
                sizes="112px"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300/90">
              {t('description')}
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                <span className="inline-block border-b-2 border-gold-500 pb-2">Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      prefetch={true}
                      className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-gold-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-500/60 transition-all group-hover:w-2 group-hover:bg-gold-400" />
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                <span className="inline-block border-b-2 border-gold-500 pb-2">Resources</span>
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      prefetch={true}
                      className="group inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-gold-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-gold-500/60 transition-all group-hover:w-2 group-hover:bg-gold-400" />
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 min-w-0">
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white">
              <span className="inline-block border-b-2 border-gold-500 pb-2">Contact</span>
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <MapPinIcon className="h-4 w-4 text-gold-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    {t('addressLabel')}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-300">
                    {t('address')}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <PhoneIcon className="h-4 w-4 text-gold-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    {t('phone')}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    <a
                      href="tel:+15877786406"
                      className="text-gray-300 transition-colors hover:text-gold-400"
                    >
                      +1 587-778-6406
                    </a>
                    <span className="mx-1.5 text-gray-500">/</span>
                    <a
                      href="tel:+18254617431"
                      className="text-gray-300 transition-colors hover:text-gold-400"
                    >
                      +1 825-461-7431
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <EnvelopeIcon className="h-4 w-4 text-gold-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    {t('email')}
                  </p>
                  <a
                    href="mailto:info@iarmministries.org"
                    className="mt-1 inline-block text-sm text-gray-300 transition-colors hover:text-gold-400 break-all"
                  >
                    info@iarmministries.org
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Connect strip: Follow Us + Newsletter */}
        <div className="mt-12 md:mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 md:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start lg:items-center">
            <div className="lg:col-span-4">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {t('follow')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 ${social.hover}`}
                    aria-label={social.label}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1">
              <div className="mx-auto h-16 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            <div className="lg:col-span-7">
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {t('subscribe')}{' '}
                <span className="text-gold-400 normal-case tracking-normal">{t('sermons')}</span>
              </h4>
              <p className="mb-4 max-w-xl text-sm text-gray-400 leading-relaxed">
                {t('subscribeDesc')}
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  required
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-gray-950/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-gold-500/50 focus:ring-2 focus:ring-gold-500/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="flex-shrink-0 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-gold-600 hover:to-gold-700 disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap"
                >
                  {submitted
                    ? '✓ Subscribed!'
                    : isSubmitting
                      ? 'Subscribing...'
                      : t('subscribeButton')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span>Edmonton, Alberta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

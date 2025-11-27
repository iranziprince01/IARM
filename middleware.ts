import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false, // Disable automatic detection - let URL path determine locale
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};


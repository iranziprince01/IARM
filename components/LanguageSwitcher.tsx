'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';
import { locales, defaultLocale } from '@/i18n/request';
import { motion, AnimatePresence } from 'framer-motion';

const languageNames: Record<string, string> = {
  en: 'En',
  rw: 'Rw',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const switchLocale = (newLocale: string) => {
    // Don't switch if already on this locale or if switching
    if (newLocale === locale || isSwitching) {
      setIsOpen(false);
      return;
    }

    setIsSwitching(true);
    setIsOpen(false);

    if (typeof window === 'undefined') {
      setIsSwitching(false);
      return;
    }

    // Get the current full path including search params and hash
    const currentUrl = new URL(window.location.href);
    const currentPath = currentUrl.pathname;
    
    // Extract the base path by removing locale prefix
    let basePath = currentPath;
    
    // Remove locale prefix if present (check all locales)
    for (const loc of locales) {
      if (basePath === `/${loc}`) {
        basePath = '/';
        break;
      } else if (basePath.startsWith(`/${loc}/`)) {
        basePath = basePath.slice(`/${loc}`.length);
        break;
      }
    }
    
    // Ensure basePath is properly formatted
    if (!basePath || basePath === '') {
      basePath = '/';
    } else if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }
    
    // Build the target path based on locale
    let targetPath: string;
    if (newLocale === defaultLocale) {
      // Default locale (en) - no prefix
      targetPath = basePath;
    } else {
      // Non-default locale (rw) - add prefix
      targetPath = basePath === '/' ? `/${newLocale}` : `/${newLocale}${basePath}`;
    }
    
    // Preserve search params and hash if they exist
    const searchParams = currentUrl.search;
    const hash = currentUrl.hash;
    const fullTargetPath = targetPath + searchParams + hash;
    
    // Navigate to the new path
    // Using replace to avoid adding to browser history
    // The middleware will handle the locale based on the URL path
    window.location.replace(fullTargetPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => !isSwitching && setIsOpen(!isOpen)}
        disabled={isSwitching}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg font-semibold ${
          isSwitching ? 'opacity-70 cursor-wait' : ''
        }`}
        aria-label="Change language"
      >
        {isSwitching ? (
          <svg
            className="animate-spin w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.036 6.5A18.022 18.022 0 0112 6.5c-2.172 0-4.08.5-5.548 1.5m6.036 6.5c.5.5 1.1.9 1.8 1.2M12 3v2m0 4v2m0 4v2m0 4v2M9 3h6m-6 18h6" />
          </svg>
        )}
        <span className="text-sm font-semibold">{languageNames[locale]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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

      <AnimatePresence>
        {isOpen && !isSwitching && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border-2 border-blue-200 z-20 overflow-hidden"
            >
              {locales.map((loc, index) => (
                <motion.button
                  key={loc}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => switchLocale(loc)}
                  disabled={isSwitching || loc === locale}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                    locale === loc 
                      ? 'bg-blue-600 text-white font-semibold cursor-default' 
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } ${
                    isSwitching ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.036 6.5A18.022 18.022 0 0112 6.5c-2.172 0-4.08.5-5.548 1.5m6.036 6.5c.5.5 1.1.9 1.8 1.2M12 3v2m0 4v2m0 4v2m0 4v2M9 3h6m-6 18h6" />
                    </svg>
                    <span>{languageNames[loc]}</span>
                    {locale === loc && (
                      <svg
                        className="w-4 h-4 ml-auto"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


import { MetadataRoute } from 'next';
import { locales } from '@/i18n/request';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iarmministries.org';
  
  // Main routes (must match actual pages in app/[locale])
  const mainRoutes = [
    { path: '', priority: 1.0, changeFreq: 'weekly' }, // Home
    { path: '/about', priority: 0.9, changeFreq: 'monthly' },
    { path: '/ministries', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services-sermons', priority: 0.9, changeFreq: 'weekly' },
    { path: '/sermons', priority: 0.8, changeFreq: 'weekly' },
    { path: '/events-resources', priority: 0.7, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/donate', priority: 0.8, changeFreq: 'monthly' },
    { path: '/donate/success', priority: 0.3, changeFreq: 'never' },
    { path: '/leadership', priority: 0.7, changeFreq: 'monthly' },
    { path: '/foundation', priority: 0.7, changeFreq: 'monthly' },
    { path: '/get-involved', priority: 0.7, changeFreq: 'monthly' },
    { path: '/privacy', priority: 0.5, changeFreq: 'yearly' },
    { path: '/terms', priority: 0.5, changeFreq: 'yearly' },
  ];

  // Get Involved sub-routes
  const getInvolvedRoutes = [
    { path: '/get-involved/volunteer', priority: 0.7, changeFreq: 'monthly' },
    { path: '/get-involved/become-member', priority: 0.7, changeFreq: 'monthly' },
    { path: '/get-involved/prayer', priority: 0.7, changeFreq: 'monthly' },
    { path: '/get-involved/get-baptized', priority: 0.7, changeFreq: 'monthly' },
  ];

  const allRoutes = [...mainRoutes, ...getInvolvedRoutes];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      // For default locale (en), no prefix; for others, add prefix
      const url = locale === 'en' 
        ? `${baseUrl}${route.path || '/'}` 
        : `${baseUrl}/${locale}${route.path}`;
      
      const entryBase = {
        url,
        lastModified: new Date(),
        changeFrequency: route.changeFreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
        priority: route.priority,
      };

      sitemapEntries.push({
        ...entryBase,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            const locUrl = loc === 'en' 
              ? `${baseUrl}${route.path || '/'}` 
              : `${baseUrl}/${loc}${route.path}`;
            acc[loc === 'en' ? 'en-CA' : loc] = locUrl;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  return sitemapEntries;
}


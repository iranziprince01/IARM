import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'International Anglican Revival Church of Edmonton',
    short_name: 'IARCE',
    description: 'A vibrant Christian community in Edmonton dedicated to spiritual growth, compassion, and service.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['religion', 'community'],
    lang: 'en-CA',
    dir: 'ltr',
    orientation: 'portrait-primary',
  };
}


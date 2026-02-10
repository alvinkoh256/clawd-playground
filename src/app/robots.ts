import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://lobster-ai.vercel.app/sitemap.xml',
    host: 'https://lobster-ai.vercel.app',
  };
}
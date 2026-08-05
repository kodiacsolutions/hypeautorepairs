import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hypeautorepairs.com.au';
  const lastModified = new Date();

  // Static routes
  const staticPaths = [
    '',
    '/about',
    '/contact',
    '/gallery',
    '/pricing',
    '/privacy-policy',
    '/terms',
    '/services',
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1.0 : 0.8,
  }));

  // Dynamic service subpages
  const services = [
    'car-painting',
    'denting',
    'accident-repair',
    'insurance-claims',
    'part-replacement',
    'fault-diagnosing',
    'tyre-replacement',
    'logbook-service',
    'oil-change',
    'aircon-regas',
  ];

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceUrls];
}

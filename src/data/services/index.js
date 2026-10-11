import { BUSINESS_AUTOMATION_DATA } from './businessAutomationData';
import { WORDPRESS_DEVELOPMENT_DATA } from './wordpressDevelopmentData';
import { CMS_MIGRATION_DATA } from './cmsMigrationData';
import { AI_SYSTEMS_DATA } from './aiSystemsData';

export const SERVICES_LIST = [
  BUSINESS_AUTOMATION_DATA,
  WORDPRESS_DEVELOPMENT_DATA,
  CMS_MIGRATION_DATA,
  AI_SYSTEMS_DATA,
];

export const SERVICES_BY_SLUG = {
  'business-automation': BUSINESS_AUTOMATION_DATA,
  'workflow-automation': BUSINESS_AUTOMATION_DATA, // Alias
  'wordpress-development': WORDPRESS_DEVELOPMENT_DATA,
  'cms-migration': CMS_MIGRATION_DATA,
  'ai-systems': AI_SYSTEMS_DATA,
};

export function getAllServiceSlugs() {
  return [
    'business-automation',
    'workflow-automation',
    'wordpress-development',
    'cms-migration',
    'ai-systems',
  ];
}

export function getServiceDataBySlug(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return SERVICES_BY_SLUG[normalized] || null;
}

export function getAllServices() {
  return SERVICES_LIST;
}

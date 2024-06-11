import { useSeoMeta } from 'nuxt/app';

/**
 * Update head meta tags
 * @param {object} obj
 * @param {string} [obj.title] seo title
 * @param {string} [obj.description] seo description
 * @param {string} [obj.image] share image
 * @example
 * useSeo({ title: 'Title' });
 * @see https://nuxt.com/docs/api/composables/use-seo-meta
 */
export const useSeo = ({ title, description, image }) => {
  useSeoMeta({
    title: title || '',
    ogTitle: title || '',

    description: description || '',
    ogDescription: description || '',

    ogImage: image || '',
    twitterImage: image || '',
    twitterCard: 'summary_large_image',
  });
};

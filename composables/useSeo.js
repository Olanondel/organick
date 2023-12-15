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

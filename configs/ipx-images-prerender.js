import { IPX_WEBP_IMAGE_PATH } from '@/constants/variables';

/**
 * Image paths for prerender by IPX ('@nuxt/image')
 * @type {string[]}
 * @example
 * [
 *   // Home
 *   '/home/intro.jpg'
 *
 *   // About
 *   '/about/intro.jpg'
 * ]
 * @see https://image.nuxt.com/
 * @see https://nitro.unjs.io/config#prerender
 */
const images = [];

export default images.map((image) => `${IPX_WEBP_IMAGE_PATH}${image}`);

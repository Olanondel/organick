// common
/**
 * Get value with boundaries
 * @param {number} value desired value
 * @param {number} min min boundary
 * @param {number} max max boundary
 * @returns {number} calculated value
 * @example
 * minMax(15, 5, 10); // returns 10 (max boundary)
 */
export function minMax(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Simple object clone
 * @param {object} object object to clone
 * @returns {any} cloned object
 * @example
 * const clonedObject = cloneObject(originalObject);
 */
export function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

// promise-based utils
/**
 * Await timeout
 * @param {number} [duration] timeout duration
 * @returns {Promise<void>} timeout promise
 * @example
 * await awaitTimeout(100);
 */
export function awaitTimeout(duration = 0) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

/**
 * Await request animation frame
 * @returns {Promise<void>} request animation frame promise
 * @example
 * await awaitRAF();
 */
export function awaitRAF() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

// em font-sizing
/**
 * Get element font size
 * @param {HTMLElement|string} [element] reference element or selector
 * @returns {number} element font-size
 */
export function getElementFz(element = document.body) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element) return 0;

  const elementStyle = window.getComputedStyle(element);
  return parseFloat(elementStyle.fontSize);
}

/**
 * Get px value regarding element font-size
 * @param {number} pxValue desired px value
 * @param {HTMLElement|string} [contextElement] reference element or selector
 * @returns {number} calculated px value
 */
export function toResizedPx(pxValue, contextElement = document.body) {
  return (pxValue / 16) * getElementFz(contextElement);
}

/**
 * Get em value regarding element font-size
 * @param {number} pxValue desired px value
 * @param {number} [pxContext] px context
 * @returns {number} calculated px value
 */
export function toResizedEm(pxValue, pxContext = 16) {
  return pxValue / pxContext;
}

// preload images
/**
 * Preload image
 * @param {string} url image url
 * @returns {Promise<void>} upload promise
 */
export function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;

    image.addEventListener('load', resolve);
    image.addEventListener('error', resolve);
  });
}

/**
 * Preload images
 * @param {string[]} imageUrls image urls
 * @returns {Promise<Awaited<void>[]>} upload promises
 */
export function preloadImages(imageUrls = []) {
  const preloads = Array.from(imageUrls).map(preloadImage);

  return Promise.all(preloads);
}

// preload fonts
/**
 * Get font preload list
 * @param {string} path font path
 * @param {number[]} weights font weights
 * @param {string} baseUrl site base url
 * @returns {{rel: string, href: string, as: string, type: string, crossorigin: true}[]} font preload list
 */
export function getFontPreloadList({ path, weights }, baseUrl = '/') {
  return weights.map((weight) => ({
    rel: 'preload',
    href: `${baseUrl}fonts/${path}${weight}.woff2`,
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  }));
}

/**
 * Get fonts preload list
 * @param {object[]} fontsList font params list
 * @param {string} fontsList.path font path
 * @param {number[]} fontsList.weights font weights
 * @param {string} [baseUrl] site base url
 * @returns {{rel: string, href: string, as: string, type: string, crossorigin: true}[]} fonts preload list
 */
export function getFontsPreloadList(fontsList, baseUrl = '/') {
  return fontsList.reduce(
    (result, { path, weights }) => [
      ...result,
      ...getFontPreloadList({ path, weights }, baseUrl),
    ],
    [],
  );
}

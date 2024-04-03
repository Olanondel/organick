// common
export function minMax(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
export function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

// promise-based utils
export function awaitTimeout(duration = 0) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
export function awaitRAF() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

// em font-sizing
export function getElementFz(element = document.body) {
  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element) return 0;

  const bodyStyle = window.getComputedStyle(element);
  return parseFloat(bodyStyle.fontSize);
}
export function toResizedPx(pxValue, contextElement = document.body) {
  return (pxValue / 16) * getElementFz(contextElement);
}
export function toResizedEm(
  pxValue,
  pxContext,
  contextElement = document.body,
) {
  return pxValue / (pxContext || getElementFz(contextElement));
}

// preload images
export function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = url;

    image.addEventListener('load', resolve);
    image.addEventListener('error', resolve);
  });
}
export function preloadImages(imageUrls = []) {
  const preloads = Array.from(imageUrls).map(preloadImage);

  return Promise.all(preloads);
}

// preload fonts
export function getFontPreloadList({ path, weights }, baseUrl = '/') {
  return weights.map((weight) => ({
    rel: 'preload',
    href: `${baseUrl}fonts/${path}${weight}.woff2`,
    as: 'font',
    type: 'font/woff2',
    crossorigin: true,
  }));
}
export function getFontsPreloadList(fontsList, baseUrl = '/') {
  return fontsList.reduce(
    (result, { path, weights }) => [
      ...result,
      ...getFontPreloadList({ path, weights }, baseUrl),
    ],
    [],
  );
}

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
export function getBodyFz() {
  const bodyStyle = window.getComputedStyle(document.body);
  return parseFloat(bodyStyle.fontSize);
}
export function toResizedPx(pxValue) {
  return (pxValue / 16) * getBodyFz();
}
export function toResizedEm(pxValue, pxContext) {
  return pxValue / (pxContext || getBodyFz());
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
export function getFontsPreloadList(fontsList) {
  return fontsList.reduce(
    (result, { path, weights }) => [
      ...result,
      ...preloadFont({ path, weights }),
    ],
    [],
  );
}

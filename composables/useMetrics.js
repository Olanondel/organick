const scripts = {
  gtm: {
    script(gtmID) {
      return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmID}');`;
    },
    noscript(gtmID) {
      return `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmID}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    },
  },
};

/**
 * Add metric on page
 * @param metricName metric name from 'scripts' object above
 * @param metricId metric unique id
 */
function setMetric(metricName, metricId) {
  // add script
  const script = document.createElement('script');
  script.innerHTML = scripts[metricName].script(metricId);
  document.head.appendChild(script);

  // add noscript
  const noscript = document.createElement('noscript');
  noscript.innerHTML = scripts[metricName].noscript(metricId);
  document.body.prepend(noscript);
}

/**
 * Add analytic metrics
 * @param {object} obj
 * @param {string} [obj.gtmID] Google Tag Manager ID
 * @example
 * useMetrics({ gtmID: 'gtmID' });
 */
export const useMetrics = ({ gtmID }) => {
  return {
    init() {
      if (gtmID) setMetric('gtm', gtmID);
    },
  };
};

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
 * Add analytic metric on page
 * @param analyticName analytic name from 'scripts' object above
 * @param analyticId analytic unique id
 */
function setAnalytic(analyticName, analyticId) {
  // add script
  const script = document.createElement('script');
  script.innerHTML = scripts[analyticName].script(analyticId);
  document.head.appendChild(script);

  // add noscript
  const noscript = document.createElement('noscript');
  noscript.innerHTML = scripts[analyticName].noscript(analyticId);
  document.body.prepend(noscript);
}

/**
 * Add analytic metrics
 * @param {object} obj
 * @param {string} [obj.gtmID] Google Tag Manager ID
 * @example
 * useAnalytics({ gtmID: 'gtmID' });
 */
export const useAnalytics = ({ gtmID }) => {
  return {
    init() {
      if (gtmID) setAnalytic('gtm', gtmID);
    },
  };
};


/** Auto-generated url.js */
var REDIRECT_URI = false;
var IS_NATIVE_APP = true;
var DEVICE_TYPE = 1;
window.location.hash = window.location.hash.replace(/\?__goto__=(.*)/, "");
var AVAILABLE_LANGUAGES = ['en'];
var DISABLE_BATTERY_OPTIMIZATION = false;

// WebView
if (typeof IS_PREVIEW === 'undefined' ||
    (typeof IS_PREVIEW !== 'undefined' && IS_PREVIEW !== true)) {
    PROTOCOL = 'https://';
    DOMAIN = 'https://mobi.fraudcheck.live';
    APP_KEY = 'overview';
    BASE_PATH = '/'+APP_KEY;
}

var BASE_URL = DOMAIN + BASE_PATH;
var IMAGE_URL = DOMAIN + '/';
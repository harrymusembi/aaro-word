/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./assets/css/demo.css":
/*!*****************************!*\
  !*** ./assets/css/demo.css ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6544339dfca4e1a38d77.css";

/***/ }),

/***/ "./assets/flag-icons.css":
/*!*******************************!*\
  !*** ./assets/flag-icons.css ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4e9a164bc576ac7a88f3.css";

/***/ }),

/***/ "./assets/fontawesome.css":
/*!********************************!*\
  !*** ./assets/fontawesome.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "329266b2e3050b99b45b.css";

/***/ }),

/***/ "./assets/img/avatars/1.png":
/*!**********************************!*\
  !*** ./assets/img/avatars/1.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1.png";

/***/ }),

/***/ "./assets/img/branding/aaro-logo-80.png":
/*!**********************************************!*\
  !*** ./assets/img/branding/aaro-logo-80.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/aaro-logo-80.png";

/***/ }),

/***/ "./assets/img/favicon/favicon.ico":
/*!****************************************!*\
  !*** ./assets/img/favicon/favicon.ico ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/favicon.ico";

/***/ }),

/***/ "./assets/img/illustrations/card-advance-sale.png":
/*!********************************************************!*\
  !*** ./assets/img/illustrations/card-advance-sale.png ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/card-advance-sale.png";

/***/ }),

/***/ "./assets/tabler-icons.css":
/*!*********************************!*\
  !*** ./assets/tabler-icons.css ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "295594b34a2eef28418c.css";

/***/ }),

/***/ "./assets/vendor/css/rtl/core.css":
/*!****************************************!*\
  !*** ./assets/vendor/css/rtl/core.css ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f96fb030c3b8da277af.css";

/***/ }),

/***/ "./assets/vendor/css/rtl/theme-default.css":
/*!*************************************************!*\
  !*** ./assets/vendor/css/rtl/theme-default.css ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d9ecdfc1aa696f06525.css";

/***/ }),

/***/ "./assets/vendor/libs/formvalidation/dist/css/formValidation.min.css":
/*!***************************************************************************!*\
  !*** ./assets/vendor/libs/formvalidation/dist/css/formValidation.min.css ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fe2c97d35e55db959d4c.css";

/***/ }),

/***/ "./assets/vendor/libs/node-waves/node-waves.css":
/*!******************************************************!*\
  !*** ./assets/vendor/libs/node-waves/node-waves.css ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7c16e57d2292b7ebf778.css";

/***/ }),

/***/ "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css":
/*!********************************************************************!*\
  !*** ./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fb4fccff861a689f54d3.css";

/***/ }),

/***/ "./assets/js/config.js":
/*!*****************************!*\
  !*** ./assets/js/config.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f96bdc116d192ab094c1.js";

/***/ }),

/***/ "./assets/js/form-validation.js":
/*!**************************************!*\
  !*** ./assets/js/form-validation.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92de4b253634892d3870.js";

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a18f25317b9cf082df3.js";

/***/ }),

/***/ "./assets/vendor/js/bootstrap.js":
/*!***************************************!*\
  !*** ./assets/vendor/js/bootstrap.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "921947999fdf91284c42.js";

/***/ }),

/***/ "./assets/vendor/js/helpers.js":
/*!*************************************!*\
  !*** ./assets/vendor/js/helpers.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feb9d05070a31f3f5302.js";

/***/ }),

/***/ "./assets/vendor/js/menu.js":
/*!**********************************!*\
  !*** ./assets/vendor/js/menu.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3110013b2d064d3bdb1e.js";

/***/ }),

/***/ "./assets/vendor/libs/hammer/hammer.js":
/*!*********************************************!*\
  !*** ./assets/vendor/libs/hammer/hammer.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf816ec15d1c37bd5cca.js";

/***/ }),

/***/ "./assets/vendor/libs/jquery/jquery.js":
/*!*********************************************!*\
  !*** ./assets/vendor/libs/jquery/jquery.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef0ce00035994dbaaf69.js";

/***/ }),

/***/ "./assets/vendor/libs/node-waves/node-waves.js":
/*!*****************************************************!*\
  !*** ./assets/vendor/libs/node-waves/node-waves.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e242d19ed2db8ca08763.js";

/***/ }),

/***/ "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js":
/*!*******************************************************************!*\
  !*** ./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "243299a6043110dcd8fa.js";

/***/ }),

/***/ "./assets/vendor/libs/popper/popper.js":
/*!*********************************************!*\
  !*** ./assets/vendor/libs/popper/popper.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71e13568a4291644d940.js";

/***/ }),

/***/ "./src/taskpane/app.js":
/*!*****************************!*\
  !*** ./src/taskpane/app.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "578bed8e541d3df5f4ee.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./src/taskpane/index.html ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/img/favicon/favicon.ico */ "./assets/img/favicon/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/fontawesome.css */ "./assets/fontawesome.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/tabler-icons.css */ "./assets/tabler-icons.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/flag-icons.css */ "./assets/flag-icons.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/css/rtl/core.css */ "./assets/vendor/css/rtl/core.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/css/rtl/theme-default.css */ "./assets/vendor/css/rtl/theme-default.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/css/demo.css */ "./assets/css/demo.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css */ "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/node-waves/node-waves.css */ "./assets/vendor/libs/node-waves/node-waves.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/formvalidation/dist/css/formValidation.min.css */ "./assets/vendor/libs/formvalidation/dist/css/formValidation.min.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/helpers.js */ "./assets/vendor/js/helpers.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/js/config.js */ "./assets/js/config.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/img/branding/aaro-logo-80.png */ "./assets/img/branding/aaro-logo-80.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/illustrations/card-advance-sale.png */ "./assets/img/illustrations/card-advance-sale.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/avatars/1.png */ "./assets/img/avatars/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/jquery/jquery.js */ "./assets/vendor/libs/jquery/jquery.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/popper/popper.js */ "./assets/vendor/libs/popper/popper.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/bootstrap.js */ "./assets/vendor/js/bootstrap.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js */ "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/node-waves/node-waves.js */ "./assets/vendor/libs/node-waves/node-waves.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/hammer/hammer.js */ "./assets/vendor/libs/hammer/hammer.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/menu.js */ "./assets/vendor/js/menu.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./app.js */ "./src/taskpane/app.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/js/main.js */ "./assets/js/main.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/js/form-validation.js */ "./assets/js/form-validation.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);
var ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);
var code = "<!DOCTYPE html>\r\n\r\n<html lang=\"en\" class=\"light-style layout-menu-fixed\" dir=\"ltr\" data-theme=\"theme-default\"\r\n  data-assets-path=\"./../../assets/\" data-template=\"horizontal-menu-template-starter\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta name=\"viewport\"\r\n    content=\"width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0\" />\r\n\r\n  <title>AARO Dashboard</title>\r\n\r\n  <meta name=\"description\" content=\"\" />\r\n  <" + "script>\r\n    // Check session login status\r\n    if (!sessionStorage.getItem('isLoggedIn')) {\r\n      // User is not logged in, redirect to login.html\r\n      window.location.href = 'taskpane.html';\r\n    }\r\n  <" + "/script>\r\n  <!-- Favicon -->\r\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n\r\n  <!-- Fonts -->\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n  <link\r\n    href=\"https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap\"\r\n    rel=\"stylesheet\" type=\"text/css\" />\r\n\r\n  <!-- Icons -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" />\r\n\r\n  <!-- Core CSS -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" />\r\n\r\n  <!-- Vendors CSS -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" />\r\n\r\n  <!-- Page CSS -->\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" />\r\n  <!-- Helpers -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->\r\n  <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->\r\n  <!-- <" + "script src=\"./../../assets/vendor/js/template-customizer.js\" type=\"text/javascript\"><" + "/script> -->\r\n  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <" + "script src=\"https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\r\n  <link rel=\"stylesheet\" type=\"text/css\"\r\n    href=\"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css\" />\r\n\r\n</head>\r\n\r\n<body>\r\n  <!-- Layout wrapper -->\r\n\r\n  <" + "script>\r\n\r\n  <" + "/script>\r\n  <div class=\"layout-wrapper layout-content-navbar\">\r\n    <div class=\"layout-container\">\r\n      <!-- Menu -->\r\n      <aside id=\"layout-menu\" class=\"layout-menu menu-vertical menu bg-menu-theme\">\r\n        <div class=\"app-brand demo\">\r\n          <a href=\"index.html\" class=\"app-brand-link\">\r\n            <span class=\"app-brand-logo demo\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\" width=\"40px\" height=\"20px\">\r\n            </span>\r\n            <span class=\"app-brand-text demo menu-text fw-bold\">AARO SYSTEMS</span>\r\n          </a>\r\n        </div>\r\n\r\n        <!-- <div class=\"menu-inner-shadow\"></div> -->\r\n\r\n        <ul class=\"menu-inner py-1\">\r\n          <!-- Dashboards -->\r\n          <li class=\"menu-item  active\">\r\n            <a href=\"index.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-smart-home\"></i>\r\n              <div data-i18n=\"Dashboards\">Templates</div>\r\n              <!-- <div class=\"badge bg-label-primary rounded-pill ms-auto\">3</div> -->\r\n            </a>\r\n          </li>\r\n\r\n          <!-- Layouts -->\r\n          <li class=\"menu-item\">\r\n            <a href=\"templates.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-layout-sidebar\"></i>\r\n              <div data-i18n=\"Layouts\">Reports</div>\r\n            </a>\r\n\r\n          </li>\r\n\r\n          <li class=\"menu-item\">\r\n            <a href=\"uploads.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-layout-sidebar\"></i>\r\n              <div data-i18n=\"Layouts\">Upload</div>\r\n            </a>\r\n\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </aside>\r\n      <!-- / Menu -->\r\n\r\n      <!-- Layout container -->\r\n      <div class=\"layout-page\">\r\n        <!-- Navbar -->\r\n\r\n        <nav\r\n          class=\"layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme\"\r\n          id=\"layout-navbar\">\r\n          <div class=\"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none\">\r\n            <a class=\"nav-item nav-link px-0 me-xl-4\" href=\"javascript:void(0)\">\r\n              <i class=\"ti ti-menu-2 ti-sm\"></i>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"navbar-nav-right d-flex align-items-center\" id=\"navbar-collapse\">\r\n            <!-- Search -->\r\n\r\n            <!-- /Search -->\r\n\r\n            <ul class=\"navbar-nav flex-row align-items-center ms-auto\">\r\n\r\n\r\n\r\n\r\n              <!-- User -->\r\n              <li class=\"nav-item navbar-dropdown dropdown-user dropdown\">\r\n                <a class=\"nav-link dropdown-toggle hide-arrow\" href=\"javascript:void(0);\" data-bs-toggle=\"dropdown\">\r\n                  <div class=\"avatar avatar-online\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt class=\"h-auto rounded-circle\" />\r\n                  </div>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-end\">\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-account-settings-account.html\">\r\n                      <div class=\"d-flex\">\r\n                        <div class=\"flex-shrink-0 me-3\">\r\n                          <div class=\"avatar avatar-online\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt class=\"h-auto rounded-circle\" />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"flex-grow-1\">\r\n                          <span class=\"fw-semibold d-block\" id=\"username\"></span>\r\n                          <small class=\"text-muted\">Admin</small>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-profile-user.html\">\r\n                      <i class=\"ti ti-user-check me-2 ti-sm\"></i>\r\n                      <span class=\"align-middle\">My Profile</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-account-settings-account.html\">\r\n                      <i class=\"ti ti-settings me-2 ti-sm\"></i>\r\n                      <span class=\"align-middle\">Settings</span>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <div class=\"dropdown-divider\"></div>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" href=\"pages-help-center-landing.html\">\r\n                  <i class=\"ti ti-lifebuoy me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">Help</span>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" href=\"pages-faq.html\">\r\n                  <i class=\"ti ti-help me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">FAQ</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li>\r\n                <div class=\"dropdown-divider\"></div>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" id=\"logoutButton\">\r\n                  <i class=\"ti ti-logout me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">Log Out</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            </li>\r\n            <!--/ User -->\r\n            </ul>\r\n          </div>\r\n\r\n          <!-- Search Small Screens -->\r\n          <div class=\"navbar-search-wrapper search-input-wrapper d-none\">\r\n            <input type=\"text\" class=\"form-control search-input container-xxl border-0\" placeholder=\"Search...\"\r\n              aria-label=\"Search...\" />\r\n            <i class=\"ti ti-x ti-sm search-toggler cursor-pointer\"></i>\r\n          </div>\r\n        </nav>\r\n\r\n        <!-- / Navbar -->\r\n\r\n        <!-- Content wrapper -->\r\n        <div class=\"content-wrapper\">\r\n          <!-- Content -->\r\n\r\n          <div class=\"container-xxl flex-grow-1 container-p-y\">\r\n            <div class=\"row\">\r\n              <!-- Website Analytics -->\r\n              <!-- Sales Overview -->\r\n              <!-- <div class=\"col-lg-12 col-sm-12 mb-4 \">\r\n                <div class=\"card hidden\" id=\"tableTest\">\r\n                  <h5 class=\"card-header\">Templates</h5>\r\n                  <div class=\"table-responsive text-nowrap\" id=\"Table1\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Name</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody class=\"table-border-bottom-0\">\r\n                        <tr class=\"\">\r\n                          <td> <strong>Note 3 Other operating expense</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n                        <tr class=\"\">\r\n                          <td> <strong>Note 8 Intangible fixed assets</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n                        <tr class=\"\">\r\n                          <td> <strong>5 Consolidated balance sheet</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <!--/ Sales Overview -->\r\n\r\n              <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">Note 3 Other operating expense</h5>\r\n                        <br>\r\n                        <div class=\"mb-3\">\r\n                          <label for=\"select2Icons\" class=\"form-label\">Table Styles</label>\r\n                          <select id=\"select2Icons\" class=\"select2-icons form-select\"> </select>\r\n                        </div>\r\n\r\n\r\n                        <button id=\"noteThree\" class=\"btn btn-primary\">Load</button>\r\n                        <!-- <a href=\"javascript:;\" class=\"btn btn-primary\" id=\"noteThree\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\">View</a> -->\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">Note 8 Intangible fixed assets</h5>\r\n                        <br>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\" id=\"noteEight\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\" id=\"LandscapeNoteEight\">Landscape</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\" id=\"PotraitNoteEight\">Portrait</a>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">5 Consolidated balance sheet</h5>\r\n                        <br>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\" id=\"consolidatedBalance\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\">View</a>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!--/ Projects table -->\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n              <!-- Custom Svg Icon Radios -->\r\n              <div class=\"col-xl-6 mb-4\">\r\n                <div class=\"card\">\r\n                  <h5 class=\"card-header\">Custom Option Radios With SVG Icons</h5>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md mb-md-0 mb-2\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customRadioSvg1\">\r\n                            <span class=\"custom-option-body\">\r\n                              <i class=\"fas fa-3x fa-arrow-left \"></i>\r\n                              <span class=\"custom-option-title\"> Design </span>\r\n                              <small>Cake sugar plum fruitcake I love sweet roll jelly-o.</small>\r\n                            </span>\r\n                            <input name=\"customRadioSvg\" class=\"form-check-input\" type=\"radio\" value=\"\"\r\n                              id=\"customRadioSvg1\" checked />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md mb-md-0 mb-2\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customRadioSvg2\">\r\n                            <span class=\"custom-option-body\">\r\n                              <svg width=\"41\" height=\"40\" viewBox=\"0 0 41 40\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M14 33.75V11.25H6.5C6.16848 11.25 5.85054 11.3817 5.61612 11.6161C5.3817 11.8505 5.25 12.1685 5.25 12.5V32.5C5.25 32.8315 5.3817 33.1495 5.61612 33.3839C5.85054 33.6183 6.16848 33.75 6.5 33.75H14ZM26.5 33.75V11.25H34C34.3315 11.25 34.6495 11.3817 34.8839 11.6161C35.1183 11.8505 35.25 12.1685 35.25 12.5V32.5C35.25 32.8315 35.1183 33.1495 34.8839 33.3839C34.6495 33.6183 34.3315 33.75 34 33.75H26.5Z\"\r\n                                  fill=\"currentColor\" fill-opacity=\"0.2\" />\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M16.5 5.25C15.5717 5.25 14.6815 5.61875 14.0251 6.27513C13.3687 6.9315 13 7.82174 13 8.75V10.25H6.5C5.25736 10.25 4.25 11.2574 4.25 12.5V32.5C4.25 33.7426 5.25736 34.75 6.5 34.75H14H26.5H34C35.2426 34.75 36.25 33.7426 36.25 32.5V12.5C36.25 11.2574 35.2426 10.25 34 10.25H27.5V8.75C27.5 7.82174 27.1313 6.9315 26.4749 6.27513C25.8185 5.61875 24.9283 5.25 24 5.25H16.5ZM25.5 10.25V8.75C25.5 8.35218 25.342 7.97064 25.0607 7.68934C24.7794 7.40804 24.3978 7.25 24 7.25H16.5C16.1022 7.25 15.7206 7.40804 15.4393 7.68934C15.158 7.97064 15 8.35218 15 8.75V10.25H25.5ZM15 12.25H25.5V32.75H15V12.25ZM13 12.25H6.5C6.36193 12.25 6.25 12.3619 6.25 12.5V32.5C6.25 32.6381 6.36193 32.75 6.5 32.75H13V12.25ZM27.5 32.75V12.25H34C34.1381 12.25 34.25 12.3619 34.25 12.5V32.5C34.25 32.6381 34.1381 32.75 34 32.75H27.5Z\"\r\n                                  fill=\"currentColor\" />\r\n                              </svg>\r\n                              <span class=\"custom-option-title\"> Development </span>\r\n                              <small> Cake sugar plum fruitcake I love sweet roll jelly-o. </small>\r\n                            </span>\r\n                            <input name=\"customRadioSvg\" class=\"form-check-input\" type=\"radio\" value=\"\"\r\n                              id=\"customRadioSvg2\" />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customRadioSvg3\">\r\n                            <span class=\"custom-option-body\">\r\n                              <svg width=\"41\" height=\"40\" viewBox=\"0 0 41 40\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M15.25 17.5V15H5.25V17.5C5.25 18.8261 5.77678 20.0979 6.71447 21.0355C7.65215 21.9732 8.92392 22.5 10.25 22.5C11.5761 22.5 12.8479 21.9732 13.7855 21.0355C14.7232 20.0979 15.25 18.8261 15.25 17.5ZM35.25 17.5V15H25.25V17.5C25.25 18.8261 25.7768 20.0979 26.7145 21.0355C27.6521 21.9732 28.9239 22.5 30.25 22.5C31.5761 22.5 32.8479 21.9732 33.7855 21.0355C34.7232 20.0979 35.25 18.8261 35.25 17.5Z\"\r\n                                  fill=\"currentColor\" fill-opacity=\"0.2\" />\r\n                                <path\r\n                                  d=\"M8.6875 6.25H31.8125C32.0837 6.25223 32.347 6.3415 32.5636 6.50466C32.7802 6.66782 32.9386 6.89623 33.0156 7.15625L35.25 15H5.25L7.48437 7.15625C7.56137 6.89623 7.71984 6.66782 7.93644 6.50466C8.15305 6.3415 8.41633 6.25223 8.6875 6.25V6.25Z\"\r\n                                  stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"\r\n                                  stroke-linejoin=\"round\" />\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M6.25 15C6.25 14.4477 5.80228 14 5.25 14C4.69772 14 4.25 14.4477 4.25 15V17.5C4.25 19.0913 4.88214 20.6174 6.00736 21.7426C6.2389 21.9742 6.48743 22.1849 6.75 22.3734V32.5C6.75 33.0967 6.98705 33.669 7.40901 34.091C7.83097 34.5129 8.40326 34.75 9 34.75H31.5C32.0967 34.75 32.669 34.5129 33.091 34.091C33.513 33.669 33.75 33.0967 33.75 32.5V22.3734C34.0126 22.1849 34.2611 21.9742 34.4926 21.7426C35.6179 20.6174 36.25 19.0913 36.25 17.5V15C36.25 14.4477 35.8023 14 35.25 14C34.6977 14 34.25 14.4477 34.25 15V17.5C34.25 18.5609 33.8286 19.5783 33.0784 20.3284C32.8685 20.5384 32.6376 20.7226 32.3906 20.879C32.2918 20.9171 32.2004 20.9705 32.1196 21.0362C31.5486 21.338 30.9077 21.5 30.25 21.5C29.1891 21.5 28.1717 21.0786 27.4216 20.3284C26.6714 19.5783 26.25 18.5609 26.25 17.5V15C26.25 14.4477 25.8023 14 25.25 14C24.6977 14 24.25 14.4477 24.25 15V17.5C24.25 18.5609 23.8286 19.5783 23.0784 20.3284C22.3283 21.0786 21.3109 21.5 20.25 21.5C19.1891 21.5 18.1717 21.0786 17.4216 20.3284C16.6714 19.5783 16.25 18.5609 16.25 17.5V15C16.25 14.4477 15.8023 14 15.25 14C14.6977 14 14.25 14.4477 14.25 15V17.5C14.25 18.5609 13.8286 19.5783 13.0784 20.3284C12.3283 21.0786 11.3109 21.5 10.25 21.5C9.59233 21.5 8.95135 21.338 8.38041 21.0362C8.29955 20.9705 8.20823 20.9171 8.10933 20.879C7.86241 20.7226 7.63153 20.5384 7.42157 20.3284C6.67143 19.5783 6.25 18.5609 6.25 17.5V15ZM25.25 20.8167C25.0306 21.1474 24.7774 21.4578 24.4926 21.7426C23.3674 22.8679 21.8413 23.5 20.25 23.5C18.6587 23.5 17.1326 22.8679 16.0074 21.7426C15.7226 21.4578 15.4694 21.1474 15.25 20.8167C15.0306 21.1474 14.7774 21.4578 14.4926 21.7426C13.3674 22.8679 11.8413 23.5 10.25 23.5C9.7396 23.5 9.23591 23.435 8.75 23.3095V32.5C8.75 32.5663 8.77634 32.6299 8.82322 32.6768C8.87011 32.7237 8.93369 32.75 9 32.75H31.5C31.5663 32.75 31.6299 32.7237 31.6768 32.6768C31.7237 32.6299 31.75 32.5663 31.75 32.5V23.3095C31.2641 23.435 30.7604 23.5 30.25 23.5C28.6587 23.5 27.1326 22.8679 26.0074 21.7426C25.7226 21.4578 25.4694 21.1474 25.25 20.8167Z\"\r\n                                  fill=\"currentColor\" />\r\n                              </svg>\r\n\r\n                              <span class=\"custom-option-title\"> Native App </span>\r\n                              <small>Cake sugar plum fruitcake I love sweet roll jelly-o.</small>\r\n                            </span>\r\n                            <input name=\"customRadioSvg\" class=\"form-check-input\" type=\"radio\" value=\"\"\r\n                              id=\"customRadioSvg3\" />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /Custom Svg Icon Radios -->\r\n\r\n              <!-- Custom SVG Icon Checkbox -->\r\n              <div class=\"col-xl-6 mb-4\">\r\n                <div class=\"card\">\r\n                  <h5 class=\"card-header\">Custom Option Checkboxes With SVG Icons</h5>\r\n                  <div class=\"card-body\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md mb-md-0 mb-2\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customCheckboxSvg1\">\r\n                            <span class=\"custom-option-body\">\r\n                              <svg width=\"59\" height=\"58\" viewBox=\"0 0 59 58\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M48.9019 33.6218L41.7878 25.0804C42.0597 30.314 40.7683 36.4086 36.7808 43.364L43.5777 48.8015C43.8194 48.9935 44.1061 49.1205 44.4106 49.1706C44.7151 49.2207 45.0274 49.1922 45.3178 49.0879C45.6083 48.9835 45.8673 48.8067 46.0702 48.5742C46.2732 48.3417 46.4134 48.0612 46.4777 47.7593L49.2644 35.1625C49.3316 34.8954 49.3337 34.6161 49.2706 34.348C49.2076 34.08 49.0811 33.8309 48.9019 33.6218ZM10.2956 33.7578L17.4097 25.239C17.1378 30.4726 18.4292 36.5672 22.4167 43.5L15.6198 48.9375C15.3797 49.1294 15.0947 49.257 14.7916 49.3084C14.4885 49.3598 14.1773 49.3333 13.8873 49.2314C13.5973 49.1294 13.338 48.9554 13.1338 48.7256C12.9295 48.4958 12.7871 48.2179 12.7198 47.9179L9.93313 35.2984C9.86594 35.0313 9.8638 34.7521 9.92688 34.484C9.98995 34.2159 10.1164 33.9669 10.2956 33.7578Z\"\r\n                                  fill=\"currentColor\" opacity=\"0.2\" />\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M27.9017 3.71102C28.3979 3.30011 29.0221 3.07513 29.6666 3.07513C30.3127 3.07513 30.9383 3.30117 31.435 3.71394C33.6315 5.50224 38.386 9.93871 41.0105 16.7606C41.9219 19.1296 42.5713 21.7739 42.7735 24.6785L49.8022 33.113C50.0828 33.4423 50.2809 33.8338 50.38 34.255C50.4785 34.6735 50.4764 35.1093 50.374 35.5267L47.5901 48.1336L47.5894 48.1367C47.485 48.6022 47.264 49.0335 46.9471 49.39C46.6302 49.7465 46.2278 50.0166 45.7778 50.1748C45.3278 50.333 44.8449 50.3742 44.3746 50.2944C43.9043 50.2146 43.4621 50.0165 43.0894 49.7188L43.0889 49.7184L36.566 44.5H22.7675L16.2445 49.7184L16.2441 49.7188C15.8714 50.0165 15.4291 50.2146 14.9588 50.2944C14.4885 50.3742 14.0057 50.333 13.5556 50.1748C13.1056 50.0166 12.7032 49.7465 12.3863 49.39C12.0694 49.0335 11.8484 48.6022 11.7441 48.1367L11.7434 48.1336L8.95943 35.5267C8.85707 35.1093 8.85499 34.6735 8.95346 34.255C9.05262 33.8335 9.25088 33.4419 9.53173 33.1125L16.4274 24.8553C16.6112 21.877 17.2734 19.1695 18.2135 16.7491C20.8639 9.92541 25.6801 5.4896 27.9017 3.71102ZM40.8041 25.2385C40.7893 25.1573 40.7846 25.0748 40.7899 24.993C40.6159 22.2127 40.0004 19.7051 39.1438 17.4787C36.6951 11.1136 32.2331 6.94203 30.1682 5.26158L30.1583 5.25355L30.1584 5.25349C30.0204 5.13826 29.8464 5.07513 29.6666 5.07513C29.4868 5.07513 29.3128 5.13826 29.1748 5.25349L29.1585 5.26684C27.0721 6.93594 22.5504 11.1072 20.0778 17.4732C19.1887 19.7623 18.5587 22.3492 18.4096 25.2244C18.4102 25.2674 18.4081 25.3106 18.4032 25.3535C18.1745 30.253 19.3435 35.9842 22.9982 42.5H36.3292C39.938 35.9325 41.0647 30.1631 40.8041 25.2385ZM48.2696 34.398L42.8122 27.8492C42.6094 32.4348 41.2748 37.5835 38.2005 43.2464L44.3378 48.1563C44.4455 48.2423 44.5733 48.2995 44.7091 48.3226C44.845 48.3456 44.9845 48.3337 45.1145 48.288C45.2445 48.2423 45.3607 48.1643 45.4523 48.0613C45.5436 47.9586 45.6073 47.8344 45.6376 47.7004L45.6378 47.6992L48.4239 35.0828L48.4272 35.0682L48.4305 35.0545C48.4587 34.9425 48.4596 34.8255 48.4332 34.7131C48.4067 34.6007 48.3537 34.4963 48.2786 34.4086L48.2695 34.3981L48.2696 34.398ZM16.4139 27.9916L11.0632 34.3988L11.0549 34.4087L11.0549 34.4086C10.9798 34.4963 10.9267 34.6007 10.9003 34.7131C10.8738 34.8254 10.8747 34.9425 10.9029 35.0545C10.9053 35.0639 10.9075 35.0734 10.9096 35.0828L13.6956 47.6992L13.6959 47.7005C13.7262 47.8345 13.7899 47.9586 13.8812 48.0613C13.9727 48.1643 14.089 48.2423 14.219 48.288C14.349 48.3337 14.4885 48.3456 14.6243 48.3226C14.7602 48.2995 14.888 48.2423 14.9956 48.1563L21.1271 43.2511C18.0233 37.6471 16.6517 32.5443 16.4139 27.9916ZM25.0417 50.75C25.0417 50.1977 25.4895 49.75 26.0417 49.75H33.2917C33.844 49.75 34.2917 50.1977 34.2917 50.75C34.2917 51.3023 33.844 51.75 33.2917 51.75H26.0417C25.4895 51.75 25.0417 51.3023 25.0417 50.75ZM32.3855 21.75C32.3855 23.2515 31.1683 24.4688 29.6667 24.4688C28.1652 24.4688 26.948 23.2515 26.948 21.75C26.948 20.2485 28.1652 19.0313 29.6667 19.0313C31.1683 19.0313 32.3855 20.2485 32.3855 21.75Z\"\r\n                                  fill=\"currentColor\" />\r\n                              </svg>\r\n                              <span class=\"custom-option-title\"> Design </span>\r\n                              <small>Cake sugar plum fruitcake I love sweet roll jelly-o.</small>\r\n                            </span>\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"customCheckboxSvg1\" checked />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md mb-md-0 mb-2\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customCheckboxSvg2\">\r\n                            <span class=\"custom-option-body\">\r\n                              <svg width=\"41\" height=\"40\" viewBox=\"0 0 41 40\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path\r\n                                  d=\"M12.5468 26.0937C11.0586 24.9366 9.85336 23.456 9.02227 21.764C8.19117 20.0721 7.75606 18.2131 7.74989 16.3281C7.71864 9.54685 13.1718 3.90622 19.953 3.74997C22.5775 3.68776 25.1549 4.45342 27.3198 5.93836C29.4847 7.4233 31.1271 9.55214 32.0141 12.023C32.9011 14.4938 32.9877 17.1812 32.2616 19.704C31.5354 22.2267 30.0335 24.4569 27.9686 26.0781C27.5125 26.4307 27.1431 26.8829 26.8885 27.4001C26.6339 27.9174 26.501 28.486 26.4999 29.0625V30C26.4999 30.3315 26.3682 30.6494 26.1338 30.8839C25.8994 31.1183 25.5814 31.25 25.2499 31.25H15.2499C14.9184 31.25 14.6004 31.1183 14.366 30.8839C14.1316 30.6494 13.9999 30.3315 13.9999 30V29.0625C13.996 28.4903 13.8633 27.9264 13.6118 27.4124C13.3602 26.8985 12.9962 26.4478 12.5468 26.0937Z\"\r\n                                  fill=\"currentColor\" fill-opacity=\"0.2\" />\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M26.7542 6.763C24.7625 5.39686 22.3912 4.69245 19.9767 4.74969L19.976 4.74971C19.7335 4.7553 19.4927 4.76853 19.254 4.78917L19.93 2.75024C22.7642 2.68319 25.5476 3.5101 27.8855 5.11371C30.2235 6.71744 31.9973 9.0166 32.9553 11.6851C33.9133 14.3536 34.0068 17.2559 33.2226 19.9806C32.4383 22.7052 30.8162 25.1137 28.5862 26.8646L28.5802 26.8693L28.5802 26.8693C28.2447 27.1286 27.973 27.4612 27.7857 27.8417C27.5986 28.2219 27.5008 28.6398 27.4999 29.0635L27.4999 29.0644L27.4999 30C27.4999 30.5967 27.2628 31.169 26.8409 31.591C26.4189 32.0129 25.8466 32.25 25.2499 32.25H15.2499C14.6532 32.25 14.0809 32.0129 13.6589 31.591C13.2369 31.169 12.9999 30.5967 12.9999 30V29.0662C12.9965 28.6451 12.8987 28.2302 12.7136 27.8521C12.5285 27.4738 12.2607 27.142 11.9302 26.881L12.6056 24.8439C12.7854 25.0029 12.9705 25.1565 13.1606 25.3043L12.5468 26.0937L13.1656 25.3082C13.7329 25.7552 14.1924 26.3241 14.51 26.9728C14.8275 27.6215 14.9949 28.3334 14.9999 29.0556L14.9999 29.0625L14.9999 30C14.9999 30.0663 15.0262 30.1299 15.0731 30.1768C15.12 30.2236 15.1836 30.25 15.2499 30.25H25.2499C25.3162 30.25 25.3798 30.2236 25.4267 30.1768C25.4735 30.1299 25.4999 30.0663 25.4999 30V29.0625L25.4999 29.0605C25.5013 28.3316 25.6694 27.6126 25.9913 26.9585C26.3125 26.3057 26.7786 25.7348 27.3539 25.2894C29.2521 23.7981 30.6329 21.7472 31.3006 19.4274C31.9686 17.1064 31.889 14.634 31.0729 12.3608C30.2569 10.0877 28.7459 8.12915 26.7542 6.763ZM12.6055 24.8438L12.6056 24.8439L19.254 4.78917L19.2534 4.78923L19.9293 2.75025C12.6002 2.91949 6.71651 9.00969 6.7499 16.3321C6.75667 18.3686 7.22681 20.3769 8.1247 22.2049C9.02219 24.032 10.3235 25.6311 11.9302 26.881L12.6055 24.8438ZM12.6055 24.8438C11.4909 23.8582 10.5778 22.6627 9.91983 21.3231C9.15564 19.7674 8.75556 18.0581 8.74989 16.3248L8.74988 16.3235C8.72225 10.3269 13.3596 5.29929 19.2534 4.78923L12.6055 24.8438ZM13 36.25C13 35.6977 13.4477 35.25 14 35.25H26.5C27.0523 35.25 27.5 35.6977 27.5 36.25C27.5 36.8023 27.0523 37.25 26.5 37.25H14C13.4477 37.25 13 36.8023 13 36.25ZM21.6828 7.88907C21.1382 7.79676 20.622 8.16335 20.5297 8.70787C20.4374 9.25238 20.804 9.76863 21.3485 9.86093C22.6721 10.0853 23.8935 10.715 24.844 11.6631C25.7945 12.6112 26.4274 13.831 26.6551 15.154C26.7488 15.6983 27.266 16.0636 27.8103 15.9699C28.3546 15.8762 28.7198 15.359 28.6261 14.8147C28.3281 13.0836 27.5001 11.4876 26.2564 10.2471C25.0127 9.00656 23.4147 8.18265 21.6828 7.88907Z\"\r\n                                  fill=\"currentColor\" />\r\n                              </svg>\r\n\r\n                              <span class=\"custom-option-title\"> Development </span>\r\n                              <small>Cake sugar plum fruitcake I love sweet roll jelly-o.</small>\r\n                            </span>\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"customCheckboxSvg2\" />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md\">\r\n                        <div class=\"form-check custom-option custom-option-icon\">\r\n                          <label class=\"form-check-label custom-option-content\" for=\"customCheckboxSvg3\">\r\n                            <span class=\"custom-option-body\">\r\n                              <svg width=\"41\" height=\"40\" viewBox=\"0 0 41 40\" fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\">\r\n                                <path d=\"M29 6.25H20.25L12.5781 16.25L20.25 35L37.75 16.25L29 6.25Z\" fill=\"currentColor\"\r\n                                  fill-opacity=\"0.2\" />\r\n                                <path d=\"M11.5 6.25H29L37.75 16.25L20.25 35L2.75 16.25L11.5 6.25Z\" stroke=\"currentColor\"\r\n                                  stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n                                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                                  d=\"M21.0434 5.64131C20.8542 5.39462 20.5609 5.25 20.25 5.25C19.9391 5.25 19.6458 5.39462 19.4566 5.64131L12.0849 15.25H2.75C2.19772 15.25 1.75 15.6977 1.75 16.25C1.75 16.8023 2.19772 17.25 2.75 17.25H11.9068L19.3245 35.3787C19.4782 35.7545 19.844 36 20.25 36C20.656 36 21.0218 35.7545 21.1755 35.3787L28.5932 17.25H37.75C38.3023 17.25 38.75 16.8023 38.75 16.25C38.75 15.6977 38.3023 15.25 37.75 15.25H28.4151L21.0434 5.64131ZM25.8943 15.25L20.25 7.89287L14.6057 15.25H25.8943ZM14.0678 17.25L20.25 32.3593L26.4322 17.25H14.0678Z\"\r\n                                  fill=\"currentColor\" />\r\n                              </svg>\r\n                              <span class=\"custom-option-title\"> Native App </span>\r\n                              <small> Cake sugar plum fruitcake I love sweet roll jelly-o. </small>\r\n                            </span>\r\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"customCheckboxSvg3\" />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- / Content -->\r\n\r\n          <!-- Footer -->\r\n          <footer class=\"content-footer footer bg-footer-theme\">\r\n            <div class=\"container-xxl\">\r\n              <div\r\n                class=\"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column\">\r\n                <div>\r\n                  ©\r\n                  <" + "script>\r\n                    document.write(new Date().getFullYear());\r\n                  <" + "/script>\r\n                  , <a href=\"https://www.aaro.com\" target=\"_blank\" class=\"fw-semibold\">AARO\r\n                    SYSTEMS</a>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </footer>\r\n          <!-- / Footer -->\r\n\r\n          <div class=\"content-backdrop fade\"></div>\r\n        </div>\r\n        <!-- Content wrapper -->\r\n      </div>\r\n      <!-- / Layout page -->\r\n    </div>\r\n\r\n    <!-- Overlay -->\r\n    <div class=\"layout-overlay layout-menu-toggle\"></div>\r\n\r\n    <!-- Drag Target Area To SlideIn Menu On Small Screens -->\r\n    <div class=\"drag-target\"></div>\r\n  </div>\r\n\r\n  <!--/ Layout wrapper -->\r\n  <!-- <" + "script>\r\n\r\n    const form = document.getElementById('uploadForm');\r\n    const fileInput = document.getElementById('bs-validation-upload-file');\r\n\r\n    form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    \r\n    const file = fileInput.files[0];\r\n    const reader = new FileReader();\r\n\r\n    reader.addEventListener('load', () => {\r\n        const data = JSON.parse(reader.result);\r\n        const data = JSON.parse(reader.result);\r\n    const translatedData = await translateClient.translate(data, '<target-language-code>');\r\n\r\n    Office.context.document.setSelectedDataAsync(translatedData, {\r\n      coercionType: Office.CoercionType.Text,\r\n        console.log(data);\r\n    });\r\n\r\n    reader.readAsText(file);\r\n    });\r\n\r\n       \r\n\r\n<" + "/script> -->\r\n  <!-- Core JS -->\r\n  <!-- build:js ./../../assets/vendor/js/core.js -->\r\n\r\n\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"><" + "/script>\r\n\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"><" + "/script>\r\n\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"><" + "/script>\r\n\r\n  <" + "script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery.timer/0.7.2/jquery.timer.min.js\"><" + "/script>\r\n\r\n  <!-- Include your app.js file -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"><" + "/script>\r\n  <!-- endbuild -->\r\n\r\n  <!-- Vendors JS -->\r\n  <!-- <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js\"><" + "/script> -->\r\n  <!-- <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js\"><" + "/script>\r\n    <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js\"><" + "/script> -->\r\n\r\n  <!-- Main JS -->\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\"><" + "/script>\r\n\r\n  <!-- Page JS -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\"><" + "/script>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map
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

/***/ "./assets/img/branding/aaro-logo.png":
/*!*******************************************!*\
  !*** ./assets/img/branding/aaro-logo.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/aaro-logo.png";

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

/***/ "./assets/vendor/js/template-customizer.js":
/*!*************************************************!*\
  !*** ./assets/vendor/js/template-customizer.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87a5d671a262d17db2b4.js";

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
/******/ 			"uploads": 0
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
/*!***********************************!*\
  !*** ./src/taskpane/uploads.html ***!
  \***********************************/
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
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/template-customizer.js */ "./assets/vendor/js/template-customizer.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/js/config.js */ "./assets/js/config.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/img/branding/aaro-logo.png */ "./assets/img/branding/aaro-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/illustrations/card-advance-sale.png */ "./assets/img/illustrations/card-advance-sale.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/img/avatars/1.png */ "./assets/img/avatars/1.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/jquery/jquery.js */ "./assets/vendor/libs/jquery/jquery.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/popper/popper.js */ "./assets/vendor/libs/popper/popper.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/bootstrap.js */ "./assets/vendor/js/bootstrap.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js */ "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/node-waves/node-waves.js */ "./assets/vendor/libs/node-waves/node-waves.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/libs/hammer/hammer.js */ "./assets/vendor/libs/hammer/hammer.js"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/vendor/js/menu.js */ "./assets/vendor/js/menu.js"), __webpack_require__.b);
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
var code = "<!DOCTYPE html>\r\n\r\n<html lang=\"en\" class=\"light-style layout-menu-fixed\" dir=\"ltr\" data-theme=\"theme-default\"\r\n  data-assets-path=\"./../../assets/\" data-template=\"horizontal-menu-template-starter\">\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta name=\"viewport\"\r\n    content=\"width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0\" />\r\n\r\n  <title>AARO Dashboard</title>\r\n\r\n  <meta name=\"description\" content=\"\" />\r\n\r\n  <!-- Favicon -->\r\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n\r\n  <!-- Fonts -->\r\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n  <link\r\n    href=\"https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap\"\r\n    rel=\"stylesheet\" type=\"text/css\" />\r\n\r\n  <!-- Icons -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" />\r\n\r\n  <!-- Core CSS -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" />\r\n\r\n  <!-- Vendors CSS -->\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" />\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" />\r\n\r\n  <!-- Page CSS -->\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" />\r\n  <!-- Helpers -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->\r\n  <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" type=\"text/javascript\"><" + "/script>\r\n  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <" + "script src=\"https://appsforoffice.microsoft.com/lib/1.1/hosted/office.js\" type=\"text/javascript\"><" + "/script>\r\n\r\n  <!-- For more information on Fluent UI, visit https://developer.microsoft.com/fluentui#/. -->\r\n  <link rel=\"stylesheet\" type=\"text/css\"\r\n    href=\"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css\" />\r\n\r\n</head>\r\n\r\n<body>\r\n  <!-- Layout wrapper -->\r\n\r\n\r\n  <div class=\"layout-wrapper layout-content-navbar\">\r\n    <div class=\"layout-container\">\r\n      <!-- Menu -->\r\n\r\n      <aside id=\"layout-menu\" class=\"layout-menu menu-vertical menu bg-menu-theme\">\r\n        <div class=\"app-brand demo\">\r\n          <a href=\"index.html\" class=\"app-brand-link\">\r\n            <span class=\"app-brand-logo demo\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" width=\"40px\" height=\"20px\">\r\n\r\n            </span>\r\n            <span class=\"app-brand-text demo menu-text fw-bold\">AARO SYSTEMS</span>\r\n          </a>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"menu-inner-shadow\"></div>\r\n\r\n        <ul class=\"menu-inner py-1\">\r\n          <!-- Dashboards -->\r\n          <li class=\"menu-item\">\r\n            <a href=\"index.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-smart-home\"></i>\r\n              <div data-i18n=\"Dashboards\">Templates</div>\r\n              <!-- <div class=\"badge bg-label-primary rounded-pill ms-auto\">3</div> -->\r\n            </a>\r\n          </li>\r\n\r\n          <!-- Layouts -->\r\n          <li class=\"menu-item\">\r\n            <a href=\"templates.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-layout-sidebar\"></i>\r\n              <div data-i18n=\"Layouts\">Reports</div>\r\n            </a>\r\n\r\n          </li>\r\n\r\n          <li class=\"menu-item active\">\r\n            <a href=\"uploads.html\" class=\"menu-link\">\r\n              <i class=\"menu-icon tf-icons ti ti-layout-sidebar\"></i>\r\n              <div data-i18n=\"Layouts\">Upload</div>\r\n            </a>\r\n\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </aside>\r\n      <!-- / Menu -->\r\n\r\n      <!-- Layout container -->\r\n      <div class=\"layout-page\">\r\n        <!-- Navbar -->\r\n\r\n        <nav\r\n          class=\"layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme\"\r\n          id=\"layout-navbar\">\r\n          <div class=\"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none\">\r\n            <a class=\"nav-item nav-link px-0 me-xl-4\" href=\"javascript:void(0)\">\r\n              <i class=\"ti ti-menu-2 ti-sm\"></i>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"navbar-nav-right d-flex align-items-center\" id=\"navbar-collapse\">\r\n            <!-- Search -->\r\n\r\n            <!-- /Search -->\r\n\r\n            <ul class=\"navbar-nav flex-row align-items-center ms-auto\">\r\n\r\n\r\n\r\n\r\n              <!-- User -->\r\n              <li class=\"nav-item navbar-dropdown dropdown-user dropdown\">\r\n                <a class=\"nav-link dropdown-toggle hide-arrow\" href=\"javascript:void(0);\" data-bs-toggle=\"dropdown\">\r\n                  <div class=\"avatar avatar-online\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt class=\"h-auto rounded-circle\" />\r\n                  </div>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-end\">\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-account-settings-account.html\">\r\n                      <div class=\"d-flex\">\r\n                        <div class=\"flex-shrink-0 me-3\">\r\n                          <div class=\"avatar avatar-online\">\r\n                            <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt class=\"h-auto rounded-circle\" />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"flex-grow-1\">\r\n                          <span class=\"fw-semibold d-block\">John Doe</span>\r\n                          <small class=\"text-muted\">Admin</small>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-profile-user.html\">\r\n                      <i class=\"ti ti-user-check me-2 ti-sm\"></i>\r\n                      <span class=\"align-middle\">My Profile</span>\r\n                    </a>\r\n                  </li>\r\n                  <li>\r\n                    <a class=\"dropdown-item\" href=\"pages-account-settings-account.html\">\r\n                      <i class=\"ti ti-settings me-2 ti-sm\"></i>\r\n                      <span class=\"align-middle\">Settings</span>\r\n                    </a>\r\n                  </li>\r\n\r\n                  <div class=\"dropdown-divider\"></div>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" href=\"pages-help-center-landing.html\">\r\n                  <i class=\"ti ti-lifebuoy me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">Help</span>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" href=\"pages-faq.html\">\r\n                  <i class=\"ti ti-help me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">FAQ</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li>\r\n                <div class=\"dropdown-divider\"></div>\r\n              </li>\r\n              <li>\r\n                <a class=\"dropdown-item\" href=\"auth-login-cover.html\" target=\"_blank\">\r\n                  <i class=\"ti ti-logout me-2 ti-sm\"></i>\r\n                  <span class=\"align-middle\">Log Out</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            </li>\r\n            <!--/ User -->\r\n            </ul>\r\n          </div>\r\n\r\n          <!-- Search Small Screens -->\r\n          <div class=\"navbar-search-wrapper search-input-wrapper d-none\">\r\n            <input type=\"text\" class=\"form-control search-input container-xxl border-0\" placeholder=\"Search...\"\r\n              aria-label=\"Search...\" />\r\n            <i class=\"ti ti-x ti-sm search-toggler cursor-pointer\"></i>\r\n          </div>\r\n        </nav>\r\n\r\n        <!-- / Navbar -->\r\n\r\n        <!-- Content wrapper -->\r\n        <div class=\"content-wrapper\">\r\n          <!-- Content -->\r\n\r\n          <div class=\"container-xxl flex-grow-1 container-p-y\">\r\n            <div class=\"row\">\r\n              <!-- Website Analytics -->\r\n              <!-- Sales Overview -->\r\n              <div class=\"col-lg-12 col-sm-12 mb-4 \">\r\n                <div class=\"card hidden\" id=\"tableTest\">\r\n                  <h5 class=\"card-header\">Templates</h5>\r\n                  <div class=\"table-responsive text-nowrap\" id=\"Table1\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th>Name</th>\r\n                          <th>Action</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody class=\"table-border-bottom-0\">\r\n                        <tr class=\"\">\r\n                          <td> <strong>Note 3 Other operating expense</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n                        <tr class=\"\">\r\n                          <td> <strong>Note 8 Intangible fixed assets</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n                        <tr class=\"\">\r\n                          <td> <strong>5 Consolidated balance sheet</strong> </td>\r\n                          <td>\r\n                            <button type=\"button\" class=\"btn btn-primary waves-light\">Load</button>\r\n                          </td>\r\n                        </tr>\r\n\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!--/ Sales Overview -->\r\n\r\n              <!-- <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">Note 3 Other operating expense</h5>\r\n                       <br>\r\n                       <a href=\"javascript:;\" class=\"btn btn-primary\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\">View</a>\r\n                        \r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">Note 8 Intangible fixed assets</h5>\r\n                       <br>\r\n                       <a href=\"javascript:;\" class=\"btn btn-primary\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\">View</a>\r\n                        \r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xl-4 mb-4 col-lg-5 col-12\">\r\n                <div class=\"card\">\r\n                  <div class=\"d-flex align-items-end row\">\r\n                    <div class=\"col-12\">\r\n                      <div class=\"card-body text-nowrap\">\r\n                        <h5 class=\"card-title mb-0\">5 Consolidated balance sheet</h5>\r\n                       <br>\r\n                       <a href=\"javascript:;\" class=\"btn btn-primary\">Load</a>\r\n                        <a href=\"javascript:;\" class=\"btn btn-primary\">View</a>\r\n                        \r\n                      </div>\r\n                    </div>\r\n                    \r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n              <!--/ Projects table -->\r\n            </div>\r\n          </div>\r\n          <!-- / Content -->\r\n\r\n          <!-- Footer -->\r\n          <footer class=\"content-footer footer bg-footer-theme\">\r\n            <div class=\"container-xxl\">\r\n              <div\r\n                class=\"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column\">\r\n                <div>\r\n                  ©\r\n                  <" + "script>\r\n                    document.write(new Date().getFullYear());\r\n                  <" + "/script>\r\n                  , <a href=\"https://www.aaro.com\" target=\"_blank\" class=\"fw-semibold\">AARO\r\n                    SYSTEMS</a>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </footer>\r\n          <!-- / Footer -->\r\n\r\n          <div class=\"content-backdrop fade\"></div>\r\n        </div>\r\n        <!-- Content wrapper -->\r\n      </div>\r\n      <!-- / Layout page -->\r\n    </div>\r\n\r\n    <!-- Overlay -->\r\n    <div class=\"layout-overlay layout-menu-toggle\"></div>\r\n\r\n    <!-- Drag Target Area To SlideIn Menu On Small Screens -->\r\n    <div class=\"drag-target\"></div>\r\n  </div>\r\n\r\n  <!--/ Layout wrapper -->\r\n  <!-- <" + "script>\r\n\r\n    const form = document.getElementById('uploadForm');\r\n    const fileInput = document.getElementById('bs-validation-upload-file');\r\n\r\n    form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    \r\n    const file = fileInput.files[0];\r\n    const reader = new FileReader();\r\n\r\n    reader.addEventListener('load', () => {\r\n        const data = JSON.parse(reader.result);\r\n        const data = JSON.parse(reader.result);\r\n    const translatedData = await translateClient.translate(data, '<target-language-code>');\r\n\r\n    Office.context.document.setSelectedDataAsync(translatedData, {\r\n      coercionType: Office.CoercionType.Text,\r\n        console.log(data);\r\n    });\r\n\r\n    reader.readAsText(file);\r\n    });\r\n\r\n       \r\n\r\n<" + "/script> -->\r\n  <!-- Core JS -->\r\n  <!-- build:js ./../../assets/vendor/js/core.js -->\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\"><" + "/script>\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\"><" + "/script>\r\n\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\"><" + "/script>\r\n\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\"><" + "/script>\r\n  <!-- endbuild -->\r\n\r\n  <!-- Vendors JS -->\r\n  <!-- <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/FormValidation.min.js\"><" + "/script> -->\r\n  <!-- <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/plugins/Bootstrap5.min.js\"><" + "/script>\r\n    <" + "script src=\"./../../assets/vendor/libs/formvalidation/dist/js/plugins/AutoFocus.min.js\"><" + "/script> -->\r\n\r\n  <!-- Main JS -->\r\n  <" + "script type=\"text/javascript\" src=\"" + ___HTML_LOADER_REPLACEMENT_23___ + "\"><" + "/script>\r\n\r\n  <!-- Page JS -->\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_24___ + "\"><" + "/script>\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);
}();
/******/ })()
;
//# sourceMappingURL=uploads.js.map
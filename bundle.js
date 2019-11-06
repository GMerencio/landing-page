/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);", ""]);
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../font/fontello.eot?66750031 */ "./src/font/fontello.eot?66750031"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../font/fontello.eot?66750031 */ "./src/font/fontello.eot?66750031") + "#iefix");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../font/fontello.woff2?66750031 */ "./src/font/fontello.woff2?66750031"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../font/fontello.woff?66750031 */ "./src/font/fontello.woff?66750031"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../font/fontello.ttf?66750031 */ "./src/font/fontello.ttf?66750031"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../font/fontello.svg?66750031 */ "./src/font/fontello.svg?66750031") + "#fontello");
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/**\r\n * CONTENTS\r\n *\r\n * GLOBAL\r\n * Config...............Configuration variables.\r\n * Mixins...............Useful mixins.\r\n * Colors...............Color variables.\r\n * Typography...........Typography-related variables.\r\n * Breakpoints..........Breakpoint values.\r\n *\r\n * GENERIC\r\n * Box-sizing...........Adjust default box-sizing.\r\n *\r\n * BASE\r\n * Document.............Base HTML style.\r\n * Body.................Base body style.\r\n * Headings.............H1-H6 base styles.\r\n *\r\n * COMPONENTS\r\n * Buttons..............Button elements.\r\n * Icons................Icons used throughout the site.\r\n */\n/*------------------------------------*\\\r\n  #Config\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Mixins\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Colors\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Typography\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Breakpoints\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Box-sizing\r\n\\*------------------------------------*/\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/*------------------------------------*\\\r\n  #Document\r\n\\*------------------------------------*/\nhtml {\n  font-size: 1.11111vw; }\n\n/*------------------------------------*\\\r\n  #Body\r\n\\*------------------------------------*/\nbody {\n  font-family: \"Open Sans\", sans-serif; }\n\n/*------------------------------------*\\\r\n  #Headings\r\n\\*------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0; }\n\n/*------------------------------------*\\\r\n  #Buttons\r\n\\*------------------------------------*/\n/*------------------------------------*\\\r\n  #Icons\r\n\\*------------------------------------*/\n@font-face {\n  font-family: 'fontello';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */\n/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */\n/*\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: 'fontello';\n    src: url('../font/fontello.svg?66750031#fontello') format('svg');\n  }\n}\n*/\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-style: normal;\n  font-weight: normal;\n  speak: none;\n  display: inline-block;\n  text-decoration: inherit;\n  width: 1em;\n  margin-right: .2em;\n  text-align: center;\n  /* opacity: .8; */\n  /* For safety - reset parent styles, that can break glyph codes*/\n  font-variant: normal;\n  text-transform: none;\n  /* fix buttons height, for twitter bootstrap */\n  line-height: 1em;\n  /* Animation center compensation - margins should be symmetric */\n  /* remove if not needed */\n  margin-left: .2em;\n  /* you can be more comfortable with increased icons size */\n  /* font-size: 120%; */\n  /* Font smoothing. That was taken from TWBS */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  /* Uncomment for 3D effect */\n  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */ }\n\n.icon-check:before {\n  content: '\\e800'; }\n\n/* '' */\n.icon-star:before {\n  content: '\\e801'; }\n\n/* '' */\n.icon-user:before {\n  content: '\\e802'; }\n\n/* '' */\n.icon-crown-2:before {\n  content: '\\e803'; }\n\n/* '' */\n.icon-crown-startup:before {\n  content: '\\e804'; }\n\n/* '' */\n.icon-crown-basic:before {\n  content: '\\e805'; }\n\n/* '' */\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!../postcss-loader/src!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/font/fontello.eot?66750031":
/*!****************************************!*\
  !*** ./src/font/fontello.eot?66750031 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "./src/font/fontello.svg?66750031":
/*!****************************************!*\
  !*** ./src/font/fontello.svg?66750031 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img/fontello.svg";

/***/ }),

/***/ "./src/font/fontello.ttf?66750031":
/*!****************************************!*\
  !*** ./src/font/fontello.ttf?66750031 ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "./src/font/fontello.woff2?66750031":
/*!******************************************!*\
  !*** ./src/font/fontello.woff2?66750031 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAA0QAA8AAAAAGXgAAAy4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGVgCDNgggCZZwEQgKjBiKUAsQAAE2AiQDHAQgBYVNB2UMgQYblRejomoUIPvLA27IgDfUnlEbIWFEvKFpEGHvdH6D8HWcvBr12y3/osYxIny0NrV52fw+ndWv6m6JbQ+xBog1jKtle4kpPqAQMYQgQ/C9/GIPfaffTKGozBbcVERYUKn2nZM7l0Rw/oLE89Xt/Vk4CJtJPVyQ41ASWAuxVIP0h/7RllJRJqzmKd9AugAZNqSjhM2Rgto720Wdot6uGl3YzKkdc+vkDD1B/QtARWG2kzDSBgCEKe8/v/atnnd3hj/g0zCbiIVokRhGP/++dZWQkLYh/V1UkkmythGoNEqhNUonZSqbeF06dHw6k7uH9FuCAFho0IeHR6eXEdoXO3YA2SQAACBAbUj7du+MwaC5kJAgjAgNeaD4PY8ogM/w54B7zWr0m8Yw6FCit1LT+T2yDf4vbnjmYoJ1tYQXKrHihBA1kPG0CeUAkUT3EbDCpbmUkB1XiUSdYMfWv7jz3/f0lwfSUNriYFtAaqxyiwYIiGtgNa5BqHENUo1rUGp8ZmgQllnOqaUE8o0qEpgK0NIwS2/+gbjwBu33KdFypaIsF+pWEqztf6M1QjW1ifMesICPDWaAYIkBAp6/CDB0Jr7eR7pPs4q2xeF0ePg5efOuC8T8fvL42YmOdllHmVUtZLdnVAx6faYZNcgGW/i6ii7U3Wk7sLgMSQ+XVpva0LYBSs7ZQZazgch0nnNAQEMhtT0TivsJJRFNovM+Qz4gYd68zqqKUZobsF1Pgrycjcg99lGozvu/PW+1oV+KdAep7Lv2MCfLXvhHCTKXIC/UGwUU0Lk5g0i2QAvo8OwmQIktHC+gCvKoPKBDEVzD5vSfbEUB2tov+QKqygBuZ2CmT1scxg2f0TC7Z3yY5cPDyQz4ILVo2BUHnTEpBmqMrMS74rPGFPPU2oH3Y7GdRlPigtAbD8dOzEea2ZNukbwznzd8wEXlTsG2dhAIAfISDl9zVqtEYsbtE9HCrR0IQ0Sy4476J1tVVxwIsaiLqmkawp4kgjfHqcp6kJdwG/sRSBrKO0hvjuRo52VKOY1kVJCGTgLhegsoRMKWE1PCGqujCLcJdDAhVJM142ojNXZ3FGRy7s2JvxvmzMCpsIpVMw7HuFUL6SGf+pJ7960Al2wAEbjPqN1WN0AK5obIyHEiLFFDbIlYAvmoAoXfkdU8FvjGLlqTB9Uc2XS3ciAVFQqbgTRUaiKdGBkkkEkSWaSQTRpySEcuGcgjMykfczDRFglRIDSFZxMUEqOIBIpJooQUSklDGekoJwMVZOZWQs20hKoahYhXP/jQPrtzyFM5Qf0y1aDKqMoDNZDGyuoca7dtOdV30yTnsxpZy/7WdKAmh/Z3EhZax5DeR+fWQw/jyA3ms6TwOBWyAHvFckD+hdKvM3hq27W+nbYRaIQajeOYBHzoTxRoQu9aE2i2lg1xavWrtaBy67CsnsaAEmF91d0Z29hapYnzGZI4a27T/vJGoBWAjFSkGgfH5OZ5VydS03UYoU1FrHq0REiJNl5ZRPeT8A/ST34teu4nu8XsHKMJg+qKba7SRgXJeaSsCLKleBBmOTME2zNq9US3jpdl4dKj/adqTUI6G7XbzjA4grXhhDBrES8N2FBZ2H51pS3KxxSkS02oRkDT4i6+uoSTkwPt6T9BEsolWbM9KqTjNAyJkkZ2QNyq1OlE3mPm7UBNPTXmHTxiiVDZHa1p37BXq1U3l3qdar2xImXSlV1Fm9F+7aoFz18o/nws6Yapx7Cgo8OkJvdqdTt1c5Sv56x9Xy8d9m5+7T7Qah627Adt1nmvZkKZresg1ZDsUW0t0p+6yHmTX5apEQ3f9iprYKsaykTHyfCPGE95dtTtZcrljW07P67jfY6fHMwIf9ppKN6bMINtJ1cMhynNmDEzzIOBS5jWmF/ISNHoVgXsiaaJzx7boqWB8VuBPDT1NOqKA4tiJrYmxWjkFNipFmy6CHiJIoSC0C0QiDCCCNcBbxFBQeQWCEQUQUTrgLuIoYC6BQJBIwi6DngKBgXMLRAIFkHE6oCPiKMgfgsEIoEgEnXAQyRRkLwFApFCsDDVdN4hi2VaT/S8ixSSLlyREQMuEG7IjHS0iSzFEdmKo8whTgG5PifkKU7IV5xQoDih0OeMIsUZxYozShTnBqWmS9JiIltF63ibzEtlzIvqRlavS9YxAxDQ/wkkUNoiCR5ABACKALAegD8psXpXNDJUdQb6h2UtbbK0qxxJmkTC20pLS4spQjUCG1Y3y3BGyZmtnVgXwmjjKmW0cJEqXKGI1tKkyFY/CZUFah4m06nNnE6IIXH0VogZpDG6uCq0lJGiJp4MniOAmFB4dGfH5zK4/AM+PxYxxSiBkHtu9pTakhAdFDhfUgX0y8BhQzi2B7FHzj1oRw9M6isB3sgfKXCdp93Pt+owWt4HHdzgSNy7I4gdxo4sgJdnOm0qcyQUohhco1/QMDigzaPyImVE94R07kTTOGcSm6Ku8d1EZB7pAvogBYNC6pQdBvv5fC+ZSfNDgbCGyNnF9nAk7k7TNjvYFkbj5zIcATrVZ/JaPy/v0ngK4tUP9Pg00ITdG0xBKGSMHdGxqUAiUlubkoOyIAmsCQnoE3wc11pOCxfhw3omPCq7dVSRSm/l1J5oeLhdidUygiNxx5C4tk4mMZbWogYYgJHnDxs8AFtCv1PAI/ZYX0YZqSzD2+dbg48IOpUKmS/1iX+kvm8fn/f1P6I4y32J/+7i2IKMx+15rv713J/PrZIXZMQkLciXxx/jlT5BDOr/HdVerftXDPKL3YWvqx/D6kMr8k9ztZSOQWhdwv3AgMugAGMvvQS1GEna63tMdv1yTb3oHNY4BZ9j6zkmJ4j/fZWIShlE00y8iFoR3kia8MOBwHaCuh4ajOqpE9oDBz4UpnkjWhFeRBM/w2gpUe2ST/9Web0GqOpb6D46oIrqz5lz6jsMcWopezoPuf4WzxOedQDt88moYjDwGC7mjXipRZg1TlZGarTs4XchkyavcL1ZlZONZqNNoypi3uGPgNVX60zY7wA6CM8snvfP7c40ValTSrIs1dlXr3KsUq8/R5L7swnDqvAqQ70u5ibFgeY3vBWRFZkVsTXcqe6AXjG69Ax71zZEB39TnHZgMPHAaagGmMQkVX8bfKZD8tMswze5mUmqO+0I5+HnaHtV31ufkJyo56nYeB6kbhhUzFDwsZS3VPBRooIMC092Ls828GW7DZpWpg7zs84+29GdOf8M7tCcopXp/M7nLhGEEoKHS+sOzpmPAoeSyr6wleaa3Q/KZ9Y0r/SHGZ5iGqiWSP5XS8ph9W8t7gZE/DvyPZBgQbwfDMHYCzhACEdMpKZkF0uVWe1byWFLCgWmsam3s+cD3yEC4xBmhydyfAsMPkgE7OgP8lIzhMqo9ougSB0URJIOQrI8aIHB/zefGUlJGU2ayq72N5zYtXaiOC83KWJZrGrJZB6DkiwV79c1IRimwWbUIikRAJxxmwyDAhC5NHH96sYNd29dfXD9wflze3bHohu2bdwWrBkZbmvOSHdUarV/KtXliJatM+nbVzlM9WXshOSYTXqEIjrtlwSLtAi0KExElhmJCqIkCocoHEUIjhtyNiWTC+WqDTAMDsDsGBNzc1tjmzasC5aX5hbnFhfmZ6YnxoeHUlOyu9JL08qSU1RetV9aXpRnSsWgMYBxEBPxIpgpADFNp3enC5VRDQJAwFt7pWNzuOd/AyfiAHz/z0E2yUuckG91YIAB285RrmSoXBO8AkIpRRdxaAGIl4C/y2l/1bTriMd0PKQ/gFGmzVHAveMQShnJfvFPQ6vXNQgGWg2Gjl4WmDrMEtRpQ8HGMmugbjYsVNv5cBspnhAgaQLY43UwCJGEDUaICliAWssS1F5DIT0zrIG61bCwmqOX2SjLt/8unjJU6X3l76UD8N6JaOlf+m2fjLAP0vrBezi7X/Y3vfOyGY11DYPdLrSrefTEzqZjx3acXQ0fNfW/fcc7p9UtrA+GIQcdctoRu+20yzGeCkMqeZo0aNTJswXSPQdt3H+3A2L28cQcd8wulI8S9gnvoHwA4e0c7+uuvs5WB+3HeJEk73ScrBhzxKTn/tRV2/0P3Y2t3tOoToMNMRZ6wFZoDIncFu/ko06I3ET0Y3ak7nAkRit5Rmmq5xDOe4Z4KxZaxxA+piV1qS/3LW1xDOUiLNxfJyZBkhRppJMBdQBdyoP/Uh4pD9f/rjqttslt2ljeseOHbNE57v5AAFMfvlkM3iF60G/TflHO8w7UlnEMqlpl71lMhrA1hOba4Kf8NYJJoW+DH1xgeEro1h287d8KKLZRWZVPjUtIDqZsXQ6MuUv3fs9hcqo+psT1t+X9YQwDAAM="

/***/ }),

/***/ "./src/font/fontello.woff?66750031":
/*!*****************************************!*\
  !*** ./src/font/fontello.woff?66750031 ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,d09GRgABAAAAAA/cAA8AAAAAGXgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABWAAAADsAAABUIIslek9TLzIAAAGUAAAAQwAAAFY+IEl2Y21hcAAAAdgAAABeAAABtsit7NdjdnQgAAACOAAAABMAAAAgBtf/BGZwZ20AAAJMAAAFkAAAC3CKkZBZZ2FzcAAAB9wAAAAIAAAACAAAABBnbHlmAAAH5AAABRYAAAYWRsHJ0WhlYWQAAAz8AAAAMwAAADYX08ZyaGhlYQAADTAAAAAgAAAAJAg8BIxobXR4AAANUAAAABwAAAAcGyb//mxvY2EAAA1sAAAAEAAAABAD1gV/bWF4cAAADXwAAAAgAAAAIAE0DDduYW1lAAANnAAAAXcAAALNzJ0fIXBvc3QAAA8UAAAASQAAAGWQa1DqcHJlcAAAD2AAAAB6AAAAhuVBK7x4nGNgZGBg4GIwYLBjYHJx8wlh4MtJLMljkGJgYYAAkDwymzEnMz2RgQPGA8qxgGkOIGaDiAIAJjsFSAB4nGNgZH7IOIGBlYGBqYppDwMDQw+EZnzAYMjIBBRlYGVmwAoC0lxTGBxeMLxgZQ76n8UQxRzMMA0ozAiSAwAIkgwUAHic7ZHBDcAwCAMvDcmj6igdKK/OzxapoYxRpLNkC/EwwAC6uIVBe2jELKUt886ZudWORe5jbymh8pZ6aNd0ccpM/rlSV7kZfX1kg4Vaw4v4hBfRqRfxJS+YL0u0EzUAAHicY2BAAxIQyBz8PwuEARJ2A98AeJytVml300YUHXlJnIQsJQstamHExGmwRiZswYAJQbJjIF2crZWgixQ76b7xid/gX/Nk2nPoN35a7xsvJJC053Cak6N3583VzNtlElqS2AvrkZSbL8XU1iaN7DwJ6YZNy1F8KDt7IWWKyd8FURCtltq3HYdERCJQta6wRBD7HlmaZHzoUUbLtqRXTcotPekuW+NBvVXffho6yrE7oaRmM3RoPbIlVRhVokimPVLSpmWo+itJK7y/wsxXzVDCiE4iabwZxtBI3htntMpoNbbjKIpsstwoUiSa4UEUeZTVEufkigkMygfNkPLKpxHlw/yIrNijnFawS7bT/L4vead3OT+xX29RtuRAH8iO7ODsdCVfhFtbYdy0k+0oVBF213dCbNnsVP9mj/KaRgO3KzK90IxgqXyFECs/ocz+IVktnE/5kkejWrKRE0HrZU7sSz6B1uOIKXHNGFnQ3dEJEdT9kjMM9pg+Hvzx3imWCxMCeBzLekclnAgTKWFzNEnaMHJgJWWLKqn1rpg45XVaxFvCfu3a0ZfOaONQd2I8Ww8dWzlRyfFoUqeZTJ3aSc2jKQ2ilHQmeMyvAyg/oklebWM1iZVH0zhmxoREIgIt3EtTQSw7saQpBM2jGb25G6a5di1apMkD9dyj9/TmVri501PaDvSzRn9Wp2I62AvT6WnkL/Fp2uUiRen66Rl+TOJB1gIykS02w5SDB2/9DtLL15YchdcG2O7t8yuofdZE8KQB+xvQHk/VKQlMhZhViFZAYq1rWZbJ1awWqcjUd0OaVr6s0wSKchwXx76Mcf1fMzOWmBK+34nTsyMuPXPtSwjTHHybdT2a16nFcgFxZnlOp1mW7+s0x/IDneZZntfpCEtbp6MsP9RpgeVHOh1jeUELmnTfwZCLMOQCDpAwhKUDQ1hegiEsFQxhuQhDWBZhCMslGMLyYxjCchmGsLysZdXUU0nj2plYBmxCYGKOHrnMReVqKrlUQrtoVGpDnhJulVQUz6p/ZaBePPKGObAWSJfIml8xzpWPRuX41hUtbxo7V8Cx6m8fjvY58VLWi4U/Bf/V1lQlvWLNw5Or8BuGnmwnqjapeHRNl89VPbr+X1RUWAv0G0iFWCjKsmxwZyKEjzqdhmqglUPMbMw8tOt1y5qfw/03MUIWUP34NxQaC9yDTllJWe3grNXX27LcO4NyOBMsSTE38/pW+CIjs9J+kVnKno98HnAFjEpl2GoDrRW82ScxD5neJM8EcVtRNkja2M4EiQ0c84B5850EJmHqqg3kTuGGDfgFYW7BeSdconqjLIfuRezzKKT8W6fiRPaoaIzAs9kbYa/vQspvcQwkNPmlfgxUFaGpGDUV0DRSbqgGX8bZum1Cxg70Iyp2w7Ks4sPHFveVkm0ZhHykiNWjo5/WXqJOqtx+ZhSX752+BcEgNTF/e990cZDKu1rJMkdtA1O3GpVT15pD41WH6uZR9b3j7BM5a5puuiceel/TqtvBxVwssPZtDtJSJhfU9WGFDaLLxaVQ6mU0Se+4BxgWGNDvUIqN/6v62HyeK1WF0XEk307Ut9HnYAz8D9h/R/UD0Pdj6HINLs/3mhOfbvThbJmuohfrp+g3MGutuVm6BtzQdAPiIUetjrjKDXynBnF6pLkc6SHgY90V4gHAJoDF4BPdtYzmUwCj+Yw5PsDnzGHQZA6DLeYw2GbOGsAOcxjsMofBHnMYfMGcdYAvmcMgZA6DiDkMnjAnAHjKHAZfMYfB18xh8A1z7gN8yxwGMXMYJMxhsK/p1jDMLV7QXaC2QVWgA1NPWNzD4lBTZcj+jheG/b1BzP7BIKb+qOn2kPoTLwz1Z4OY+otBTP1V050h9TdeGOrvBjH1D4OY+ky/GMtlBr+MfJcKB5RdbD7n74n3D9vFQLkAAQAB//8AD3icVVTdb9NWFL/n+jOOY8eJP0LqpI1DbNNASePWDm1Js36nsLa0qDNbYe3GGCtiHSBt01YKWumEhMT2ME2T9gJ72wcSSNvr6B6QRre3STwgxB6B/QmDht20AmnS9fU5x0fn/HzO7xwECD3/kn5CzaAsytfaEFCYAnwaYURhdAoh9D6iKJGqq8l0nmZSRegENm/ZDnRAl98PftkAvRyA55dbQVc5+v6zp3JSTNCNFY7nuUHZkUDikxy+zEiONCRJ+LdnD2Weg2usKqssMTQechy+JklDUVsi6Zp4NqjrVA21ou6akJAFmmIQhtEDN9NTYU0EINA+QBiLuN5SE4iCl4gNnTjyS0Y1KMYogipDUlMl2Asca9ndXUHSad6FoImR0anr8kZJ1MSn/4q6CKU/pFZIrUTbxPOQaoMnonyn8USMxoG7dIlLCDQPxh1Z1Bi3YRgNlyAh+G7hDUpEGqlYoWYhBpglCoCGJURjemkLEfmRE0lDUYwyy6SLBZXN55pIqpRBilXOUpTKWh3gZwFvjHQ2dnaOCKn26p76xnj7gG3yXyz//An92U+XhvvCsK90eLbPhbExu3p4FtbDlZWbF/EyQhzBsUg9oqZRLzqI3kDH0Tn0GbqK3qzNfXjySD2fMZW4IGBmD0QwHkUMgcbg0xxLkbZGeByZF4CmUUiAimNR4HkIEUAM6murR+euXF69unb1/PLiewvzc8ePHg9fGx7yPUMXGbVY8IMqOB3g2JxNHpbrrkJ3l22xmqob2rbJ5iRSet3QDQk0NQterrzlRGVB01nikK9ip9TpO7pR6tS5LYtCopZ1Uha7y+d83VDyJJZjB8SN84kbmwWDmEjRINf0ITGJN/W5Em/NAbi2N9A2GFSzLemcN+7l0i3ZajDYNuAVdgHkWuOK1W71WHjd6rWKe1NpMM1kdrFQkoT2W54mMUzK9C64h74WFSWlKD/mDrkXPDPFMJL2baZdkEqFxbSRT+sUt1kzXdfE6+Q+qpv+2a59M7opT6XUVCwxFukwC55XMDsiY4kYMU3Jpj6zr+usb+pSv0NSk2PX4IrU4+5+q2RZwdpqT2QhecDrHxyYqsIPTna9mT6l/ClmncZsdWpgsN87cEwRelbXgoyz//z85t9uxSUHbfUfIeox6b+H+tAwmkDT6AR6F31a+1iN4Tib5jBw78xiGfbaWJTo0ShwcYhzcJoGJAAbR+w8iqA4F4nPE/YqIEsgzyMJiTFJPJaAGGJizBzieRw2h42vT06+vXBs7vXw8Mzk9OT0oalXD9bHhgbJWujRC5qdSDKZImzzgHS9uSH8pvZSeckRwhJVJ93z98MWlbr87bYXXgjMCyHZndOCnO0QApX9gAzOtsBy1OPKRCWt9+WD2agZTAVmdDaw9utpIhbbtIoi4hVRqWhtxVUtq5HTOPX/9zd4QNr8ztYy4279jEonaPVM3R3PJF38vVupuAVzR8tItzlZqUya3SNmyiw0rZbH3QhDwhAxDG9wniXrOgl2RG4G1Hq3tcY521545eKOTDgEMBRmdiwPN9uEnzeeN6h/8K8ojRzk1gqOlYmQcUQwSj4isjIA8DQpc3MIMRzUe/WtRdYBMpkzq3lJ2EhuDZIfJH2bypFFQravkYV+oO7zRvTe7+LO6N17gpHg6K9oLYbPxFQicH9t3j17TUzzt2/zafE63s1RzMlHkvToJIPjRrSREuNxER5HjcYu+GiCZYQHDwSGnfgPh1kN5wAAeJxjYGRgYADiHWkhX+L5bb4ycDO/AIow3Hx2MANG///3P4vlJXMwkMvBwAQSBQCmVg+BAHicY2BkYGAO+p/FwMAq8//f/38sLxmAIiiAHQCi5AbQA+gAAAUcAAADoAAAAsoAAAPoAAAD6AAAA+j//gAAAAAASACYANwB3AKyAwsAAQAAAAcAjwAHAAAAAAACACYANgBzAAAAjAtwAAAAAHicdZDLTsJAFIb/kYsKiRpN3DorAzGWS+ICEhISDGx0QwxbU0ppS0qHTAcSXsN38GF8CZ/Fn3YwBmKb6XznmzNnTgfANb4hkD9PHDkLnDHK+QSn6Fku0D9bLpJfLJdQxZvlMv275QoeEFiu4gYfrCCK54wW+LQscCUuLZ/gQtxZLtA/Wi6Se5ZLuBWvlsv0nuUKJiK1XMW9+Bqo1VZHQWhkbVCX7WarI6dbqaiixI2luzah0qnsy7lKjB/HyvHUcs9jP1jHrt6H+3ni6zRSiWw5zb0a+YmvXePPdtXTTdA2Zi7nWi3l0GbIlVYL3zNOaMyq22j8PQ8DKKywhUbEqwphIFGjrXNuo4kWOqQpMyQz86wICVzENC7W3BFmKynjPsecUULrMyMmO/D4XR75MSng/phV9NHqYTwh7c6IMi/Zl8PuDrNGpCTLdDM7++09xYantWkNd+261FlXEsODGpL3sVtb0Hj0TnYrhraLBt9//u8H7HiEVQB4nGNgYoAALgbsgJ2RiZGZkYWRlZGNkZ2Rg4E1OSM1OZuluCSxiKW0OLWIPbkovzxP14gXQoPES0oLuCG8pMTizGQGBgDr8xIqAAAAeJxj8N7BcCIoYiMjY1/kBsadHAwcDMkFGxlYnTYxMDJogRibuZgYOSAsPgYwi81pF9MBoDQnkM3utIvBAcJmZnDZqMLYERixwaEjYiNzistGNRBvF0cDAyOLQ0dySARISSQQbOZhYuTR2sH4v3UDS+9GJgYXAAx2I/QAAA=="

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Smoothly scrolls to the anchor specified by the link to which this listener
 * is attached.
 */

let scrollToAnchor = function(e) {
  e.preventDefault();

  document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
}

window.onload = function() {
  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', scrollToAnchor);
  });
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/M2Y3MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc21vb3Roc2Nyb2xsLXBvbHlmaWxsL2Rpc3Qvc21vb3Roc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9mb250ZWxsby5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQvZm9udGVsbG8uc3ZnIiwid2VicGFjazovLy8uL3NyYy9mb250L2ZvbnRlbGxvLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9mb250ZWxsby53b2ZmMiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9mb250ZWxsby53b2ZmIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NTVjZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0ZBQW1DO0FBQ3RFO0FBQ0EsY0FBYyxRQUFTLDBUQUEwVCxzQkFBc0IsOENBQThDLGFBQWEsMEpBQTBKLGNBQWMsRUFBRSxzRUFBc0UsbUJBQW1CLEVBQUUsb0pBQW9KLG1CQUFtQixxQkFBcUIsRUFBRSxnTkFBZ04sNEJBQTRCLHlCQUF5QixpQ0FBaUMsYUFBYSxxSkFBcUosc0NBQXNDLDhCQUE4QixhQUFhLHFMQUFxTCxrQ0FBa0MsRUFBRSx3SkFBd0osd0JBQXdCLDBDQUEwQyx5REFBeUQsOENBQThDLGFBQWEsdUZBQXVGLHdCQUF3QixFQUFFLG1LQUFtSyxzQ0FBc0MsOEJBQThCLGFBQWEsb0VBQW9FLG1CQUFtQixFQUFFLGtIQUFrSCxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsRUFBRSxTQUFTLG9CQUFvQixFQUFFLFNBQVMsZ0JBQWdCLEVBQUUsaUxBQWlMLHVCQUF1QixFQUFFLHdQQUF3UCx5QkFBeUIsK0JBQStCLGlDQUFpQyx5QkFBeUIsYUFBYSw2RkFBNkYsaUNBQWlDLEVBQUUsa0tBQWtLLG9DQUFvQyxFQUFFLHVKQUF1SiwrQkFBK0IsRUFBRSw2TUFBNk0sdUJBQXVCLGVBQWUsRUFBRSxzTUFBc00sbUNBQW1DLEVBQUUsNERBQTRELG1DQUFtQyxFQUFFLHNRQUFzUSwyQkFBMkIsOEJBQThCLDhCQUE4QiwrQkFBK0IsMEJBQTBCLG1DQUFtQyxhQUFhLDhGQUE4Riw2QkFBNkIsRUFBRSw2RUFBNkUsbUJBQW1CLEVBQUUsc0lBQXNJLDJCQUEyQiwwQkFBMEIsYUFBYSxzTEFBc0wsaUJBQWlCLEVBQUUscUlBQXFJLGtDQUFrQyxvQ0FBb0MsYUFBYSx3SEFBd0gsNkJBQTZCLEVBQUUsMktBQTJLLCtCQUErQiw2QkFBNkIsYUFBYSxrTEFBa0wsbUJBQW1CLEVBQUUsbUVBQW1FLHVCQUF1QixFQUFFLDBKQUEwSixrQkFBa0IsRUFBRSw4REFBOEQsa0JBQWtCLEVBQUU7Ozs7Ozs7Ozs7OztBQ0Z6Nk0sMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLCtFQUErRTtBQUN0RyxhQUFhLG1CQUFPLENBQUMsOEdBQXNEO0FBQzNFLHNDQUFzQyxtQkFBTyxDQUFDLHVFQUErQjtBQUM3RSxzQ0FBc0MsbUJBQU8sQ0FBQyx1RUFBK0I7QUFDN0Usc0NBQXNDLG1CQUFPLENBQUMsMkVBQWlDO0FBQy9FLHNDQUFzQyxtQkFBTyxDQUFDLHlFQUFnQztBQUM5RSxzQ0FBc0MsbUJBQU8sQ0FBQyx1RUFBK0I7QUFDN0Usc0NBQXNDLG1CQUFPLENBQUMsdUVBQStCO0FBQzdFO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixpdkNBQWl2QywyQkFBMkIsRUFBRSwwQkFBMEIsd0JBQXdCLEVBQUUsaUhBQWlILHlCQUF5QixFQUFFLDZHQUE2RywyQ0FBMkMsRUFBRSxtSUFBbUksY0FBYyxFQUFFLDBOQUEwTiw0QkFBNEIsK0NBQStDLGlUQUFpVCx3QkFBd0IsdUJBQXVCLEVBQUUsK1BBQStQLGdCQUFnQiw4QkFBOEIsdUVBQXVFLEtBQUssR0FBRyw2REFBNkQsOEJBQThCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLDBCQUEwQiw2QkFBNkIsZUFBZSx1QkFBdUIsdUJBQXVCLG1CQUFtQixpR0FBaUcseUJBQXlCLHdFQUF3RSx5SEFBeUgsc0ZBQXNGLDZGQUE2Rix1Q0FBdUMsMEZBQTBGLEtBQUssd0JBQXdCLHNCQUFzQixFQUFFLGtDQUFrQyxzQkFBc0IsRUFBRSxrQ0FBa0Msc0JBQXNCLEVBQUUscUNBQXFDLHNCQUFzQixFQUFFLDJDQUEyQyxzQkFBc0IsRUFBRSx5Q0FBeUMsc0JBQXNCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNYeGhJOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMscUJBQXFCO0FBQ2hFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6RmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDdkJBLGNBQWMsbUJBQU8sQ0FBQyx1UUFBdUc7O0FBRTdIO0FBQ0EsY0FBYyxRQUFTO0FBQ3ZCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNJQUEyRDs7QUFFaEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUJBQXVCO0FBQzNDOztBQUVBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUN6UkEscURBQXFELGd1Ujs7Ozs7Ozs7Ozs7QUNBckQsb0M7Ozs7Ozs7Ozs7O0FDQUEsZ0NBQWdDLGdnUjs7Ozs7Ozs7Ozs7QUNBaEMsa0NBQWtDLG8zSTs7Ozs7Ozs7Ozs7QUNBbEMsaUNBQWlDLGd6Szs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlEO0FBQzFCO0FBQ007O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsNERBQVk7O0FBRWQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxFOzs7Ozs7Ozs7OztBQ3ZCQSxjQUFjLG1CQUFPLENBQUMsNlJBQW1KOztBQUV6SztBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwOyB9XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDEgKi9cXG4gIGhlaWdodDogMDtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCIsIFwiXCJdKTtcbnZhciBnZXRVcmwgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnQvZm9udGVsbG8uZW90PzY2NzUwMDMxXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnQvZm9udGVsbG8uZW90PzY2NzUwMDMxXCIpICsgXCIjaWVmaXhcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250L2ZvbnRlbGxvLndvZmYyPzY2NzUwMDMxXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSBnZXRVcmwocmVxdWlyZShcIi4uL2ZvbnQvZm9udGVsbG8ud29mZj82Njc1MDAzMVwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250L2ZvbnRlbGxvLnR0Zj82Njc1MDAzMVwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX181X19fID0gZ2V0VXJsKHJlcXVpcmUoXCIuLi9mb250L2ZvbnRlbGxvLnN2Zz82Njc1MDAzMVwiKSArIFwiI2ZvbnRlbGxvXCIpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi8qKlxcclxcbiAqIENPTlRFTlRTXFxyXFxuICpcXHJcXG4gKiBHTE9CQUxcXHJcXG4gKiBDb25maWcuLi4uLi4uLi4uLi4uLi5Db25maWd1cmF0aW9uIHZhcmlhYmxlcy5cXHJcXG4gKiBNaXhpbnMuLi4uLi4uLi4uLi4uLi5Vc2VmdWwgbWl4aW5zLlxcclxcbiAqIENvbG9ycy4uLi4uLi4uLi4uLi4uLkNvbG9yIHZhcmlhYmxlcy5cXHJcXG4gKiBUeXBvZ3JhcGh5Li4uLi4uLi4uLi5UeXBvZ3JhcGh5LXJlbGF0ZWQgdmFyaWFibGVzLlxcclxcbiAqIEJyZWFrcG9pbnRzLi4uLi4uLi4uLkJyZWFrcG9pbnQgdmFsdWVzLlxcclxcbiAqXFxyXFxuICogR0VORVJJQ1xcclxcbiAqIEJveC1zaXppbmcuLi4uLi4uLi4uLkFkanVzdCBkZWZhdWx0IGJveC1zaXppbmcuXFxyXFxuICpcXHJcXG4gKiBCQVNFXFxyXFxuICogRG9jdW1lbnQuLi4uLi4uLi4uLi4uQmFzZSBIVE1MIHN0eWxlLlxcclxcbiAqIEJvZHkuLi4uLi4uLi4uLi4uLi4uLkJhc2UgYm9keSBzdHlsZS5cXHJcXG4gKiBIZWFkaW5ncy4uLi4uLi4uLi4uLi5IMS1INiBiYXNlIHN0eWxlcy5cXHJcXG4gKlxcclxcbiAqIENPTVBPTkVOVFNcXHJcXG4gKiBCdXR0b25zLi4uLi4uLi4uLi4uLi5CdXR0b24gZWxlbWVudHMuXFxyXFxuICogSWNvbnMuLi4uLi4uLi4uLi4uLi4uSWNvbnMgdXNlZCB0aHJvdWdob3V0IHRoZSBzaXRlLlxcclxcbiAqL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNDb25maWdcXHJcXG5cXFxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI01peGluc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQ29sb3JzXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNUeXBvZ3JhcGh5XFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNCcmVha3BvaW50c1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQm94LXNpemluZ1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcXFxcclxcbiAgI0RvY3VtZW50XFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxLjExMTExdnc7IH1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxcXFxyXFxuICAjQm9keVxcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNIZWFkaW5nc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNCdXR0b25zXFxyXFxuXFxcXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXFxcXHJcXG4gICNJY29uc1xcclxcblxcXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZm9udGVsbG8nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX181X19fICsgXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuLyogQ2hyb21lIGhhY2s6IFNWRyBpcyByZW5kZXJlZCBtb3JlIHNtb290aCBpbiBXaW5kb3p6ZS4gMTAwJSBtYWdpYywgdW5jb21tZW50IGlmIHlvdSBuZWVkIGl0LiAqL1xcbi8qIE5vdGUsIHRoYXQgd2lsbCBicmVhayBoaW50aW5nISBJbiBvdGhlciBPUy1lcyBmb250IHdpbGwgYmUgbm90IGFzIHNoYXJwIGFzIGl0IGNvdWxkIGJlICovXFxuLypcXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZvbnRlbGxvJztcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnQvZm9udGVsbG8uc3ZnPzY2NzUwMDMxI2ZvbnRlbGxvJykgZm9ybWF0KCdzdmcnKTtcXG4gIH1cXG59XFxuKi9cXG5bY2xhc3NePVxcXCJpY29uLVxcXCJdOmJlZm9yZSwgW2NsYXNzKj1cXFwiIGljb24tXFxcIl06YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiZm9udGVsbG9cXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHNwZWFrOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbiAgd2lkdGg6IDFlbTtcXG4gIG1hcmdpbi1yaWdodDogLjJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIG9wYWNpdHk6IC44OyAqL1xcbiAgLyogRm9yIHNhZmV0eSAtIHJlc2V0IHBhcmVudCBzdHlsZXMsIHRoYXQgY2FuIGJyZWFrIGdseXBoIGNvZGVzKi9cXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAvKiBmaXggYnV0dG9ucyBoZWlnaHQsIGZvciB0d2l0dGVyIGJvb3RzdHJhcCAqL1xcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gIC8qIEFuaW1hdGlvbiBjZW50ZXIgY29tcGVuc2F0aW9uIC0gbWFyZ2lucyBzaG91bGQgYmUgc3ltbWV0cmljICovXFxuICAvKiByZW1vdmUgaWYgbm90IG5lZWRlZCAqL1xcbiAgbWFyZ2luLWxlZnQ6IC4yZW07XFxuICAvKiB5b3UgY2FuIGJlIG1vcmUgY29tZm9ydGFibGUgd2l0aCBpbmNyZWFzZWQgaWNvbnMgc2l6ZSAqL1xcbiAgLyogZm9udC1zaXplOiAxMjAlOyAqL1xcbiAgLyogRm9udCBzbW9vdGhpbmcuIFRoYXQgd2FzIHRha2VuIGZyb20gVFdCUyAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLyogVW5jb21tZW50IGZvciAzRCBlZmZlY3QgKi9cXG4gIC8qIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDEyNywgMTI3LCAxMjcsIDAuMyk7ICovIH1cXG5cXG4uaWNvbi1jaGVjazpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODAwJzsgfVxcblxcbi8qICfuoIAnICovXFxuLmljb24tc3RhcjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODAxJzsgfVxcblxcbi8qICfuoIEnICovXFxuLmljb24tdXNlcjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODAyJzsgfVxcblxcbi8qICfuoIInICovXFxuLmljb24tY3Jvd24tMjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODAzJzsgfVxcblxcbi8qICfuoIMnICovXFxuLmljb24tY3Jvd24tc3RhcnR1cDpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODA0JzsgfVxcblxcbi8qICfuoIQnICovXFxuLmljb24tY3Jvd24tYmFzaWM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcZTgwNSc7IH1cXG5cXG4vKiAn7qCFJyAqL1xcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCIvKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIHBvbHlmaWxsXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIC8vIGFsaWFzZXNcbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuXG4gICAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcbiAgICBpZiAoXG4gICAgICAnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXG4gICAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsc1xuICAgIHZhciBFbGVtZW50ID0gdy5IVE1MRWxlbWVudCB8fCB3LkVsZW1lbnQ7XG4gICAgdmFyIFNDUk9MTF9USU1FID0gNDY4O1xuXG4gICAgLy8gb2JqZWN0IGdhdGhlcmluZyBvcmlnaW5hbCBzY3JvbGwgbWV0aG9kc1xuICAgIHZhciBvcmlnaW5hbCA9IHtcbiAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgIHNjcm9sbEJ5OiB3LnNjcm9sbEJ5LFxuICAgICAgZWxlbWVudFNjcm9sbDogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIHx8IHNjcm9sbEVsZW1lbnQsXG4gICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICB9O1xuXG4gICAgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcbiAgICB2YXIgbm93ID1cbiAgICAgIHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgICAgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpXG4gICAgICAgIDogRGF0ZS5ub3c7XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSB0aGUgY3VycmVudCBicm93c2VyIGlzIG1hZGUgYnkgTWljcm9zb2Z0XG4gICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNNaWNyb3NvZnRCcm93c2VyKHVzZXJBZ2VudCkge1xuICAgICAgdmFyIHVzZXJBZ2VudFBhdHRlcm5zID0gWydNU0lFICcsICdUcmlkZW50LycsICdFZGdlLyddO1xuXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcbiAgICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKi9cbiAgICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcblxuICAgIC8qKlxuICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBzY3JvbGxFbGVtZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgcmVzdWx0IG9mIGFwcGx5aW5nIGVhc2UgbWF0aCBmdW5jdGlvbiB0byBhIG51bWJlclxuICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50J1xuICAgICAgKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ29iamVjdCcgJiYgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGFuIG9iamVjdCBhbmQgYmVoYXZpb3IgaXMgc21vb3RoXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhyb3cgZXJyb3Igd2hlbiBiZWhhdmlvciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgJyArXG4gICAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgK1xuICAgICAgICAgICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcbiAgICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xuICAgICAgaWYgKGF4aXMgPT09ICdZJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBhIHNjcm9sbGFibGUgb3ZlcmZsb3cgcHJvcGVydHkgaW4gdGhlIGF4aXNcbiAgICAgKiBAbWV0aG9kIGNhbk92ZXJmbG93XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FuT3ZlcmZsb3coZWwsIGF4aXMpIHtcbiAgICAgIHZhciBvdmVyZmxvd1ZhbHVlID0gdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnb3ZlcmZsb3cnICsgYXhpc107XG5cbiAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICogQG1ldGhvZCBpc1Njcm9sbGFibGVcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVZID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWScpICYmIGNhbk92ZXJmbG93KGVsLCAnWScpO1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVggPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdYJykgJiYgY2FuT3ZlcmZsb3coZWwsICdYJyk7XG5cbiAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcbiAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgKiBAbWV0aG9kIHN0ZXBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RlcChjb250ZXh0KSB7XG4gICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgdmFyIGVsYXBzZWQgPSAodGltZSAtIGNvbnRleHQuc3RhcnRUaW1lKSAvIFNDUk9MTF9USU1FO1xuXG4gICAgICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cbiAgICAgIC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcbiAgICAgIHZhbHVlID0gZWFzZShlbGFwc2VkKTtcblxuICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgIGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC55IC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG5cbiAgICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpO1xuXG4gICAgICAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuICAgICAgaWYgKGN1cnJlbnRYICE9PSBjb250ZXh0LnggfHwgY3VycmVudFkgIT09IGNvbnRleHQueSkge1xuICAgICAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwLmJpbmQodywgY29udGV4dCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAqIEBtZXRob2Qgc21vb3RoU2Nyb2xsXG4gICAgICogQHBhcmFtIHtPYmplY3R8Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWwsIHgsIHkpIHtcbiAgICAgIHZhciBzY3JvbGxhYmxlO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBzdGFydFk7XG4gICAgICB2YXIgbWV0aG9kO1xuICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcbiAgICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcbiAgICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XG4gICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSBlbDtcbiAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgbG9vcGluZyBvdmVyIGEgZnJhbWVcbiAgICAgIHN0ZXAoe1xuICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAvLyB3LnNjcm9sbCBhbmQgdy5zY3JvbGxUb1xuICAgIHcuc2Nyb2xsID0gdy5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gdy5zY3JvbGxCeVxuICAgIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogMCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxuICAgICAgICB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgYW5kIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvXG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHNbMF0ubGVmdDtcbiAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wO1xuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LFxuICAgICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwoe1xuICAgICAgICBsZWZ0OiB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICBiZWhhdmlvcjogYXJndW1lbnRzWzBdLmJlaGF2aW9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxJbnRvVmlldy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgdmFyIHBhcmVudFJlY3RzID0gc2Nyb2xsYWJsZVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBjbGllbnRSZWN0cyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW5zaWRlIHBhcmVudFxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxMZWZ0ICsgY2xpZW50UmVjdHMubGVmdCAtIHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3BcbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxuICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcbiAgICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBjb21tb25qc1xuICAgIG1vZHVsZS5leHBvcnRzID0geyBwb2x5ZmlsbDogcG9seWZpbGwgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnbG9iYWxcbiAgICBwb2x5ZmlsbCgpO1xuICB9XG5cbn0oKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTphcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdDtiYXNlNjQsSUJvQUFIZ1pBQUFCQUFJQUFBQUFBQUlBQlFNQUFBQUFBQUFCQUpBQkFBQUFBRXhRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVBQUFBQUFBQUFUSjltdUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQVpnQnZBRzRBZEFCbEFHd0FiQUJ2QUFBQURnQlNBR1VBWndCMUFHd0FZUUJ5QUFBQUZnQldBR1VBY2dCekFHa0Fid0J1QUNBQU1RQXVBREFBQUFBUUFHWUFid0J1QUhRQVpRQnNBR3dBYndBQUFBQUFBQUVBQUFBUEFJQUFBd0J3UjFOVlFpQ0xKWG9BQUFEOEFBQUFWRTlUTHpJK0lFbDJBQUFCVUFBQUFGWmpiV0Z3eUszczF3QUFBYWdBQUFHMlkzWjBJQWJYL3dRQUFBMWdBQUFBSUdad1oyMktrWkJaQUFBTmdBQUFDM0JuWVhOd0FBQUFFQUFBRFZnQUFBQUlaMng1WmtiQnlkRUFBQU5nQUFBR0ZtaGxZV1FYMDhaeUFBQUplQUFBQURab2FHVmhDRHdFakFBQUNiQUFBQUFrYUcxMGVCc20vLzRBQUFuVUFBQUFIR3h2WTJFRDFnVi9BQUFKOEFBQUFCQnRZWGh3QVRRTU53QUFDZ0FBQUFBZ2JtRnRaY3lkSHlFQUFBb2dBQUFDelhCdmMzU1FhMURxQUFBTThBQUFBR1Z3Y21WdzVVRXJ2QUFBR1BBQUFBQ0dBQUVBQUFBS0FEQUFQZ0FDUkVaTVZBQU9iR0YwYmdBYUFBUUFBQUFBQUFBQUFRQUFBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFFRDRRR1FBQVVBQUFKNkFyd0FBQUNNQW5vQ3ZBQUFBZUFBTVFFQ0FBQUNBQVVEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQm1SV1FBUU9nQTZBVURVdjlxQUZvRFV3Q1dBQUFBQVFBQUFBQUFBQUFBQUFVQUFBQURBQUFBTEFBQUFBUUFBQUZlQUFFQUFBQUFBRmdBQXdBQkFBQUFMQUFEQUFvQUFBRmVBQVFBTEFBQUFBUUFCQUFCQUFEb0JmLy9BQURvQVAvL0FBQUFBUUFFQUFBQUFRQUNBQU1BQkFBRkFBWUFBQUVHQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFGZ0FBQUFBQUFBQUJnQUE2QUFBQU9nQUFBQUFBUUFBNkFFQUFPZ0JBQUFBQWdBQTZBSUFBT2dDQUFBQUF3QUE2QU1BQU9nREFBQUFCQUFBNkFRQUFPZ0VBQUFBQlFBQTZBVUFBT2dGQUFBQUJnQUFBQUVBQVArUUJPa0RVd0FlQUNOQUlBQUJBd0lEQVFKdEFBSUFBd0lBYXdBQUFHNEFBd01NQTBrVUV4b2pCQVVZS3dFeEFRWWpJaVluQVM0Qk5EWS9BVFl5RndFV01qY0JNell5SHdFV0ZBY0Uydno3RHhNTUVnVCtmZ2NJQ0FkRER5Y09BUTRJRXdjQ2lBVU9KdzVFRGc0Q3dmemVEd2dIQWFBR0ZBOFVCa1FPRHY3ZUJ3Y0NvQTRPUkFzbURnQUFBQUVBQVAvS0E2RURRQUFmQURWQUNoSVBDZ1FEQlFBQ0FVZExzQnBRV0VBTUFRRUFBZ0J3QUFJQ0RBSkpHMEFLQUFJQUFtOEJBUUFBWmxtMUhSUVhBd1VYS3dFVUR3RVRGUlFPQVM4QkJ3WWlKalUwTnhNbkpqVTBOeVUzTmpJZkFRVVdBNkVQeWpBTUZRejcrZ3dXREFFd3l3NGZBUmgrQ3lBTWZRRVlJQUhwREEvRi91a01DeEFCQjRTRUJ4SUtCQWdCRjhVUERCVUZLUDRYRi80b0JRQUNBQUQvc1FMS0F3d0FGUUFlQUNWQUlnQUZBUVZ2QXdFQkJBRnZBQVFDQkc4QUFnQUNid0FBQUdZVEZ4RVJGeklHQlJvckpSUUdJeUVpSmpVMFBnTVhGakkzTWg0REF4UUdJaTRCTmg0QkFzcEdNZjRrTVVZS0dDbytMVW5LU2lwQ0pod0lqM3kwZWdTQ3JJUkZQRmhZUERCVVZqd29BVWhJSmo1VVZnSEFXSDUrc0lBQ2ZBQUFCd0FBLzJvRDV3TlNBRHNBVEFCYkFHUUFjd0NDQUk0QVgwQmNkbWhaU1NNZEhCRVFDZ29DQlMwQkNRSUNSd0FGQkFJRUJRSnRCd1lEQXdJQUNRZ0NDV0FLQVFRRUFGZ0FBQUFNU0FzQkNBZ0JXQUFCQVEwQlNZV0RYVnlMaUlPT2hZNTlmR3BwWVdCY1pGMWtXRmRGUkRZekZ4WU1CUlFySlRZM1BnRW5MZ0VuSmdjbUp5WUhCZ2MxUGdFMU5DWWlCaFVVRmhjVkppY21Cd1lISmdjT0FRY0dGaGNXRnc0QkZSUWVBVE1oTWo0Qk5UUW1BeDRCRlJZR0J3WUhJejRDSnpBeE5pY1dGekF4RmdjR0J3WUhJeEUrQVNjeUZoUUdJaVkwTmdjMkZoY1JJeVluSmljbU56QXhOZ2MyRnpBeEJoNEJGeU1tSnk0Qk5nRWhJaVkwTmpNaE1oWVVCZ09HRVJBZklRRUJLQ1l6UWlCRE56NGVHeG9oTTBveklSb2JIajQzUXlCQ015VXBBUUVoSHhBUklpb2lPaUlDd0NJN0lpc3ZHQm9CSEJ3VEhtb2xNQTRLS3JFekZRNEZCUmdjTTM4b1VaWU1FUkVZRVJHcklWRW9mek1jR0FVRkRoV2JIU29LRGpBbGFob1hJeG9XQXdmOVFCd29LQndDd0J3b0tGMFdIRFp5TkRsVEZod1BVQmdVR0EwU1NBa3VIQ1V6TXlVY0xnbElFZzBZRkJoUUR4d1dVemswY2pZY0ZnNC9KeUk3SWlJN0lpWkFBWXNPT2lnc1lqQWlJamVGZ3pvSllSTkxNejlEUWxBK0Fhb25Ic0FSR0JFUkdCSE1EQjRuL2xZK1VFSkRQek5MWGhFS09vT0ZOeDBuUFgxZy9kOG9PQ2dvT0NnQUFBQUhBQUFBQUFQb0ExSUFNd0E4QUVVQVRnQlNBR1lBWndCN1FIZ1VEUUlRQmhvSEFnRUhaVllDRHdFdkpnSU1EZ1JIQ3dFSEVBRVFCd0Z0QkFFQUNnRUdFQUFHWUFBSkFCQUhDUkJnQXdFQkVRRVBEZ0VQWUFBT0FBd05EZ3hlRWdFTkFBVU5CVndBQ0FnQ1dBQUNBZ3dJU1U5UFkyRmVYRnBZVkZOUFVrOVNVVkJOVEVsSVJFTVVFeG82RmlVVkpoSVRCUjByQVRRbUlnWVZGQmNPQVNNaUppYzJOQ1lpQmhRWERnRWpJaVluTmpVMEppSUdGUlFXRnhZWEZSUVdNeUV5TmowQk5qYytBU2MwTmpJV0ZBWWlKaVUwTmpJV0ZBWWlKZ1UwTmpJV0ZBWWlKaE0xSVJVM0lTWW5IZ0V6TWpZM0ZqSTNIZ0V6TWpZM0JnY0Q2RGhPT0JvV1BDTTNWZ3NjTjFBM0hBdFdOeUk5RmhvM1VEY3JJQlU0RVF3Q2Znd1JPQlVnSzRNVkhoVVZIaFgrYXhVZUZSVWVGZjVyRlI0VkZSNFZtQUpDRHYyaUpoVWRTaWhKY1JRRUVnUVVjVWtvU2gwVEtBS3BLRGc0S0NVY0dSdEdOUnhQT0RoUEhEVkdIQmdjSlNnNE9DZ2lNd2V0V0ZnTUVSRU1XRml0QnpNaUR4WVdIaFVWV1E4VkZSNFZGVHNQRmhZZUZSWCtjeVltWVVHQUdSMVlSQUVCUkZnZEdYeEZBQUFBQUFMLy92LytBK29DdmdBYUFDY0FLRUFsSnlJZENRUUZBZ0FCUndBQUFnQnZBQUlCQVFKU0FBSUNBVmdBQVFJQlRCWTdGZ01GRnlzQkxnRVBBU2NtSWc4Qkp5WU9BaGNUSGdFeklUSTJOeE0ySmdNaEF4Y1dOajhCRng0QlB3RUQyZ2dYQzliSURDUUx5ZFlLRnhJSEJKUUVGUTBDY1EwVUJKUUVCOVA5eVhLZ0RCb0l2NzhJR2d5aEFpd0hBd1ZvNXc0TzUyZ0ZBaEFYQy80WURCQVFEQUhvQ3hmK0tRRjNUZ1lGQ3R6Y0NnVUdUZ0FBQUFFQUFBQUJBQUM0WnA5TVh3ODg5UUFMQStnQUFBQUEyZWJCYUFBQUFBRFo1c0ZvLy83L2FnVHBBMU1BQUFBSUFBSUFBQUFBQUFBQUFRQUFBMUwvYWdBQUJSei8vdi8rQk9rQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFjRDZBQUFCUndBQUFPZ0FBQUN5Z0FBQStnQUFBUG9BQUFENlAvK0FBQUFBQUJJQUpnQTNBSGNBcklEQ3dBQkFBQUFCd0NQQUFjQUFBQUFBQUlBSmdBMkFITUFBQUNNQzNBQUFBQUFBQUFBRWdEZUFBRUFBQUFBQUFBQU5RQUFBQUVBQUFBQUFBRUFDQUExQUFFQUFBQUFBQUlBQndBOUFBRUFBQUFBQUFNQUNBQkVBQUVBQUFBQUFBUUFDQUJNQUFFQUFBQUFBQVVBQ3dCVUFBRUFBQUFBQUFZQUNBQmZBQUVBQUFBQUFBb0FLd0JuQUFFQUFBQUFBQXNBRXdDU0FBTUFBUVFKQUFBQWFnQ2xBQU1BQVFRSkFBRUFFQUVQQUFNQUFRUUpBQUlBRGdFZkFBTUFBUVFKQUFNQUVBRXRBQU1BQVFRSkFBUUFFQUU5QUFNQUFRUUpBQVVBRmdGTkFBTUFBUVFKQUFZQUVBRmpBQU1BQVFRSkFBb0FWZ0Z6QUFNQUFRUUpBQXNBSmdISlEyOXdlWEpwWjJoMElDaERLU0F5TURFNUlHSjVJRzl5YVdkcGJtRnNJR0YxZEdodmNuTWdRQ0JtYjI1MFpXeHNieTVqYjIxbWIyNTBaV3hzYjFKbFozVnNZWEptYjI1MFpXeHNiMlp2Ym5SbGJHeHZWbVZ5YzJsdmJpQXhMakJtYjI1MFpXeHNiMGRsYm1WeVlYUmxaQ0JpZVNCemRtY3lkSFJtSUdaeWIyMGdSbTl1ZEdWc2JHOGdjSEp2YW1WamRDNW9kSFJ3T2k4dlptOXVkR1ZzYkc4dVkyOXRBRU1BYndCd0FIa0FjZ0JwQUdjQWFBQjBBQ0FBS0FCREFDa0FJQUF5QURBQU1RQTVBQ0FBWWdCNUFDQUFid0J5QUdrQVp3QnBBRzRBWVFCc0FDQUFZUUIxQUhRQWFBQnZBSElBY3dBZ0FFQUFJQUJtQUc4QWJnQjBBR1VBYkFCc0FHOEFMZ0JqQUc4QWJRQm1BRzhBYmdCMEFHVUFiQUJzQUc4QVVnQmxBR2NBZFFCc0FHRUFjZ0JtQUc4QWJnQjBBR1VBYkFCc0FHOEFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUJtQUc4QWJnQjBBR1VBYkFCc0FHOEFSd0JsQUc0QVpRQnlBR0VBZEFCbEFHUUFJQUJpQUhrQUlBQnpBSFlBWndBeUFIUUFkQUJtQUNBQVpnQnlBRzhBYlFBZ0FFWUFid0J1QUhRQVpRQnNBR3dBYndBZ0FIQUFjZ0J2QUdvQVpRQmpBSFFBTGdCb0FIUUFkQUJ3QURvQUx3QXZBR1lBYndCdUFIUUFaUUJzQUd3QWJ3QXVBR01BYndCdEFBQUFBQUlBQUFBQUFBQUFDZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ3RUNBUU1CQkFFRkFRWUJCd0VJQUFWamFHVmphd1J6ZEdGeUJIVnpaWElIWTNKdmQyNHRNZzFqY205M2JpMXpkR0Z5ZEhWd0MyTnliM2R1TFdKaGMybGpBQUFBQUFBQUFRQUIvLzhBRHdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBR0FBWUFCZ0FHQU5ULzJvRFUvOXFzQUFzSUxBQVZWaEZXU0FnUzdnQURsRkxzQVpUV2xpd05CdXdLRmxnWmlDS1ZWaXdBaVZodVFnQUNBQmpZeU5pR3lFaHNBQlpzQUJESTBTeUFBRUFRMkJDTGJBQkxMQWdZR1l0c0FJc0lHUWdzTUJRc0FRbVdySW9BUXBEUldORlVsdFlJU01oRzRwWUlMQlFVRmdoc0VCWkd5Q3dPRkJZSWJBNFdWa2dzUUVLUTBWalJXRmtzQ2hRV0NHeEFRcERSV05GSUxBd1VGZ2hzREJaR3lDd3dGQllJR1lnaW9waElMQUtVRmhnR3lDd0lGQllJYkFLWUJzZ3NEWlFXQ0d3Tm1BYllGbFpXUnV3QVN0WldTT3dBRkJZWlZsWkxiQURMQ0JGSUxBRUpXRmtJTEFGUTFCWXNBVWpRckFHSTBJYklTRlpzQUZnTGJBRUxDTWhJeUVnWkxFRllrSWdzQVlqUXJFQkNrTkZZN0VCQ2tPd0FXQkZZN0FES2lFZ3NBWkRJSW9naXJBQks3RXdCU1d3QkNaUldHQlFHMkZTV1ZnaldTRWdzRUJUV0xBQkt4c2hzRUJaSTdBQVVGaGxXUzJ3QlN5d0IwTXJzZ0FDQUVOZ1FpMndCaXl3QnlOQ0l5Q3dBQ05DWWJBQ1ltYXdBV093QVdDd0JTb3RzQWNzSUNCRklMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkJFc0FGZ0xiQUlMTElIQ3dCRFJVSXFJYklBQVFCRFlFSXRzQWtzc0FCREkwU3lBQUVBUTJCQ0xiQUtMQ0FnUlNDd0FTc2pzQUJEc0FRbFlDQkZpaU5oSUdRZ3NDQlFXQ0d3QUJ1d01GQllzQ0Fic0VCWldTT3dBRkJZWlZtd0F5VWpZVVJFc0FGZ0xiQUxMQ0FnUlNDd0FTc2pzQUJEc0FRbFlDQkZpaU5oSUdTd0pGQllzQUFic0VCWkk3QUFVRmhsV2JBREpTTmhSRVN3QVdBdHNBd3NJTEFBSTBLeUN3b0RSVmdoR3lNaFdTb2hMYkFOTExFQ0FrV3daR0ZFTGJBT0xMQUJZQ0Fnc0F4RFNyQUFVRmdnc0F3alFsbXdEVU5Lc0FCU1dDQ3dEU05DV1Myd0R5d2dzQkJpWnJBQll5QzRCQUJqaWlOaHNBNURZQ0NLWUNDd0RpTkNJeTJ3RUN4TFZGaXhCR1JFV1NTd0RXVWplQzJ3RVN4TFVWaExVMWl4QkdSRVdSc2hXU1N3RTJVamVDMndFaXl4QUE5RFZWaXhEdzlEc0FGaFFyQVBLMW13QUVPd0FpVkNzUXdDSlVLeERRSWxRckFCRmlNZ3NBTWxVRml4QVFCRFlMQUVKVUtLaWlDS0kyR3dEaW9oSTdBQllTQ0tJMkd3RGlvaEc3RUJBRU5nc0FJbFFyQUNKV0d3RGlvaFdiQU1RMGV3RFVOSFlMQUNZaUN3QUZCWXNFQmdXV2F3QVdNZ3NBdERZN2dFQUdJZ3NBQlFXTEJBWUZsbXNBRmpZTEVBQUJNalJMQUJRN0FBUHJJQkFRRkRZRUl0c0JNc0FMRUFBa1ZVV0xBUEkwSWdSYkFMSTBLd0NpT3dBV0JDSUdDd0FXRzFFQkFCQUE0QVFrS0tZTEVTQml1d2Npc2JJbGt0c0JRc3NRQVRLeTJ3RlN5eEFSTXJMYkFXTExFQ0V5c3RzQmNzc1FNVEt5MndHQ3l4QkJNckxiQVpMTEVGRXlzdHNCb3NzUVlUS3kyd0d5eXhCeE1yTGJBY0xMRUlFeXN0c0Iwc3NRa1RLeTJ3SGl3QXNBMHJzUUFDUlZSWXNBOGpRaUJGc0FzalFyQUtJN0FCWUVJZ1lMQUJZYlVRRUFFQURnQkNRb3Bnc1JJR0s3QnlLeHNpV1Myd0h5eXhBQjRyTGJBZ0xMRUJIaXN0c0NFc3NRSWVLeTJ3SWl5eEF4NHJMYkFqTExFRUhpc3RzQ1Fzc1FVZUt5MndKU3l4Qmg0ckxiQW1MTEVISGlzdHNDY3NzUWdlS3kyd0tDeXhDUjRyTGJBcExDQThzQUZnTGJBcUxDQmdzQkJnSUVNanNBRmdRN0FDSldHd0FXQ3dLU29oTGJBckxMQXFLN0FxS2kyd0xDd2dJRWNnSUxBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlkyQWpZVGdqSUlwVldDQkhJQ0N3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ0kyRTRHeUZaTGJBdExBQ3hBQUpGVkZpd0FSYXdMQ3F3QVJVd0d5SlpMYkF1TEFDd0RTdXhBQUpGVkZpd0FSYXdMQ3F3QVJVd0d5SlpMYkF2TENBMXNBRmdMYkF3TEFDd0FVVmp1QVFBWWlDd0FGQllzRUJnV1dhd0FXT3dBU3V3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdPd0FTdXdBQmEwQUFBQUFBQkVQaU00c1M4QkZTb3RzREVzSUR3Z1J5Q3dDME5qdUFRQVlpQ3dBRkJZc0VCZ1dXYXdBV05nc0FCRFlUZ3RzRElzTGhjOExiQXpMQ0E4SUVjZ3NBdERZN2dFQUdJZ3NBQlFXTEJBWUZsbXNBRmpZTEFBUTJHd0FVTmpPQzJ3TkN5eEFnQVdKU0F1SUVld0FDTkNzQUlsU1lxS1J5TkhJMkVnV0dJYklWbXdBU05Dc2pNQkFSVVVLaTJ3TlN5d0FCYXdCQ1d3QkNWSEkwY2pZYkFKUXl0bGlpNGpJQ0E4aWpndHNEWXNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FsREt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ3NBaERJSW9qUnlOSEkyRWpSbUN3QkVPd0FtSWdzQUJRV0xCQVlGbG1zQUZqWUNDd0FTc2dpb3BoSUxBQ1EyQmtJN0FEUTJGa1VGaXdBa05oRzdBRFEyQlpzQU1sc0FKaUlMQUFVRml3UUdCWlpyQUJZMkVqSUNDd0JDWWpSbUU0R3lPd0NFTkdzQUlsc0FoRFJ5TkhJMkZnSUxBRVE3QUNZaUN3QUZCWXNFQmdXV2F3QVdOZ0l5Q3dBU3Nqc0FSRFlMQUJLN0FGSldHd0JTV3dBbUlnc0FCUVdMQkFZRmxtc0FGanNBUW1ZU0N3QkNWZ1pDT3dBeVZnWkZCWUlSc2pJVmtqSUNDd0JDWWpSbUU0V1Myd055eXdBQllnSUNDd0JTWWdMa2NqUnlOaEl6dzRMYkE0TExBQUZpQ3dDQ05DSUNBZ1JpTkhzQUVySTJFNExiQTVMTEFBRnJBREpiQUNKVWNqUnlOaHNBQlVXQzRnUENNaEc3QUNKYkFDSlVjalJ5TmhJTEFGSmJBRUpVY2pSeU5oc0FZbHNBVWxTYkFDSldHNUNBQUlBR05qSXlCWVloc2hXV080QkFCaUlMQUFVRml3UUdCWlpyQUJZMkFqTGlNZ0lEeUtPQ01oV1Myd09peXdBQllnc0FoRElDNUhJMGNqWVNCZ3NDQmdackFDWWlDd0FGQllzRUJnV1dhd0FXTWpJQ0E4aWpndHNEc3NJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLeTJ3UEN3aklDNUdzQUlsUmxCWUlEeFpMckVyQVJRckxiQTlMQ01nTGthd0FpVkdVbGdnUEZraklDNUdzQUlsUmxCWUlEeFpMckVyQVJRckxiQStMTEExS3lNZ0xrYXdBaVZHVWxnZ1BGa3VzU3NCRkNzdHNEOHNzRFlyaWlBZ1BMQUVJMEtLT0NNZ0xrYXdBaVZHVWxnZ1BGa3VzU3NCRkN1d0JFTXVzQ3NyTGJCQUxMQUFGckFFSmJBRUppQXVSeU5ISTJHd0NVTXJJeUE4SUM0ak9MRXJBUlFyTGJCQkxMRUlCQ1ZDc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBbERLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdSN0FFUTdBQ1lpQ3dBRkJZc0VCZ1dXYXdBV05nSUxBQkt5Q0tpbUVnc0FKRFlHUWpzQU5EWVdSUVdMQUNRMkVic0FORFlGbXdBeVd3QW1JZ3NBQlFXTEJBWUZsbXNBRmpZYkFDSlVaaE9DTWdQQ000R3lFZ0lFWWpSN0FCS3lOaE9DRlpzU3NCRkNzdHNFSXNzRFVyTHJFckFSUXJMYkJETExBMkt5RWpJQ0E4c0FRalFpTTRzU3NCRkN1d0JFTXVzQ3NyTGJCRUxMQUFGU0JIc0FBalFySUFBUUVWRkJNdXNERXFMYkJGTExBQUZTQkhzQUFqUXJJQUFRRVZGQk11c0RFcUxiQkdMTEVBQVJRVHNESXFMYkJITExBMEtpMndTQ3l3QUJaRkl5QXVJRWFLSTJFNHNTc0JGQ3N0c0Vrc3NBZ2pRckJJS3kyd1NpeXlBQUJCS3kyd1N5eXlBQUZCS3kyd1RDeXlBUUJCS3kyd1RTeXlBUUZCS3kyd1RpeXlBQUJDS3kyd1R5eXlBQUZDS3kyd1VDeXlBUUJDS3kyd1VTeXlBUUZDS3kyd1VpeXlBQUErS3kyd1V5eXlBQUUrS3kyd1ZDeXlBUUErS3kyd1ZTeXlBUUUrS3kyd1ZpeXlBQUJBS3kyd1Z5eXlBQUZBS3kyd1dDeXlBUUJBS3kyd1dTeXlBUUZBS3kyd1dpeXlBQUJES3kyd1d5eXlBQUZES3kyd1hDeXlBUUJES3kyd1hTeXlBUUZES3kyd1hpeXlBQUEvS3kyd1h5eXlBQUUvS3kyd1lDeXlBUUEvS3kyd1lTeXlBUUUvS3kyd1lpeXdOeXN1c1NzQkZDc3RzR01zc0RjcnNEc3JMYkJrTExBM0s3QThLeTJ3WlN5d0FCYXdOeXV3UFNzdHNHWXNzRGdyTHJFckFSUXJMYkJuTExBNEs3QTdLeTJ3YUN5d09DdXdQQ3N0c0drc3NEZ3JzRDByTGJCcUxMQTVLeTZ4S3dFVUt5MndheXl3T1N1d095c3RzR3dzc0RrcnNEd3JMYkJ0TExBNUs3QTlLeTJ3Yml5d09pc3VzU3NCRkNzdHNHOHNzRG9yc0RzckxiQndMTEE2SzdBOEt5MndjU3l3T2l1d1BTc3RzSElzc3drRUFnTkZXQ0ViSXlGWlFpdXdDR1d3QXlSUWVMQUJGVEF0QUV1NEFNaFNXTEVCQVk1WnNBRzVDQUFJQUdOd3NRQUZRcklBQVFBcXNRQUZRck1LQWdFSUtyRUFCVUt6RGdBQkNDcXhBQVpDdWdMQUFBRUFDU3F4QUFkQ3VnQkFBQUVBQ1NxeEF3QkVzU1FCaUZGWXNFQ0lXTEVEWkVTeEpnR0lVVmk2Q0lBQUFRUkFpR05VV0xFREFFUlpXVmxac3d3Q0FRd3F1QUgvaGJBRWpiRUNBRVFBQUE9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImltZy9mb250ZWxsby5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTpmb250L3R0ZjtiYXNlNjQsQUFFQUFBQVBBSUFBQXdCd1IxTlZRaUNMSlhvQUFBRDhBQUFBVkU5VEx6SStJRWwyQUFBQlVBQUFBRlpqYldGd3lLM3Mxd0FBQWFnQUFBRzJZM1owSUFiWC93UUFBQTFnQUFBQUlHWndaMjJLa1pCWkFBQU5nQUFBQzNCbllYTndBQUFBRUFBQURWZ0FBQUFJWjJ4NVprYkJ5ZEVBQUFOZ0FBQUdGbWhsWVdRWDA4WnlBQUFKZUFBQUFEWm9hR1ZoQ0R3RWpBQUFDYkFBQUFBa2FHMTBlQnNtLy80QUFBblVBQUFBSEd4dlkyRUQxZ1YvQUFBSjhBQUFBQkJ0WVhod0FUUU1Od0FBQ2dBQUFBQWdibUZ0WmN5ZEh5RUFBQW9nQUFBQ3pYQnZjM1NRYTFEcUFBQU04QUFBQUdWd2NtVnc1VUVydkFBQUdQQUFBQUNHQUFFQUFBQUtBREFBUGdBQ1JFWk1WQUFPYkdGMGJnQWFBQVFBQUFBQUFBQUFBUUFBQUFRQUFBQUFBQUFBQVFBQUFBRnNhV2RoQUFnQUFBQUJBQUFBQVFBRUFBUUFBQUFCQUFnQUFRQUdBQUFBQVFBQUFBRUQ0UUdRQUFVQUFBSjZBcndBQUFDTUFub0N2QUFBQWVBQU1RRUNBQUFDQUFVREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkJtUldRQVFPZ0E2QVVEVXY5cUFGb0RVd0NXQUFBQUFRQUFBQUFBQUFBQUFBVUFBQUFEQUFBQUxBQUFBQVFBQUFGZUFBRUFBQUFBQUZnQUF3QUJBQUFBTEFBREFBb0FBQUZlQUFRQUxBQUFBQVFBQkFBQkFBRG9CZi8vQUFEb0FQLy9BQUFBQVFBRUFBQUFBUUFDQUFNQUJBQUZBQVlBQUFFR0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBRmdBQUFBQUFBQUFCZ0FBNkFBQUFPZ0FBQUFBQVFBQTZBRUFBT2dCQUFBQUFnQUE2QUlBQU9nQ0FBQUFBd0FBNkFNQUFPZ0RBQUFBQkFBQTZBUUFBT2dFQUFBQUJRQUE2QVVBQU9nRkFBQUFCZ0FBQUFFQUFQK1FCT2tEVXdBZUFDTkFJQUFCQXdJREFRSnRBQUlBQXdJQWF3QUFBRzRBQXdNTUEwa1VFeG9qQkFVWUt3RXhBUVlqSWlZbkFTNEJORFkvQVRZeUZ3RVdNamNCTXpZeUh3RVdGQWNFMnZ6N0R4TU1FZ1QrZmdjSUNBZEREeWNPQVE0SUV3Y0NpQVVPSnc1RURnNEN3ZnplRHdnSEFhQUdGQThVQmtRT0R2N2VCd2NDb0E0T1JBc21EZ0FBQUFFQUFQL0tBNkVEUUFBZkFEVkFDaElQQ2dRREJRQUNBVWRMc0JwUVdFQU1BUUVBQWdCd0FBSUNEQUpKRzBBS0FBSUFBbThCQVFBQVpsbTFIUlFYQXdVWEt3RVVEd0VURlJRT0FTOEJCd1lpSmpVME54TW5KalUwTnlVM05qSWZBUVVXQTZFUHlqQU1GUXo3K2d3V0RBRXd5dzRmQVJoK0N5QU1mUUVZSUFIcERBL0YvdWtNQ3hBQkI0U0VCeElLQkFnQkY4VVBEQlVGS1A0WEYvNG9CUUFDQUFEL3NRTEtBd3dBRlFBZUFDVkFJZ0FGQVFWdkF3RUJCQUZ2QUFRQ0JHOEFBZ0FDYndBQUFHWVRGeEVSRnpJR0JSb3JKUlFHSXlFaUpqVTBQZ01YRmpJM01oNERBeFFHSWk0Qk5oNEJBc3BHTWY0a01VWUtHQ28rTFVuS1NpcENKaHdJajN5MGVnU0NySVJGUEZoWVBEQlVWandvQVVoSUpqNVVWZ0hBV0g1K3NJQUNmQUFBQndBQS8yb0Q1d05TQURzQVRBQmJBR1FBY3dDQ0FJNEFYMEJjZG1oWlNTTWRIQkVRQ2dvQ0JTMEJDUUlDUndBRkJBSUVCUUp0QndZREF3SUFDUWdDQ1dBS0FRUUVBRmdBQUFBTVNBc0JDQWdCV0FBQkFRMEJTWVdEWFZ5TGlJT09oWTU5ZkdwcFlXQmNaRjFrV0ZkRlJEWXpGeFlNQlJRckpUWTNQZ0VuTGdFbkpnY21KeVlIQmdjMVBnRTFOQ1lpQmhVVUZoY1ZKaWNtQndZSEpnY09BUWNHRmhjV0Z3NEJGUlFlQVRNaE1qNEJOVFFtQXg0QkZSWUdCd1lISXo0Q0p6QXhOaWNXRnpBeEZnY0dCd1lISXhFK0FTY3lGaFFHSWlZME5nYzJGaGNSSXlZbkppY21OekF4TmdjMkZ6QXhCaDRCRnlNbUp5NEJOZ0VoSWlZME5qTWhNaFlVQmdPR0VSQWZJUUVCS0NZelFpQkROejRlR3hvaE0wb3pJUm9iSGo0M1F5QkNNeVVwQVFFaEh4QVJJaW9pT2lJQ3dDSTdJaXN2R0JvQkhCd1RIbW9sTUE0S0tyRXpGUTRGQlJnY00zOG9VWllNRVJFWUVSR3JJVkVvZnpNY0dBVUZEaFdiSFNvS0RqQWxhaG9YSXhvV0F3ZjlRQndvS0J3Q3dCd29LRjBXSERaeU5EbFRGaHdQVUJnVUdBMFNTQWt1SENVek15VWNMZ2xJRWcwWUZCaFFEeHdXVXprMGNqWWNGZzQvSnlJN0lpSTdJaVpBQVlzT09pZ3NZakFpSWplRmd6b0pZUk5MTXo5RFFsQStBYW9uSHNBUkdCRVJHQkhNREI0bi9sWStVRUpEUHpOTFhoRUtPb09GTngwblBYMWcvZDhvT0Nnb09DZ0FBQUFIQUFBQUFBUG9BMUlBTXdBOEFFVUFUZ0JTQUdZQVp3QjdRSGdVRFFJUUJob0hBZ0VIWlZZQ0R3RXZKZ0lNRGdSSEN3RUhFQUVRQndGdEJBRUFDZ0VHRUFBR1lBQUpBQkFIQ1JCZ0F3RUJFUUVQRGdFUFlBQU9BQXdORGd4ZUVnRU5BQVVOQlZ3QUNBZ0NXQUFDQWd3SVNVOVBZMkZlWEZwWVZGTlBVazlTVVZCTlRFbElSRU1VRXhvNkZpVVZKaElUQlIwckFUUW1JZ1lWRkJjT0FTTWlKaWMyTkNZaUJoUVhEZ0VqSWlZbk5qVTBKaUlHRlJRV0Z4WVhGUlFXTXlFeU5qMEJOamMrQVNjME5qSVdGQVlpSmlVME5qSVdGQVlpSmdVME5qSVdGQVlpSmhNMUlSVTNJU1luSGdFek1qWTNGakkzSGdFek1qWTNCZ2NENkRoT09Cb1dQQ00zVmdzY04xQTNIQXRXTnlJOUZobzNVRGNySUJVNEVRd0NmZ3dST0JVZ0s0TVZIaFVWSGhYK2F4VWVGUlVlRmY1ckZSNFZGUjRWbUFKQ0R2MmlKaFVkU2loSmNSUUVFZ1FVY1Vrb1NoMFRLQUtwS0RnNEtDVWNHUnRHTlJ4UE9EaFBIRFZHSEJnY0pTZzRPQ2dpTXdldFdGZ01FUkVNV0ZpdEJ6TWlEeFlXSGhVVldROFZGUjRWRlRzUEZoWWVGUlgrY3lZbVlVR0FHUjFZUkFFQlJGZ2RHWHhGQUFBQUFBTC8vdi8rQStvQ3ZnQWFBQ2NBS0VBbEp5SWRDUVFGQWdBQlJ3QUFBZ0J2QUFJQkFRSlNBQUlDQVZnQUFRSUJUQlk3RmdNRkZ5c0JMZ0VQQVNjbUlnOEJKeVlPQWhjVEhnRXpJVEkyTnhNMkpnTWhBeGNXTmo4QkZ4NEJQd0VEMmdnWEM5YklEQ1FMeWRZS0Z4SUhCSlFFRlEwQ2NRMFVCSlFFQjlQOXlYS2dEQm9Jdjc4SUdneWhBaXdIQXdWbzV3NE81MmdGQWhBWEMvNFlEQkFRREFIb0N4ZitLUUYzVGdZRkN0emNDZ1VHVGdBQUFBRUFBQUFCQUFDNFpwOU1Ydzg4OVFBTEErZ0FBQUFBMmViQmFBQUFBQURaNXNGby8vNy9hZ1RwQTFNQUFBQUlBQUlBQUFBQUFBQUFBUUFBQTFML2FnQUFCUnovL3YvK0JPa0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBY0Q2QUFBQlJ3QUFBT2dBQUFDeWdBQUErZ0FBQVBvQUFBRDZQLytBQUFBQUFCSUFKZ0EzQUhjQXJJREN3QUJBQUFBQndDUEFBY0FBQUFBQUFJQUpnQTJBSE1BQUFDTUMzQUFBQUFBQUFBQUVnRGVBQUVBQUFBQUFBQUFOUUFBQUFFQUFBQUFBQUVBQ0FBMUFBRUFBQUFBQUFJQUJ3QTlBQUVBQUFBQUFBTUFDQUJFQUFFQUFBQUFBQVFBQ0FCTUFBRUFBQUFBQUFVQUN3QlVBQUVBQUFBQUFBWUFDQUJmQUFFQUFBQUFBQW9BS3dCbkFBRUFBQUFBQUFzQUV3Q1NBQU1BQVFRSkFBQUFhZ0NsQUFNQUFRUUpBQUVBRUFFUEFBTUFBUVFKQUFJQURnRWZBQU1BQVFRSkFBTUFFQUV0QUFNQUFRUUpBQVFBRUFFOUFBTUFBUVFKQUFVQUZnRk5BQU1BQVFRSkFBWUFFQUZqQUFNQUFRUUpBQW9BVmdGekFBTUFBUVFKQUFzQUpnSEpRMjl3ZVhKcFoyaDBJQ2hES1NBeU1ERTVJR0o1SUc5eWFXZHBibUZzSUdGMWRHaHZjbk1nUUNCbWIyNTBaV3hzYnk1amIyMW1iMjUwWld4c2IxSmxaM1ZzWVhKbWIyNTBaV3hzYjJadmJuUmxiR3h2Vm1WeWMybHZiaUF4TGpCbWIyNTBaV3hzYjBkbGJtVnlZWFJsWkNCaWVTQnpkbWN5ZEhSbUlHWnliMjBnUm05dWRHVnNiRzhnY0hKdmFtVmpkQzVvZEhSd09pOHZabTl1ZEdWc2JHOHVZMjl0QUVNQWJ3QndBSGtBY2dCcEFHY0FhQUIwQUNBQUtBQkRBQ2tBSUFBeUFEQUFNUUE1QUNBQVlnQjVBQ0FBYndCeUFHa0Fad0JwQUc0QVlRQnNBQ0FBWVFCMUFIUUFhQUJ2QUhJQWN3QWdBRUFBSUFCbUFHOEFiZ0IwQUdVQWJBQnNBRzhBTGdCakFHOEFiUUJtQUc4QWJnQjBBR1VBYkFCc0FHOEFVZ0JsQUdjQWRRQnNBR0VBY2dCbUFHOEFiZ0IwQUdVQWJBQnNBRzhBWmdCdkFHNEFkQUJsQUd3QWJBQnZBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUFCbUFHOEFiZ0IwQUdVQWJBQnNBRzhBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQUFJQUFBQUFBQUFBQ2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCd0VDQVFNQkJBRUZBUVlCQndFSUFBVmphR1ZqYXdSemRHRnlCSFZ6WlhJSFkzSnZkMjR0TWcxamNtOTNiaTF6ZEdGeWRIVndDMk55YjNkdUxXSmhjMmxqQUFBQUFBQUFBUUFCLy84QUR3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdBQVlBQmdBR0FOVC8yb0RVLzlxc0FBc0lMQUFWVmhGV1NBZ1M3Z0FEbEZMc0FaVFdsaXdOQnV3S0ZsZ1ppQ0tWVml3QWlWaHVRZ0FDQUJqWXlOaUd5RWhzQUJac0FCREkwU3lBQUVBUTJCQ0xiQUJMTEFnWUdZdHNBSXNJR1Fnc01CUXNBUW1XcklvQVFwRFJXTkZVbHRZSVNNaEc0cFlJTEJRVUZnaHNFQlpHeUN3T0ZCWUliQTRXVmtnc1FFS1EwVmpSV0Zrc0NoUVdDR3hBUXBEUldORklMQXdVRmdoc0RCWkd5Q3d3RkJZSUdZZ2lvcGhJTEFLVUZoZ0d5Q3dJRkJZSWJBS1lCc2dzRFpRV0NHd05tQWJZRmxaV1J1d0FTdFpXU093QUZCWVpWbFpMYkFETENCRklMQUVKV0ZrSUxBRlExQllzQVVqUXJBR0kwSWJJU0Zac0FGZ0xiQUVMQ01oSXlFZ1pMRUZZa0lnc0FZalFyRUJDa05GWTdFQkNrT3dBV0JGWTdBREtpRWdzQVpESUlvZ2lyQUJLN0V3QlNXd0JDWlJXR0JRRzJGU1dWZ2pXU0Vnc0VCVFdMQUJLeHNoc0VCWkk3QUFVRmhsV1Myd0JTeXdCME1yc2dBQ0FFTmdRaTJ3Qml5d0J5TkNJeUN3QUNOQ1liQUNZbWF3QVdPd0FXQ3dCU290c0Fjc0lDQkZJTEFMUTJPNEJBQmlJTEFBVUZpd1FHQlpackFCWTJCRXNBRmdMYkFJTExJSEN3QkRSVUlxSWJJQUFRQkRZRUl0c0Frc3NBQkRJMFN5QUFFQVEyQkNMYkFLTENBZ1JTQ3dBU3Nqc0FCRHNBUWxZQ0JGaWlOaElHUWdzQ0JRV0NHd0FCdXdNRkJZc0NBYnNFQlpXU093QUZCWVpWbXdBeVVqWVVSRXNBRmdMYkFMTENBZ1JTQ3dBU3Nqc0FCRHNBUWxZQ0JGaWlOaElHU3dKRkJZc0FBYnNFQlpJN0FBVUZobFdiQURKU05oUkVTd0FXQXRzQXdzSUxBQUkwS3lDd29EUlZnaEd5TWhXU29oTGJBTkxMRUNBa1d3WkdGRUxiQU9MTEFCWUNBZ3NBeERTckFBVUZnZ3NBd2pRbG13RFVOS3NBQlNXQ0N3RFNOQ1dTMndEeXdnc0JCaVpyQUJZeUM0QkFCamlpTmhzQTVEWUNDS1lDQ3dEaU5DSXkyd0VDeExWRml4QkdSRVdTU3dEV1VqZUMyd0VTeExVVmhMVTFpeEJHUkVXUnNoV1NTd0UyVWplQzJ3RWl5eEFBOURWVml4RHc5RHNBRmhRckFQSzFtd0FFT3dBaVZDc1F3Q0pVS3hEUUlsUXJBQkZpTWdzQU1sVUZpeEFRQkRZTEFFSlVLS2lpQ0tJMkd3RGlvaEk3QUJZU0NLSTJHd0Rpb2hHN0VCQUVOZ3NBSWxRckFDSldHd0Rpb2hXYkFNUTBld0RVTkhZTEFDWWlDd0FGQllzRUJnV1dhd0FXTWdzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUxFQUFCTWpSTEFCUTdBQVBySUJBUUZEWUVJdHNCTXNBTEVBQWtWVVdMQVBJMElnUmJBTEkwS3dDaU93QVdCQ0lHQ3dBV0cxRUJBQkFBNEFRa0tLWUxFU0JpdXdjaXNiSWxrdHNCUXNzUUFUS3kyd0ZTeXhBUk1yTGJBV0xMRUNFeXN0c0Jjc3NRTVRLeTJ3R0N5eEJCTXJMYkFaTExFRkV5c3RzQm9zc1FZVEt5MndHeXl4QnhNckxiQWNMTEVJRXlzdHNCMHNzUWtUS3kyd0hpd0FzQTByc1FBQ1JWUllzQThqUWlCRnNBc2pRckFLSTdBQllFSWdZTEFCWWJVUUVBRUFEZ0JDUW9wZ3NSSUdLN0J5S3hzaVdTMndIeXl4QUI0ckxiQWdMTEVCSGlzdHNDRXNzUUllS3kyd0lpeXhBeDRyTGJBakxMRUVIaXN0c0NRc3NRVWVLeTJ3SlN5eEJoNHJMYkFtTExFSEhpc3RzQ2Nzc1FnZUt5MndLQ3l4Q1I0ckxiQXBMQ0E4c0FGZ0xiQXFMQ0Jnc0JCZ0lFTWpzQUZnUTdBQ0pXR3dBV0N3S1NvaExiQXJMTEFxSzdBcUtpMndMQ3dnSUVjZ0lMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkFqWVRnaklJcFZXQ0JISUNDd0MwTmp1QVFBWWlDd0FGQllzRUJnV1dhd0FXTmdJMkU0R3lGWkxiQXRMQUN4QUFKRlZGaXdBUmF3TENxd0FSVXdHeUpaTGJBdUxBQ3dEU3V4QUFKRlZGaXdBUmF3TENxd0FSVXdHeUpaTGJBdkxDQTFzQUZnTGJBd0xBQ3dBVVZqdUFRQVlpQ3dBRkJZc0VCZ1dXYXdBV093QVN1d0MwTmp1QVFBWWlDd0FGQllzRUJnV1dhd0FXT3dBU3V3QUJhMEFBQUFBQUJFUGlNNHNTOEJGU290c0RFc0lEd2dSeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NBQkRZVGd0c0RJc0xoYzhMYkF6TENBOElFY2dzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUxBQVEyR3dBVU5qT0Myd05DeXhBZ0FXSlNBdUlFZXdBQ05Dc0FJbFNZcUtSeU5ISTJFZ1dHSWJJVm13QVNOQ3NqTUJBUlVVS2kyd05TeXdBQmF3QkNXd0JDVkhJMGNqWWJBSlF5dGxpaTRqSUNBOGlqZ3RzRFlzc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBbERLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdzQWhESUlvalJ5TkhJMkVqUm1Dd0JFT3dBbUlnc0FCUVdMQkFZRmxtc0FGallDQ3dBU3NnaW9waElMQUNRMkJrSTdBRFEyRmtVRml3QWtOaEc3QURRMkJac0FNbHNBSmlJTEFBVUZpd1FHQlpackFCWTJFaklDQ3dCQ1lqUm1FNEd5T3dDRU5Hc0FJbHNBaERSeU5ISTJGZ0lMQUVRN0FDWWlDd0FGQllzRUJnV1dhd0FXTmdJeUN3QVNzanNBUkRZTEFCSzdBRkpXR3dCU1d3QW1JZ3NBQlFXTEJBWUZsbXNBRmpzQVFtWVNDd0JDVmdaQ093QXlWZ1pGQllJUnNqSVZraklDQ3dCQ1lqUm1FNFdTMndOeXl3QUJZZ0lDQ3dCU1lnTGtjalJ5TmhJenc0TGJBNExMQUFGaUN3Q0NOQ0lDQWdSaU5Ic0FFckkyRTRMYkE1TExBQUZyQURKYkFDSlVjalJ5TmhzQUJVV0M0Z1BDTWhHN0FDSmJBQ0pVY2pSeU5oSUxBRkpiQUVKVWNqUnlOaHNBWWxzQVVsU2JBQ0pXRzVDQUFJQUdOakl5QllZaHNoV1dPNEJBQmlJTEFBVUZpd1FHQlpackFCWTJBakxpTWdJRHlLT0NNaFdTMndPaXl3QUJZZ3NBaERJQzVISTBjallTQmdzQ0JnWnJBQ1lpQ3dBRkJZc0VCZ1dXYXdBV01qSUNBOGlqZ3RzRHNzSXlBdVJyQUNKVVpTV0NBOFdTNnhLd0VVS3kyd1BDd2pJQzVHc0FJbFJsQllJRHhaTHJFckFSUXJMYkE5TENNZ0xrYXdBaVZHVWxnZ1BGa2pJQzVHc0FJbFJsQllJRHhaTHJFckFSUXJMYkErTExBMUt5TWdMa2F3QWlWR1VsZ2dQRmt1c1NzQkZDc3RzRDhzc0RZcmlpQWdQTEFFSTBLS09DTWdMa2F3QWlWR1VsZ2dQRmt1c1NzQkZDdXdCRU11c0NzckxiQkFMTEFBRnJBRUpiQUVKaUF1UnlOSEkyR3dDVU1ySXlBOElDNGpPTEVyQVJRckxiQkJMTEVJQkNWQ3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQWxES3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nUjdBRVE3QUNZaUN3QUZCWXNFQmdXV2F3QVdOZ0lMQUJLeUNLaW1FZ3NBSkRZR1Fqc0FORFlXUlFXTEFDUTJFYnNBTkRZRm13QXlXd0FtSWdzQUJRV0xCQVlGbG1zQUZqWWJBQ0pVWmhPQ01nUENNNEd5RWdJRVlqUjdBQkt5TmhPQ0Zac1NzQkZDc3RzRUlzc0RVckxyRXJBUlFyTGJCRExMQTJLeUVqSUNBOHNBUWpRaU00c1NzQkZDdXdCRU11c0NzckxiQkVMTEFBRlNCSHNBQWpRcklBQVFFVkZCTXVzREVxTGJCRkxMQUFGU0JIc0FBalFySUFBUUVWRkJNdXNERXFMYkJHTExFQUFSUVRzRElxTGJCSExMQTBLaTJ3U0N5d0FCWkZJeUF1SUVhS0kyRTRzU3NCRkNzdHNFa3NzQWdqUXJCSUt5MndTaXl5QUFCQkt5MndTeXl5QUFGQkt5MndUQ3l5QVFCQkt5MndUU3l5QVFGQkt5MndUaXl5QUFCQ0t5MndUeXl5QUFGQ0t5MndVQ3l5QVFCQ0t5MndVU3l5QVFGQ0t5MndVaXl5QUFBK0t5MndVeXl5QUFFK0t5MndWQ3l5QVFBK0t5MndWU3l5QVFFK0t5MndWaXl5QUFCQUt5MndWeXl5QUFGQUt5MndXQ3l5QVFCQUt5MndXU3l5QVFGQUt5MndXaXl5QUFCREt5MndXeXl5QUFGREt5MndYQ3l5QVFCREt5MndYU3l5QVFGREt5MndYaXl5QUFBL0t5MndYeXl5QUFFL0t5MndZQ3l5QVFBL0t5MndZU3l5QVFFL0t5MndZaXl3TnlzdXNTc0JGQ3N0c0dNc3NEY3JzRHNyTGJCa0xMQTNLN0E4S3kyd1pTeXdBQmF3Tnl1d1BTc3RzR1lzc0RnckxyRXJBUlFyTGJCbkxMQTRLN0E3S3kyd2FDeXdPQ3V3UENzdHNHa3NzRGdyc0QwckxiQnFMTEE1S3k2eEt3RVVLeTJ3YXl5d09TdXdPeXN0c0d3c3NEa3JzRHdyTGJCdExMQTVLN0E5S3kyd2JpeXdPaXN1c1NzQkZDc3RzRzhzc0RvcnNEc3JMYkJ3TExBNks3QThLeTJ3Y1N5d09pdXdQU3N0c0hJc3N3a0VBZ05GV0NFYkl5RlpRaXV3Q0dXd0F5UlFlTEFCRlRBdEFFdTRBTWhTV0xFQkFZNVpzQUc1Q0FBSUFHTndzUUFGUXJJQUFRQXFzUUFGUXJNS0FnRUlLckVBQlVLekRnQUJDQ3F4QUFaQ3VnTEFBQUVBQ1NxeEFBZEN1Z0JBQUFFQUNTcXhBd0JFc1NRQmlGRllzRUNJV0xFRFpFU3hKZ0dJVVZpNkNJQUFBUVJBaUdOVVdMRURBRVJaV1ZsWnN3d0NBUXdxdUFIL2hiQUVqYkVDQUVRQUFBPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmZvbnQvd29mZjI7YmFzZTY0LGQwOUdNZ0FCQUFBQUFBMFFBQThBQUFBQUdYZ0FBQXk0QUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFIRlFHVmdDRE5nZ2dDWlp3RVFnS2pCaUtVQXNRQUFFMkFpUURIQVFnQllWTkIyVU1nUVlibFJlam9tb1VJUHZMQTI3SWdEZlVubEViSVdGRXZLRnBFR0h2ZEg2RDhIV2N2QnIxMnkzL29zWXhJbnkwTnJWNTJmdytuZFd2Nm02SmJRK3hCb2cxakt0bGU0a3BQcUFRTVlRZ1EvQzkvR0lQZmFmZlRLR296QmJjVkVSWVVLbjJuWk03bDBSdy9vTEU4OVh0L1ZrNENKdEpQVnlRNDFBU1dBdXhWSVAwaC83UmxsSlJKcXptS2Q5QXVnQVpOcVNqaE0yUmd0bzcyMFdkb3Q2dUdsM1l6S2tkYyt2a0REMUIvUXRBUldHMmt6RFNCZ0NFS2U4L3YvYXRubmQzaGovZzB6Q2JpSVZva1JoR1AvKytkWldRa0xZaC9WMVVra215dGhHb05FcWhOVW9uWlNxYmVGMDZkSHc2azd1SDlGdUNBRmhvMEllSFI2ZVhFZG9YTzNZQTJTUUFBQ0JBYlVqN2R1K013YUM1a0pBZ2pBZ05lYUQ0UFk4b2dNL3c1NEI3eldyMG04WXc2RkNpdDFMVCtUMnlEZjR2Ym5qbVlvSjF0WVFYS3JIaWhCQTFrUEcwQ2VVQWtVVDNFYkRDcGJtVWtCMVhpVVNkWU1mV3Y3anozL2YwbHdmU1VOcmlZRnRBYXF4eWl3WUlpR3RnTmE1QnFIRU5VbzFyVUdwOFptZ1FsbG5PcWFVRThvMHFFcGdLME5Jd1MyLytnYmp3QnUzM0tkRnlwYUlzRitwV0VxenRmNk0xUWpXMWlmTWVzSUNQRFdhQVlJa0JBcDYvQ0RCMEpyN2VSN3BQczRxMnhlRjBlUGc1ZWZPdUM4VDhmdkw0MlltT2RsbEhtVlV0WkxkblZBeDZmYVlaTmNnR1cvaTZpaTdVM1drN3NMZ01TUStYVnB2YTBMWUJTczdaUVphemdjaDBubk5BUUVNaHRUMFRpdnNKSlJGTm92TStRejRnWWQ2OHpxcUtVWm9ic0YxUGdyeWNqY2c5OWxHb3p2dS9QVysxb1YrS2RBZXA3THYyTUNmTFh2aEhDVEtYSUMvVUd3VVUwTGs1ZzBpMlFBdm84T3dtUUlrdEhDK2dDdktvUEtCREVWekQ1dlNmYkVVQjJ0b3YrUUtxeWdCdVoyQ21UMXNjeGcyZjBUQzdaM3lZNWNQRHlRejRJTFZvMkJVSG5URXBCbXFNck1TNzRyUEdGUFBVMm9IM1k3R2RSbFBpZ3RBYkQ4ZE96RWVhMlpOdWtid3puemQ4d0VYbFRzRzJkaEFJQWZJU0RsOXpWcXRFWXNidEU5SENyUjBJUTBTeTQ0NzZKMXRWVnh3SXNhaUxxbWthd3A0a2dqZkhxY3A2a0pkd0cvc1JTQnJLTzBodmp1Um81MlZLT1kxa1ZKQ0dUZ0xoZWdzb1JNS1dFMVBDR3F1akNMY0pkREFoVkpNMTQyb2pOWFozRkdSeTdzMkp2eHZtek1DcHNJcFZNdzdIdUZVTDZTR2YrcEo3OTYwQWwyd0FFYmpQcU4xV04wQUs1b2JJeUhFaUxGRkRiSWxZQXZtb0FvWGZrZFU4RnZqR0xscVRCOVVjMlhTM2NpQVZGUXFiZ1RSVWFpS2RHQmtra0VrU1dhU1FUUnB5U0VjdUdjZ2pNeWtmY3pEUkZnbFJJRFNGWnhNVUVxT0lCSXBKb29RVVNrbERHZWtvSndNVlpPWldRczIwaEtvYWhZaFhQL2pRUHJ0enlGTTVRZjB5MWFES3FNb0ROWkRHeXVvY2E3ZHRPZFYzMHlUbnN4cFp5LzdXZEtBbWgvWjNFaFpheDVEZVIrZldRdy9qeUEzbXM2VHdPQld5QUh2RmNrRCtoZEt2TTNocTI3VytuYllSYUlRYWplT1lCSHpvVHhSb1F1OWFFMmkybGcxeGF2V3J0YUJ5NjdDc25zYUFFbUY5MWQwWjI5aGFwWW56R1pJNGEyN1QvdkpHb0JXQWpGU2tHZ2ZINU9aNVZ5ZFMwM1VZb1UxRnJIcTBSRWlKTmw1WlJQZVQ4QS9TVDM0dGV1NG51OFhzSEtNSmcrcUtiYTdTUmdYSmVhU3NDTEtsZUJCbU9UTUUyek5xOVVTM2pwZGw0ZEtqL2FkcVRVSTZHN1hiempBNGdyWGhoREJyRVM4TjJGQloySDUxcFMzS3h4U2tTMDJvUmtEVDRpNit1b1NUa3dQdDZUOUJFc29sV2JNOUtxVGpOQXlKa2taMlFOeXExT2xFM21QbTdVQk5QVFhtSFR4aWlWRFpIYTFwMzdCWHExVTNsM3FkYXIyeEltWFNsVjFGbTlGKzdhb0Z6MThvL253czZZYXB4N0NnbzhPa0p2ZHFkVHQxYzVTdjU2eDlYeThkOW01KzdUN1FhaDYyN0FkdDFubXZaa0tacmVzZzFaRHNVVzB0MHArNnlIbVRYNWFwRVEzZjlpcHJZS3NheWtUSHlmQ1BHRTk1ZHRUdFpjcmxqVzA3UDY3amZZNmZITXdJZjlwcEtONmJNSU50SjFjTWh5bk5tREV6eklPQlM1aldtRi9JU05Ib1ZnWHNpYWFKeng3Ym9xV0I4VnVCUERUMU5PcUtBNHRpSnJZbXhXamtGTmlwRm15NkNIaUpJb1NDMEMwUWlEQ0NDTmNCYnhGQlFlUVdDRVFVUVVUcmdMdUlvWUM2QlFKQkl3aTZEbmdLQmdYTUxSQUlGa0hFNm9DUGlLTWdmZ3NFSW9FZ0VuWEFReVJSa0x3RkFwRkNzRERWZE40aGkyVmFUL1M4aXhTU0xseVJFUU11RUc3SWpIUzBpU3pGRWRtS284d2hUZ0c1UGlma0tVN0lWNXhRb0RpaDBPZU1Jc1VaeFlvelNoVG5CcVdtUzlKaUlsdEY2M2liekV0bHpJdnFSbGF2UzlZeEF4RFEvd2trVU5vaUNSNUFCQUNLQUxBZWdEOHBzWHBYTkRKVWRRYjZoMlV0YmJLMHF4eEpta1RDMjBwTFM0c3BRalVDRzFZM3kzQkd5Wm10blZnWHdtampLbVcwY0pFcVhLR0kxdEtreUZZL0NaVUZhaDRtMDZuTm5FNklJWEgwVm9nWnBERzZ1Q3EwbEpHaUpwNE1uaU9BbUZCNGRHZkg1eks0L0FNK1B4WXh4U2lCa0h0dTlwVGFraEFkRkRoZlVnWDB5OEJoUXppMkI3Rkh6ajFvUnc5TTZpc0Izc2dmS1hDZHA5M1B0K293V3Q0SEhkemdTTnk3STRnZHhvNHNnSmRuT20wcWN5UVVvaGhjbzEvUU1EaWd6YVB5SW1WRTk0UjA3a1RUT0djU202S3U4ZDFFWkI3cEF2b2dCWU5DNnBRZEJ2djVmQytaU2ZORGdiQ0d5Tm5GOW5BazdrN1ROanZZRmtiajV6SWNBVHJWWi9KYVB5L3YwbmdLNHRVUDlQZzAwSVRkRzB4QktHU01IZEd4cVVBaVVsdWJrb095SUFtc0NRbm9FM3djMTFwT0N4Zmh3M29tUENxN2RWU1JTbS9sMUo1b2VMaGRpZFV5Z2lOeHg1QzR0azRtTVpiV29nWVlnSkhuRHhzOEFGdEN2MVBBSS9aWVgwWVpxU3pEMitkYmc0OElPcFVLbVMvMWlYK2t2bThmbi9mMVA2STR5MzJKLys3aTJJS014KzE1cnY3MTNKL1ByWklYWk1Ra0xjaVh4eC9qbFQ1QkRPci9IZFZlcmZ0WERQS0wzWVd2cXgvRDZrTXI4azl6dFpTT1FXaGR3djNBZ011Z0FHTXZ2UVMxR0VuYTYzdE1kdjF5VGIzb0hOWTRCWjlqNnprbUo0ai9mWldJU2hsRTAweThpRm9SM2tpYThNT0J3SGFDdWg0YWpPcXBFOW9EQno0VXBua2pXaEZlUkJNL3cyZ3BVZTJTVC85V2ViMEdxT3BiNkQ0Nm9JcnF6NWx6NmpzTWNXb3Blem9QdWY0V3p4T2VkUUR0ODhtb1lqRHdHQzdtalhpcFJaZzFUbFpHYXJUczRYY2hreWF2Y0wxWmxaT05acU5Ob3lwaTN1R1BnTlZYNjB6WTd3QTZDTThzbnZmUDdjNDBWYWxUU3JJczFkbFhyM0tzVXE4L1I1TDdzd25EcXZBcVE3MHU1aWJGZ2VZM3ZCV1JGWmtWc1RYY3FlNkFYakc2OUF4NzF6WkVCMzlUbkhaZ01QSEFhYWdHbU1Ra1ZYOGJmS1pEOHRNc3d6ZTVtVW1xTyswSTUrSG5hSHRWMzF1ZmtKeW81Nm5ZZUI2a2JoaFV6RkR3c1pTM1ZQQlJvb0lNQzA5MkxzODI4R1c3RFpwV3BnN3pzODQrMjlHZE9mOE03dENjb3BYcC9NN25MaEdFRW9LSFMrc096cG1QQW9lU3lyNndsZWFhM1EvS1o5WTByL1NIR1o1aUdxaVdTUDVYUzhwaDlXOHQ3Z1pFL0R2eVBaQmdRYndmRE1IWUN6aEFDRWRNcEtaa0YwdVZXZTFieVdGTENnV21zYW0zcytjRDN5RUM0eEJtaHlkeWZBc01Qa2dFN09nUDhsSXpoTXFvOW91Z1NCMFVSSklPUXJJOGFJSEIvemVmR1VsSkdVMmF5cTcyTjV6WXRYYWlPQzgzS1dKWnJHckpaQjZEa2l3Vjc5YzFJUmltd1diVUlpa1JBSnh4bXd5REFoQzVOSEg5NnNZTmQyOWRmWEQ5d2ZsemUzYkhvaHUyYmR3V3JCa1pibXZPU0hkVWFyVi9LdFhsaUphdE0rbmJWemxNOVdYc2hPU1lUWHFFSWpydGx3U0x0QWkwS0V4RWxobUpDcUlrQ29jb0hFVUlqaHR5TmlXVEMrV3FEVEFNRHNEc0dCTnpjMXRqbXphc0M1YVg1aGJuRmhmbVo2WW54b2VIVWxPeXU5SkwwOHFTVTFSZXRWOWFYcFJuU3NXZ01ZQnhFQlB4SXBncEFERk5wM2VuQzVWUkRRSkF3RnQ3cFdOenVPZC9BeWZpQUh6L3owRTJ5VXVja0c5MVlJQUIyODVScm1Tb1hCTzhBa0lwUlJkeGFBR0lsNEMveTJsLzFiVHJpTWQwUEtRL2dGR216VkhBdmVNUVNobkpmdkZQUTZ2WE5RZ0dXZzJHamw0V21Eck1FdFJwUThIR01tdWdiallzVk52NWNCc3BuaEFnYVFMWTQzVXdDSkdFRFVhSUNsaUFXc3NTMUY1RElUMHpySUc2MWJDd21xT1gyU2pMdC84dW5qSlU2WDNsNzZVRDhONkphT2xmK20yZmpMQVAwdnJCZXppN1gvWTN2Zk95R1kxMURZUGRMclNyZWZURXpxWmp4M2FjWFEwZk5mVy9mY2M3cDlVdHJBK0dJUWNkY3RvUnUrMjB5ekdlQ2tNcWVabzBhTlRKc3dYU1BRZHQzSCszQTJMMjhjUWNkOHd1bEk4UzlnbnZvSHdBNGUwYzcrdXV2czVXQiszSGVKRWs3M1NjckJoenhLVG4vdFJWMi8wUDNZMnQzdE9vVG9NTk1SWjZ3RlpvREluY0Z1L2tvMDZJM0VUMFkzYWs3bkFrUml0NVJtbXE1eERPZTRaNEt4WmF4eEErcGlWMXFTLzNMVzF4RE9VaUxOeGZKeVpCa2hScHBKTUJkUUJkeW9QL1VoNHBEOWYvcmpxdHRzbHQybGplc2VPSGJORTU3djVBQUZNZnZsa00zaUY2MEcvVGZsSE84dzdVbG5FTXFscGw3MWxNaHJBMWhPYmE0S2Y4TllKSm9XK0RIMXhnZUVybzFoMjg3ZDhLS0xaUldaVlBqVXRJRHFac1hRNk11VXYzZnM5aGNxbytwc1QxdCtYOVlRd0RBQU09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTpmb250L3dvZmY7YmFzZTY0LGQwOUdSZ0FCQUFBQUFBL2NBQThBQUFBQUdYZ0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCV0FBQUFEc0FBQUJVSUlzbGVrOVRMeklBQUFHVUFBQUFRd0FBQUZZK0lFbDJZMjFoY0FBQUFkZ0FBQUJlQUFBQnRzaXQ3TmRqZG5RZ0FBQUNPQUFBQUJNQUFBQWdCdGYvQkdad1oyMEFBQUpNQUFBRmtBQUFDM0NLa1pCWloyRnpjQUFBQjl3QUFBQUlBQUFBQ0FBQUFCQm5iSGxtQUFBSDVBQUFCUllBQUFZV1JzSEowV2hsWVdRQUFBejhBQUFBTXdBQUFEWVgwOFp5YUdobFlRQUFEVEFBQUFBZ0FBQUFKQWc4Qkl4b2JYUjRBQUFOVUFBQUFCd0FBQUFjR3liLy9teHZZMkVBQUExc0FBQUFFQUFBQUJBRDFnVi9iV0Y0Y0FBQURYd0FBQUFnQUFBQUlBRTBERGR1WVcxbEFBQU5uQUFBQVhjQUFBTE56SjBmSVhCdmMzUUFBQThVQUFBQVNRQUFBR1dRYTFEcWNISmxjQUFBRDJBQUFBQjZBQUFBaHVWQks3eDRuR05nWkdCZzRHSXdZTEJqWUhKeDh3bGg0TXRKTE1samtHSmdZWUFBa0R3eW16RW5NejJSZ1FQR0E4cXhnR2tPSUdhRGlBSUFKanNGU0FCNG5HTmdaSDdJT0lHQmxZR0JxWXBwRHdNRFF3K0VabnpBWU1qSUJCUmxZR1Ztd0FvQzBseFRHQnhlTUx4Z1pRNzZuOFVReFJ6TU1BMG96QWlTQXdBSWtnd1VBSGljN1pIQkRjQXdDQU12RGNtajZpZ2RLSy9PenhhcG9ZeFJwTE5rQy9Fd3dBQzZ1SVZCZTJqRUxLVXQ4ODZadWRXT1JlNWpieW1oOHBaNmFOZDBjY3BNL3JsU1Y3a1pmWDFrZzRWYXc0djRoQmZScVJmeEpTK1lMMHUwRXpVQUFIaWNZMkJBQXhJUXlCejhQd3VFQVJKMkE5OEFlSnl0Vm1sMzAwWVVIWGxKbklRc0pRc3RhbUhFeEdtd1JpWnN3WUFKUWJKaklGMmNyWldnaXhRNzZiN3hpZC9nWC9OazJuUG9OMzVhN3hzdkpKQzA1M0NhazZOMzU4M1Z6TnRsRWxxUzJBdnJrWlNiTDhYVTFpYU43RHdKNllaTnkxRjhLRHQ3SVdXS3lkOEZVUkN0bHRxM0hZZEVSQ0pRdGE2d1JCRDdIbG1hWkh6b1VVYkx0cVJYVGNvdFBla3VXK05CdlZYZmZobzZ5ckU3b2FSbU0zUm9QYklsVlJoVm9raW1QVkxTcG1XbytpdEpLN3kvd3N4WHpWRENpRTRpYWJ3Wnh0QkkzaHRudE1wb05iYmpLSXBzc3R3b1VpU2E0VUVVZVpUVkV1ZmtpZ2tNeWdmTmtQTEtweEhsdy95SXJOaWpuRmF3UzdiVC9MNHZlYWQzT1QreFgyOVJ0dVJBSDhpTzdPRHNkQ1ZmaEZ0YllkeTBrKzBvVkJGMjEzZENiTm5zVlA5bWovS2FSZ08zS3pLOTBJeGdxWHlGRUNzL29jeitJVmt0bkUvNWtrZWpXcktSRTBIclpVN3NTejZCMXVPSUtYSE5HRm5RM2RFSkVkVDlrak1NOXBnK0h2engzaW1XQ3hNQ2VCekxla2NsbkFnVEtXRnpORW5hTUhKZ0pXV0xLcW4xcnBnNDVYVmF4RnZDZnUzYTBaZk9hT05RZDJJOFd3OGRXemxSeWZGb1VxZVpUSjNhU2MyaktRMmlsSFFtZU15dkF5Zy9va2xlYldNMWlaVkgwemhteG9SRUlnSXQzRXRUUVN3N3NhUXBCTTJqR2IyNUc2YTVkaTFhcE1rRDlkeWo5L1RtVnJpNTAxUGFEdlN6Um45V3AySTYyQXZUNldua0wvRnAydVVpUmVuNjZSbCtUT0pCMWdJeWtTMDJ3NVNEQjIvOUR0TEwxNVljaGRjRzJPN3Q4eXVvZmRaRThLUUIreHZRSGsvVktRbE1oWmhWaUZaQVlxMXJXWmJKMWF3V3FjalVkME9hVnI2czB3U0tjaHdYeDc2TWNmMWZNek9XbUJLKzM0blRzeU11UFhQdFN3alRISHliZFQyYTE2bkZjZ0Z4Wm5sT3AxbVc3K3MweC9JRG5lWlpudGZwQ0V0YnA2TXNQOVJwZ2VWSE9oMWplVUVMbW5UZndaQ0xNT1FDRHBBd2hLVURRMWhlZ2lFc0ZReGh1UWhEV0JaaENNc2xHTUx5WXhqQ2NobUdzTHlzWmRYVVUwbmoycGxZQm14Q1lHS09Icm5NUmVWcUtybFVRcnRvVkdwRG5oSnVsVlFVejZwL1phQmVQUEtHT2JBV1NKZkltbDh4enBXUFJ1WDQxaFV0YnhvN1Y4Q3g2bThmanZZNThWTFdpNFUvQmYvVjFsUWx2V0xOdzVPcjhCdUdubXducWphcGVIUk5sODlWUGJyK1gxUlVXQXYwRzBpRldDaktzbXh3WnlLRWp6cWRobXFnbFVQTWJNdzh0T3QxeTVxZncvMDNNVUlXVVAzNE54UWFDOXlEVGxsSldlM2dyTlhYMjdMY080TnlPQk1zU1RFMzgvcFcrQ0lqczlKK2tWbktubzk4SG5BRmpFcGwyR29EclJXODJTY3hENW5lSk04RWNWdFJOa2phMk00RWlRMGM4NEI1ODUwRUptSHFxZzNrVHVHR0RmZ0ZZVzdCZVNkY29ucWpMSWZ1UmV6ektLVDhXNmZpUlBhb2FJekFzOWtiWWEvdlFzcHZjUXdrTlBtbGZneFVGYUdwR0RVVjBEUlNicWdHWDhiWnVtMUN4ZzcwSXlwMnc3S3M0c1BIRnZlVmttMFpoSHlraU5Xam81L1dYcUpPcXR4K1poU1g3NTIrQmNFZ05URi9lOTkwY1pES3UxckpNa2R0QTFPM0dwVlQxNXBENDFXSDZ1WlI5YjNqN0JNNWE1cHV1aWNlZWwvVHF0dkJ4Vndzc1BadER0SlNKaGZVOVdHRkRhTEx4YVZRNm1VMFNlKzRCeGdXR05EdlVJcU4vNnY2Mkh5ZUsxV0YwWEVrMzA3VXQ5SG5ZQXo4RDloL1IvVUQwUGRqNkhJTkxzLzNtaE9mYnZUaGJKbXVvaGZycCtnM01HdXR1Vm02QnR6UWRBUGlJVWV0anJqS0RYeW5CbkY2cExrYzZTSGdZOTBWNGdIQUpvREY0QlBkdFl6bVV3Q2orWXc1UHNEbnpHSFFaQTZETGVZdzJHYk9Hc0FPY3hqc01vZkJIbk1ZZk1HY2RZQXZtY01nWkE2RGlEa01uakFuQUhqS0hBWmZNWWZCMTh4aDhBMXo3Z044eXh3R01YTVlKTXhoc0svcDFqRE1MVjdRWGFDMlFWV2dBMU5QV056RDRsQlRaY2oramhlRy9iMUJ6UDdCSUtiK3FPbjJrUG9UTHd6MVo0T1krb3RCVFAxVjA1MGg5VGRlR09ydkJqSDFENE9ZK2t5L0dNdGxCcitNZkpjS0I1UmRiRDduNzRuM0Q5dkZRTGtBQVFBQi8vOEFEM2ljVlZUZGI5TldGTC9uK2pPT1k4ZUpQMExxcEkxRGJOTkFTZVBXRG0xSnMzNm5zTGEwcUROYlllM0dHQ3RpSFNCdDAxWUtXdW1FaE1UMk1FMlQ5Z0o3MndjU1NOdnI2QjZRUnJlM1NUd2d4QjZCL1FtRGh0MjBBbW5TOWZVNXgwZm4vSHpPN3h3RUNEMy9rbjVDemFBc3l0ZmFFRkNZQW53YVlVUmhkQW9oOUQ2aUtKR3FxOGwwbm1aU1JlZ0VObS9aRG5SQWw5OFBmdGtBdlJ5QTU1ZGJRVmM1K3Y2enAzSlNUTkNORlk3bnVVSFprVURpa3h5K3pFaU9OQ1JKK0xkbkQyV2VnMnVzS3Fzc01UUWVjaHkrSmtsRFVWc2k2WnA0TnFqclZBMjFvdTZha0pBRm1tSVFodEVETjlOVFlVMEVJTkErUUJpTHVONVNFNGlDbDRnTm5UanlTMFkxS01Zb2dpcERVbE1sMkFzY2E5bmRYVUhTYWQ2Rm9JbVIwYW5yOGtaSjFNU24vNHE2Q0tVL3BGWklyVVRieFBPUWFvTW5vbnluOFVTTXhvRzdkSWxMQ0RRUHhoMVoxQmkzWVJnTmx5QWgrRzdoRFVwRUdxbFlvV1loQnBnbENvQ0dKVVJqZW1rTEVmbVJFMGxEVVl3eXk2U0xCWlhONTVwSXFwUkJpbFhPVXBUS1doM2dad0Z2akhRMmRuYU9DS24yNnA3NnhuajdnRzN5WHl6Ly9BbjkyVStYaHZ2Q3NLOTBlTGJQaGJFeHUzcDRGdGJEbFpXYkYvRXlRaHpCc1VnOW9xWlJMenFJM2tESDBUbjBHYnFLM3F6TmZYanlTRDJmTVpXNElHQm1EMFF3SGtVTWdjYmcweHhMa2JaR2VCeVpGNENtVVVpQWltTlI0SGtJRVVBTTZtdXJSK2V1WEY2OXVuYjEvUExpZXd2emM4ZVBIZzlmR3g3eVBVTVhHYlZZOElNcU9CM2cySnhOSHBicnJrSjNsMjJ4bXFvYjJyYko1aVJTZXQzUURRazBOUXRlcnJ6bFJHVkIwMW5pa0s5aXA5VHBPN3BSNnRTNUxZdENvcFoxVWhhN3krZDgzVkR5SkpaakI4U044NGtibXdXRG1FalJJTmYwSVRHSk4vVzVFbS9OQWJpMk45QTJHRlN6TGVtY04rN2wwaTNaYWpEWU51QVZkZ0hrV3VPSzFXNzFXSGpkNnJXS2UxTnBNTTFrZHJGUWtvVDJXNTRtTVV6SzlDNjRoNzRXRlNXbEtEL21EcmtYUERQRk1KTDJiYVpka0VxRnhiU1JUK3NVdDFrelhkZkU2K1ErcXB2KzJhNTlNN29wVDZYVVZDd3hGdWt3QzU1WE1Ec2lZNGtZTVUzSnBqNnpyK3VzYitwU3YwTlNrMlBYNElyVTQrNStxMlJad2RwcVQyUWhlY0RySHh5WXFzSVBUbmE5bVQ2bC9DbG1uY1pzZFdwZ3NOODdjRXdSZWxiWGdveXovL3o4NXQ5dXhTVUhiZlVmSWVveDZiK0grdEF3bWtEVDZBUjZGMzFhKzFpTjRUaWI1akJ3Nzh4aUdmYmFXSlRvMFNod2NZaHpjSm9HSkFBYlIrdzhpcUE0RjRuUEUvWXFJRXNnenlNSmlURkpQSmFBR0dKaXpCemllUncyaDQydlQwNit2WEJzN3ZYdzhNems5T1Qwb2FsWEQ5YkhoZ2JKV3VqUkM1cWRTREtaSW16emdIUzl1U0g4cHZaU2Vja1J3aEpWSjkzejk4TVdsYnI4N2JZWFhnak1DeUhabmRPQ25PMFFBcFg5Z0F6T3RzQnkxT1BLUkNXdDkrV0QyYWdaVEFWbWREYXc5dXRwSWhiYnRJb2k0aFZScVdodHhWVXRxNUhUT1BYLzl6ZDRRTnI4enRZeTQyNzlqRW9uYVBWTTNSM1BKRjM4dlZ1cHVBVnpSOHRJdHpsWnFVeWEzU05teWl3MHJaYkgzUWhEd2hBeERHOXduaVhyT2dsMlJHNEcxSHEzdGNZNTIxNTQ1ZUtPVERnRU1CUm1kaXdQTjl1RW56ZWVONmgvOEs4b2pSemsxZ3FPbFltUWNVUXdTajRpc2pJQThEUXBjM01JTVJ6VWUvV3RSZFlCTXBrenEzbEoyRWh1RFpJZkpIMmJ5cEZGUXJhdmtZVitvTzd6UnZUZTcrTE82TjE3Z3BIZzZLOW9MWWJQeEZRaWNIOXQzajE3VFV6enQyL3phZkU2M3MxUnpNbEhrdlRvSklQalJyU1JFdU54RVI1SGpjWXUrR2lDWllRSER3U0duZmdQaDFrTjV3QUFlSnhqWUdSZ1lBRGlIV2toWCtMNWJiNHljRE8vQUlvdzNIeDJNQU5HLy8vM1A0dmxKWE13a012QndBUVNCUUNtVmcrQkFIaWNZMkJrWUdBTytwL0Z3TUFxOC8vZi8zOHNMeG1BSWlpQUhRQ2k1QWJRQStnQUFBVWNBQUFEb0FBQUFzb0FBQVBvQUFBRDZBQUFBK2ovL2dBQUFBQUFTQUNZQU53QjNBS3lBd3NBQVFBQUFBY0Fqd0FIQUFBQUFBQUNBQ1lBTmdCekFBQUFqQXR3QUFBQUFIaWNkWkRMVHNKQUZJYi9rWXNLaVJwTjNEb3JBekdXUytJQ0VoSVNER3gwUXd4YlUwcHBTMHFIVEFjU1hzTjM4R0Y4Q1ovRm4zWXdCbUtiNlh6bm16Tm5UZ2ZBTmI0aGtEOVBIRGtMbkRISytRU242Rmt1MEQ5YkxwSmZMSmRReFp2bE12Mjc1UW9lRUZpdTRnWWZyQ0NLNTR3VytMUXNjQ1V1TFovZ1F0eFpMdEEvV2k2U2U1Wkx1Qld2bHN2MG51VUtKaUsxWE1XOStCcW8xVlpIUVdoa2JWQ1g3V2FySTZkYnFhaWl4STJsdXphaDBxbnN5N2xLakIvSHl2SFVjczlqUDFqSHJ0NkgrM25pNnpSU2lXdzV6YjBhK1ltdlhlUFBkdFhUVGRBMlppN25XaTNsMEdiSWxWWUwzek5PYU15cTIyajhQUThES0t5d2hVYkVxd3BoSUZHanJYTnVvNGtXT3FRcE15UXo4NndJQ1Z6RU5DN1czQkZtS3lualBzZWNVVUxyTXlNbU8vRDRYUjc1TVNuZy9waFY5TkhxWVR3aDdjNklNaS9abDhQdURyTkdwQ1RMZERNNysrMDl4WWFudFdrTmQrMjYxRmxYRXNPREdwTDNzVnRiMEhqMFRuWXJocmFMQnQ5Ly91OEg3SGlFVlFCNG5HTmdZb0FBTGdic2dKMlJpWkdaa1lXUmxaR05rWjJSZzRFMU9TTTFPWnVsdUNTeGlLVzBPTFdJUGJrb3Z6eFAxNGdYUW9QRVMwb0x1Q0c4cE1UaXpHUUdCZ0RyOHhJcUFBQUFlSnhqOE43QmNDSW9ZaU1qWTEva0JzYWRIQXdjRE1rRkd4bFluVFl4TURKb2dSaWJ1WmdZT1NBc1BnWXdpODFwRjlNQm9EUW5rTTN1dEl2QkFjSm1abkRacU1MWUVSaXh3YUVqWWlOemlzdEdOUkJ2RjBjREF5T0xRMGR5U0FSSVNTUVFiT1poWXVUUjJzSDR2M1VEUys5R0pnWVhBQXgySS9RQUFBPT1cIiIsImltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSAnc21vb3Roc2Nyb2xsLXBvbHlmaWxsJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuLy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbi8qKlxyXG4gKiBTbW9vdGhseSBzY3JvbGxzIHRvIHRoZSBhbmNob3Igc3BlY2lmaWVkIGJ5IHRoZSBsaW5rIHRvIHdoaWNoIHRoaXMgbGlzdGVuZXJcclxuICogaXMgYXR0YWNoZWQuXHJcbiAqL1xyXG5cclxubGV0IHNjcm9sbFRvQW5jaG9yID0gZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICB9KTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gIHNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xyXG4gIFxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJykuZm9yRWFjaChmdW5jdGlvbihhbmNob3IpIHtcclxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRvQW5jaG9yKTtcclxuICB9KTtcclxufTsiLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
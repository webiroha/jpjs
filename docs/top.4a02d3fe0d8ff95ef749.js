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
/******/ 	__webpack_require__.p = "/jpjs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Element = function Element(props) {
  var tag = document.createElement(props.elem);
  tag.className = props["class"];

  if (Array.isArray(props.text)) {
    props.text.forEach(function (t, i) {
      var line = document.createTextNode(t);
      var br = document.createElement('br');
      tag.appendChild(line);
      if (props.text.length - 1 > i) tag.appendChild(br);
    });
  } else {
    tag.textContent = props.text;
  }

  return {
    tag: tag
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Element);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Frag = function Frag() {
  var frag = document.createDocumentFragment();
  return function () {
    return frag;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Frag);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);





var Center = function Center() {
  var root = document.getElementById('root');
  var WholeFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  var Wrapper = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
    elem: 'div',
    "class": 'wrapper'
  });
  var CenterFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  return {
    root: root,
    WholeFrag: WholeFrag,
    Wrapper: Wrapper,
    CenterFrag: CenterFrag
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Center);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/sanitize.css/sanitize.css
var sanitize = __webpack_require__(3);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(2);

// EXTERNAL MODULE: ./src/app/components/atom/Frag.js
var Frag = __webpack_require__(1);

// EXTERNAL MODULE: ./src/app/components/atom/Element.js
var Element = __webpack_require__(0);

// CONCATENATED MODULE: ./src/app/components/NihongoMotion/index.js


var NihongoMotion_NihongoMotion = function NihongoMotion(props) {
  var _Element = Object(Element["a" /* default */])(props),
      tag = _Element.tag;

  tag.style.top = "".concat(props.y, "em");
  tag.style.left = "".concat(props.x, "em");
  return function () {
    return tag;
  };
};

/* harmony default export */ var components_NihongoMotion = (NihongoMotion_NihongoMotion);
// EXTERNAL MODULE: ./src/app/components/layout/Center/index.js
var Center = __webpack_require__(4);

// CONCATENATED MODULE: ./src/app/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _Center = Object(Center["a" /* default */])(),
    root = _Center.root,
    WholeFrag = _Center.WholeFrag,
    Wrapper = _Center.Wrapper,
    CenterFrag = _Center.CenterFrag;

root.className = 'root_layout_top';
Wrapper.tag.className = 'wrapper wrapper_layout_top';
var CenterWrapper = Object(Element["a" /* default */])({
  elem: 'div',
  "class": 'center-wrapper'
});
var DecoWrapper = Object(Element["a" /* default */])({
  elem: 'div',
  "class": 'deco slide-in-upper__0'
});
var Deco = Object(Element["a" /* default */])({
  elem: 'span',
  "class": 'deco__item',
  text: '遊'
});
var JPJS = Object(Element["a" /* default */])({
  elem: 'h1',
  "class": 'jpjs opacity_0 slide-in-upper__1',
  text: ['Japanese', 'JavaScript']
});
var MotionFrag = Object(Frag["a" /* default */])();
var Letters = [{
  letter: 'に',
  x: -1.4,
  y: -0.5
}, {
  letter: 'ほ',
  x: 1.0,
  y: -0.1
}, {
  letter: 'ん',
  x: -1.4,
  y: 1.4
}, {
  letter: 'ご',
  x: 1.7,
  y: 2.6
}];

var _Letters$map = Letters.map(function (i) {
  return components_NihongoMotion({
    elem: 'span',
    "class": 'nihongo-motion opacity_0',
    text: i.letter,
    x: i.x,
    y: i.y
  });
}),
    _Letters$map2 = _slicedToArray(_Letters$map, 4),
    Hi = _Letters$map2[0],
    Ra = _Letters$map2[1],
    Ga = _Letters$map2[2],
    Na = _Letters$map2[3];

MotionFrag().appendChild(Hi());
MotionFrag().appendChild(Ra());
MotionFrag().appendChild(Ga());
MotionFrag().appendChild(Na());
Deco.tag.appendChild(MotionFrag());
DecoWrapper.tag.appendChild(Deco.tag);
CenterFrag().appendChild(DecoWrapper.tag);
CenterFrag().appendChild(JPJS.tag);
CenterWrapper.tag.appendChild(CenterFrag());
var BottomWrapper = Object(Element["a" /* default */])({
  elem: 'div',
  "class": 'bottom-wrapper fade-in'
});
var BottomFrag = Object(Frag["a" /* default */])();
var Copy = Object(Element["a" /* default */])({
  elem: 'p',
  "class": 'copy',
  text: 'Play with Japanese & JavaScript'
});
var StartButton = Object(Element["a" /* default */])({
  elem: 'a',
  "class": 'start-button',
  text: "Let's start!"
});
StartButton.tag.href = './intro/preparation';
BottomFrag().appendChild(Copy.tag);
BottomFrag().appendChild(StartButton.tag);
BottomWrapper.tag.appendChild(BottomFrag());
WholeFrag().appendChild(CenterWrapper.tag);
WholeFrag().appendChild(BottomWrapper.tag);
Wrapper.tag.appendChild(WholeFrag());
root.appendChild(Wrapper.tag);

/***/ })
/******/ ]);
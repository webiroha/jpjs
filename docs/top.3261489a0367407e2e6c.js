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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _components_atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n/* harmony import */ var _components_NihongoMotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);\n/* harmony import */ var _components_layout_Center__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar _Center = Object(_components_layout_Center__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\n    root = _Center.root,\n    WholeFrag = _Center.WholeFrag,\n    Wrapper = _Center.Wrapper,\n    CenterFrag = _Center.CenterFrag;\n\nroot.className = 'root_layout_top';\nWrapper.tag.className = 'wrapper wrapper_layout_top';\nvar CenterWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'center-wrapper'\n});\nvar DecoWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'deco slide-in-upper__0'\n});\nvar Deco = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'span',\n  \"class\": 'deco__item',\n  text: '遊'\n});\nvar JPJS = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'h1',\n  \"class\": 'jpjs opacity_0 slide-in-upper__1',\n  text: ['Japanese', 'JavaScript']\n});\nvar MotionFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Letters = [{\n  letter: 'に',\n  x: -1.4,\n  y: -0.5\n}, {\n  letter: 'ほ',\n  x: 1.0,\n  y: -0.1\n}, {\n  letter: 'ん',\n  x: -1.4,\n  y: 1.4\n}, {\n  letter: 'ご',\n  x: 1.7,\n  y: 2.6\n}];\n\nvar _Letters$map = Letters.map(function (i) {\n  return Object(_components_NihongoMotion__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    elem: 'span',\n    \"class\": 'nihongo-motion opacity_0',\n    text: i.letter,\n    x: i.x,\n    y: i.y\n  });\n}),\n    _Letters$map2 = _slicedToArray(_Letters$map, 4),\n    Hi = _Letters$map2[0],\n    Ra = _Letters$map2[1],\n    Ga = _Letters$map2[2],\n    Na = _Letters$map2[3];\n\nMotionFrag().appendChild(Hi());\nMotionFrag().appendChild(Ra());\nMotionFrag().appendChild(Ga());\nMotionFrag().appendChild(Na());\nDeco.tag.appendChild(MotionFrag());\nDecoWrapper.tag.appendChild(Deco.tag);\nCenterFrag().appendChild(DecoWrapper.tag);\nCenterFrag().appendChild(JPJS.tag);\nCenterWrapper.tag.appendChild(CenterFrag());\nvar BottomWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'bottom-wrapper fade-in'\n});\nvar BottomFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Copy = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'p',\n  \"class\": 'copy',\n  text: 'Play with Japanese & JavaScript'\n});\nvar StartButton = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'a',\n  \"class\": 'start-button',\n  text: \"Let's start!\"\n});\nStartButton.tag.href = './intro/preparation';\nBottomFrag().appendChild(Copy.tag);\nBottomFrag().appendChild(StartButton.tag);\nBottomWrapper.tag.appendChild(BottomFrag());\nWholeFrag().appendChild(CenterWrapper.tag);\nWholeFrag().appendChild(BottomWrapper.tag);\nWrapper.tag.appendChild(WholeFrag());\nroot.appendChild(Wrapper.tag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgRnJhZyBmcm9tICcuL2NvbXBvbmVudHMvYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vY29tcG9uZW50cy9hdG9tL0VsZW1lbnQnO1xuaW1wb3J0IE5paG9uZ29Nb3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL05paG9uZ29Nb3Rpb24nO1xuaW1wb3J0IENlbnRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0NlbnRlcic7XG5cbmNvbnN0IHsgcm9vdCwgV2hvbGVGcmFnLCBXcmFwcGVyLCBDZW50ZXJGcmFnIH0gPSBDZW50ZXIoKTtcblxucm9vdC5jbGFzc05hbWUgPSAncm9vdF9sYXlvdXRfdG9wJztcbldyYXBwZXIudGFnLmNsYXNzTmFtZSA9ICd3cmFwcGVyIHdyYXBwZXJfbGF5b3V0X3RvcCc7XG5cbmNvbnN0IENlbnRlcldyYXBwZXIgPSBFbGVtZW50KHtcbiAgZWxlbTogJ2RpdicsXG4gIGNsYXNzOiAnY2VudGVyLXdyYXBwZXInLFxufSk7XG5cbmNvbnN0IERlY29XcmFwcGVyID0gRWxlbWVudCh7XG4gIGVsZW06ICdkaXYnLFxuICBjbGFzczogJ2RlY28gc2xpZGUtaW4tdXBwZXJfXzAnLFxufSk7XG5cbmNvbnN0IERlY28gPSBFbGVtZW50KHtcbiAgZWxlbTogJ3NwYW4nLFxuICBjbGFzczogJ2RlY29fX2l0ZW0nLFxuICB0ZXh0OiAn6YGKJyxcbn0pO1xuXG5jb25zdCBKUEpTID0gRWxlbWVudCh7XG4gIGVsZW06ICdoMScsXG4gIGNsYXNzOiAnanBqcyBvcGFjaXR5XzAgc2xpZGUtaW4tdXBwZXJfXzEnLFxuICB0ZXh0OiBbJ0phcGFuZXNlJywgJ0phdmFTY3JpcHQnXSxcbn0pO1xuXG5jb25zdCBNb3Rpb25GcmFnID0gRnJhZygpO1xuXG5jb25zdCBMZXR0ZXJzID0gW1xuICB7IGxldHRlcjogJ+OBqycsIHg6IC0xLjQsIHk6IC0wLjUgfSxcbiAgeyBsZXR0ZXI6ICfjgbsnLCB4OiAxLjAsIHk6IC0wLjEgfSxcbiAgeyBsZXR0ZXI6ICfjgpMnLCB4OiAtMS40LCB5OiAxLjQgfSxcbiAgeyBsZXR0ZXI6ICfjgZQnLCB4OiAxLjcsIHk6IDIuNiB9LFxuXTtcbmNvbnN0IFtIaSwgUmEsIEdhLCBOYV0gPSBMZXR0ZXJzLm1hcCgoaSkgPT5cbiAgTmlob25nb01vdGlvbih7XG4gICAgZWxlbTogJ3NwYW4nLFxuICAgIGNsYXNzOiAnbmlob25nby1tb3Rpb24gb3BhY2l0eV8wJyxcbiAgICB0ZXh0OiBpLmxldHRlcixcbiAgICB4OiBpLngsXG4gICAgeTogaS55LFxuICB9KVxuKTtcblxuTW90aW9uRnJhZygpLmFwcGVuZENoaWxkKEhpKCkpO1xuTW90aW9uRnJhZygpLmFwcGVuZENoaWxkKFJhKCkpO1xuTW90aW9uRnJhZygpLmFwcGVuZENoaWxkKEdhKCkpO1xuTW90aW9uRnJhZygpLmFwcGVuZENoaWxkKE5hKCkpO1xuRGVjby50YWcuYXBwZW5kQ2hpbGQoTW90aW9uRnJhZygpKTtcblxuRGVjb1dyYXBwZXIudGFnLmFwcGVuZENoaWxkKERlY28udGFnKTtcbkNlbnRlckZyYWcoKS5hcHBlbmRDaGlsZChEZWNvV3JhcHBlci50YWcpO1xuQ2VudGVyRnJhZygpLmFwcGVuZENoaWxkKEpQSlMudGFnKTtcbkNlbnRlcldyYXBwZXIudGFnLmFwcGVuZENoaWxkKENlbnRlckZyYWcoKSk7XG5cbmNvbnN0IEJvdHRvbVdyYXBwZXIgPSBFbGVtZW50KHtcbiAgZWxlbTogJ2RpdicsXG4gIGNsYXNzOiAnYm90dG9tLXdyYXBwZXIgZmFkZS1pbicsXG59KTtcblxuY29uc3QgQm90dG9tRnJhZyA9IEZyYWcoKTtcblxuY29uc3QgQ29weSA9IEVsZW1lbnQoe1xuICBlbGVtOiAncCcsXG4gIGNsYXNzOiAnY29weScsXG4gIHRleHQ6ICdQbGF5IHdpdGggSmFwYW5lc2UgJiBKYXZhU2NyaXB0Jyxcbn0pO1xuXG5jb25zdCBTdGFydEJ1dHRvbiA9IEVsZW1lbnQoe1xuICBlbGVtOiAnYScsXG4gIGNsYXNzOiAnc3RhcnQtYnV0dG9uJyxcbiAgdGV4dDogXCJMZXQncyBzdGFydCFcIixcbn0pO1xuU3RhcnRCdXR0b24udGFnLmhyZWYgPSAnLi9pbnRyby9wcmVwYXJhdGlvbic7XG5cbkJvdHRvbUZyYWcoKS5hcHBlbmRDaGlsZChDb3B5LnRhZyk7XG5Cb3R0b21GcmFnKCkuYXBwZW5kQ2hpbGQoU3RhcnRCdXR0b24udGFnKTtcbkJvdHRvbVdyYXBwZXIudGFnLmFwcGVuZENoaWxkKEJvdHRvbUZyYWcoKSk7XG5cbldob2xlRnJhZygpLmFwcGVuZENoaWxkKENlbnRlcldyYXBwZXIudGFnKTtcbldob2xlRnJhZygpLmFwcGVuZENoaWxkKEJvdHRvbVdyYXBwZXIudGFnKTtcbldyYXBwZXIudGFnLmFwcGVuZENoaWxkKFdob2xlRnJhZygpKTtcblxucm9vdC5hcHBlbmRDaGlsZChXcmFwcGVyLnRhZyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzP2U4OTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzUxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Frag = function Frag() {\n  var frag = document.createDocumentFragment();\n  return function () {\n    return frag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Frag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0ZyYWcuanM/YTk5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGcmFnID0gKCkgPT4ge1xuICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIHJldHVybiAoKSA9PiBmcmFnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJhZztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Element = function Element(props) {\n  var tag = document.createElement(props.elem);\n  tag.className = props[\"class\"];\n\n  if (Array.isArray(props.text)) {\n    props.text.forEach(function (t, i) {\n      var line = document.createTextNode(t);\n      var br = document.createElement('br');\n      tag.appendChild(line);\n      if (props.text.length - 1 > i) tag.appendChild(br);\n    });\n  } else {\n    tag.textContent = props.text;\n  }\n\n  return {\n    tag: tag\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Element);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0VsZW1lbnQuanM/MThhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbGVtZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcHMuZWxlbSk7XG4gIHRhZy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzcztcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcy50ZXh0KSkge1xuICAgIHByb3BzLnRleHQuZm9yRWFjaCgodCwgaSkgPT4ge1xuICAgICAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KTtcbiAgICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgICAgIGlmIChwcm9wcy50ZXh0Lmxlbmd0aCAtIDEgPiBpKSB0YWcuYXBwZW5kQ2hpbGQoYnIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRhZy50ZXh0Q29udGVudCA9IHByb3BzLnRleHQ7XG4gIH1cblxuICByZXR1cm4geyB0YWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);\n\n\nvar NihongoMotion = function NihongoMotion(props) {\n  var _Element = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props),\n      tag = _Element.tag;\n\n  tag.style.top = \"\".concat(props.y, \"em\");\n  tag.style.left = \"\".concat(props.x, \"em\");\n  return function () {\n    return tag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NihongoMotion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9OaWhvbmdvTW90aW9uL2luZGV4LmpzP2I0MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi4vYXRvbS9FbGVtZW50JztcblxuY29uc3QgTmlob25nb01vdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRhZyB9ID0gRWxlbWVudChwcm9wcyk7XG5cbiAgdGFnLnN0eWxlLnRvcCA9IGAke3Byb3BzLnl9ZW1gO1xuICB0YWcuc3R5bGUubGVmdCA9IGAke3Byb3BzLnh9ZW1gO1xuXG4gIHJldHVybiAoKSA9PiB0YWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOaWhvbmdvTW90aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n\n\n\n\n\nvar Center = function Center() {\n  var root = document.getElementById('root');\n  var WholeFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var Wrapper = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elem: 'div',\n    \"class\": 'wrapper'\n  });\n  var CenterFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return {\n    root: root,\n    WholeFrag: WholeFrag,\n    Wrapper: Wrapper,\n    CenterFrag: CenterFrag\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQ2VudGVyL2luZGV4LmpzPzU2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzYW5pdGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuaW1wb3J0IEZyYWcgZnJvbSAnLi4vLi4vYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4uLy4uL2F0b20vRWxlbWVudCc7XG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIGNvbnN0IFdob2xlRnJhZyA9IEZyYWcoKTtcblxuICBjb25zdCBXcmFwcGVyID0gRWxlbWVudCh7XG4gICAgZWxlbTogJ2RpdicsXG4gICAgY2xhc3M6ICd3cmFwcGVyJyxcbiAgfSk7XG5cbiAgY29uc3QgQ2VudGVyRnJhZyA9IEZyYWcoKTtcblxuICByZXR1cm4geyByb290LCBXaG9sZUZyYWcsIFdyYXBwZXIsIENlbnRlckZyYWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbnRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);
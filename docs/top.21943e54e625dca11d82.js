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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _components_atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n/* harmony import */ var _components_atom_ElementWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);\n/* harmony import */ var _components_NihongoMotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);\n/* harmony import */ var _components_layout_Center__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar _Center = Object(_components_layout_Center__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(),\n    root = _Center.root,\n    WholeFrag = _Center.WholeFrag,\n    Wrapper = _Center.Wrapper,\n    CenterFrag = _Center.CenterFrag;\n\nvar CenterWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'center-wrapper'\n});\nvar Deco = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'span',\n  \"class\": 'deco slide-in-upper__0',\n  text: '遊'\n});\nvar Title = Object(_components_atom_ElementWith__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n  elem: 'h1',\n  \"class\": 'title slide-in-upper__1',\n  text: 'Japanese',\n  text2: 'JavaScript'\n});\nvar BottomWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'bottom-wrapper fade-in'\n});\nvar BottomFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Copy = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'p',\n  \"class\": 'copy',\n  text: 'Play with Japanese & JavaScript'\n});\nvar StartButton = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'a',\n  \"class\": 'start-button',\n  text: 'currently in progress'\n});\nCenterFrag().appendChild(Deco.tag);\nCenterFrag().appendChild(Title());\nCenterWrapper.tag.appendChild(CenterFrag());\nBottomFrag().appendChild(Copy.tag);\nBottomFrag().appendChild(StartButton.tag);\nBottomWrapper.tag.appendChild(BottomFrag());\nWholeFrag().appendChild(CenterWrapper.tag);\nWholeFrag().appendChild(BottomWrapper.tag);\nWrapper.tag.appendChild(WholeFrag());\nvar Letters = [{\n  letter: 'に',\n  x: -80,\n  y: -90\n}, {\n  letter: 'ほ',\n  x: 250,\n  y: -70\n}, {\n  letter: 'ん',\n  x: -130,\n  y: 140\n}, {\n  letter: 'ご',\n  x: 240,\n  y: 240\n}];\n\nvar _Letters$map = Letters.map(function (i) {\n  return Object(_components_NihongoMotion__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    elem: 'span',\n    \"class\": 'nihongo-motion',\n    text: i.letter,\n    x: i.x,\n    y: i.y\n  });\n}),\n    _Letters$map2 = _slicedToArray(_Letters$map, 4),\n    Hi = _Letters$map2[0],\n    Ra = _Letters$map2[1],\n    Ga = _Letters$map2[2],\n    Na = _Letters$map2[3];\n\nWrapper.tag.appendChild(Hi());\nWrapper.tag.appendChild(Ra());\nWrapper.tag.appendChild(Ga());\nWrapper.tag.appendChild(Na());\nroot.appendChild(Wrapper.tag);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgRnJhZyBmcm9tICcuL2NvbXBvbmVudHMvYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vY29tcG9uZW50cy9hdG9tL0VsZW1lbnQnO1xuaW1wb3J0IEVsZW1lbnRXaXRoIGZyb20gJy4vY29tcG9uZW50cy9hdG9tL0VsZW1lbnRXaXRoJztcbmltcG9ydCBOaWhvbmdvTW90aW9uIGZyb20gJy4vY29tcG9uZW50cy9OaWhvbmdvTW90aW9uJztcbmltcG9ydCBDZW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9DZW50ZXInO1xuXG5jb25zdCB7IHJvb3QsIFdob2xlRnJhZywgV3JhcHBlciwgQ2VudGVyRnJhZyB9ID0gQ2VudGVyKCk7XG5cbmNvbnN0IENlbnRlcldyYXBwZXIgPSBFbGVtZW50KHtcbiAgZWxlbTogJ2RpdicsXG4gIGNsYXNzOiAnY2VudGVyLXdyYXBwZXInLFxufSk7XG5cbmNvbnN0IERlY28gPSBFbGVtZW50KHtcbiAgZWxlbTogJ3NwYW4nLFxuICBjbGFzczogJ2RlY28gc2xpZGUtaW4tdXBwZXJfXzAnLFxuICB0ZXh0OiAn6YGKJyxcbn0pO1xuXG5jb25zdCBUaXRsZSA9IEVsZW1lbnRXaXRoKHtcbiAgZWxlbTogJ2gxJyxcbiAgY2xhc3M6ICd0aXRsZSBzbGlkZS1pbi11cHBlcl9fMScsXG4gIHRleHQ6ICdKYXBhbmVzZScsXG4gIHRleHQyOiAnSmF2YVNjcmlwdCcsXG59KTtcblxuY29uc3QgQm90dG9tV3JhcHBlciA9IEVsZW1lbnQoe1xuICBlbGVtOiAnZGl2JyxcbiAgY2xhc3M6ICdib3R0b20td3JhcHBlciBmYWRlLWluJyxcbn0pO1xuXG5jb25zdCBCb3R0b21GcmFnID0gRnJhZygpO1xuXG5jb25zdCBDb3B5ID0gRWxlbWVudCh7XG4gIGVsZW06ICdwJyxcbiAgY2xhc3M6ICdjb3B5JyxcbiAgdGV4dDogJ1BsYXkgd2l0aCBKYXBhbmVzZSAmIEphdmFTY3JpcHQnLFxufSk7XG5cbmNvbnN0IFN0YXJ0QnV0dG9uID0gRWxlbWVudCh7XG4gIGVsZW06ICdhJyxcbiAgY2xhc3M6ICdzdGFydC1idXR0b24nLFxuICB0ZXh0OiAnY3VycmVudGx5IGluIHByb2dyZXNzJyxcbn0pO1xuXG5DZW50ZXJGcmFnKCkuYXBwZW5kQ2hpbGQoRGVjby50YWcpO1xuQ2VudGVyRnJhZygpLmFwcGVuZENoaWxkKFRpdGxlKCkpO1xuQ2VudGVyV3JhcHBlci50YWcuYXBwZW5kQ2hpbGQoQ2VudGVyRnJhZygpKTtcblxuQm90dG9tRnJhZygpLmFwcGVuZENoaWxkKENvcHkudGFnKTtcbkJvdHRvbUZyYWcoKS5hcHBlbmRDaGlsZChTdGFydEJ1dHRvbi50YWcpO1xuQm90dG9tV3JhcHBlci50YWcuYXBwZW5kQ2hpbGQoQm90dG9tRnJhZygpKTtcblxuV2hvbGVGcmFnKCkuYXBwZW5kQ2hpbGQoQ2VudGVyV3JhcHBlci50YWcpO1xuV2hvbGVGcmFnKCkuYXBwZW5kQ2hpbGQoQm90dG9tV3JhcHBlci50YWcpO1xuV3JhcHBlci50YWcuYXBwZW5kQ2hpbGQoV2hvbGVGcmFnKCkpO1xuXG5jb25zdCBMZXR0ZXJzID0gW1xuICB7IGxldHRlcjogJ+OBqycsIHg6IC04MCwgeTogLTkwIH0sXG4gIHsgbGV0dGVyOiAn44G7JywgeDogMjUwLCB5OiAtNzAgfSxcbiAgeyBsZXR0ZXI6ICfjgpMnLCB4OiAtMTMwLCB5OiAxNDAgfSxcbiAgeyBsZXR0ZXI6ICfjgZQnLCB4OiAyNDAsIHk6IDI0MCB9LFxuXTtcbmNvbnN0IFtIaSwgUmEsIEdhLCBOYV0gPSBMZXR0ZXJzLm1hcCgoaSkgPT5cbiAgTmlob25nb01vdGlvbih7XG4gICAgZWxlbTogJ3NwYW4nLFxuICAgIGNsYXNzOiAnbmlob25nby1tb3Rpb24nLFxuICAgIHRleHQ6IGkubGV0dGVyLFxuICAgIHg6IGkueCxcbiAgICB5OiBpLnksXG4gIH0pXG4pO1xuXG5XcmFwcGVyLnRhZy5hcHBlbmRDaGlsZChIaSgpKTtcbldyYXBwZXIudGFnLmFwcGVuZENoaWxkKFJhKCkpO1xuV3JhcHBlci50YWcuYXBwZW5kQ2hpbGQoR2EoKSk7XG5XcmFwcGVyLnRhZy5hcHBlbmRDaGlsZChOYSgpKTtcblxucm9vdC5hcHBlbmRDaGlsZChXcmFwcGVyLnRhZyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar Element = function Element(props) {\n  var tag = document.createElement(props.elem);\n  tag.className = props[\"class\"];\n  tag.textContent = props.text;\n  return {\n    tag: tag\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Element);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0VsZW1lbnQuanM/MThhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbGVtZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcHMuZWxlbSk7XG4gIHRhZy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzcztcbiAgdGFnLnRleHRDb250ZW50ID0gcHJvcHMudGV4dDtcblxuICByZXR1cm4geyB0YWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnQ7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ElementWith = function ElementWith(props) {\n  var tag = document.createElement(props.elem);\n  tag.className = props[\"class\"];\n  var firstText = document.createTextNode(props.text);\n  var secondText = document.createTextNode(props.text2);\n  var br = document.createElement('br');\n  tag.appendChild(firstText);\n  tag.appendChild(br);\n  tag.appendChild(secondText);\n  return function () {\n    return tag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElementWith);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0VsZW1lbnRXaXRoLmpzP2I4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRWxlbWVudFdpdGggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwcm9wcy5lbGVtKTtcbiAgdGFnLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzO1xuICBjb25zdCBmaXJzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9wcy50ZXh0KTtcbiAgY29uc3Qgc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb3BzLnRleHQyKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICB0YWcuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0KTtcbiAgdGFnLmFwcGVuZENoaWxkKGJyKTtcbiAgdGFnLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuXG4gIHJldHVybiAoKSA9PiB0YWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50V2l0aDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);\n\n\nvar NihongoMotion = function NihongoMotion(props) {\n  var _Element = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props),\n      tag = _Element.tag;\n\n  tag.style.top = \"\".concat(props.y, \"px\");\n  tag.style.left = \"\".concat(props.x, \"px\");\n  return function () {\n    return tag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NihongoMotion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9OaWhvbmdvTW90aW9uL2luZGV4LmpzP2I0MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi4vYXRvbS9FbGVtZW50JztcblxuY29uc3QgTmlob25nb01vdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRhZyB9ID0gRWxlbWVudChwcm9wcyk7XG5cbiAgdGFnLnN0eWxlLnRvcCA9IGAke3Byb3BzLnl9cHhgO1xuICB0YWcuc3R5bGUubGVmdCA9IGAke3Byb3BzLnh9cHhgO1xuXG4gIHJldHVybiAoKSA9PiB0YWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOaWhvbmdvTW90aW9uO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n\n\n\n\n\nvar Center = function Center() {\n  var root = document.getElementById('root');\n  var WholeFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var Wrapper = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elem: 'div',\n    \"class\": 'wrapper'\n  });\n  var CenterFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return {\n    root: root,\n    WholeFrag: WholeFrag,\n    Wrapper: Wrapper,\n    CenterFrag: CenterFrag\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQ2VudGVyL2luZGV4LmpzPzU2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzYW5pdGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuaW1wb3J0IEZyYWcgZnJvbSAnLi4vLi4vYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4uLy4uL2F0b20vRWxlbWVudCc7XG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIGNvbnN0IFdob2xlRnJhZyA9IEZyYWcoKTtcblxuICBjb25zdCBXcmFwcGVyID0gRWxlbWVudCh7XG4gICAgZWxlbTogJ2RpdicsXG4gICAgY2xhc3M6ICd3cmFwcGVyJyxcbiAgfSk7XG5cbiAgY29uc3QgQ2VudGVyRnJhZyA9IEZyYWcoKTtcblxuICByZXR1cm4geyByb290LCBXaG9sZUZyYWcsIFdyYXBwZXIsIENlbnRlckZyYWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbnRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);
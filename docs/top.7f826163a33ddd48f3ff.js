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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _components_atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n/* harmony import */ var _components_atom_ElementWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);\n\n\n\n\n\nvar root = document.getElementById('root');\nvar WholeFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Wrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'wrapper'\n});\nvar CenterWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'center-wrapper'\n});\nvar CenterFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Deco = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'span',\n  \"class\": 'deco slide-in-upper__0',\n  text: '遊'\n});\nvar Title = Object(_components_atom_ElementWith__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n  elem: 'h1',\n  \"class\": 'title slide-in-upper__1',\n  text: 'Japanese',\n  text2: 'JavaScript'\n});\nvar BottomWrapper = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'bottom-wrapper fade-in'\n});\nvar BottomFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar Copy = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'p',\n  \"class\": 'copy',\n  text: 'Play with Japanese & JavaScript'\n});\nvar StartButton = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'a',\n  \"class\": 'start-button',\n  text: 'currently in progress'\n});\nCenterFrag().appendChild(Deco());\nCenterFrag().appendChild(Title());\nCenterWrapper().appendChild(CenterFrag());\nBottomFrag().appendChild(Copy());\nBottomFrag().appendChild(StartButton());\nBottomWrapper().appendChild(BottomFrag());\nWholeFrag().appendChild(CenterWrapper());\nWholeFrag().appendChild(BottomWrapper());\nWrapper().appendChild(WholeFrag());\nroot.appendChild(Wrapper());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXguanM/ZmIwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3Nhbml0aXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5pbXBvcnQgRnJhZyBmcm9tICcuL2NvbXBvbmVudHMvYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vY29tcG9uZW50cy9hdG9tL0VsZW1lbnQnO1xuaW1wb3J0IEVsZW1lbnRXaXRoIGZyb20gJy4vY29tcG9uZW50cy9hdG9tL0VsZW1lbnRXaXRoJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCBXaG9sZUZyYWcgPSBGcmFnKCk7XG5cbmNvbnN0IFdyYXBwZXIgPSBFbGVtZW50KHtcbiAgZWxlbTogJ2RpdicsXG4gIGNsYXNzOiAnd3JhcHBlcicsXG59KTtcblxuY29uc3QgQ2VudGVyV3JhcHBlciA9IEVsZW1lbnQoe1xuICBlbGVtOiAnZGl2JyxcbiAgY2xhc3M6ICdjZW50ZXItd3JhcHBlcicsXG59KTtcblxuY29uc3QgQ2VudGVyRnJhZyA9IEZyYWcoKTtcblxuY29uc3QgRGVjbyA9IEVsZW1lbnQoe1xuICBlbGVtOiAnc3BhbicsXG4gIGNsYXNzOiAnZGVjbyBzbGlkZS1pbi11cHBlcl9fMCcsXG4gIHRleHQ6ICfpgYonLFxufSk7XG5cbmNvbnN0IFRpdGxlID0gRWxlbWVudFdpdGgoe1xuICBlbGVtOiAnaDEnLFxuICBjbGFzczogJ3RpdGxlIHNsaWRlLWluLXVwcGVyX18xJyxcbiAgdGV4dDogJ0phcGFuZXNlJyxcbiAgdGV4dDI6ICdKYXZhU2NyaXB0Jyxcbn0pO1xuXG5jb25zdCBCb3R0b21XcmFwcGVyID0gRWxlbWVudCh7XG4gIGVsZW06ICdkaXYnLFxuICBjbGFzczogJ2JvdHRvbS13cmFwcGVyIGZhZGUtaW4nLFxufSk7XG5cbmNvbnN0IEJvdHRvbUZyYWcgPSBGcmFnKCk7XG5cbmNvbnN0IENvcHkgPSBFbGVtZW50KHtcbiAgZWxlbTogJ3AnLFxuICBjbGFzczogJ2NvcHknLFxuICB0ZXh0OiAnUGxheSB3aXRoIEphcGFuZXNlICYgSmF2YVNjcmlwdCcsXG59KTtcblxuY29uc3QgU3RhcnRCdXR0b24gPSBFbGVtZW50KHtcbiAgZWxlbTogJ2EnLFxuICBjbGFzczogJ3N0YXJ0LWJ1dHRvbicsXG4gIHRleHQ6ICdjdXJyZW50bHkgaW4gcHJvZ3Jlc3MnLFxufSk7XG5cbkNlbnRlckZyYWcoKS5hcHBlbmRDaGlsZChEZWNvKCkpO1xuQ2VudGVyRnJhZygpLmFwcGVuZENoaWxkKFRpdGxlKCkpO1xuQ2VudGVyV3JhcHBlcigpLmFwcGVuZENoaWxkKENlbnRlckZyYWcoKSk7XG5cbkJvdHRvbUZyYWcoKS5hcHBlbmRDaGlsZChDb3B5KCkpO1xuQm90dG9tRnJhZygpLmFwcGVuZENoaWxkKFN0YXJ0QnV0dG9uKCkpO1xuQm90dG9tV3JhcHBlcigpLmFwcGVuZENoaWxkKEJvdHRvbUZyYWcoKSk7XG5cbldob2xlRnJhZygpLmFwcGVuZENoaWxkKENlbnRlcldyYXBwZXIoKSk7XG5XaG9sZUZyYWcoKS5hcHBlbmRDaGlsZChCb3R0b21XcmFwcGVyKCkpO1xuV3JhcHBlcigpLmFwcGVuZENoaWxkKFdob2xlRnJhZygpKTtcblxucm9vdC5hcHBlbmRDaGlsZChXcmFwcGVyKCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar Element = function Element(props) {\n  var tag = document.createElement(props.elem);\n  tag.className = props[\"class\"];\n  tag.textContent = props.text;\n  return function () {\n    return tag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Element);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0VsZW1lbnQuanM/MThhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBFbGVtZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocHJvcHMuZWxlbSk7XG4gIHRhZy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzcztcbiAgdGFnLnRleHRDb250ZW50ID0gcHJvcHMudGV4dDtcblxuICByZXR1cm4gKCkgPT4gdGFnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar ElementWith = function ElementWith(props) {\n  var tag = document.createElement(props.elem);\n  tag.className = props[\"class\"];\n  var firstText = document.createTextNode(props.text);\n  var secondText = document.createTextNode(props.text2);\n  var br = document.createElement('br');\n  tag.appendChild(firstText);\n  tag.appendChild(br);\n  tag.appendChild(secondText);\n  return function () {\n    return tag;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElementWith);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9hdG9tL0VsZW1lbnRXaXRoLmpzP2I4NjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRWxlbWVudFdpdGggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwcm9wcy5lbGVtKTtcbiAgdGFnLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzO1xuICBjb25zdCBmaXJzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9wcy50ZXh0KTtcbiAgY29uc3Qgc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb3BzLnRleHQyKTtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICB0YWcuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0KTtcbiAgdGFnLmFwcGVuZENoaWxkKGJyKTtcbiAgdGFnLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuXG4gIHJldHVybiAoKSA9PiB0YWc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50V2l0aDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);
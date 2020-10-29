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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n\n\n\n\n\nvar Center = function Center() {\n  var root = document.getElementById('root');\n  var WholeFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var Wrapper = Object(_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    elem: 'div',\n    \"class\": 'wrapper'\n  });\n  var CenterFrag = Object(_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  return {\n    root: root,\n    WholeFrag: WholeFrag,\n    Wrapper: Wrapper,\n    CenterFrag: CenterFrag\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvQ2VudGVyL2luZGV4LmpzPzU2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzYW5pdGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuaW1wb3J0IEZyYWcgZnJvbSAnLi4vLi4vYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4uLy4uL2F0b20vRWxlbWVudCc7XG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4gIGNvbnN0IFdob2xlRnJhZyA9IEZyYWcoKTtcblxuICBjb25zdCBXcmFwcGVyID0gRWxlbWVudCh7XG4gICAgZWxlbTogJ2RpdicsXG4gICAgY2xhc3M6ICd3cmFwcGVyJyxcbiAgfSk7XG5cbiAgY29uc3QgQ2VudGVyRnJhZyA9IEZyYWcoKTtcblxuICByZXR1cm4geyByb290LCBXaG9sZUZyYWcsIFdyYXBwZXIsIENlbnRlckZyYWcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbnRlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);\n/* harmony import */ var _components_atom_Element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);\n/* harmony import */ var _components_layout_Center__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);\n\n\n\n\n\n\nvar _Center = Object(_components_layout_Center__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n    root = _Center.root,\n    WholeFrag = _Center.WholeFrag,\n    Wrapper = _Center.Wrapper;\n\nvar ExplainFrag = Object(_components_atom_Frag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nvar ExplainBlock = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'div',\n  \"class\": 'explain-block'\n});\nvar Title = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'h1',\n  \"class\": 'title slide-in-upper__0',\n  text: 'Japanese characters'\n});\nvar Explain = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'p',\n  \"class\": 'text slide-in-upper__1',\n  text: 'Japanese has three kind of characters.'\n});\nvar Characters = Object(_components_atom_Element__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n  elem: 'p',\n  \"class\": 'characters',\n  text: 'Hiragana(ひらがな), Katakana(カタカナ) and Kanji(漢字).'\n});\nExplainFrag().appendChild(Title.tag);\nExplainFrag().appendChild(Explain.tag);\nExplainFrag().appendChild(Characters.tag);\nExplainBlock.tag.appendChild(ExplainFrag());\nWrapper.tag.appendChild(ExplainBlock.tag);\nroot.appendChild(Wrapper.tag); // const characters = [\n//   { Hiragana: 'ひらがな' },\n//   { Katakana: 'カタカナ' },\n//   { Kanji: '漢字' },\n// ];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvY2hhcmFjdGVycy9pbmRleC5qcz84Y2FhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2FuaXRpemUuY3NzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBGcmFnIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbS9GcmFnJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbS9FbGVtZW50JztcbmltcG9ydCBDZW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvQ2VudGVyJztcblxuY29uc3QgeyByb290LCBXaG9sZUZyYWcsIFdyYXBwZXIgfSA9IENlbnRlcigpO1xuXG5jb25zdCBFeHBsYWluRnJhZyA9IEZyYWcoKTtcblxuY29uc3QgRXhwbGFpbkJsb2NrID0gRWxlbWVudCh7XG4gIGVsZW06ICdkaXYnLFxuICBjbGFzczogJ2V4cGxhaW4tYmxvY2snLFxufSk7XG5cbmNvbnN0IFRpdGxlID0gRWxlbWVudCh7XG4gIGVsZW06ICdoMScsXG4gIGNsYXNzOiAndGl0bGUgc2xpZGUtaW4tdXBwZXJfXzAnLFxuICB0ZXh0OiAnSmFwYW5lc2UgY2hhcmFjdGVycycsXG59KTtcblxuY29uc3QgRXhwbGFpbiA9IEVsZW1lbnQoe1xuICBlbGVtOiAncCcsXG4gIGNsYXNzOiAndGV4dCBzbGlkZS1pbi11cHBlcl9fMScsXG4gIHRleHQ6ICdKYXBhbmVzZSBoYXMgdGhyZWUga2luZCBvZiBjaGFyYWN0ZXJzLicsXG59KTtcblxuY29uc3QgQ2hhcmFjdGVycyA9IEVsZW1lbnQoe1xuICBlbGVtOiAncCcsXG4gIGNsYXNzOiAnY2hhcmFjdGVycycsXG4gIHRleHQ6ICdIaXJhZ2FuYSjjgbLjgonjgYzjgaopLCBLYXRha2FuYSjjgqvjgr/jgqvjg4opIGFuZCBLYW5qaSjmvKLlrZcpLicsXG59KTtcblxuRXhwbGFpbkZyYWcoKS5hcHBlbmRDaGlsZChUaXRsZS50YWcpO1xuRXhwbGFpbkZyYWcoKS5hcHBlbmRDaGlsZChFeHBsYWluLnRhZyk7XG5FeHBsYWluRnJhZygpLmFwcGVuZENoaWxkKENoYXJhY3RlcnMudGFnKTtcbkV4cGxhaW5CbG9jay50YWcuYXBwZW5kQ2hpbGQoRXhwbGFpbkZyYWcoKSk7XG5XcmFwcGVyLnRhZy5hcHBlbmRDaGlsZChFeHBsYWluQmxvY2sudGFnKTtcblxucm9vdC5hcHBlbmRDaGlsZChXcmFwcGVyLnRhZyk7XG5cbi8vIGNvbnN0IGNoYXJhY3RlcnMgPSBbXG4vLyAgIHsgSGlyYWdhbmE6ICfjgbLjgonjgYzjgaonIH0sXG4vLyAgIHsgS2F0YWthbmE6ICfjgqvjgr/jgqvjg4onIH0sXG4vLyAgIHsgS2Fuamk6ICfmvKLlrZcnIH0sXG4vLyBdO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })
/******/ ]);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

// CONCATENATED MODULE: ./src/app/components/atom/Frag.js
var Frag = function Frag() {
  var frag = document.createDocumentFragment();
  return function () {
    return frag;
  };
};

/* harmony default export */ const atom_Frag = (Frag);
// CONCATENATED MODULE: ./src/app/components/atom/Element.js
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

/* harmony default export */ const atom_Element = (Element);
// CONCATENATED MODULE: ./src/app/components/NihongoMotion/index.js


var NihongoMotion = function NihongoMotion(props) {
  var _Element = atom_Element(props),
      tag = _Element.tag;

  tag.style.top = "".concat(props.y, "em");
  tag.style.left = "".concat(props.x, "em");
  return function () {
    return tag;
  };
};

/* harmony default export */ const components_NihongoMotion = (NihongoMotion);
// CONCATENATED MODULE: ./src/app/components/layout/Center/index.js





var Center = function Center() {
  var root = document.getElementById('root');
  var WholeFrag = atom_Frag();
  var Wrapper = atom_Element({
    elem: 'div',
    "class": 'wrapper'
  });
  var CenterFrag = atom_Frag();
  return {
    root: root,
    WholeFrag: WholeFrag,
    Wrapper: Wrapper,
    CenterFrag: CenterFrag
  };
};

/* harmony default export */ const layout_Center = (Center);
// CONCATENATED MODULE: ./src/app/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var _Center = layout_Center(),
    root = _Center.root,
    WholeFrag = _Center.WholeFrag,
    Wrapper = _Center.Wrapper,
    CenterFrag = _Center.CenterFrag;

root.className = 'root_layout_top';
Wrapper.tag.className = 'wrapper wrapper_layout_top';
var CenterWrapper = atom_Element({
  elem: 'div',
  "class": 'center-wrapper'
});
var DecoWrapper = atom_Element({
  elem: 'div',
  "class": 'deco slide-in-upper__0'
});
var Deco = atom_Element({
  elem: 'span',
  "class": 'deco__item',
  text: '遊'
});
var JPJS = atom_Element({
  elem: 'h1',
  "class": 'jpjs opacity_0 slide-in-upper__1',
  text: ['Japanese', 'JavaScript']
});
var MotionFrag = atom_Frag();
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
var BottomWrapper = atom_Element({
  elem: 'div',
  "class": 'bottom-wrapper fade-in'
});
var BottomFrag = atom_Frag();
var Copy = atom_Element({
  elem: 'p',
  "class": 'copy',
  text: 'Play with Japanese & JavaScript'
});
var StartButton = atom_Element({
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
/******/ })()
;
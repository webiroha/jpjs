import 'sanitize.css';
import '../styles/main.scss';

import Frag from './components/atom/Frag';
import Element from './components/atom/Element';
import ElementWith from './components/atom/ElementWith';
import NihongoMotion from './components/NihongoMotion';
import Center from './components/layout/Center';

const { root, WholeFrag, Wrapper, CenterFrag } = Center();

const CenterWrapper = Element({
  elem: 'div',
  class: 'center-wrapper',
});

const Deco = Element({
  elem: 'span',
  class: 'deco slide-in-upper__0',
  text: '遊',
});

const Title = ElementWith({
  elem: 'h1',
  class: 'title slide-in-upper__1',
  text: 'Japanese',
  text2: 'JavaScript',
});

const MotionFrag = Frag();

const Letters = [
  { letter: 'に', x: -0.4, y: -0.6 },
  { letter: 'ほ', x: 1.65, y: -0.2 },
  { letter: 'ん', x: -0.4, y: 1.4 },
  { letter: 'ご', x: 2.8, y: 2.4 },
];
const [Hi, Ra, Ga, Na] = Letters.map((i) =>
  NihongoMotion({
    elem: 'span',
    class: 'nihongo-motion',
    text: i.letter,
    x: i.x,
    y: i.y,
  })
);

MotionFrag().appendChild(Hi());
MotionFrag().appendChild(Ra());
MotionFrag().appendChild(Ga());
MotionFrag().appendChild(Na());
Deco.tag.appendChild(MotionFrag());

CenterFrag().appendChild(Deco.tag);
CenterFrag().appendChild(Title());
CenterWrapper.tag.appendChild(CenterFrag());

const BottomWrapper = Element({
  elem: 'div',
  class: 'bottom-wrapper fade-in',
});

const BottomFrag = Frag();

const Copy = Element({
  elem: 'p',
  class: 'copy',
  text: 'Play with Japanese & JavaScript',
});

const StartButton = Element({
  elem: 'a',
  class: 'start-button',
  text: 'currently in progress',
});

BottomFrag().appendChild(Copy.tag);
BottomFrag().appendChild(StartButton.tag);
BottomWrapper.tag.appendChild(BottomFrag());

WholeFrag().appendChild(CenterWrapper.tag);
WholeFrag().appendChild(BottomWrapper.tag);
Wrapper.tag.appendChild(WholeFrag());

root.appendChild(Wrapper.tag);

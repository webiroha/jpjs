import 'sanitize.css';
import '../styles/main.scss';

import Frag from './components/atom/Frag';
import Element from './components/atom/Element';
import ElementWith from './components/atom/ElementWith';

const root = document.getElementById('root');
const WholeFrag = Frag();

const Wrapper = Element({
  elem: 'div',
  class: 'wrapper',
});

const CenterWrapper = Element({
  elem: 'div',
  class: 'center-wrapper',
});

const CenterFrag = Frag();

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
  text: 'coming soon!',
});

CenterFrag().appendChild(Deco());
CenterFrag().appendChild(Title());
CenterWrapper().appendChild(CenterFrag());

BottomFrag().appendChild(Copy());
BottomFrag().appendChild(StartButton());
BottomWrapper().appendChild(BottomFrag());

WholeFrag().appendChild(CenterWrapper());
WholeFrag().appendChild(BottomWrapper());
Wrapper().appendChild(WholeFrag());

root.appendChild(Wrapper());

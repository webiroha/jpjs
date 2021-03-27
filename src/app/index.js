import 'sanitize.css';
import '../styles/main.scss';

import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import NihongoMotion from '@root/components/NihongoMotion';
import Center from '@root/components/layout/Center';
import Link from '@root/components/links/Link';

const { root, WholeFrag, Spinner, Wrapper, CenterFrag } = Center();

// root.className = 'root_layout_top';
Wrapper.tag.className = 'wrapper wrapper_layout_top';

const UpperWrapper = Element({
  elem: 'div',
  class: 'upper-wrapper',
});

const UpperWrapperInner = Element({
  elem: 'div',
  class: 'upper-wrapper__inner wrapper_layout_top__inner',
});

const DecoWrapper = Element({
  elem: 'div',
  class: 'deco slide-in-upper__0',
});

const Deco = Element({
  elem: 'span',
  class: 'deco__item',
  text: '遊',
});

const JPJS = Element({
  elem: 'h1',
  class: 'jpjs opacity_0 slide-in-upper__1',
  text: ['Japanese', 'JavaScript'],
});

const MotionFrag = Frag();

const Letters = [
  { letter: 'に', x: -1.4, y: -0.5 },
  { letter: 'ほ', x: 1.0, y: -0.1 },
  { letter: 'ん', x: -1.4, y: 1.2 },
  { letter: 'ご', x: 1.7, y: 2.2 },
];
const [Hi, Ra, Ga, Na] = Letters.map((i) =>
  NihongoMotion({
    elem: 'span',
    class: 'nihongo-motion opacity_0',
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

DecoWrapper.tag.appendChild(Deco.tag);
CenterFrag().appendChild(DecoWrapper.tag);
CenterFrag().appendChild(JPJS.tag);

const Copy = Element({
  elem: 'p',
  class: 'copy',
  text: 'Play with Japanese & JavaScript',
});

CenterFrag().appendChild(Copy.tag);

UpperWrapperInner.tag.appendChild(CenterFrag());
UpperWrapper.tag.appendChild(UpperWrapperInner.tag);

const BottomWrapper = Element({
  elem: 'div',
  class: 'bottom-wrapper fade-in',
});

const PagelinkFrag = Frag();
const BottomFrag = Frag();

const PagelinksWrapper = Element({
  elem: 'div',
  class: 'pagelinks-wrapper',
});
const PagelinksWrapperInner = Element({
  elem: 'div',
  class: 'pagelinks-wrapper__inner',
});

const pagelinks = ['preparation', 'characters', 'vowels', 'consonants'];

pagelinks.map((link, i) => PagelinkFrag().appendChild(Link(link, i)));

PagelinksWrapperInner.tag.appendChild(PagelinkFrag());
PagelinksWrapper.tag.appendChild(PagelinksWrapperInner.tag);
BottomFrag().appendChild(PagelinksWrapper.tag);
BottomWrapper.tag.appendChild(BottomFrag());

WholeFrag().appendChild(UpperWrapper.tag);
WholeFrag().appendChild(BottomWrapper.tag);
Wrapper.tag.appendChild(WholeFrag());

root.appendChild(Spinner.tag);
root.appendChild(Wrapper.tag);

import 'sanitize.css';
import '../../styles/main.scss';

import Frag from '../components/atom/Frag';
import Element from '../components/atom/Element';
import Center from '../components/layout/Center';

const { root, WholeFrag, Wrapper, CenterFrag } = Center();

const Title = Element({
  elem: 'h1',
  class: 'title',
  text: 'Japanese characters',
});

root.appendChild(Title.tag);

// const characters = [
//   { Hiragana: 'ひらがな' },
//   { Katakana: 'カタカナ' },
//   { Kanji: '漢字' },
// ];

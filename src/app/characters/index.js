import 'sanitize.css';
import '../../styles/main.scss';

import Frag from '../components/atom/Frag';
import Element from '../components/atom/Element';
import Center from '../components/layout/Center';

const { root, WholeFrag, Wrapper } = Center();

const ExplainFrag = Frag();

const ExplainBlock = Element({
  elem: 'div',
  class: 'explain-block',
});

const Title = Element({
  elem: 'h1',
  class: 'title slide-in-upper__0',
  text: 'Japanese characters',
});

const Explain = Element({
  elem: 'p',
  class: 'text slide-in-upper__1',
  text: 'Japanese has three kind of characters.',
});

const Characters = Element({
  elem: 'p',
  class: 'characters',
  text: 'Hiragana(ひらがな), Katakana(カタカナ) and Kanji(漢字).',
});

ExplainFrag().appendChild(Title.tag);
ExplainFrag().appendChild(Explain.tag);
ExplainFrag().appendChild(Characters.tag);
ExplainBlock.tag.appendChild(ExplainFrag());
Wrapper.tag.appendChild(ExplainBlock.tag);

root.appendChild(Wrapper.tag);

// const characters = [
//   { Hiragana: 'ひらがな' },
//   { Katakana: 'カタカナ' },
//   { Kanji: '漢字' },
// ];

import 'sanitize.css';
import '../../styles/main.scss';

import Frag from '../components/atom/Frag';
import Element from '../components/atom/Element';
import Center from '../components/layout/Center';
import CodeBlock from '../components/CodeBlock';

const { root, Wrapper } = Center();
Wrapper.tag.className = 'wrapper wrapper_layout_sub';

const ExplainFrag = Frag();

const Explain = Element({
  elem: 'div',
  class: 'explain',
});

const Title = Element({
  elem: 'h1',
  class: 'explain__title slide-in-upper__0',
  text: 'Japanese characters',
});

const ExplainText = Element({
  elem: 'p',
  class: 'explain__text opacity_0 slide-in-upper__1',
  text: 'Japanese has three kind of characters.',
});

ExplainFrag().appendChild(Title.tag);
ExplainFrag().appendChild(ExplainText.tag);
Explain.tag.appendChild(ExplainFrag());
Wrapper.tag.appendChild(Explain.tag);

const text = `const characters = [
  { Hiragana: 'ひらがな' },
  { Katakana: 'カタカナ' },
  { Kanji: '漢字' },
];`;

const { Code } = CodeBlock(text);
Wrapper.tag.appendChild(Code.tag);

root.appendChild(Wrapper.tag);

// const characters = [
//   { Hiragana: 'ひらがな' },
//   { Katakana: 'カタカナ' },
//   { Kanji: '漢字' },
// ];

// const Characters = Element({
//   elem: 'p',
//   class: 'characters',
//   text: 'Hiragana(ひらがな), Katakana(カタカナ) and Kanji(漢字).',
// });

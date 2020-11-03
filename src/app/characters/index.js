import 'sanitize.css';
import '../../styles/main.scss';

import Frag from '../components/atom/Frag';
import Element from '../components/atom/Element';
import Center from '../components/layout/Center';
import CodeBlock from '../components/CodeBlock';
import NextLink from '../components/NextLink';

const { root, WholeFrag, Wrapper } = Center();
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
  class: 'text opacity_0 slide-in-upper__1',
  text: 'Japanese has three kinds of characters.',
});

ExplainFrag().appendChild(Title.tag);
ExplainFrag().appendChild(ExplainText.tag);
Explain.tag.appendChild(ExplainFrag());
WholeFrag().appendChild(Explain.tag);

const jpCharacters = `const JapaneseCharacters = [
  { Hiragana: 'ひらがな' },
  { Katakana: 'カタカナ' },
  { Kanji: '漢字' },
];`;

const { Code: JpCode } = CodeBlock(jpCharacters);
WholeFrag().appendChild(JpCode.tag);

const SoundText = Element({
  elem: 'p',
  class: 'text opacity_0 slide-in-upper__1',
  text: 'Below is used for displaying the pronunciation.',
});
WholeFrag().appendChild(SoundText.tag);

const soundCharacters = `const SoundCharacter = [
  { Rōmaji: 'ローマ字' }
];`;

const { Code: SoundCode } = CodeBlock(soundCharacters);
WholeFrag().appendChild(SoundCode.tag);

WholeFrag().appendChild(NextLink());
Wrapper.tag.appendChild(WholeFrag());

root.appendChild(Wrapper.tag);

// const JapaneseCharacters = [
//   { Hiragana: 'ひらがな' },
//   { Katakana: 'カタカナ' },
//   { Kanji: '漢字' },
// ];

// const SoundCharacter = [{ Rōmaji: 'ローマ字' }];

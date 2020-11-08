import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Element from '../../components/atom/Element';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';

const Characters = () => {
  const ContentsFrag = Frag();
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
  ContentsFrag().appendChild(Explain.tag);

  const jpCharacters = `const JapaneseCharacters = [
  { Hiragana: 'ひらがな' },
  { Katakana: 'カタカナ' },
  { Kanji: '漢字' },
];`;

  const { Code: JpCode } = CodeBlock(jpCharacters);
  ContentsFrag().appendChild(JpCode.tag);

  const SoundText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: 'Japanese sounds are expressed by the Roman alphabet.',
  });
  ContentsFrag().appendChild(SoundText.tag);

  const soundCharacters = `const SoundCharacter = [
  { Rōmaji: 'ローマ字' }
];`;

  const { Code: SoundCode } = CodeBlock(soundCharacters);
  ContentsFrag().appendChild(SoundCode.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Characters);

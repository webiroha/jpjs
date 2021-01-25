import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import PageNavLink from '@root/components/links/PageNavLink';

const Characters = () => {
  const Section = Element({
    elem: 'section',
    class: 'section',
  });

  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Japanese characters',
    text: 'Japanese has three kinds of characters.',
  };
  const CharactersExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(CharactersExplain());

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

  ContentsFrag().appendChild(PageNavLink('preparation', 'vowels'));
  Section.tag.appendChild(ContentsFrag());

  return Section.tag;
};

HeaderFooter(Characters);

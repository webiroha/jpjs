import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import Explain from '@root/components/Explain';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/links/NextLink';

const Characters = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Japanese characters',
    text: 'Japanese has three kinds of characters.',
  };
  const CharactersExplain = Explain(ExplainInfo);
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

  ContentsFrag().appendChild(NextLink('../vowels/'));

  return ContentsFrag();
};

HeaderFooter(Characters);

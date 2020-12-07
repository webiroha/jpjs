import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import SoundBlock from '@root/components/SoundBlock';
import PageNavLink from '@root/components/links/PageNavLink';

import '@wav/ka.wav';
import '@wav/ki.wav';
import '@wav/ku.wav';
import '@wav/ke.wav';
import '@wav/ko.wav';

const ConsonantK = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Consonant K',
    text: "Let's try to learn consonant k + vowels!",
  };
  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());

  const consonantKVowelsByRomaji = `  const consonantK = 'k';
  const vowels = [...'aiueo'];
  const consonantKvowelsByRomaji = vowels.map(
    (vowel) => consonantK + vowel
  );
  console.log(consonantKvowelsByRomaji.toString());
  // ka,ki,ku,ke,ko`;

  const { Code: consonantKVowelsCode } = CodeBlock(consonantKVowelsByRomaji);
  ContentsFrag().appendChild(consonantKVowelsCode.tag);

  const consonantKvowels = ['ka', 'ki', 'ku', 'ke', 'ko'];

  ContentsFrag().appendChild(SoundBlock(consonantKvowels));

  const HiraganaKatakana = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: 'The consonant k + vowels spelt by hiragana and katakana.',
  });
  ContentsFrag().appendChild(HiraganaKatakana.tag);

  const kvowelLetters = `const kvowelLetters = [
    { ka: { hiragana: 'か', katakana: 'カ' } },
    { ki: { hiragana: 'き', katakana: 'キ' } },
    { ku: { hiragana: 'く', katakana: 'ク' } },
    { ke: { hiragana: 'け', katakana: 'ケ' } },
    { ko: { hiragana: 'こ', katakana: 'コ' } },
  ];`;

  const { Code: LettersCode } = CodeBlock(kvowelLetters);
  ContentsFrag().appendChild(LettersCode.tag);

  const ExampleText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: "Let's use consonant k + vowels in practice!",
  });
  ContentsFrag().appendChild(ExampleText.tag);

  const examples = `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kvowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const englishHiragana = (
  english,
  hiragana
) =>
  \`\${english} is \${hiragana} in Hiragana.\`;

const hiraganaKanji = (
  hiragana,
  kanji
) =>
  \`\${hiragana} is \${kanji} in Kanji.\`;
`;

  const { Code: ExamplesCode } = CodeBlock(examples);
  ContentsFrag().appendChild(ExamplesCode.tag);

  ContentsFrag().appendChild(PageNavLink('consonants', '', '', 'one'));

  return ContentsFrag();
};

HeaderFooter(ConsonantK, 'consonant');

const consonantK = 'k';
const vowels = [...'aiueo'];
const consonantKvowelsByRomaji = vowels.map((vowel) => consonantK + vowel);
console.log(consonantKvowelsByRomaji.toString());

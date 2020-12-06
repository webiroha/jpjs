import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import SoundBlock from '@root/components/SoundBlock';
import PageNavLink from '@root/components/links/PageNavLink';

import '@wav/a.wav';
import '@wav/i.wav';
import '@wav/u.wav';
import '@wav/e.wav';
import '@wav/o.wav';

const Vowels = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Vowels',
    text: 'Japanese has 5 vowels.',
  };
  const VowelsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(VowelsExplain());

  const vowelsByRomaji = `const vowelsByRomaji = ['a', 'i', 'u', 'e', 'o'];`;

  const { Code: VowelsCode } = CodeBlock(vowelsByRomaji);
  ContentsFrag().appendChild(VowelsCode.tag);

  const SoundText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: 'The sound is different from English.',
  });
  ContentsFrag().appendChild(SoundText.tag);

  const vowelSounds = `const vowelSounds = [
    { a: { sound: 'ah' } },
    { i: { sound: 'ee' } },
    { u: { sound: 'oo' } },
    { e: { sound: 'eh' } },
    { o: { sound: 'oh' } },
  ];`;

  const { Code: VowelSoundCode } = CodeBlock(vowelSounds);
  ContentsFrag().appendChild(VowelSoundCode.tag);

  const vowels = ['a', 'i', 'u', 'e', 'o'];

  ContentsFrag().appendChild(SoundBlock(vowels));

  const VowelHiraganaKatakana = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: 'The vowels spelt by hiragana and katakana.',
  });
  ContentsFrag().appendChild(VowelHiraganaKatakana.tag);

  const vowelLetters = `const vowelLetters = [
    { a: { hiragana: 'あ', katakana: 'ア' } },
    { i: { hiragana: 'い', katakana: 'イ' } },
    { u: { hiragana: 'う', katakana: 'ウ' } },
    { e: { hiragana: 'え', katakana: 'エ' } },
    { o: { hiragana: 'お', katakana: 'オ' } },
  ];`;

  const { Code: VowelLettersCode } = CodeBlock(vowelLetters);
  ContentsFrag().appendChild(VowelLettersCode.tag);

  const ExampleText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: "Let's use vowels in practise!",
  });
  ContentsFrag().appendChild(ExampleText.tag);

  const examples = `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

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


// love・あい・愛
const love = vowels.a + vowels.i;
const loveHiragana = englishHiragana('Love', love);
const loveKanji = hiraganaKanji(love, '愛');

console.log(loveHiragana);
// Love is あい in Hiragana.
console.log(loveKanji);
// あい is 愛 in Kanji.


// no・いいえ
const no = vowels.i.repeat(2) + vowels.e;
const noHiragana = englishHiragana('No', no);

console.log(noHiragana);
// No is いいえ in Hiragana.


// up・うえ・上
const up = vowels.u + vowels.e;
const upHiragana = englishHiragana('Up', up);
const upKanji = hiraganaKanji(up, '上');

console.log(upHiragana);
// Up is うえ in Hiragana.
console.log(upKanji);
// うえ is 上 in Kanji.


// blue・あお・青
const blue = vowels.a + vowels.o;
const blueHiragana = englishHiragana('Blue', blue);
const blueKanji = hiraganaKanji(blue, '青');

console.log(blueHiragana);
// Blue is あお in Hiragana.
console.log(blueKanji);
// あお is 青 in Kanji.


// house・いえ・家
const house = vowels.i + vowels.e;
const houseHiragana = englishHiragana('House', house);
const houseKanji = hiraganaKanji(house, '家');

console.log(houseHiragana);
// House is いえ in Hiragana.
console.log(houseKanji);
// いえ is 家 in Kanji.`;

  const { Code: ExamplesCode } = CodeBlock(examples);
  ContentsFrag().appendChild(ExamplesCode.tag);

  ContentsFrag().appendChild(PageNavLink('characters', 'consonants'));

  return ContentsFrag();
};

HeaderFooter(Vowels);

// for displaying console.log
const vowels = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const englishHiragana = (english, hiragana) =>
  `${english} is ${hiragana} in Hiragana.`;
const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

const love = vowels.a + vowels.i;
const loveHiragana = englishHiragana('Love', love);
const loveKanji = hiraganaKanji(love, '愛');

console.log(loveHiragana);
// Love is あい in Hiragana.
console.log(loveKanji);
// あい is 愛 in Kanji.

const no = vowels.i.repeat(2) + vowels.e;
const noHiragana = englishHiragana('No', no);

console.log(noHiragana);
// No is いいえ in Hiragana.

const up = vowels.u + vowels.e;
const upHiragana = englishHiragana('Up', up);
const upKanji = hiraganaKanji(up, '上');

console.log(upHiragana);
// Up is うえ in Hiragana.
console.log(upKanji);
// うえ is 上 in Kanji.

const blue = vowels.a + vowels.o;
const blueHiragana = englishHiragana('Blue', blue);
const blueKanji = hiraganaKanji(blue, '青');

console.log(blueHiragana);
// Blue is あお in Hiragana.
console.log(blueKanji);
// あお is 青 in Kanji.

const house = vowels.i + vowels.e;
const houseHiragana = englishHiragana('House', house);
const houseKanji = hiraganaKanji(house, '家');

console.log(houseHiragana);
// House is いえ in Hiragana.
console.log(houseKanji);
// いえ is 家 in Kanji.

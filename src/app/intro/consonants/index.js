import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import Explain from '@root/components/Explain';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/links/NextLink';

const Consonants = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Consonants',
    text: 'Japanese has around 14 - 16 consonants.',
  };
  const ConsonantsExplainSmall = Element({
    elem: 'small',
    class: 'small slide-in-upper__1',
    text: '*The way to write Romaji depends on the person.',
  });

  const ConsonantsExplain = Explain(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());
  ContentsFrag().appendChild(ConsonantsExplainSmall.tag);

  const consonantsByRomaji = `const consonants = [...'kstnhfmyrwgzdbpv'];`;

  const { Code: ConsonantsCode } = CodeBlock(consonantsByRomaji);
  ContentsFrag().appendChild(ConsonantsCode.tag);

  const SystemExplainText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: [
      'The BASIC sound system is "consonant + vowel" roughly besides some exceptions.',
      'Let me show you the exact ones later.',
    ],
  });
  ContentsFrag().appendChild(SystemExplainText.tag);

  const combineSystem = `  const consonants = [...'kstnhfmyrwgzdbpv'];
  const vowels = [...'aiueo'];
  const roughlyCombinedSounds = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );
  console.log(...roughlyCombinedSounds);
  // ...roughlyCombinedSounds !== Romaji`;

  const { Code: CombinedCode } = CodeBlock(combineSystem);
  ContentsFrag().appendChild(CombinedCode.tag);

  const consonants = [...'kstnhfmyrwgzdbpv'];
  const vowels = [...'aiueo'];
  const roughlyCombinedSounds = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );
  console.log(...roughlyCombinedSounds);
  // ...roughlyCombinedSounds !== Romaji

  //   const SoundButtonText = Element({
  //     elem: 'p',
  //     class: 'text opacity_0 slide-in-upper__1',
  //     text: "Let's hear the sound!",
  //   });
  //   ContentsFrag().appendChild(SoundButtonText.tag);

  //   const consonants = ['a', 'i', 'u', 'e', 'o'];

  //   const SoundsBlock = Element({
  //     elem: 'div',
  //     class: 'sound-block fade-in',
  //   });
  //   const SoundsFrag = Frag();

  //   const createSoundButtons = (item) => {
  //     const sound = new Audio(`../../assets/sounds/single/${item}.wav`);

  //     const SoundButton = Element({
  //       elem: 'button',
  //       class: 'sound-button',
  //       text: item,
  //     });
  //     SoundButton.tag.type = 'button';
  //     SoundButton.tag.addEventListener('click', () => {
  //       sound.currentTime = 0;
  //       sound.play();
  //     });

  //     SoundsFrag().appendChild(SoundButton.tag);
  //   };

  //   consonants.map((i) => createSoundButtons(i));

  //   SoundsBlock.tag.appendChild(SoundsFrag());
  //   ContentsFrag().appendChild(SoundsBlock.tag);

  //   const VowelHiraganaKatakana = Element({
  //     elem: 'p',
  //     class: 'text opacity_0 slide-in-upper__1',
  //     text: 'The consonants spelt by hiragana and katakana.',
  //   });
  //   ContentsFrag().appendChild(VowelHiraganaKatakana.tag);

  //   const consonantLetters = `const consonantLetters = [
  //     { a: { hiragana: 'あ', katakana: 'ア' } },
  //     { i: { hiragana: 'い', katakana: 'イ' } },
  //     { u: { hiragana: 'う', katakana: 'ウ' } },
  //     { e: { hiragana: 'え', katakana: 'エ' } },
  //     { o: { hiragana: 'お', katakana: 'オ' } },
  //   ];`;

  //   const { Code: VowelLettersCode } = CodeBlock(consonantLetters);
  //   ContentsFrag().appendChild(VowelLettersCode.tag);

  //   const ExampleText = Element({
  //     elem: 'p',
  //     class: 'text opacity_0 slide-in-upper__1',
  //     text: "Let's use consonants in practise!",
  //   });
  //   ContentsFrag().appendChild(ExampleText.tag);

  //   const examples = `const consonants =
  //   { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

  // const englishHiragana = (
  //   english,
  //   hiragana
  // ) =>
  //   \`\${english} is \${hiragana} in Hiragana.\`;

  // const hiraganaKanji = (
  //   hiragana,
  //   kanji
  // ) =>
  //   \`\${hiragana} is \${kanji} in Kanji.\`;

  // const love = consonants.a + consonants.i;
  // const loveHiragana = englishHiragana('Love', love);
  // const loveKanji = hiraganaKanji(love, '愛');

  // console.log(loveHiragana);
  // // Love is あい in Hiragana.
  // console.log(loveKanji);
  // // あい is 愛 in Kanji.

  // const no = consonants.i.repeat(2) + consonants.e;
  // const noHiragana = englishHiragana('No', no);

  // console.log(noHiragana);
  // // No is いいえ in Hiragana.

  // const up = consonants.u + consonants.e;
  // const upHiragana = englishHiragana('Up', up);
  // const upKanji = hiraganaKanji(up, '上');

  // console.log(upHiragana);
  // // Up is うえ in Hiragana.
  // console.log(upKanji);
  // // うえ is 上 in Kanji.`;

  //   const { Code: ExamplesCode } = CodeBlock(examples);
  //   ContentsFrag().appendChild(ExamplesCode.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Consonants);

// // for displaying console.log
// const consonants = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

// const englishHiragana = (english, hiragana) =>
//   `${english} is ${hiragana} in Hiragana.`;
// const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

// const love = consonants.a + consonants.i;
// const loveHiragana = englishHiragana('Love', love);
// const loveKanji = hiraganaKanji(love, '愛');

// console.log(loveHiragana);
// // Love is あい in Hiragana.
// console.log(loveKanji);
// // あい is 愛 in Kanji.

// const no = consonants.i.repeat(2) + consonants.e;
// const noHiragana = englishHiragana('No', no);

// console.log(noHiragana);
// // No is いいえ in Hiragana.

// const up = consonants.u + consonants.e;
// const upHiragana = englishHiragana('Up', up);
// const upKanji = hiraganaKanji(up, '上');

// console.log(upHiragana);
// // Up is うえ in Hiragana.
// console.log(upKanji);
// // うえ is 上 in Kanji.

// const top = [{ romaji: 'ue', hiragana: 'うえ', kanji: '上' }];
// const house = [{ romaji: 'ie', hiragana: 'いえ', kanji: '家' }];
// const blue = [{ romaji: 'ao', hiragana: 'あお', kanji: '青' }];

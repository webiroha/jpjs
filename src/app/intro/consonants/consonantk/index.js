import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import Explain from '@root/components/Explain';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/links/NextLink';
// import '@wav/a.wav';
// import '@wav/i.wav';
// import '@wav/u.wav';
// import '@wav/e.wav';
// import '@wav/o.wav';

const ConsonantK = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Consonant K',
    text: "Let's try to learn k + vowel sound!",
  };
  const ConsonantsExplain = Explain(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());

  const consonantKVowelsByRomaji = `const consonantK = ['ka', 'ki', 'ku', 'ke', 'ko'];`;

  const { Code: consonantKVowelsCode } = CodeBlock(consonantKVowelsByRomaji);
  ContentsFrag().appendChild(consonantKVowelsCode.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(ConsonantK);

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

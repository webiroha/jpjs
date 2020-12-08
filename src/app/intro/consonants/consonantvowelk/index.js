import CommonLayout from '@root/intro/consonants/components/CommonLayout';

import '@wav/ka.wav';
import '@wav/ki.wav';
import '@wav/ku.wav';
import '@wav/ke.wav';
import '@wav/ko.wav';

const consonantKinfo = {
  explain: {
    title: 'Consonant K',
    text: "Let's try to learn consonant k + vowels!",
  },
  romaji: `  const consonantK = 'k';
    const vowels = [...'aiueo'];
    const consonantKvowelsByRomaji = vowels.map(
      (vowel) => consonantK + vowel
    );
    console.log(consonantKvowelsByRomaji.toString());
    // ka,ki,ku,ke,ko`,
  sound: ['ka', 'ki', 'ku', 'ke', 'ko'],
  jpText: 'The consonant k + vowels spelt by hiragana and katakana.',
  letters: `const kvowelLetters = [
      { ka: { hiragana: 'か', katakana: 'カ' } },
      { ki: { hiragana: 'き', katakana: 'キ' } },
      { ku: { hiragana: 'く', katakana: 'ク' } },
      { ke: { hiragana: 'け', katakana: 'ケ' } },
      { ko: { hiragana: 'こ', katakana: 'コ' } },
    ];`,
  exampleText: "Let's use consonant k + vowels in practice!",
  examples: `// Base code
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
    `,
  navLink: ['consonants', '', 'one', ''],
};

CommonLayout(consonantKinfo);

const consonantK = 'k';
const vowels = [...'aiueo'];
const consonantKvowelsByRomaji = vowels.map((vowel) => consonantK + vowel);
console.log(consonantKvowelsByRomaji.toString());

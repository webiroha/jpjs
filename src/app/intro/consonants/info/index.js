const info = {
  consonantKinfo: {
    explain: {
      title: 'Consonant K',
      text: "Let's try to learn consonant k + vowels!",
    },
    romaji: `const consonantK = 'k';
const vowels = [...'aiueo'];
const consonantKvowelsByRomaji = vowels.map(
  (vowel) => consonantK + vowel
);
console.log(consonantKvowelsByRomaji.toString());
// ka,ki,ku,ke,ko`,
    sound: ['ka', 'ki', 'ku', 'ke', 'ko'],
    jpText: 'The consonant k + vowels spelt by hiragana and katakana.',
    letters: `const consonantKvowelLetters = [
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
  },
};

export default info;

const vowels = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kvowels = { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const englishHiragana = (english, hiragana) =>
  `${english} is ${hiragana} in Hiragana.`;

const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

const red = vowels.a + kvowels.ka;
const redHiragana = englishHiragana('Red', red);
const redKanji = hiraganaKanji(red, '赤');

console.log(redHiragana);
// Red is あか in Hiragana.
console.log(redKanji);
// あか is 赤 in Kanji.

// きおく
const memory = kvowels.ki + vowels.o + kvowels.ku;
const memoryHiragana = englishHiragana('Memory', memory);
const memoryKanji = hiraganaKanji(memory, '記憶');

console.log(memoryHiragana);
// Memory is きおく in Hiragana.
console.log(memoryKanji);
// きおく is 記憶 in Kanji.

// いけ
// こえ

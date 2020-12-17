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

const kVowels =
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


// red・あか・赤
const red = vowels.a + kVowels.ka;
const redHiragana = englishHiragana('Red', red);
const redKanji = hiraganaKanji(red, '赤');

console.log(redHiragana);
// Red is あか in Hiragana.
console.log(redKanji);
// あか is 赤 in Kanji.


// memory・きおく・記憶
const memory = kVowels.ki + vowels.o + kVowels.ku;
const memoryHiragana = englishHiragana('Memory', memory);
const memoryKanji = hiraganaKanji(memory, '記憶');

console.log(memoryHiragana);
// Memory is きおく in Hiragana.
console.log(memoryKanji);
// きおく is 記憶 in Kanji.
`,
    navLink: ['consonants', '', 'one', ''],
  },

  consonantSinfo: {
    explain: {
      title: 'Consonant S',
      text: [
        "Let's try to learn consonant s + vowels!",
        'There are two ways to write in consonant S + vowels.',
        'Hepburn romanization, Kunrei-shiki romanization, and Nihon-shiki romanization.',
        'We will use Hepburn romanization here.',
      ],
    },
    romaji: `// Kunrei-shiki and Nihon-shiki romanization
const sVowelsByRomaji = vowels.map(
  (vowel) => consonantS + vowel
);
console.log(sVowelsByRomaji.toString());
// sa,si,su,se,so

// Hepburn romanization
// (We will use Hepburn romanization here.)
const sVowelsByRomajiHepburn = vowels.map(
  (vowel) => {
    if (vowel === 'i') {
      return consonantS + hepburnElement + vowel;
    } else {
      return consonantS + vowel;
    }
});
console.log(sVowelsByRomajiHepburn.toString());
// sa,shi,su,se,so
`,
    sound: ['sa', 'si', 'su', 'se', 'so'],
    jpText: 'The consonant S + vowels spelt by hiragana and katakana.',
    letters: `const consonantSvowelLetters = [
  { sa: { hiragana: 'さ', katakana: 'サ' } },
  { si: { hiragana: 'し', katakana: 'シ' } },
  { su: { hiragana: 'す', katakana: 'ス' } },
  { se: { hiragana: 'せ', katakana: 'セ' } },
  { so: { hiragana: 'そ', katakana: 'ソ' } },
];`,
    exampleText: "Let's use consonant s + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const sVowels =
  { sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ' };

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

const kVowels = { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const englishHiragana = (english, hiragana) =>
  `${english} is ${hiragana} in Hiragana.`;

const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

// あか
const red = vowels.a + kVowels.ka;
const redHiragana = englishHiragana('Red', red);
const redKanji = hiraganaKanji(red, '赤');

console.log(redHiragana);
// Red is あか in Hiragana.
console.log(redKanji);
// あか is 赤 in Kanji.

// きおく
const memory = kVowels.ki + vowels.o + kVowels.ku;
const memoryHiragana = englishHiragana('Memory', memory);
const memoryKanji = hiraganaKanji(memory, '記憶');

console.log(memoryHiragana);
// Memory is きおく in Hiragana.
console.log(memoryKanji);
// きおく is 記憶 in Kanji.

// いけ
const pond = vowels.i + kVowels.ke;
const pondHiragana = englishHiragana('Pond', pond);
const pondKanji = hiraganaKanji(pond, '池');

console.log(pondHiragana);
// Pond is いけ in Hiragana.
console.log(pondKanji);
// いけ is 池 in Kanji.

// こえ
const voice = kVowels.ko + vowels.e;
const voiceHiragana = englishHiragana('Voice', voice);
const voiceKanji = hiraganaKanji(voice, '声');

console.log(voiceHiragana);
// Voice is こえ in Hiragana.
console.log(voiceKanji);
// こえ is 声 in Kanji.

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


// pond・いけ・池
const pond = vowels.i + kVowels.ke;
const pondHiragana = englishHiragana('Pond', pond);
const pondKanji = hiraganaKanji(pond, '池');

console.log(pondHiragana);
// Pond is いけ in Hiragana.
console.log(pondKanji);
// いけ is 池 in Kanji.


// voice・こえ・声
const voice = kVowels.ko + vowels.e;
const voiceHiragana = englishHiragana('Voice', voice);
const voiceKanji = hiraganaKanji(voice, '声');

console.log(voiceHiragana);
// Voice is こえ in Hiragana.
console.log(voiceKanji);
// こえ is 声 in Kanji.
`,
    navLink: ['consonants', '', 'one', ''],
  },

  consonantSinfo: {
    explain: {
      title: 'Consonant S',
      text: [
        "Let's try to learn consonant s + vowels!",
        '',
        'There are two ways to write in consonant s + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantS = 's';
const vowels = [...'aiueo'];
const hepburnElem = 'h';

// Kunrei-shiki and Nihon-shiki Romaji
const sVowelsByRomaji = vowels.map(
  (vowel) => consonantS + vowel
);
console.log(sVowelsByRomaji.toString());
// sa,si,su,se,so

// Hepburn-shiki Romaji(We will use this here.)
const sVowelsByRomajiHepburn = vowels.map(
  (vowel) => {
    if (vowel === 'i') {
      return consonantS + hepburnElem + vowel;
    } else {
      return consonantS + vowel;
    }
});
console.log(sVowelsByRomajiHepburn.toString());
// sa,shi,su,se,so
`,
    sound: ['sa', 'shi', 'su', 'se', 'so'],
    jpText: 'The consonant S + vowels spelt by hiragana and katakana.',
    letters: `const consonantSvowelLetters = [
  { sa: { hiragana: 'さ', katakana: 'サ' } },
  { shi: { hiragana: 'し', katakana: 'シ' } },
  { su: { hiragana: 'す', katakana: 'ス' } },
  { se: { hiragana: 'せ', katakana: 'セ' } },
  { so: { hiragana: 'そ', katakana: 'ソ' } },
];`,
    exampleText: "Let's use consonant s + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

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
    navLink: ['kvowels', '', '', ''],
  },
};

export default info;

const vowels = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };
const kVowels = { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };
const sVowels = { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const englishHiragana = (english, hiragana) =>
  `${english} is ${hiragana} in Hiragana.`;

const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

// k vowels
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

// s vowels
// awesome・さいこう・最高
const awesome = sVowels.sa + vowels.i + kVowels.ko + vowels.u;
const awesomeHiragana = englishHiragana('Awesome', awesome);
const awesomeKanji = hiraganaKanji(awesome, '最高');

console.log(awesomeHiragana);
// Awesome is さいこう in Hiragana.
console.log(awesomeKanji);
// さいこう is 最高 in Kanji.

// match・しあい・試合
const match = sVowels.shi + vowels.a + vowels.i;
const matchHiragana = englishHiragana('Match', match);
const matchKanji = hiraganaKanji(match, '試合');

console.log(matchHiragana);
// Match is しあい in Hiragana.
console.log(matchKanji);
// しあい is 試合 in Kanji.

// hem・すそ・裾
const hem = sVowels.su + sVowels.so;
const hemHiragana = englishHiragana('Hem', hem);
const hemKanji = hiraganaKanji(hem, '裾');

console.log(hemHiragana);
// Hem is すそ in Hiragana.
console.log(hemKanji);
// すそ is 裾 in Kanji.

// せかい
const world = sVowels.se + kVowels.ka + vowels.i;
const worldHiragana = englishHiragana('World', world);
const worldKanji = hiraganaKanji(world, '世界');

console.log(worldHiragana);
// World is せかい in Hiragana.
console.log(worldKanji);
// せかい is 世界 in Kanji.

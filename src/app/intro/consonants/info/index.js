const info = {
  consonantKinfo: {
    explain: {
      title: 'Consonant K',
      text: "Let's try to learn consonant k + vowels!",
    },
    romaji: `const consonantK = 'k';
const vowels = [...'aiueo'];

const kVowelsByRomaji = vowels.map(
  (vowel) => consonantK + vowel
);
console.log(kVowelsByRomaji.toString());
// ka, ki, ku, ke, ko`,
    sound: ['ka', 'ki', 'ku', 'ke', 'ko'],
    jpText: 'The consonant k + vowels spelt by hiragana and katakana.',
    letters: `const kVowelLetters = [
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
    navLink: ['consonants', 'svowels', 'one', ''],
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
// sa, si, su, se, so

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
// sa, shi, su, se, so
`,
    sound: ['sa', 'shi', 'su', 'se', 'so'],
    jpText: 'The consonant s + vowels spelt by hiragana and katakana.',
    letters: `const sVowelLetters = [
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


// awesome・さいこう・最高
const awesome = sVowels.sa + vowels.i + kVowels.ko + vowels.u;
const awesomeHiragana = englishHiragana('Awesome', awesome);
const awesomeKanji = hiraganaKanji(awesome, '最高');

console.log(awesomeHiragana);
// Awesome is さいこう in Hiragana.
console.log(awesomeKanji);
// さいこう is 最高 in Kanji.


// match(game)・しあい・試合
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


// world・せかい・世界
const world = sVowels.se + kVowels.ka + vowels.i;
const worldHiragana = englishHiragana('World', world);
const worldKanji = hiraganaKanji(world, '世界');

console.log(worldHiragana);
// World is せかい in Hiragana.
console.log(worldKanji);
// せかい is 世界 in Kanji.
`,
    navLink: ['kvowels', 'tvowels', '', ''],
  },

  consonantTinfo: {
    explain: {
      title: 'Consonant T',
      text: [
        "Let's try to learn consonant t + vowels!",
        '',
        'There are two ways to write in consonant t + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantT = 't';
const vowels = [...'aiueo'];
const hepburnElem = ['ch', 's'];

// Kunrei-shiki and Nihon-shiki Romaji
const tVowelsByRomaji = vowels.map(
  (vowel) => consonantT + vowel
);
console.log(tVowelsByRomaji.toString());
// ta, ti, tu, te, to

// Hepburn-shiki Romaji(We will use this here.)
const tVowelsByRomajiHepburn = vowels.map(
  (vowel) => {
    if (vowel === 'i') {
      return hepburnElem[0] + vowel;
    } else if (vowel === 'u') {
      return consonantT + hepburnElem[1] + vowel;
    } else {
      return consonantT + vowel;
    }
});
console.log(tVowelsByRomajiHepburn.toString());
// ta, chi, tsu, te, to
`,
    sound: ['ta', 'chi', 'tsu', 'te', 'to'],
    jpText: 'The consonant t + vowels spelt by hiragana and katakana.',
    letters: `const tVowelLetters = [
  { ta: { hiragana: 'た', katakana: 'タ' } },
  { chi: { hiragana: 'ち', katakana: 'チ' } },
  { tsu: { hiragana: 'つ', katakana: 'ツ' } },
  { te: { hiragana: 'て', katakana: 'テ' } },
  { to: { hiragana: 'と', katakana: 'ト' } },
];`,
    exampleText: "Let's use consonant s + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

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


// boredom・たいくつ・退屈
const boredom =
  tVowels.ta + vowels.i + kVowels.ku + tVowels.tsu;
const boredomHiragana = englishHiragana('Boredom', boredom);
const boredomKanji = hiraganaKanji(boredom, '退屈');

console.log(boredomHiragana);
// Boredom is たいくつ in Hiragana.
console.log(boredomKanji);
// たいくつ is 退屈 in Kanji.

`,
    navLink: ['svowels', '', '', ''],
  },

  consonantNinfo: {
    explain: {
      title: 'Consonant N',
      text: "Let's try to learn consonant n + vowels!",
    },
    romaji: `const consonantK = 'n';
const vowels = [...'aiueo'];

const nVowelsByRomaji = vowels.map(
  (vowel) => consonantN + vowel
);
console.log(nVowelsByRomaji.toString());
// na, ni, nu, ne, no`,
    sound: ['na', 'ni', 'nu', 'ne', 'no'],
    jpText: 'The consonant n + vowels spelt by hiragana and katakana.',
    letters: `const nVowelLetters = [
  { na: { hiragana: 'な', katakana: 'ナ' } },
  { ni: { hiragana: 'に', katakana: 'ニ' } },
  { nu: { hiragana: 'ぬ', katakana: 'ヌ' } },
  { ne: { hiragana: 'ね', katakana: 'ネ' } },
  { no: { hiragana: 'の', katakana: 'ノ' } },
];`,
    exampleText: "Let's use consonant n + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

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
    navLink: ['tvowels', '', '', ''],
  },

  consonantHinfo: {
    explain: {
      title: 'Consonant H',
      text: [
        "Let's try to learn consonant h + vowels!",
        '',
        'There are two ways to write in consonant h + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantS = 'h';
const vowels = [...'aiueo'];
const hepburnElem = 'f';

// Kunrei-shiki and Nihon-shiki Romaji
const hVowelsByRomaji = vowels.map(
  (vowel) => consonantH + vowel
);
console.log(hVowelsByRomaji.toString());
// ha, hi, hu, he, ho

// Hepburn-shiki Romaji(We will use this here.)
const hVowelsByRomajiHepburn = vowels.map(
  (vowel) => {
    if (vowel === 'u') {
      return hepburnElem + vowel;
    } else {
      return consonantH + vowel;
    }
});
console.log(hVowelsByRomajiHepburn.toString());
// ha, hi, fu, he, ho
`,
    sound: ['ha', 'hi', 'fu', 'he', 'ho'],
    jpText: 'The consonant h + vowels spelt by hiragana and katakana.',
    letters: `const hVowelLetters = [
  { ha: { hiragana: 'は', katakana: 'ハ' } },
  { hi: { hiragana: 'ひ', katakana: 'ヒ' } },
  { fu: { hiragana: 'ふ', katakana: 'フ' } },
  { he: { hiragana: 'へ', katakana: 'ヘ' } },
  { ho: { hiragana: 'ほ', katakana: 'ホ' } },
];`,
    exampleText: "Let's use consonant h + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

const hVowels =
  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

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
    navLink: ['nvowels', '', '', ''],
  },

  consonantMinfo: {
    explain: {
      title: 'Consonant M',
      text: "Let's try to learn consonant m + vowels!",
    },
    romaji: `const consonantM = 'm';
const vowels = [...'aiueo'];

const mVowelsByRomaji = vowels.map(
  (vowel) => consonantM + vowel
);
console.log(mVowelsByRomaji.toString());
// ma, mi, mu, me, mo`,
    sound: ['ma', 'mi', 'mu', 'me', 'mo'],
    jpText: 'The consonant m + vowels spelt by hiragana and katakana.',
    letters: `const mVowelLetters = [
  { ma: { hiragana: 'ま', katakana: 'マ' } },
  { mi: { hiragana: 'み', katakana: 'ミ' } },
  { mu: { hiragana: 'む', katakana: 'ム' } },
  { me: { hiragana: 'め', katakana: 'メ' } },
  { mo: { hiragana: 'も', katakana: 'モ' } },
];`,
    exampleText: "Let's use consonant m + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

const hVowels =
  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

const mVowels =
  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };

const yVowels =
  { ya: 'や', yu: 'ゆ', yo: 'よ' };

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
    navLink: ['hvowels', '', '', ''],
  },

  consonantYinfo: {
    explain: {
      title: 'Consonant Y',
      text: [
        "Let's try to learn consonant y + vowels!",
        '',
        'This combination is fewer than the others.',
      ],
    },
    romaji: `const consonantY = 'y';
const vowels = [...'aiueo'];

const mVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantY + vowel);
console.log(mVowelsByRomaji.toString());
// ya, yu, yo

// There might be a time you see such the ways to be written.
// The 'i' and 'e' are the same as vowels'
// and most Japanese might not be sure when to use😅
const yVowelsByRomajiSeldom = vowels.map((vowel) => {
  if (vowel === 'i') return vowel;
  else if (vowel === 'e') return vowel;
  else return consonantY + vowel;
});

console.log(yVowelsByRomajiSeldom.toString());
// ya, i, yu, e, yo`,
    sound: ['ya', 'yu', 'yo'],
    jpText: 'The consonant y + vowels spelt by hiragana and katakana.',
    letters: `const yVowelLetters = [
  { ya: { hiragana: 'や', katakana: 'ヤ' } },
  { yu: { hiragana: 'ゆ', katakana: 'ユ' } },
  { yo: { hiragana: 'よ', katakana: 'ヨ' } },
];`,
    exampleText: "Let's use consonant y + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

const hVowels =
  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

const mVowels =
  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };

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
    navLink: ['mvowels', '', '', ''],
  },

  consonantRinfo: {
    explain: {
      title: 'Consonant R',
      text: "Let's try to learn consonant r + vowels!",
    },
    romaji: `const consonantR = 'r';
const vowels = [...'aiueo'];

const rVowelsByRomaji = vowels.map(
  (vowel) => consonantR + vowel
);
console.log(rVowelsByRomaji.toString());
// ra, ri, ru, re, ro
`,
    sound: ['ra', 'ri', 'ru', 're', 'ro'],
    jpText: 'The consonant r + vowels spelt by hiragana and katakana.',
    letters: `const rVowelLetters = [
  { ra: { hiragana: 'ら', katakana: 'ラ' } },
  { ri: { hiragana: 'り', katakana: 'リ' } },
  { ru: { hiragana: 'る', katakana: 'ル' } },
  { re: { hiragana: 'れ', katakana: 'レ' } },
  { ro: { hiragana: 'ろ', katakana: 'ロ' } },
];`,
    exampleText: "Let's use consonant r + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

const hVowels =
  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

const mVowels =
  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };

const yVowels =
  { ya: 'や', yu: 'ゆ', yo: 'よ' };

const rVowels =
  { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' };

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
    navLink: ['yvowels', '', '', ''],
  },

  consonantWinfo: {
    explain: {
      title: 'Consonant W',
      text: [
        "Let's try to learn consonant w + vowels!",
        '',
        'This combination is fewer than the others.',
        'There are two ways to write in consonant w + vowels.',
        '',
        'We will use Kunrei-shiki and Hepburn-shiki Romaji here.',
        '(Unless there is a need to make a distinction.)',
      ],
    },
    romaji: `const consonantW = 'w';
const vowels = [...'aiueo'];

// Nihon-shiki Romaji
const wVowelsByRomajiNihon = vowels
  .filter((vowel) => vowel === 'a' || vowel === 'o')
  .map((vowel) => consonantW + vowel);

console.log(wVowelsByRomajiNihon.toString());
// wa, wo

// Kunrei-shiki and Hepburn-shiki Romaji
// (We will use this here.)
const wVowelsByRomajiHepburn =
  [consonantW + vowels[0], vowels[4]];
console.log(wVowelsByRomajiHepburn.toString());
// wa, o

// There might be a time you see
// such the ways to be written.
// The sounds of 'i','u','e','o','wi','wu','we','wo' are
// the same as vowels'
const wVowelsByRomajiNihonPast = vowels
  .map((vowel) => consonantW + vowel);
console.log(wVowelsByRomajiNihonPast.toString());
// wa, wi, wu, we, wo

const wVowelsByRomajiKunreiPast = vowels.map((vowel) => {
  if (vowel === 'a') return consonantW + vowel;
  else return vowel;
});
console.log(wVowelsByRomajiKunreiPast.toString());
// wa, i, u, e, o
`,
    sound: ['wa', 'wo'],
    jpText: 'The consonant w + vowels spelt by hiragana and katakana.',
    letters: `const wVowelLetters = [
  { wa: { hiragana: 'わ', katakana: 'ワ' } },
  { o: { hiragana: 'を', katakana: 'ヲ' } },
];

// The patterns of old letters of Hiragana/Katakana.
// *'u' is the same as vowels'.
// Seldom use so just a note.
const wVowelLetters = [
  { wa: { hiragana: 'わ', katakana: 'ワ' } },
  { i: { hiragana: 'ゐ', katakana: 'ヰ' } },
  { u: { hiragana: 'う', katakana: 'ウ' } },
  { e: { hiragana: 'ゑ', katakana: 'ヱ' } },
  { o: { hiragana: 'を', katakana: 'ヲ' } },
];
`,
    exampleText: "Let's use consonant w + vowels in practice!",
    examples: `// Base code
const vowels =
  { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };

const kVowels =
  { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };

const sVowels =
  { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };

const tVowels =
  { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };

const nVowels =
  { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };

const hVowels =
  { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

const mVowels =
  { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };

const yVowels =
  { ya: 'や', yu: 'ゆ', yo: 'よ' };

const rVowels =
  { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' };

const wVowels =
  { wa: 'わ', o: 'を' };

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
    navLink: ['nvowels', '', '', ''],
  },
};

export default info;

const vowels = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };
const kVowels = { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };
const sVowels = { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };
const tVowels = { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };
const nVowels = { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };
const hVowels = { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };
const mVowels = { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' };
const yVowels = { ya: 'や', yu: 'ゆ', yo: 'よ' };
const rVowels = { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' };
const wVowels = { wa: 'わ', o: 'を' };

const englishHiragana = (english, hiragana) =>
  `${english} is ${hiragana} in Hiragana.`;

const hiraganaKanji = (hiragana, kanji) => `${hiragana} is ${kanji} in Kanji.`;

// k vowels ----------
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

// s vowels ----------
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

// world・せかい・世界
const world = sVowels.se + kVowels.ka + vowels.i;
const worldHiragana = englishHiragana('World', world);
const worldKanji = hiraganaKanji(world, '世界');

console.log(worldHiragana);
// World is せかい in Hiragana.
console.log(worldKanji);
// せかい is 世界 in Kanji.

// t vowels ----------
// boredom・たいくつ・退屈
const boredom = tVowels.ta + vowels.i + kVowels.ku + tVowels.tsu;
const boredomHiragana = englishHiragana('Boredom', boredom);
const boredomKanji = hiraganaKanji(boredom, '退屈');

console.log(boredomHiragana);
// Boredom is たいくつ in Hiragana.
console.log(boredomKanji);
// たいくつ is 退屈 in Kanji.

// blood・ち・血
const blood = tVowels.chi;
const bloodHiragana = englishHiragana('Blood', blood);
const bloodKanji = hiraganaKanji(blood, '血');

console.log(bloodHiragana);
// Blood is ち in Hiragana.
console.log(bloodKanji);
// ち is 血 in Kanji.

// vertical・たて・縦
const vertical = tVowels.ta + tVowels.te;
const verticalHiragana = englishHiragana('Vertical', vertical);
const verticalKanji = hiraganaKanji(vertical, '縦');

console.log(verticalHiragana);
// Vertical is たて in Hiragana.
console.log(verticalKanji);
// たて is 縦 in Kanji.

// outside・そと・外
const outside = sVowels.so + tVowels.to;
const outsideHiragana = englishHiragana('Outside', outside);
const outsideKanji = hiraganaKanji(outside, '外');

console.log(outsideHiragana);
// Outside is そと in Hiragana.
console.log(outsideKanji);
// そと is 外 in Kanji.

// n vowels ----------
// summer・なつ・夏
const summer = nVowels.na + tVowels.tsu;
const summerHiragana = englishHiragana('Summer', summer);
const summerKanji = hiraganaKanji(summer, '夏');

console.log(summerHiragana);
// Summer is なつ in Hiragana.
console.log(summerKanji);
// なつ is 夏 in Kanji.

// meat・にく・肉
const meat = nVowels.ni + kVowels.ku;
const meatHiragana = englishHiragana('Meat', meat);
const meatKanji = hiraganaKanji(meat, '肉');

console.log(meatHiragana);
// Meat is にく in Hiragana.
console.log(meatKanji);
// にく is 肉 in Kanji.

// cloth・ぬの・布
const cloth = nVowels.nu + nVowels.no;
const clothHiragana = englishHiragana('Cloth', cloth);
const clothKanji = hiraganaKanji(cloth, '布');

console.log(clothHiragana);
// Cloth is ぬの in Hiragana.
console.log(clothKanji);
// ぬの is 布 in Kanji.

// cat・ねこ・猫
const cat = nVowels.ne + kVowels.ko;
const catHiragana = englishHiragana('Cat', cat);
const catKanji = hiraganaKanji(cat, '猫');

console.log(catHiragana);
// Cat is ねこ in Hiragana.
console.log(catKanji);
// ねこ is 猫 in Kanji.

// h vowels ----------
// はな
const flower = hVowels.ha + nVowels.na;
const flowerHiragana = englishHiragana('Flower', flower);
const flowerKanji = hiraganaKanji(flower, '花');

console.log(flowerHiragana);
// Flower is はな in Hiragana.
console.log(flowerKanji);
// はな is 花 in Kanji.

// skin・ひふ・皮膚
const skin = hVowels.hi + hVowels.fu;
const skinHiragana = englishHiragana('Skin', skin);
const skinKanji = hiraganaKanji(skin, '皮膚');

console.log(skinHiragana);
// Skin is ひふ in Hiragana.
console.log(skinKanji);
// ひふ is 皮膚 in Kanji.

// equity・こうへい・公平
const equity = kVowels.ko + vowels.u + hVowels.he + vowels.i;
const equityHiragana = englishHiragana('Equity', equity);
const equityKanji = hiraganaKanji(equity, '公平');

console.log(equityHiragana);
// Equity is こうへい in Hiragana.
console.log(equityKanji);
// こうへい is 公平 in Kanji.

// star・ほし・星
const star = hVowels.ho + sVowels.shi;
const starHiragana = englishHiragana('Star', star);
const starKanji = hiraganaKanji(star, '星');

console.log(starHiragana);
// Star is ほし in Hiragana.
console.log(starKanji);
// ほし is 星 in Kanji.

// m vowels ----------
// bean・まめ・豆
const bean = mVowels.ma + mVowels.me;
const beanHiragana = englishHiragana('Bean', bean);
const beanKanji = hiraganaKanji(bean, '豆');

console.log(beanHiragana);
// Bean is まめ in Hiragana.
console.log(beanKanji);
// まめ is 豆 in Kanji.

// south・みなみ・南
const south = mVowels.mi + nVowels.na + mVowels.mi;
const southHiragana = englishHiragana('South', south);
const southKanji = hiraganaKanji(south, '南');

console.log(southHiragana);
// South is みなみ in Hiragana.
console.log(southKanji);
// みなみ is 南 in Kanji.

// bug(insect)・むし・虫
const bug = mVowels.mu + sVowels.shi;
const bugHiragana = englishHiragana('Bug', bug);
const bugKanji = hiraganaKanji(bug, '虫');

console.log(bugHiragana);
// Bug is むし in Hiragana.
console.log(bugKanji);
// むし is 虫 in Kanji.

// string・ひも・紐
const string = hVowels.hi + mVowels.mo;
const stringHiragana = englishHiragana('String', string);
const stringKanji = hiraganaKanji(string, '紐');

console.log(stringHiragana);
// String is ひも in Hiragana.
console.log(stringKanji);
// ひも is 紐 in Kanji.

// y vowels ----------
// vegetable・やさい・野菜
const vegetable = yVowels.ya + sVowels.sa + vowels.i;
const vegetableHiragana = englishHiragana('Vegetable', vegetable);
const vegetableKanji = hiraganaKanji(vegetable, '野菜');

console.log(vegetableHiragana);
// Vegetable is やさい in Hiragana.
console.log(vegetableKanji);
// やさい is 野菜 in Kanji.

// valid・ゆうこう・有効
const valid = yVowels.yu + vowels.u + kVowels.ko + vowels.u;
const validHiragana = englishHiragana('Valid', valid);
const validKanji = hiraganaKanji(valid, '有効');

console.log(validHiragana);
// Valid is ゆうこう in Hiragana.
console.log(validKanji);
// ゆうこう is 有効 in Kanji.

// good morning・おはよう
const goodMorning = vowels.o + hVowels.ha + yVowels.yo + vowels.u;
const goodMorningHiragana = englishHiragana('Good morning', goodMorning);

console.log(goodMorningHiragana);
// Good morning is おはよう in Hiragana.

// r vowels ----------
// ease・らく・楽
const ease = rVowels.ra + kVowels.ku;
const easeHiragana = englishHiragana('Ease', ease);
const easeKanji = hiraganaKanji(ease, '楽');

console.log(easeHiragana);
// Ease is らく in Hiragana.
console.log(easeKanji);
// らく is 楽 in Kanji.

// reason・りゆう・理由
const reason = rVowels.ri + yVowels.yu + vowels.u;
const reasonHiragana = englishHiragana('Reason', reason);
const reasonKanji = hiraganaKanji(reason, '理由');

console.log(reasonHiragana);
// Reason is りゆう in Hiragana.
console.log(reasonKanji);
// りゆう is 理由 in Kanji.

// absence・るす・留守
const absence = rVowels.ru + sVowels.su;
const absenceHiragana = englishHiragana('Absence', absence);
const absenceKanji = hiraganaKanji(absence, '留守');

console.log(absenceHiragana);
// Absence is るす in Hiragana.
console.log(absenceKanji);
// るす is 留守 in Kanji.

// history・れきし・歴史
const history = rVowels.re + kVowels.ki + sVowels.shi;
const historyHiragana = englishHiragana('History', history);
const historyKanji = hiraganaKanji(history, '歴史');

console.log(historyHiragana);
// History is れきし in Hiragana.
console.log(historyKanji);
// れきし is 歴史 in Kanji.

// corridor・ろうか・廊下
const corridor = rVowels.ro + vowels.u + kVowels.ka;
const corridorHiragana = englishHiragana('Corridor', corridor);
const corridorKanji = hiraganaKanji(corridor, '廊下');

console.log(corridorHiragana);
// Corridor is ろうか in Hiragana.
console.log(corridorKanji);
// ろうか is 廊下 in Kanji.

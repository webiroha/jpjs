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
    jpText: 'The consonant s + vowels spelt by hiragana and katakana.',
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
`,
    navLink: ['kvowels', '', '', ''],
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
// ta,ti,tu,te,to

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
// ta,chi,tsu,te,to
`,
    sound: ['ta', 'chi', 'tsu', 'te', 'to'],
    jpText: 'The consonant t + vowels spelt by hiragana and katakana.',
    letters: `const consonantTvowelLetters = [
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

const consonantNvowelsByRomaji = vowels.map(
  (vowel) => consonantN + vowel
);
console.log(consonantNvowelsByRomaji.toString());
// na,ni,nu,ne,no`,
    sound: ['na', 'ni', 'nu', 'ne', 'no'],
    jpText: 'The consonant n + vowels spelt by hiragana and katakana.',
    letters: `const consonantNvowelLetters = [
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
// ha,hi,hu,he,ho

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
// ha,hi,fu,he,ho
`,
    sound: ['ha', 'hi', 'fu', 'he', 'ho'],
    jpText: 'The consonant h + vowels spelt by hiragana and katakana.',
    letters: `const consonantSvowelLetters = [
  { ha: { hiragana: 'は', katakana: 'ハ' } },
  { hi: { hiragana: 'ひ', katakana: 'ヒ' } },
  { fu: { hiragana: 'ふ', katakana: 'フ' } },
  { he: { hiragana: 'へ', katakana: 'ヘ' } },
  { ho: { hiragana: 'ほ', katakana: 'ホ' } },
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
};

export default info;

const vowels = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };
const kVowels = { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' };
const sVowels = { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' };
const tVowels = { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' };
const nVowels = { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' };
const hVowels = { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' };

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

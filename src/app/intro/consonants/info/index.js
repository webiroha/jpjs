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


// wisdom・ちえ・知恵
const wisdom = tVowels.chi + vowels.e;
const wisdomHiragana = englishHiragana('Wisdom', wisdom);
const wisdomKanji = hiraganaKanji(wisdom, '知恵');

console.log(wisdomHiragana);
// Wisdom is ちえ in Hiragana.
console.log(wisdomKanji);
// ちえ is 知恵 in Kanji.


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
`,
    navLink: ['svowels', 'nvowels', '', ''],
  },

  consonantNinfo: {
    explain: {
      title: 'Consonant N',
      text: "Let's try to learn consonant n + vowels!",
    },
    romaji: `const consonantN = 'n';
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
`,
    navLink: ['tvowels', 'hvowels', '', ''],
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
    romaji: `const consonantH = 'h';
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
    letters: `// Hiragana "へ" and Katakana "ヘ" are almost the same.
// Most Japanese would not recognize
// the difference between them😅
const hVowelLetters = [
  { ha: { hiragana: 'は', katakana: 'ハ' } },
  { hi: { hiragana: 'ひ', katakana: 'ヒ' } },
  { fu: { hiragana: 'ふ', katakana: 'フ' } },
  { he: { hiragana: 'へ', katakana: 'ヘ' } },
  { ho: { hiragana: 'ほ', katakana: 'ホ' } },
];

// In the case of the 'へ/ヘ'
// used as a postpositional particle,
// the sound is changed into 'e'.
// Please check the sound in vowels page.
const Pattern = [
  { e: { hiragana: 'へ', katakana: 'ヘ' } },
];

// Also, in the case of the 'は/ハ'
// used as a postpositional particle,
// the sound is changed into 'wa'.
// Please check the sound in wvowels page
// after the page was published.
const waPattern = [
  { wa: { hiragana: 'は', katakana: 'ハ' } },
];
`,
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


// flower・はな・花
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
// *The Romaji of this word is expressed
// as a "Kohei" and omit 'u'.
// It will be explained later.


// star・ほし・星
const star = hVowels.ho + sVowels.shi;
const starHiragana = englishHiragana('Star', star);
const starKanji = hiraganaKanji(star, '星');

console.log(starHiragana);
// Star is ほし in Hiragana.
console.log(starKanji);
// ほし is 星 in Kanji.
`,
    navLink: ['nvowels', 'mvowels', '', ''],
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
// The meaning "bug" in IT, is expressed as "バグ".
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
// seldom way - 1
const wVowelsByRomajiNihonPast = vowels
  .map((vowel) => consonantW + vowel);
console.log(wVowelsByRomajiNihonPast.toString());
// wa, wi, wu, we, wo

// seldom way - 2
const wVowelsByRomajiKunreiPast = vowels.map((vowel) => {
  if (vowel === 'a') return consonantW + vowel;
  else return vowel;
});
console.log(wVowelsByRomajiKunreiPast.toString());
// wa, i, u, e, o

// The sound of 'wa' is sometimes used as 'は/ハ' sound.
// The sounds of 'i','u','e','o','wi','wu','we','wo' are
// the same as vowels'
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

// In the case of the 'は/ハ'
// used as a postpositional particle,
// the sound is changed into 'wa'.
const waPattern = [
  { wa: { hiragana: 'は', katakana: 'ハ' } },
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

  consonantNNinfo: {
    explain: {
      title: 'Consonant N',
      text: [
        'The exceptional pattern, N',
        '',
        'This is a single sound unlike others.',
        'This letter is included with the other letters',
        'as basic Japanese letters.',
      ],
    },
    romaji: `const nByRomaji = 'n';
console.log(nByRomaji);`,
    sound: ['n'],
    jpText: 'The consonant N spelt by hiragana and katakana.',
    letters: `const nLetter = [
  { n: { hiragana: 'ん', katakana: 'ン' } },
];
// We type 'ん/ン' with doubling n(nn).
`,
    exampleText: "Let's use consonant n in practice!",
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

const wVowelsParticle = { wa: 'は' };

const n = 'ん';

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

  consonantGinfo: {
    explain: {
      title: 'Consonant G',
      text: [
        "Let's try to learn consonant g + vowels!",
        'These words are voiced version of consonant k + vowels.',
      ],
    },
    romaji: `const consonantG = 'g';
const vowels = [...'aiueo'];

const gVowelsByRomaji = vowels.map(
  (vowel) => consonantG + vowel
);
console.log(gVowelsByRomaji.toString());
// ga, gi, gu, ge, go`,
    sound: ['ga', 'gi', 'gu', 'ge', 'go'],
    jpText: 'The consonant g + vowels spelt by hiragana and katakana.',
    letters: `// The mark of "゛" is added at the right top hand corner
const gVowelLetters = [
  { ga: { hiragana: 'が', katakana: 'ガ' } },
  { gi: { hiragana: 'ぎ', katakana: 'ギ' } },
  { gu: { hiragana: 'ぐ', katakana: 'グ' } },
  { ge: { hiragana: 'げ', katakana: 'ゲ' } },
  { go: { hiragana: 'ご', katakana: 'ゴ' } },
];`,
    exampleText: "Let's use consonant g + vowels in practice!",
    examples: `// Base code
const gVowels =
  { ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご' };

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
    navLink: ['n', '', '', ''],
  },

  consonantZinfo: {
    explain: {
      title: 'Consonant Z',
      text: [
        "Let's try to learn consonant z + vowels!",
        'These words are voiced version of consonant s + vowels.',
        '',
        'There are two ways to write in consonant z + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantZ = 'z';
const vowels = [...'aiueo'];
const hepburnElem = 'j';

// Kunrei-shiki and Nihon-shiki Romaji
const zVowelsByRomaji = vowels.map((vowel) => consonantZ + vowel);
console.log(zVowelsByRomaji.toString());
// za, zi, zu, ze, zo

// Hepburn-shiki Romaji(We will use this here.)
const zVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return hepburnElem + vowel;
  } else {
    return consonantZ + vowel;
  }
});
console.log(zVowelsByRomajiHepburn.toString());
// za, ji, zu, ze, zo`,
    sound: ['za', 'ji', 'zu', 'ze', 'zo'],
    jpText: 'The consonant z + vowels spelt by hiragana and katakana.',
    letters: `// The mark of "゛" is added at the right top hand corner
const zVowelLetters = [
  { za: { hiragana: 'ざ', katakana: 'ザ' } },
  { ji: { hiragana: 'じ', katakana: 'ジ' } },
  { zu: { hiragana: 'ず', katakana: 'ズ' } },
  { ze: { hiragana: 'ぜ', katakana: 'ゼ' } },
  { zo: { hiragana: 'ぞ', katakana: 'ゾ' } },
];`,
    exampleText: "Let's use consonant g + vowels in practice!",
    examples: `// Base code
const gVowels =
  { ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご' };
const zVowels =
  { za: 'ざ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ' };

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
    navLink: ['consonants', '', '', ''],
  },

  consonantDinfo: {
    explain: {
      title: 'Consonant D',
      text: [
        "Let's try to learn consonant d + vowels!",
        'These words are voiced version of consonant t + vowels.',
        '',
        'There are three ways to write in consonant d + vowels.',
        'We will use Hepburn-shiki Romaji here.',
        '',
        'The sounds and Romaji of "ji" and "zu" are the same as z vowels.',
        'These letters are the different from them.',
      ],
    },
    romaji: `const consonantD = 'd';
const vowels = [...'aiueo'];
const hepburnElem = ['j', 'z'];

// Nihon-shiki Romaji
const dVowelsByRomaji = vowels.map((vowel) => consonantD + vowel);
console.log(dVowelsByRomaji.toString());
// da, di, du, de, do

// Kunrei-shiki Romaji
const dVowelsByRomajiKunrei = vowels.map((vowel) => {
  if (vowel === 'i' || vowel === 'u') {
    return hepburnElem[1] + vowel;
  } else {
    return consonantD + vowel;
  }
});
console.log(dVowelsByRomajiKunrei.toString());
// da, zi, zu, de, do

// Hepburn-shiki Romaji(We will use this here.)
const dVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return hepburnElem[0] + vowel;
  } else if (vowel === 'u') {
    return hepburnElem[1] + vowel;
  } else {
    return consonantD + vowel;
  }
});
console.log(dVowelsByRomajiHepburn.toString());
// da, ji, zu, de, do`,
    sound: ['da', 'ji', 'zu', 'de', 'do'],
    jpText: 'The consonant d + vowels spelt by hiragana and katakana.',
    letters: `// The mark of "゛" is added at the right top hand corner
const dVowelLetters = [
  { da: { hiragana: 'だ', katakana: 'ダ' } },
  { ji: { hiragana: 'ぢ', katakana: 'ヂ' } },
  { zu: { hiragana: 'づ', katakana: 'ヅ' } },
  { de: { hiragana: 'で', katakana: 'デ' } },
  { do: { hiragana: 'ど', katakana: 'ド' } },
];`,
    exampleText: "Let's use consonant d + vowels in practice!",
    examples: `// Base code
const gVowels =
  { ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご' };

const zVowels =
  { za: 'ざ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ' };

const dVowels =
  { da: 'だ', ji: 'ぢ', zu: 'づ', de: 'で', do: 'ど' };

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
    navLink: ['consonants', '', '', ''],
  },

  consonantBinfo: {
    explain: {
      title: 'Consonant B',
      text: [
        "Let's try to learn consonant b + vowels!",
        'These words are voiced version of consonant h + vowels.',
      ],
    },
    romaji: `const consonantB = 'b';
const vowels = [...'aiueo'];

const bVowelsByRomaji = vowels.map(
  (vowel) => consonantB + vowel
);
console.log(bVowelsByRomaji.toString());
// ba, bi, bu, be, bo`,
    sound: ['ba', 'bi', 'bu', 'be', 'bo'],
    jpText: 'The consonant b + vowels spelt by hiragana and katakana.',
    letters: `// The mark of "゛" is added at the right top hand corner
const bVowelLetters = [
  { ba: { hiragana: 'ば', katakana: 'バ' } },
  { bi: { hiragana: 'び', katakana: 'ビ' } },
  { bu: { hiragana: 'ぶ', katakana: 'ブ' } },
  { be: { hiragana: 'べ', katakana: 'ベ' } },
  { bo: { hiragana: 'ぼ', katakana: 'ボ' } },
];`,
    exampleText: "Let's use consonant b + vowels in practice!",
    examples: `// Base code
`,
    navLink: ['dvowels', '', '', ''],
  },

  consonantPinfo: {
    explain: {
      title: 'Consonant P',
      text: "Let's try to learn consonant p + vowels!",
    },
    romaji: `const consonantP = 'p';
const vowels = [...'aiueo'];

const pVowelsByRomaji = vowels.map(
  (vowel) => consonantP + vowel
);
console.log(pVowelsByRomaji.toString());
// pa, pi, pu, pe, po`,
    sound: ['pa', 'pi', 'pu', 'pe', 'po'],
    jpText: 'The consonant p + vowels spelt by hiragana and katakana.',
    letters: `// The mark of "゜" is added at the right top hand corner
const pVowelLetters = [
  { pa: { hiragana: 'ぱ', katakana: 'パ' } },
  { pi: { hiragana: 'ぴ', katakana: 'ピ' } },
  { pu: { hiragana: 'ぷ', katakana: 'プ' } },
  { pe: { hiragana: 'ぺ', katakana: 'ペ' } },
  { po: { hiragana: 'ぽ', katakana: 'ポ' } },
];`,
    exampleText: "Let's use consonant p + vowels in practice!",
    examples: `// Base code
`,
    navLink: ['bvowels', '', '', ''],
  },

  consonantKYinfo: {
    explain: {
      title: 'Consonant KY',
      text: "Let's try to learn consonant k + y + vowels!",
    },
    romaji: `const consonantK = 'k';
const hepburnElem = 'y';
const vowels = [...'aiueo'];

const kyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantK + hepburnElem + vowel);
console.log(kyVowelsByRomaji.toString());
// kya, kyu, kyo`,
    sound: ['kya', 'kyu', 'kyo'],
    jpText: 'The consonant k + y + vowels spelt by hiragana and katakana.',
    letters: `const kyVowelLetters = [
  { kya: { hiragana: 'きゃ', katakana: 'キャ' } },
  { kyu: { hiragana: 'きゅ', katakana: 'キュ' } },
  { kyo: { hiragana: 'きょ', katakana: 'キョ' } },
];`,
    exampleText: "Let's use consonant k + y + vowels in practice!",
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

  consonantSHinfo: {
    explain: {
      title: 'Consonant SH',
      text: [
        "Let's try to learn consonant s + h + vowels!",
        '',
        'There are two ways to write in consonant s + h + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantS = 's';
const kunreiNihonElem = 'y';
const hepburnElem = 'h';
const vowels = [...'aiueo'];

// Kunrei-shiki and Nihon-shiki Romaji
const shVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantS + kunreiNihonElem + vowel);
console.log(shVowelsByRomaji.toString());
// sya, syu, syo

// Hepburn-shiki Romaji(We will use this here.)
const shVowelsByRomajiHepburn = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantS + hepburnElem + vowel);
console.log(shVowelsByRomajiHepburn.toString());
// sha, shu, sho
`,
    sound: ['sha', 'shu', 'sho'],
    jpText: 'The consonant s + h + vowels spelt by hiragana and katakana.',
    letters: `const shVowelLetters = [
  { sha: { hiragana: 'しゃ', katakana: 'シャ' } },
  { shu: { hiragana: 'しゅ', katakana: 'シュ' } },
  { sho: { hiragana: 'しょ', katakana: 'ショ' } },
];`,
    exampleText: "Let's use consonant s + h + vowels in practice!",
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
    navLink: ['kyvowels', '', '', ''],
  },

  consonantCHinfo: {
    explain: {
      title: 'Consonant CH',
      text: [
        "Let's try to learn consonant c + h + vowels!",
        '',
        'There are two ways to write in consonant c + h + vowels.',
        'We will use Hepburn-shiki Romaji here.',
      ],
    },
    romaji: `const consonantC = 'c';
const kunreiNihonElem = 'ty';
const hepburnElem = 'h';
const vowels = [...'aiueo'];

// Kunrei-shiki and Nihon-shiki Romaji
const chVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => kunreiNihonElem + vowel);
console.log(chVowelsByRomaji.toString());
// tya, tyu, tyo

// Hepburn-shiki Romaji(We will use this here.)
const chVowelsByRomajiHepburn = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantC + hepburnElem + vowel);
console.log(chVowelsByRomajiHepburn.toString());
// cha, chu, cho
`,
    sound: ['cha', 'chu', 'cho'],
    jpText: 'The consonant c + h + vowels spelt by hiragana and katakana.',
    letters: `const chVowelLetters = [
  { cha: { hiragana: 'ちゃ', katakana: 'チャ' } },
  { chu: { hiragana: 'ちゅ', katakana: 'チュ' } },
  { cho: { hiragana: 'ちょ', katakana: 'チョ' } },
];`,
    exampleText: "Let's use consonant c + h + vowels in practice!",
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
    navLink: ['kyvowels', '', '', ''],
  },

  consonantNYinfo: {
    explain: {
      title: 'Consonant NY',
      text: "Let's try to learn consonant n + y + vowels!",
    },
    romaji: `const consonantN = 'n';
const hepburnElem = 'y';
const vowels = [...'aiueo'];

const nyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantN + hepburnElem + vowel);
console.log(nyVowelsByRomaji.toString());
// nya, nyu, nyo`,
    sound: ['nya', 'nyu', 'nyo'],
    jpText: 'The consonant n + y + vowels spelt by hiragana and katakana.',
    letters: `const nyVowelLetters = [
  { nya: { hiragana: 'にゃ', katakana: 'ニャ' } },
  { nyu: { hiragana: 'にゅ', katakana: 'ニュ' } },
  { nyo: { hiragana: 'にょ', katakana: 'ニョ' } },
];`,
    exampleText: "Let's use consonant n + y + vowels in practice!",
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
    navLink: ['chvowels', '', '', ''],
  },

  consonantHYinfo: {
    explain: {
      title: 'Consonant HY',
      text: "Let's try to learn consonant h + y + vowels!",
    },
    romaji: `const consonantH = 'h';
const hepburnElem = 'y';
const vowels = [...'aiueo'];

const hyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantH + hepburnElem + vowel);
console.log(hyVowelsByRomaji.toString());
// hya, hyu, hyo`,
    sound: ['hya', 'hyu', 'hyo'],
    jpText: 'The consonant h + y + vowels spelt by hiragana and katakana.',
    letters: `const hyVowelLetters = [
  { hya: { hiragana: 'ひゃ', katakana: 'ヒャ' } },
  { hyu: { hiragana: 'ひゅ', katakana: 'ヒュ' } },
  { hyo: { hiragana: 'ひょ', katakana: 'ヒョ' } },
];`,
    exampleText: "Let's use consonant h + y + vowels in practice!",
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
    navLink: ['nyvowels', '', '', ''],
  },

  consonantMYinfo: {
    explain: {
      title: 'Consonant MY',
      text: "Let's try to learn consonant m + y + vowels!",
    },
    romaji: `const consonantM = 'm';
const hepburnElem = 'y';
const vowels = [...'aiueo'];

const myVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantM + hepburnElem + vowel);
console.log(myVowelsByRomaji.toString());
// mya, myu, myo`,
    sound: ['mya', 'myu', 'myo'],
    jpText: 'The consonant m + y + vowels spelt by hiragana and katakana.',
    letters: `const hyVowelLetters = [
  { mya: { hiragana: 'みゃ', katakana: 'ミャ' } },
  { myu: { hiragana: 'みゅ', katakana: 'ミュ' } },
  { myo: { hiragana: 'みょ', katakana: 'ミョ' } },
];`,
    exampleText: "Let's use consonant m + y + vowels in practice!",
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
    navLink: ['nyvowels', '', '', ''],
  },

  consonantRYinfo: {
    explain: {
      title: 'Consonant RY',
      text: "Let's try to learn consonant r + y + vowels!",
    },
    romaji: `const consonantR = 'r';
const hepburnElem = 'y';
const vowels = [...'aiueo'];

const ryVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantR + hepburnElem + vowel);
console.log(ryVowelsByRomaji.toString());
// rya, ryu, ryo`,
    sound: ['rya', 'ryu', 'ryo'],
    jpText: 'The consonant r + y + vowels spelt by hiragana and katakana.',
    letters: `const hyVowelLetters = [
  { rya: { hiragana: 'りゃ', katakana: 'リャ' } },
  { ryu: { hiragana: 'りゅ', katakana: 'リュ' } },
  { ryo: { hiragana: 'りょ', katakana: 'リョ' } },
];`,
    exampleText: "Let's use consonant r + y + vowels in practice!",
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
    navLink: ['myvowels', '', '', ''],
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
const wVowelsParticle = { wa: 'は' };
const n = 'ん';
const gVowels = { ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご' };
const zVowels = { za: 'ざ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ' };
const dVowels = { da: 'だ', ji: 'ぢ', zu: 'づ', de: 'で', do: 'ど' };
const bVowels = { ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ' };
const pVowels = { pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ' };
const kyVowels = { kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ' };
const shVowels = { sha: 'しゃ', shu: 'しゅ', sho: 'しょ' };
const chVowels = { cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ' };
const nyVowels = { nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ' };
const hyVowels = { hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ' };
const myVowels = { mya: 'みゃ', myu: 'みゅ', myo: 'みょ' };
const ryVowels = { rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ' };

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

// wisdom・ちえ・知恵
const wisdom = tVowels.chi + vowels.e;
const wisdomHiragana = englishHiragana('Wisdom', wisdom);
const wisdomKanji = hiraganaKanji(wisdom, '知恵');

console.log(wisdomHiragana);
// Wisdom is ちえ in Hiragana.
console.log(wisdomKanji);
// ちえ is 知恵 in Kanji.

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
// flower・はな・花
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
// The meaning "bug" in IT, is expressed as "バグ".

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

// w vowels ----------
// planet・わくせい・惑星
const planet = wVowels.wa + kVowels.ku + sVowels.se + vowels.i;
const planetHiragana = englishHiragana('Planet', planet);
const planetKanji = hiraganaKanji(planet, '惑星');

console.log(planetHiragana);
// Planet is わくせい in Hiragana.
console.log(planetKanji);
// わくせい is 惑星 in Kanji.

// buy desk・つくえをかう・机を買う
const hiraganaWithKanji = (hiragana, kanji) => {
  const withKanji = hiragana
    .replace('つくえ', kanji[0])
    .replace('か', kanji[1]);

  return `${hiragana} is ${withKanji} in Kanji.`;
};
const buyDesk =
  tVowels.tsu + kVowels.ku + vowels.e + wVowels.o + kVowels.ka + vowels.u;
const buyDeskHiragana = englishHiragana('BuyDesk', buyDesk);
const buyDeskKanji = hiraganaWithKanji(buyDesk, ['机', '買']);

console.log(buyDeskHiragana);
// BuyDesk is つくえをかう in Hiragana.
console.log(buyDeskKanji);
// つくえをかう is 机を買う in Kanji.
// o(を) is mainly used as a postpositional particle.

// n ----------
// hello・こんにちは
const hello = kVowels.ko + n + nVowels.ni + tVowels.chi + wVowelsParticle.wa;
const helloHiragana = englishHiragana('Hello', hello);

console.log(helloHiragana);
// Hello is こんにちは in Hiragana.

// gvowels ----------
// galaxy・ぎんが・銀河
const galaxy = gVowels.gi + n + gVowels.ga;
const galaxyHiragana = englishHiragana('Galaxy', galaxy);
const galaxyKanji = hiraganaKanji(galaxy, '銀河');

console.log(galaxyHiragana);
// Galaxy is ぎんが in Hiragana.
console.log(galaxyKanji);
// ぎんが is 銀河 in Kanji.

// even number・ぐうすう・偶数
const evenNumber = gVowels.gu + vowels.u + sVowels.su + vowels.u;
const evenNumberHiragana = englishHiragana('Even Number', evenNumber);
const evenNumberKanji = hiraganaKanji(evenNumber, '偶数');

console.log(evenNumberHiragana);
// Even Number is ぐうすう in Hiragana.
console.log(evenNumberKanji);
// ぐうすう is 偶数 in Kanji.

// language・げんご・言語
const language = gVowels.ge + n + gVowels.go;
const languageHiragana = englishHiragana('Language', language);
const languageKanji = hiraganaKanji(language, '言語');

console.log(languageHiragana);
// Language is げんご in Hiragana.
console.log(languageKanji);
// げんご is 言語 in Kanji.

// zvowels ----------
// trivia・ざつがく・雑学
const trivia = zVowels.za + tVowels.tsu + gVowels.ga + kVowels.ku;
const triviaHiragana = englishHiragana('Trivia', trivia);
const triviaKanji = hiraganaKanji(trivia, '雑学');

console.log(triviaHiragana);
// Trivia is ざつがく in Hiragana.
console.log(triviaKanji);
// ざつがく is 雑学 in Kanji.

// life・じんせい・人生
const life = zVowels.ji + n + sVowels.se + vowels.i;
const lifeHiragana = englishHiragana('Life', life);
const lifeKanji = hiraganaKanji(life, '人生');

console.log(lifeHiragana);
// Life is じんせい in Hiragana.
console.log(lifeKanji);
// じんせい is 人生 in Kanji.

// brain・ずのう・頭脳
const brain = zVowels.zu + nVowels.no + vowels.u;
const brainHiragana = englishHiragana('Brain', brain);
const brainKanji = hiraganaKanji(brain, '頭脳');

console.log(brainHiragana);
// Brain is ずのう in Hiragana.
console.log(brainKanji);
// ずのう is 頭脳 in Kanji.

// extinction・ぜつめつ・絶滅
const extinction = zVowels.ze + tVowels.tsu + mVowels.me + tVowels.tsu;
const extinctionHiragana = englishHiragana('Extinction', extinction);
const extinctionKanji = hiraganaKanji(extinction, '絶滅');

console.log(extinctionHiragana);
// Extinction is ぜつめつ in Hiragana.
console.log(extinctionKanji);
// ぜつめつ is 絶滅 in Kanji.

// attribute・ぞくせい・属性
const attribute = zVowels.zo + kVowels.ku + sVowels.se + vowels.i;
const attributeHiragana = englishHiragana('Attribute', attribute);
const attributeKanji = hiraganaKanji(attribute, '属性');

console.log(attributeHiragana);
// Attribute is ぞくせい in Hiragana.
console.log(attributeKanji);
// ぞくせい is 属性 in Kanji.

// dvowels ----------
// kitchen・だいどころ・台所
const kitchen = dVowels.da + vowels.i + dVowels.do + kVowels.ko + rVowels.ro;
const kitchenHiragana = englishHiragana('Kitchen', kitchen);
const kitchenKanji = hiraganaKanji(kitchen, '台所');

console.log(kitchenHiragana);
// Kitchen is だいどころ in Hiragana.
console.log(kitchenKanji);
// だいどころ is 台所 in Kanji.

// nosebleed・はなぢ・鼻血
const nosebleed = hVowels.ha + nVowels.na + dVowels.ji;
const nosebleedHiragana = englishHiragana('Nosebleed', nosebleed);
const nosebleedKanji = hiraganaKanji(nosebleed, '鼻血');

console.log(nosebleedHiragana);
// Nosebleed is はなぢ in Hiragana.
console.log(nosebleedKanji);
// はなぢ is 鼻血 in Kanji.

// crescent moon・みかづき・三日月
const crescentMoon = mVowels.mi + kVowels.ka + dVowels.zu + kVowels.ki;
const crescentMoonHiragana = englishHiragana('Crescent moon', crescentMoon);
const crescentMoonKanji = hiraganaKanji(crescentMoon, '三日月');

console.log(crescentMoonHiragana);
// Crescent moon is みかづき in Hiragana.
console.log(crescentMoonKanji);
// みかづき is 三日月 in Kanji.

// exit・でぐち・出口
const exit = dVowels.de + gVowels.gu + tVowels.chi;
const exitHiragana = englishHiragana('Exit', exit);
const exitKanji = hiraganaKanji(exit, '出口');

console.log(exitHiragana);
// Exit is でぐち in Hiragana.
console.log(exitKanji);
// でぐち is 出口 in Kanji.

// bvowels ----------
// double・ばい・倍
const double = bVowels.ba + vowels.i;
const doubleHiragana = englishHiragana('Double', double);
const doubleKanji = hiraganaKanji(double, '倍');

console.log(doubleHiragana);
// Double is ばい in Hiragana.
console.log(doubleKanji);
// ばい is 倍 in Kanji.

// travel・たび・旅
const travel = tVowels.ta + bVowels.bi;
const travelHiragana = englishHiragana('Travel', travel);
const travelKanji = hiraganaKanji(travel, '旅');

console.log(travelHiragana);
// Travel is たび in Hiragana.
console.log(travelKanji);
// たび is 旅 in Kanji.

// stationery・ぶんぼうぐ・文房具
const stationery = bVowels.bu + n + bVowels.bo + vowels.u + gVowels.gu;
const stationeryHiragana = englishHiragana('Stationery', stationery);
const stationeryKanji = hiraganaKanji(stationery, '文房具');

console.log(stationeryHiragana);
// Stationery is ぶんぼうぐ in Hiragana.
console.log(stationeryKanji);
// ぶんぼうぐ is 文房具 in Kanji.

// lawyer・べんごし・弁護士
const lawyer = bVowels.be + n + gVowels.go + sVowels.shi;
const lawyerHiragana = englishHiragana('Lawyer', lawyer);
const lawyerKanji = hiraganaKanji(lawyer, '弁護士');

console.log(lawyerHiragana);
// Lawyer is べんごし in Hiragana.
console.log(lawyerKanji);
// べんごし is 弁護士 in Kanji.

// pvowels ----------
// signal/reception・でんぱ・電波
const signal = dVowels.de + n + pVowels.pa;
const signalHiragana = englishHiragana('Signal', signal);
const signalKanji = hiraganaKanji(signal, '電波');

console.log(signalHiragana);
// Signal is でんぱ in Hiragana.
console.log(signalKanji);
// でんぱ is 電波 in Kanji.

// for and against・さんぴ・賛否
const forAndAgainst = sVowels.sa + n + pVowels.pi;
const forAndAgainstHiragana = englishHiragana('For and against', forAndAgainst);
const forAndAgainstKanji = hiraganaKanji(forAndAgainst, '賛否');

console.log(forAndAgainstHiragana);
// For and against is さんぴ in Hiragana.
console.log(forAndAgainstKanji);
// さんぴ is 賛否 in Kanji.

// music note・おんぷ・音符
const musicNote = vowels.o + n + pVowels.pu;
const musicNoteHiragana = englishHiragana('Music note', musicNote);
const musicNoteKanji = hiraganaKanji(musicNote, '音符');

console.log(musicNoteHiragana);
// Music note is おんぷ in Hiragana.
console.log(musicNoteKanji);
// おんぷ is 音符 in Kanji.

// perfect・かんぺき・完璧
const perfect = kVowels.ka + n + pVowels.pe + kVowels.ki;
const perfectHiragana = englishHiragana('Perfect', perfect);
const perfectKanji = hiraganaKanji(perfect, '完璧');

console.log(perfectHiragana);
// Perfect is かんぺき in Hiragana.
console.log(perfectKanji);
// かんぺき is 完璧 in Kanji.

// progress・しんぽ・進歩
const progress = sVowels.shi + n + pVowels.po;
const progressHiragana = englishHiragana('Progress', progress);
const progressKanji = hiraganaKanji(progress, '進歩');

console.log(progressHiragana);
// Progress is しんぽ in Hiragana.
console.log(progressKanji);
// しんぽ is 進歩 in Kanji.

// kyvowels ----------
// scriptwriter・きゃくほんか・脚本家
const scriptwriter = kyVowels.kya + kVowels.ku + hVowels.ho + n + kVowels.ka;
const scriptwriterHiragana = englishHiragana('Scriptwriter', scriptwriter);
const scriptwriterKanji = hiraganaKanji(scriptwriter, '脚本家');

console.log(scriptwriterHiragana);
// Scriptwriter is きゃくほんか in Hiragana.
console.log(scriptwriterKanji);
// きゃくほんか is 脚本家 in Kanji.

// nine・きゅう・九
const nine = kyVowels.kyu + vowels.u;
const nineHiragana = englishHiragana('Nine', nine);
const nineKanji = hiraganaKanji(nine, '九');

console.log(nineHiragana);
// Nine is きゅう in Hiragana.
console.log(nineKanji);
// きゅう is 九 in Kanji.
// *The Romaji of this word is expressed
// as a "Kyu" and omit 'u'.
// It will be explained later.

// election・せんきょ・選挙
const election = sVowels.se + n + kyVowels.kyo;
const electionHiragana = englishHiragana('Election', election);
const electionKanji = hiraganaKanji(election, '選挙');

console.log(electionHiragana);
// Election is せんきょ in Hiragana.
console.log(electionKanji);
// せんきょ is 選挙 in Kanji.

// shvowels ----------
// photo・しゃしん・写真
const photo = shVowels.sha + sVowels.shi + n;
const photoHiragana = englishHiragana('Photo', photo);
const photoKanji = hiraganaKanji(photo, '写真');

console.log(photoHiragana);
// Photo is しゃしん in Hiragana.
console.log(photoKanji);
// しゃしん is 写真 in Kanji.

// hobby・しゅみ・趣味
const hobby = shVowels.shu + mVowels.mi;
const hobbyHiragana = englishHiragana('Hobby', hobby);
const hobbyKanji = hiraganaKanji(hobby, '趣味');

console.log(hobbyHiragana);
// Hobby is しゅみ in Hiragana.
console.log(hobbyKanji);
// しゅみ is 趣味 in Kanji.

// meal・しょくじ・食事
const meal = shVowels.sho + kVowels.ku + zVowels.ji;
const mealHiragana = englishHiragana('Meal', meal);
const mealKanji = hiraganaKanji(meal, '食事');

console.log(mealHiragana);
// Meal is しょくじ in Hiragana.
console.log(mealKanji);
// しょくじ is 食事 in Kanji.

// chvowels ----------
// tea・ちゃ・写真
const tea = chVowels.cha;
const teaHiragana = englishHiragana('Tea', tea);
const teaKanji = hiraganaKanji(tea, '茶');

console.log(teaHiragana);
// Tea is ちゃ in Hiragana.
console.log(teaKanji);
// ちゃ is 茶 in Kanji.

// lunch・ちゅうしょく・昼食
const lunch = chVowels.chu + vowels.u + shVowels.sho + kVowels.ku;
const lunchHiragana = englishHiragana('Lunch', lunch);
const lunchKanji = hiraganaKanji(lunch, '昼食');

console.log(lunchHiragana);
// Lunch is ちゅうしょく in Hiragana.
console.log(lunchKanji);
// ちゅうしょく is 昼食 in Kanji.
// *The Romaji of this word is expressed
// as a "Chushoku" and omit 'u'.
// It will be explained later.

// breakfast・ちょうしょく・昼食
const breakfast = chVowels.cho + vowels.u + shVowels.sho + kVowels.ku;
const breakfastHiragana = englishHiragana('Breakfast', breakfast);
const breakfastKanji = hiraganaKanji(breakfast, '朝食');

console.log(breakfastHiragana);
// Breakfast is ちょうしょく in Hiragana.
console.log(breakfastKanji);
// ちょうしょく is 朝食 in Kanji.
// *The Romaji of this word is expressed
// as a "Choshoku" and omit 'u'.
// It will be explained later.

// nyvowels ----------
// men and women of all ages・ろうにゃくなんにょ・老若男女
const menAndWomenOfAllAges =
  rVowels.ro +
  vowels.u +
  nyVowels.nya +
  kVowels.ku +
  nVowels.na +
  n +
  nyVowels.nyo;
const menAndWomenOfAllAgesHiragana = englishHiragana(
  'Men and women of all ages',
  menAndWomenOfAllAges
);
const menAndWomenOfAllAgesKanji = hiraganaKanji(
  menAndWomenOfAllAges,
  '老若男女'
);

console.log(menAndWomenOfAllAgesHiragana);
// Men and women of all ages is ろうにゃくなんにょ in Hiragana.
console.log(menAndWomenOfAllAgesKanji);
// ろうにゃくなんにょ is 老若男女 in Kanji.
// *The Romaji of this word is expressed
// as a "Ronyakunannyo" and omit 'u'.
// It will be explained later.

// move-in・にゅうきょ・入居
const moveIn = nyVowels.nyu + vowels.u + kyVowels.kyo;
const moveInHiragana = englishHiragana('Move in', moveIn);
const moveInKanji = hiraganaKanji(moveIn, '入居');

console.log(moveInHiragana);
// Move in is にゅうきょ in Hiragana.
console.log(moveInKanji);
// にゅうきょ is 入居 in Kanji.
// *The Romaji of this word is expressed
// as a "Nyukyo" and omit 'u'.
// It will be explained later.

// hyvowels ----------
// hundred・ひゃく・百
const hundred = hyVowels.hya + kVowels.ku;
const hundredHiragana = englishHiragana('Hundred', hundred);
const hundredKanji = hiraganaKanji(hundred, '百');

console.log(hundredHiragana);
// Hundred is ひゃく in Hiragana.
console.log(hundredKanji);
// ひゃく is 百 in Kanji.

// wind sounds・ひゅうひゅう
const windSounds = hyVowels.hyu + vowels.u + hyVowels.hyu + vowels.u;
const windSoundsHiragana = englishHiragana('WindSounds', windSounds);

console.log(windSoundsHiragana);
// WindSounds is ひゅうひゅう in Hiragana.
// This is an imitative word(onomatopoeia).

// *The Romaji of this word is expressed
// as a "hyu-hyu" and omit 'u'.
// Also, it is expressed as 'ひゅーひゅー'.
// It will be explained later.

// evaluation・ひょうか・評価
const evaluation = hyVowels.hyo + vowels.u + kVowels.ka;
const evaluationHiragana = englishHiragana('Evaluation', evaluation);
const evaluationKanji = hiraganaKanji(evaluation, '評価');

console.log(evaluationHiragana);
// Evaluation is ひょうか in Hiragana.
console.log(evaluationKanji);
// ひょうか is 評価 in Kanji.
// *The Romaji of this word is expressed
// as a "hyoka" and omit 'u'.
// It will be explained later.

// myvowels ----------
// pulse・みゃく・脈
const pulse = myVowels.mya + kVowels.ku;
const pulseHiragana = englishHiragana('Pulse', pulse);
const pulseKanji = hiraganaKanji(pulse, '脈');

console.log(pulseHiragana);
// Pulse is みゃく in Hiragana.
console.log(pulseKanji);
// みゃく is 脈 in Kanji.

// lastName・みょうじ・脈
const lastName = myVowels.myo + vowels.u + zVowels.ji;
const lastNameHiragana = englishHiragana('Last name', lastName);
const lastNameKanji = hiraganaKanji(lastName, '名字');

console.log(lastNameHiragana);
// Last name is みょうじ in Hiragana.
console.log(lastNameKanji);
// みょうじ is 名字 in Kanji.
// 名字 can be also written as 苗字.
// *The Romaji of this word is expressed
// as a "myoji" and omit 'u'.
// It will be explained later.

// ryvowels ----------
// abbreviation・りゃく・略
const abbreviation = ryVowels.rya + kVowels.ku;
const abbreviationHiragana = englishHiragana('Abbreviation', abbreviation);
const abbreviationKanji = hiraganaKanji(abbreviation, '略');

console.log(abbreviationHiragana);
// Abbreviation is りゃく in Hiragana.
console.log(abbreviationKanji);
// りゃく is 略 in Kanji.

// meteor・りゅうせい・流星
const meteor = ryVowels.ryu + vowels.u + sVowels.se + vowels.i;
const meteorHiragana = englishHiragana('Meteor', meteor);
const meteorKanji = hiraganaKanji(meteor, '流星');

console.log(meteorHiragana);
// Meteor is りゅうせい in Hiragana.
console.log(meteorKanji);
// りゅうせい is 流星 in Kanji.
// *The Romaji of this word is expressed
// as a "ryusei" and omit 'u'.
// It will be explained later.

// consideration・こうりょ・考慮
const consideration = kVowels.ko + vowels.u + ryVowels.ryo;
const considerationHiragana = englishHiragana('Consideration', consideration);
const considerationKanji = hiraganaKanji(consideration, '考慮');

console.log(considerationHiragana);
// Consideration is こうりょ in Hiragana.
console.log(considerationKanji);
// こうりょ is 考慮 in Kanji.
// *The Romaji of this word is expressed
// as a "koryo" and omit 'u'.
// It will be explained later.

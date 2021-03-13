import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ja.wav';
import '@wav/ju.wav';
import '@wav/jo.wav';

CommonLayout(info.consonantJinfo);

const [consonantJ, kunreiNihonElem, vowels] = ['j', 'zy', [...'aiueo']];

// const consonantJ = 'j';
// const kunreiNihonElem = 'zy';
// const vowels = [...'aiueo'];

// Kunrei-shiki and Nihon-shiki Romaji
// for "じゃ じゅ じょ" and "ぢゃ ぢゅ ぢょ".
const zyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => kunreiNihonElem + vowel);
console.log(zyVowelsByRomaji.toString());
// zya, zyu, zyo

// Nihon-shiki Romaji for "ぢゃ ぢゅ ぢょ".
const dyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => kunreiNihonElem + vowel);
console.log(dyVowelsByRomaji.toString());
// dya, dyu, dyo

// Hepburn-shiki Romaji
// for "じゃ じゅ じょ" and "ぢゃ ぢゅ ぢょ".
// (We will use this here.)
const jVowelsByRomajiHepburn = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantJ + vowel);
console.log(jVowelsByRomajiHepburn.toString());
// ja, ju, jo

import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/cha.wav';
import '@wav/chu.wav';
import '@wav/cho.wav';

CommonLayout(info.consonantCHinfo);

const [consonantC, kunreiNihonElem, hepburnElem, vowels] = [
  'c',
  'ty',
  'h',
  [...'aiueo'],
];

// const consonantC = 'c';
// const kunreiNihonElem = 'ty';
// const hepburnElem = 'h';
// const vowels = [...'aiueo'];

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

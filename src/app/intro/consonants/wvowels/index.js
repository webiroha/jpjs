import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/wa.wav';
import '@wav/wo.wav';

CommonLayout(info.consonantYinfo);

const consonantW = 'w';
const vowels = [...'aiueo'];

// Nihon-shiki Romaji
const wVowelsByRomajiNihon = vowels
  .filter((vowel) => vowel === 'a' || vowel === 'o')
  .map((vowel) => consonantW + vowel);

console.log(wVowelsByRomajiNihon.toString());
// wa, wo

// Kunrei-shiki and Hepburn-shiki Romaji
// (We will use this here.)
const wVowelsByRomajiKunrei = [consonantW + vowels[0], 'o'];
console.log(wVowelsByRomajiKunrei.toString());
// wa, o

// There might be a time you see such the ways to write below.
// The sounds of 'i'/'u'/'e'/'wi'/'we' are the same as vowels'
// but those letters of Hiragana/Katakana are different.
// these are old letters.

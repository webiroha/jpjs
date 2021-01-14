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
const wVowelsByRomajiHepburn = [consonantW + vowels[0], vowels[4]];
console.log(wVowelsByRomajiHepburn.toString());
// wa, o

// There might be a time you see such the ways to be written.
// The sounds of 'i'/'u'/'e'/'wi'/'we'/'wo' are the same as vowels'
const wVowelsByRomajiNihonPast = vowels
  .filter((vowel) => vowel !== 'u')
  .map((vowel) => consonantW + vowel);
console.log(wVowelsByRomajiNihonPast.toString());
// wa, wi, we, wo

const wVowelsByRomajiKunreiPast = vowels.map((vowel) => {
  if (vowel === 'a') return consonantW + vowel;
  else return vowel;
});
console.log(wVowelsByRomajiKunreiPast.toString());
// wa, i, u, e, o

// but those letters of Hiragana/Katakana are different.
// these are old letters.

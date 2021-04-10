import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/wa.wav';
import '@wav/wo.wav';

CommonLayout(info.consonantWinfo);

const [consonantW, vowels] = ['w', [...'aiueo']];

// const consonantW = 'w';
// const vowels = [...'aiueo'];

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
// The sounds of 'i','u','e','o','wi','wu','we','wo' are the same as vowels'
const wVowelsByRomajiNihonPast = vowels.map((vowel) => consonantW + vowel);
console.log(wVowelsByRomajiNihonPast.toString());
// wa, wi, wu, we, wo

const wVowelsByRomajiKunreiPast = vowels.map((vowel) => {
  if (vowel === 'a') return consonantW + vowel;
  else return vowel;
});
console.log(wVowelsByRomajiKunreiPast.toString());
// wa, i, u, e, o

// The old letters of Hiragana/Katakana.
// *'u' is the same as vowels'.
// Seldom use so just a note.
const wVowelLetters = [
  { wa: { hiragana: 'わ', katakana: 'ワ' } },
  { i: { hiragana: 'ゐ', katakana: 'ヰ' } },
  { u: { hiragana: 'う', katakana: 'ウ' } },
  { e: { hiragana: 'ゑ', katakana: 'ヱ' } },
  { o: { hiragana: 'を', katakana: 'ヲ' } },
];

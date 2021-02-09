import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/za.wav';
import '@wav/ji.wav';
import '@wav/zu.wav';
import '@wav/ze.wav';
import '@wav/zo.wav';

CommonLayout(info.consonantSinfo);

const [consonantZ, vowels, hepburnElem] = ['z', [...'aiueo'], 'j'];

// const consonantZ = 'z';
// const vowels = [...'aiueo'];
// const hepburnElem = 'j';

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
// za, zi, zu, ze, zo

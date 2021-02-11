import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/da.wav';
import '@wav/ji.wav';
import '@wav/zu.wav';
import '@wav/de.wav';
import '@wav/do.wav';

CommonLayout(info.consonantZinfo);

const [consonantD, vowels, hepburnElem] = ['d', [...'aiueo'], ['j', 'z']];

// const consonantD = 'd';
// const vowels = [...'aiueo'];
// const hepburnElem = ['j', 'z'];

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
// da, ji, zu, de, do

import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/sa.wav';
import '@wav/shi.wav';
import '@wav/su.wav';
import '@wav/se.wav';
import '@wav/so.wav';

CommonLayout(info.consonantSinfo);

const [consonantS, vowels, hepburnElem] = ['s', [...'aiueo'], 'h'];

// const consonantS = 's';
// const vowels = [...'aiueo'];
// const hepburnElem = 'h';

// Kunrei-shiki and Nihon-shiki Romaji
const sVowelsByRomaji = vowels.map((vowel) => consonantS + vowel);
console.log(sVowelsByRomaji.toString());
// sa,si,su,se,so

// Hepburn-shiki Romaji(We will use this here.)
const sVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return consonantS + hepburnElem + vowel;
  } else {
    return consonantS + vowel;
  }
});
console.log(sVowelsByRomajiHepburn.toString());
// sa,shi,su,se,so

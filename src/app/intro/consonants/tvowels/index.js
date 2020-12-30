import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ta.wav';
import '@wav/chi.wav';
import '@wav/tsu.wav';
import '@wav/te.wav';
import '@wav/to.wav';

// CommonLayout(info.consonantTinfo);

const [consonantT, vowels, hepburnElem] = ['t', [...'aiueo'], 'chs'];

// const consonant = 's';
// const hepburnElem = 'h';
// const vowels = [...'aiueo'];

// Kunrei-shiki and Nihon-shiki Romaji
const tVowelsByRomaji = vowels.map((vowel) => consonantT + vowel);
console.log(tVowelsByRomaji.toString());
// sa,si,su,se,so

// Hepburn-shiki Romaji
// (We will use this here.)
const tVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return consonantT + hepburnElem + vowel;
  } else {
    return consonantT + vowel;
  }
});
console.log(tVowelsByRomajiHepburn.toString());
// sa,shi,su,se,so

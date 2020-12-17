import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/sa.wav';
import '@wav/si.wav';
import '@wav/su.wav';
import '@wav/se.wav';
import '@wav/so.wav';

CommonLayout(info.consonantSinfo);

const consonantS = 's';
const hepburnElement = 'h';
const vowels = [...'aiueo'];

// Kunrei-shiki and Nihon-shiki romanization
const sVowelsByRomaji = vowels.map((vowel) => consonantS + vowel);
console.log(sVowelsByRomaji.toString());
// sa,si,su,se,so

// Hepburn romanization
// (We will use Hepburn romanization here.)
const sVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return consonantS + hepburnElement + vowel;
  } else {
    return consonantS + vowel;
  }
});
console.log(sVowelsByRomajiHepburn.toString());
// sa,shi,su,se,so

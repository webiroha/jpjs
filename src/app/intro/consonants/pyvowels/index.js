import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/pya.wav';
import '@wav/pyu.wav';
import '@wav/pyo.wav';

CommonLayout(info.consonantPYinfo);

const [consonantP, hepburnElem, vowels] = ['p', 'y', [...'aiueo']];

// const consonantP = 'p';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const pyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantP + hepburnElem + vowel);
console.log(pyVowelsByRomaji.toString());
// pya, pyu, pyo

import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/hya.wav';
import '@wav/hyu.wav';
import '@wav/hyo.wav';

CommonLayout(info.consonantHYinfo);

const [consonantH, hepburnElem, vowels] = ['h', 'y', [...'aiueo']];

// const consonantH = 'h';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const hyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantH + hepburnElem + vowel);
console.log(hyVowelsByRomaji.toString());
// hya, hyu, hyo

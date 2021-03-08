import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/rya.wav';
import '@wav/ryu.wav';
import '@wav/ryo.wav';

CommonLayout(info.consonantRYinfo);

const [consonantR, hepburnElem, vowels] = ['r', 'y', [...'aiueo']];

// const consonantR = 'r';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const ryVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantR + hepburnElem + vowel);
console.log(ryVowelsByRomaji.toString());
// rya, ryu, ryo

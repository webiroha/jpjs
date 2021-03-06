import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/mya.wav';
import '@wav/myu.wav';
import '@wav/myo.wav';

CommonLayout(info.consonantMYinfo);

const [consonantM, hepburnElem, vowels] = ['m', 'y', [...'aiueo']];

// const consonantM = 'm';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const myVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantM + hepburnElem + vowel);
console.log(myVowelsByRomaji.toString());
// mya, myu, myo

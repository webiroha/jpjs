import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/bya.wav';
import '@wav/byu.wav';
import '@wav/byo.wav';

CommonLayout(info.consonantBYinfo);

const [consonantB, hepburnElem, vowels] = ['b', 'y', [...'aiueo']];

// const consonantB = 'b';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const byVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantB + hepburnElem + vowel);
console.log(byVowelsByRomaji.toString());
// bya, byu, byo

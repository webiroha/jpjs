import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/gya.wav';
import '@wav/gyu.wav';
import '@wav/gyo.wav';

CommonLayout(info.consonantGYinfo);

const [consonantG, hepburnElem, vowels] = ['g', 'y', [...'aiueo']];

// const consonantG = 'g';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const gyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantG + hepburnElem + vowel);
console.log(gyVowelsByRomaji.toString());
// gya, gyu, gyo

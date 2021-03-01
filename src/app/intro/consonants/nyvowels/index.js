import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/nya.wav';
import '@wav/nyu.wav';
import '@wav/nyo.wav';

CommonLayout(info.consonantNYinfo);

const [consonantN, hepburnElem, vowels] = ['n', 'y', [...'aiueo']];

// const consonantN = 'n';
// const hepburnElem = 'y';
// const vowels = [...'aiueo'];

const nyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantN + hepburnElem + vowel);
console.log(nyVowelsByRomaji.toString());
// nya, nyu, nyo

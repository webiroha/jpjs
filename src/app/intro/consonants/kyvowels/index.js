import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/kya.wav';
import '@wav/kyu.wav';
import '@wav/kyo.wav';

CommonLayout(info.consonantKYinfo);

const consonantKY = 'ky';
const vowels = [...'aiueo'];
const kyVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantKY + vowel);
console.log(kyVowelsByRomaji.toString());

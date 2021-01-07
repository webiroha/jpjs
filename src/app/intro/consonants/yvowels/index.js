import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ya.wav';
import '@wav/yu.wav';
import '@wav/yo.wav';

CommonLayout(info.consonantYinfo);

const consonantY = 'y';
const vowels = [...'aiueo'];
const consonantYvowelsByRomaji = vowels
  .map((vowel) => consonantY + vowel)
  .filter((_, i) => i % 2 === 0);
console.log(consonantYvowelsByRomaji.toString());
// ya, yu, yo

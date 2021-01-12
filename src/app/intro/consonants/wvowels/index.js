import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/wa.wav';
import '@wav/wo.wav';

CommonLayout(info.consonantYinfo);

const consonantW = 'w';
const vowels = [...'aiueo'];
const consonantYvowelsByRomaji = [consonantW + vowels[0], 'o'];
console.log(consonantYvowelsByRomaji.toString());
// wa, o

const consonantWvowelsNihon = vowels
  .filter((vowel) => vowel === 'a' || vowel === 'o')
  .map((vowel) => consonantW + vowel);

console.log(consonantWvowelsNihon.toString());
// wa, wo

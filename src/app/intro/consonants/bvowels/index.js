import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ba.wav';
import '@wav/bi.wav';
import '@wav/bu.wav';
import '@wav/be.wav';
import '@wav/bo.wav';

CommonLayout(info.consonantBinfo);

const consonantB = 'b';
const vowels = [...'aiueo'];
const bVowelsByRomaji = vowels.map((vowel) => consonantB + vowel);
console.log(bVowelsByRomaji.toString());

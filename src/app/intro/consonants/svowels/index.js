import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/sa.wav';
import '@wav/si.wav';
import '@wav/su.wav';
import '@wav/se.wav';
import '@wav/so.wav';

CommonLayout(info.consonantSinfo);

const consonantS = 's';
const vowels = [...'aiueo'];
const consonantSvowelsByRomaji = vowels.map((vowel) => consonantS + vowel);
console.log(consonantSvowelsByRomaji.toString());

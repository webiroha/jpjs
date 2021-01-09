import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ra.wav';
import '@wav/ri.wav';
import '@wav/ru.wav';
import '@wav/re.wav';
import '@wav/ro.wav';

CommonLayout(info.consonantRinfo);

const consonantR = 'r';
const vowels = [...'aiueo'];
const consonantRvowelsByRomaji = vowels.map((vowel) => consonantR + vowel);
console.log(consonantRvowelsByRomaji.toString());
// ra, ri, ru, re, ro

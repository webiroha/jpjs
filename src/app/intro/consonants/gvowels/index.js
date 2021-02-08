import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ga.wav';
import '@wav/gi.wav';
import '@wav/gu.wav';
import '@wav/ge.wav';
import '@wav/go.wav';

CommonLayout(info.consonantGinfo);

const consonantG = 'g';
const vowels = [...'aiueo'];
const gVowelsByRomaji = vowels.map((vowel) => consonantG + vowel);
console.log(gVowelsByRomaji.toString());

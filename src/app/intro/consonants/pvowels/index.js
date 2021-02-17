import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/pa.wav';
import '@wav/pi.wav';
import '@wav/pu.wav';
import '@wav/pe.wav';
import '@wav/po.wav';

CommonLayout(info.consonantPinfo);

const consonantP = 'p';
const vowels = [...'aiueo'];
const pVowelsByRomaji = vowels.map((vowel) => consonantP + vowel);
console.log(pVowelsByRomaji.toString());

import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ka.wav';
import '@wav/ki.wav';
import '@wav/ku.wav';
import '@wav/ke.wav';
import '@wav/ko.wav';

CommonLayout(info.consonantKinfo);

const consonantG = 'g';
const vowels = [...'aiueo'];
const gVowelsByRomaji = vowels.map((vowel) => consonantG + vowel);
console.log(gVowelsByRomaji.toString());

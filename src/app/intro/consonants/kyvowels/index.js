import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ka.wav';
import '@wav/ki.wav';
import '@wav/ku.wav';
import '@wav/ke.wav';
import '@wav/ko.wav';

CommonLayout(info.consonantKYinfo);

const consonantKY = 'ky';
const vowels = [...'aiueo'];
const kyVowelsByRomaji = vowels.map((vowel) => consonantKY + vowel);
console.log(kyVowelsByRomaji.toString());

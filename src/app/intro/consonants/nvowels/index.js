import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/na.wav';
import '@wav/ni.wav';
import '@wav/nu.wav';
import '@wav/ne.wav';
import '@wav/no.wav';

CommonLayout(info.consonantNinfo);

const consonantN = 'n';
const vowels = [...'aiueo'];
const consonantNvowelsByRomaji = vowels.map((vowel) => consonantN + vowel);
console.log(consonantNvowelsByRomaji.toString());

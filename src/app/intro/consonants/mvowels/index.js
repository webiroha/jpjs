import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ma.wav';
import '@wav/mi.wav';
import '@wav/mu.wav';
import '@wav/me.wav';
import '@wav/mo.wav';

CommonLayout(info.consonantMinfo);

const consonantM = 'm';
const vowels = [...'aiueo'];
const consonantMvowelsByRomaji = vowels.map((vowel) => consonantM + vowel);
console.log(consonantMvowelsByRomaji.toString());
// ma, mi, mu, me, mo

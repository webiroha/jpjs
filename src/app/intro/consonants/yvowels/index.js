import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ya.wav';
import '@wav/yu.wav';
import '@wav/yo.wav';

CommonLayout(info.consonantYinfo);

const consonantY = 'y';
const vowels = [...'aiueo'];
const consonantYvowelsByRomaji = vowels
  .map((vowel) => consonantY + vowel)
  .filter((_, i) => i % 2 === 0);
console.log(consonantYvowelsByRomaji.toString());
// ya, yu, yo

// There might be a time you see such the way to write below.
// The 'i' and 'e' is the same as vowel's one and most Japanese might not be sure when to use😅
const consonantYvowelsSeldom = vowels.map((vowel) => {
  if (vowel === 'i') return vowel;
  else if (vowel === 'e') return vowel;
  else return consonantY + vowel;
});

console.log(consonantYvowelsSeldom.toString());
// ya, i, yu, e, yo

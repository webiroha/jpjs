import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ya.wav';
import '@wav/yu.wav';
import '@wav/yo.wav';

CommonLayout(info.consonantYinfo);

const consonantY = 'y';
const vowels = [...'aiueo'];
const yVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantY + vowel);
console.log(yVowelsByRomaji.toString());
// ya, yu, yo

// There might be a time you see such the ways to be written.
// The 'i' and 'e' are the same as vowels' and most Japanese might not be sure when to use😅
const yVowelsByRomajiSeldom = vowels.map((vowel) => {
  if (vowel === 'i') return vowel;
  else if (vowel === 'e') return vowel;
  else return consonantY + vowel;
});

console.log(yVowelsByRomajiSeldom.toString());
// ya, i, yu, e, yo

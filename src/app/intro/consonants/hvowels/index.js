import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ha.wav';
import '@wav/hi.wav';
import '@wav/fu.wav';
import '@wav/he.wav';
import '@wav/ho.wav';

CommonLayout(info.consonantHinfo);

const [consonantH, vowels, hepburnElem] = ['h', [...'aiueo'], 'f'];

// const consonantS = 'h';
// const vowels = [...'aiueo'];
// const hepburnElem = 'f';

// Kunrei-shiki and Nihon-shiki Romaji
const hVowelsByRomaji = vowels.map((vowel) => consonantH + vowel);
console.log(hVowelsByRomaji.toString());
// ha,hi,hu,he,ho

// Hepburn-shiki Romaji
// (We will use this here.)
const hVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'u') {
    return hepburnElem + vowel;
  } else {
    return consonantH + vowel;
  }
});
console.log(hVowelsByRomajiHepburn.toString());
// ha,hi,fu,he,ho

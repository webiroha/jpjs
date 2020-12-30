import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/ta.wav';
import '@wav/chi.wav';
import '@wav/tsu.wav';
import '@wav/te.wav';
import '@wav/to.wav';

CommonLayout(info.consonantTinfo);

const [consonantT, vowels, hepburnElem] = ['t', [...'aiueo'], ['ch', 's']];

// const consonantT = 't';
// const vowels = [...'aiueo'];
// const hepburnElem = ['ch', 's'];

// Kunrei-shiki and Nihon-shiki Romaji
const tVowelsByRomaji = vowels.map((vowel) => consonantT + vowel);
console.log(tVowelsByRomaji.toString());
// ta,ti,tu,te,to

// Hepburn-shiki Romaji
// (We will use this here.)
const tVowelsByRomajiHepburn = vowels.map((vowel) => {
  if (vowel === 'i') {
    return hepburnElem[0] + vowel;
  } else if (vowel === 'u') {
    return consonantT + hepburnElem[1] + vowel;
  } else {
    return consonantT + vowel;
  }
});
console.log(tVowelsByRomajiHepburn.toString());
// ta,chi,tsu,te,to

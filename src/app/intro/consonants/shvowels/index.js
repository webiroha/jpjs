import CommonLayout from '@root/intro/consonants/components/CommonLayout';
import info from '@root/intro/consonants/info';

import '@wav/sha.wav';
import '@wav/shu.wav';
import '@wav/sho.wav';

CommonLayout(info.consonantKYinfo);

const consonantS = 's';
const kunreiNihonElem = 'y';
const hepburnElem = 'h';
const vowels = [...'aiueo'];

const shVowelsByRomaji = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantS + kunreiNihonElem + vowel);
console.log(shVowelsByRomaji.toString());
// sya, syu, syo

const shVowelsByRomajiHepburn = vowels
  .filter((_, i) => i % 2 === 0)
  .map((vowel) => consonantS + hepburnElem + vowel);
console.log(shVowelsByRomajiHepburn.toString());
// sha, shu, sho

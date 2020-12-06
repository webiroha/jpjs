import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import SoundBlock from '@root/components/SoundBlock';
import PageNavLink from '@root/components/links/PageNavLink';

import '@wav/ka.wav';
import '@wav/ki.wav';
import '@wav/ku.wav';
import '@wav/ke.wav';
import '@wav/ko.wav';

const ConsonantK = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Consonant K',
    text: "Let's try to learn consonant k + vowels!",
  };
  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());

  const consonantKVowelsByRomaji = `  const consonantK = 'k';
  const vowels = [...'aiueo'];
  const consonantKvowelsByRomaji = vowels.map(
    (vowel) => consonantK + vowel
  );
  console.log(consonantKvowelsByRomaji.toString());
  // ka,ki,ku,ke,ko`;

  const { Code: consonantKVowelsCode } = CodeBlock(consonantKVowelsByRomaji);
  ContentsFrag().appendChild(consonantKVowelsCode.tag);

  const consonantKvowels = ['ka', 'ki', 'ku', 'ke', 'ko'];

  ContentsFrag().appendChild(SoundBlock(consonantKvowels));

  ContentsFrag().appendChild(PageNavLink('consonants', '', '', 'one'));

  return ContentsFrag();
};

HeaderFooter(ConsonantK);

const consonantK = 'k';
const vowels = [...'aiueo'];
const consonantKvowelsByRomaji = vowels.map((vowel) => consonantK + vowel);
console.log(consonantKvowelsByRomaji.toString());

import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import PageNavLink from '@root/components/links/PageNavLink';
// import '@wav/a.wav';
// import '@wav/i.wav';
// import '@wav/u.wav';
// import '@wav/e.wav';
// import '@wav/o.wav';

const ConsonantK = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Consonant K',
    text: "Let's try to learn consonant k + vowel sound!",
  };
  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());

  const consonantKVowelsByRomaji = `  const consonantK = 'k';
  const vowels = [...'aiueo'];
  const consonantKvowelsByRomaji = vowels.map(
    (vowel) => consonantK + vowel
  );
  console.log(consonantKvowelsByRomaji);`;

  const { Code: consonantKVowelsCode } = CodeBlock(consonantKVowelsByRomaji);
  ContentsFrag().appendChild(consonantKVowelsCode.tag);

  ContentsFrag().appendChild(PageNavLink('consonants', ''));

  return ContentsFrag();
};

HeaderFooter(ConsonantK);

const consonantK = 'k';
const vowels = [...'aiueo'];
const consonantKvowelsByRomaji = vowels.map((vowel) => consonantK + vowel);
console.log(consonantKvowelsByRomaji);

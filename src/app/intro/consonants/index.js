import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import ConsonantLinks from './components/ConsonantLinks';
import NextLink from '@root/components/links/NextLink';

const Consonants = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    title: 'Consonants',
    text: 'Around 14 - 17 consonant elements are used by Romaji.',
  };

  const ConsonantsExplainSmall = Element({
    elem: 'small',
    class: 'small slide-in-upper__1',
    text: '*The way to write Romaji depends on the person.',
  });

  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());
  ContentsFrag().appendChild(ConsonantsExplainSmall.tag);

  const consonantElements = `const consonantElements = [...'kstcnhfmyrwgzjdbp'];`;

  const { Code: ConsonantsCode } = CodeBlock(consonantElements);
  ContentsFrag().appendChild(ConsonantsCode.tag);

  const SystemExplainText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: [
      'Roughly, the BASIC sound system with consonant is "consonant + vowel".',
      '*Let me show you the exact ones later.',
    ],
  });
  ContentsFrag().appendChild(SystemExplainText.tag);

  const combineSystem = `  const consonants = [...'kstcnhfmyrwgzjdbp'];
  const vowels = [...'aiueo'];
  const roughlyCombinedSounds = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );
  console.log(...roughlyCombinedSounds);
  // ...roughlyCombinedSounds !== Romaji`;

  const { Code: CombinedCode } = CodeBlock(combineSystem);
  ContentsFrag().appendChild(CombinedCode.tag);

  const DetailsBlock = Element({
    elem: 'div',
    class: 'consonants-details slide-in-upper__1',
  });

  const SubTitleInfo = {
    role: 'sub',
    title: 'Each element',
    text: "Let's learn each element deeply!",
  };

  const SubTitleInfoBlock = TitleWithText(SubTitleInfo);

  DetailsBlock.tag.appendChild(SubTitleInfoBlock());
  DetailsBlock.tag.appendChild(ConsonantLinks());
  ContentsFrag().appendChild(DetailsBlock.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Consonants);

// for displaying on console.log
const consonants = [...'kstcnhfmyrwgzjdbp'];
const vowels = [...'aiueo'];
const roughlyCombinedSounds = consonants.map((consonant) =>
  vowels.map((vowel) => consonant + vowel)
);
console.log(...roughlyCombinedSounds);

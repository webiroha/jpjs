import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import Explain from '@root/components/Explain';
import SubTitleBlock from '@root/components/SubTitleBlock';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/links/NextLink';

const Consonants = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Consonants',
    text: 'Japanese has around 14 - 16 consonants.',
  };

  const ConsonantsExplainSmall = Element({
    elem: 'small',
    class: 'small slide-in-upper__1',
    text: '*The way to write Romaji depends on the person.',
  });

  const ConsonantsExplain = Explain(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());
  ContentsFrag().appendChild(ConsonantsExplainSmall.tag);

  const consonantsByRomaji = `const consonants = [...'kstnhfmyrwgzdbpv'];`;

  const { Code: ConsonantsCode } = CodeBlock(consonantsByRomaji);
  ContentsFrag().appendChild(ConsonantsCode.tag);

  const SystemExplainText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: [
      'The BASIC sound system is "consonant + vowel" roughly besides some exceptions.',
      'Let me show you the exact ones later.',
    ],
  });
  ContentsFrag().appendChild(SystemExplainText.tag);

  const combineSystem = `  const consonants = [...'kstnhfmyrwgzdbpv'];
  const vowels = [...'aiueo'];
  const roughlyCombinedSounds = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );
  console.log(...roughlyCombinedSounds);
  // ...roughlyCombinedSounds !== Romaji`;

  const { Code: CombinedCode } = CodeBlock(combineSystem);
  ContentsFrag().appendChild(CombinedCode.tag);

  const consonants = [...'kstnhfmyrwgzdbpv'];
  const vowels = [...'aiueo'];
  const roughlyCombinedSounds = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );
  console.log(...roughlyCombinedSounds);

  const SubTitleInfo = {
    title: 'Each Consonant',
    text: "Let's learn each consonant deeply!",
  };

  const SubTitleInfoBlock = SubTitleBlock(SubTitleInfo);

  ContentsFrag().appendChild(SubTitleInfoBlock());
  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Consonants);

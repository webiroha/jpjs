import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import ConsonantLinks from './components/ConsonantLinks';
import PageNavLink from '@root/components/links/PageNavLink';

const Consonants = () => {
  const ContentsFrag = Frag();

  const Section = Element({
    elem: 'section',
    class: 'section',
  });

  const ContentsFragMain = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Consonants',
    text: 'Around 14 - 17 consonant elements are used by Romaji.',
  };

  const ConsonantsExplainSmall = Element({
    elem: 'small',
    class: 'small slide-in-upper__1',
    text: '*The way to write Romaji depends on the person.',
  });

  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFragMain().appendChild(ConsonantsExplain());
  ContentsFragMain().appendChild(ConsonantsExplainSmall.tag);

  const consonantElements = `const consonantElements = [...'kstcnhfmyrwgzjdbp'];`;

  const { Code: ConsonantsCode } = CodeBlock(consonantElements);
  ContentsFragMain().appendChild(ConsonantsCode.tag);

  const SystemExplainText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: [
      'Roughly, the main system is "consonant + vowel".',
      '*Let me show you the exact one later.',
    ],
  });
  ContentsFragMain().appendChild(SystemExplainText.tag);

  const combineSystem = `  const consonants = [...'kstcnhfmyrwgzjdbp'];
  const vowels = [...'aiueo'];
  const roughMainSystem = consonants.map((consonant) =>
    vowels.map((vowel) => consonant + vowel)
  );

  console.log(...roughMainSystem);
  // ...roughMainSystem !== Romaji`;

  const { Code: CombinedCode } = CodeBlock(combineSystem);
  ContentsFragMain().appendChild(CombinedCode.tag);

  Section.tag.appendChild(ContentsFragMain());
  ContentsFrag().appendChild(Section.tag);

  const DetailsSection = Element({
    elem: 'section',
    class: 'section details',
  });

  const ContentsFragDetails = Frag();

  const DetailsBlock = Element({
    elem: 'div',
    class: 'consonants-details slide-in-upper__1',
  });

  const SubTitleInfo = {
    role: 'sub',
    element: 'h2',
    title: 'Each element',
    text: "Let's learn each element deeply!",
  };

  const SubTitleInfoBlock = TitleWithText(SubTitleInfo);
  DetailsBlock.tag.appendChild(SubTitleInfoBlock());

  const BasicTitleInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Basic',
    text: ['The part of "Fifty Sounds Table".', '- work in progress -'],
  };

  const BasicTitleInfoBlock = TitleWithText(BasicTitleInfo);
  DetailsBlock.tag.appendChild(BasicTitleInfoBlock());

  DetailsBlock.tag.appendChild(ConsonantLinks());
  ContentsFragDetails().appendChild(DetailsBlock.tag);

  DetailsSection.tag.appendChild(ContentsFragDetails());
  ContentsFrag().appendChild(DetailsSection.tag);

  const NavSection = Element({
    elem: 'section',
    class: 'section',
  });
  NavSection.tag.appendChild(PageNavLink('vowels', ''));
  ContentsFrag().appendChild(NavSection.tag);

  return ContentsFrag();
};

HeaderFooter(Consonants);

// for displaying on console.log
const consonants = [...'kstcnhfmyrwgzjdbp'];
const vowels = [...'aiueo'];
const roughMainSystem = consonants.map((consonant) =>
  vowels.map((vowel) => consonant + vowel)
);
console.log(...roughMainSystem);

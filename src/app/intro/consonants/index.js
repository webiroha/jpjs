import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import BasicLinks from './components/BasicLinks';
import VoicedPLinks from './components/VoicedPLinks';
import ContractedLinks from './components/ContractedLinks';
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
      '*The exact one is on the "Fifty Sounds Table" page.',
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

  // details(gray area)
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

  // Basic
  const BasicTitleInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Basic',
    text: 'This is the "Fifty Sounds Table".',
  };

  const BasicTitleInfoBlock = TitleWithText(BasicTitleInfo);
  DetailsBlock.tag.appendChild(BasicTitleInfoBlock());

  DetailsBlock.tag.appendChild(BasicLinks());

  // One rule for Romaji
  const Aside = Element({
    elem: 'aside',
    class: 'aside',
  });

  const OmitUInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Supplement 1',
    text: [
      "The 'u'/'o' is omitted when the part is a long sound ",
      'in Hepburn-shiki Romaji.',
      "For example, 'さいこう/saikou' gets to 'saiko' and",
      "'おはよう/ohayou' gets to 'ohayo'.",
      '',
      'Seldom, but there is a time the long sound is expressed',
      "as 'ー' letter in Hiragana. The word looks to be more casual.",
      "On the other hand, it is normal to use 'ー' letter when written",
      'in Katakana, especially, when the word is a loan word.',
    ],
  };

  const OmitUInfoBlock = TitleWithText(OmitUInfo);
  Aside.tag.appendChild(OmitUInfoBlock());

  DetailsBlock.tag.appendChild(Aside.tag);

  // Voiced and p sounds
  const VoicedPTitleInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Voiced and p sounds',
    text: 'These are the sounds extended from the Fifty sounds table.',
  };

  const VoicedPTitleInfoBlock = TitleWithText(VoicedPTitleInfo);
  DetailsBlock.tag.appendChild(VoicedPTitleInfoBlock());

  DetailsBlock.tag.appendChild(VoicedPLinks());

  ContentsFragDetails().appendChild(DetailsBlock.tag);
  DetailsSection.tag.appendChild(ContentsFragDetails());
  ContentsFrag().appendChild(DetailsSection.tag);

  // One rule for Romaji
  const Aside2 = Element({
    elem: 'aside',
    class: 'aside',
  });

  const DoubleInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Supplement 2',
    text: [
      'A double consonant is a sound that appeared',
      'between letters and the letter is small',
      "Hiragana 'っ' or Katakana 'ッ'.",
      '',
      "For example, 'さっか/作家/writer' is written",
      'as Sakka in Romaji.',
      'The consonant will be double.',
    ],
  };

  const DoubleInfoBlock = TitleWithText(DoubleInfo);
  Aside2.tag.appendChild(DoubleInfoBlock());

  DetailsBlock.tag.appendChild(Aside2.tag);

  // Contracted area
  const ContractedSection = Element({
    elem: 'section',
    class: 'section contracted',
  });

  const ContentsFragContracted = Frag();

  const ContractedBlock = Element({
    elem: 'div',
    class: ' slide-in-upper__1',
  });

  const ContractedTitleInfo = {
    role: 'sub',
    element: 'h2',
    title: 'Contracted sounds',
    text: 'This combination rule is similar to consonant y + vowels.',
  };

  const ContractedInfoBlock = TitleWithText(ContractedTitleInfo);
  ContractedBlock.tag.appendChild(ContractedInfoBlock());
  ContentsFragContracted().appendChild(ContractedBlock.tag);

  const threeCombineSystem = `const vowels = [...'aiueo'];
const contractedConsonants = [...'ksctnhmrgjzdbp'];
const middle = 'y';
const roughContractedSystem = contractedConsonants.map(
  (consonant) =>
    vowels
      .filter((_, i) => i % 2 === 0)
      .map((vowel) => consonant + middle + vowel)
);`;

  const { Code: ThreeCombinedCode } = CodeBlock(threeCombineSystem);
  ContentsFragContracted().appendChild(ThreeCombinedCode.tag);

  ContractedSection.tag.appendChild(ContentsFragContracted());
  ContentsFrag().appendChild(ContractedSection.tag);

  // Contracted sounds details
  const DetailsSection2 = Element({
    elem: 'section',
    class: 'section details',
  });
  const ContentsFragDetails2 = Frag();
  const ContractedDetailsBlock = Element({
    elem: 'div',
    class: 'consonants-details slide-in-upper__1',
  });
  const ContractedDetailsTitleInfo = {
    role: 'sub-s',
    element: 'h3',
    title: 'Each Contracted sounds',
  };

  const ContractedDetailsTitleInfoBlock = TitleWithText(
    ContractedDetailsTitleInfo
  );
  ContractedDetailsBlock.tag.appendChild(ContractedDetailsTitleInfoBlock());

  ContractedDetailsBlock.tag.appendChild(ContractedLinks());

  ContentsFragDetails2().appendChild(ContractedDetailsBlock.tag);
  DetailsSection2.tag.appendChild(ContentsFragDetails2());
  ContentsFrag().appendChild(DetailsSection2.tag);

  // nav
  const NavSection = Element({
    elem: 'section',
    class: 'section',
  });
  NavSection.tag.appendChild(PageNavLink('vowels', 'END'));
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

const contractedConsonants = [...'ksctnhmrgjzdbp'];
const middle = 'y';
const roughContractedSystem = contractedConsonants.map((consonant) =>
  vowels
    .filter((_, i) => i % 2 === 0)
    .map((vowel) => consonant + middle + vowel)
);
console.log(...roughContractedSystem);

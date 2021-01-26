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

  // const GojuonExplain = Element({
  //   elem: 'p',
  //   class: 'gojuon',
  //   text: [
  //     'Fifty Sounds Table is called gojuon.',
  //     'One of example code might be like below.',
  //     'How do you code?',
  //   ],
  // });
  // DetailsBlock.tag.appendChild(GojuonExplain.tag);

  // const gojuonSystem = `  // Those are called as Gojuon/ごじゅうおん/五十音
  // // gojuon arrays in Hepburn Romaji
  // const vowelsArray = [...'aiueo'];
  // const consonants = [...'kstnhmyrw'];
  // const hepburn = [...'hcsf'];

  // const gojuonHepburn = [vowelsArray].concat(
  //   consonants
  //     .map((consonant) => {
  //       if (consonant === 'y') {
  //         return vowelsArray
  //           .filter((_, i) => i % 2 === 0)
  //           .map((letter) => consonant + letter);
  //       }

  //       if (consonant === 'w') {
  //         return vowelsArray
  //           .filter((_, i) => i === 0 || i === 4)
  //           .map((letter) => consonant + letter);
  //       }

  //       return vowelsArray.map((letter) => {
  //         if (consonant === 's' && letter === 'i')
  //           return consonant + hepburn[0] + letter;
  //         if (consonant === 't') {
  //           if (letter === 'i') return hepburn[1] + hepburn[0] + letter;
  //           if (letter === 'u') return consonant + hepburn[2] + letter;
  //         }
  //         if (consonant === 'h' && letter === 'u') return hepburn[3] + letter;
  //         if (consonant === 'y' && (letter === 'i' || letter === 'e'))
  //           return '  ';
  //         if (consonant === 'w' && letter !== 'a' && letter !== 'o') return '  ';

  //         return consonant + letter;
  //       });
  //     })
  //     .concat([['n']])
  // );

  // // Hiragana array
  // const hiragana = [];
  // for (let i = 12354; i < 12436; i++) {
  //   if (
  //     (i <= 12362 && i % 2 === 0) ||
  //     (i > 12362 && i <= 12385 && i % 2 !== 0) ||
  //     (i > 12386 && i <= 12392 && i % 2 === 0) ||
  //     (i > 12393 && i <= 12398) ||
  //     (i > 12397 && i <= 12412 && i % 3 === 0) ||
  //     (i > 12413 && i <= 12418) ||
  //     (i > 12418 && i <= 12424 && i % 2 === 0) ||
  //     (i > 12424 && i <= 12429) ||
  //     i === 12431 ||
  //     (i > 12433 && i <= 12435)
  //   )
  //     hiragana.push(String.fromCharCode(i));
  // }

  // // The list by Hepburn Romaji and Hiragana
  // const combine = gojuonHepburn.map((row, i) => {
  //   return Object.assign(
  //     {},
  //     ...row.map((letter, pos) => {
  //       const count = () => {
  //         const common = i * 5 - 5 + 3;
  //         if (letter[0] === 'r') return common;
  //         if (letter[0] === 'w') return common;
  //         if (gojuonHepburn.length - 1 === i) return common - 5 + 2;

  //         return i * 5;
  //       };
  //       const position = count() + pos;

  //       return { [letter]: hiragana[position] };
  //     })
  //   );
  // });

  // // The result
  // // [
  // //   { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' },
  // //   { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' },
  // //   { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' },
  // //   { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' },
  // //   { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' },
  // //   { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' },
  // //   { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' },
  // //   { ya: 'や', yu: 'ゆ', yo: 'よ' },
  // //   { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' },
  // //   { wa: 'わ', o: 'を' },
  // //   { n: 'ん' },
  // // ];`;

  // const { Code: GojuonCode } = CodeBlock(gojuonSystem);
  // DetailsBlock.tag.appendChild(GojuonCode.tag);

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

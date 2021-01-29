import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import PageNavLink from '@root/components/links/PageNavLink';

const FiftySoundsTable = () => {
  const ContentsFrag = Frag();

  const Section = Element({
    elem: 'section',
    class: 'section',
  });

  const ContentsFragMain = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Fifty Sounds Table',
    text: [
      'These letters we learnt are called "Fifty Sounds Table(Gojuon)".',
      'Correctly, the number of letters are not fifty.',
      'It comes from the traditional one.',
      '',
      'One of example code might be like below.',
      'How do you code?',
    ],
  };

  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFragMain().appendChild(ConsonantsExplain());

  const gojuonSystem = ``;

  const { Code: GojuonCode } = CodeBlock(gojuonSystem);
  ContentsFragMain().appendChild(GojuonCode.tag);

  Section.tag.appendChild(ContentsFragMain());
  ContentsFrag().appendChild(Section.tag);

  const NavSection = Element({
    elem: 'section',
    class: 'section',
  });
  NavSection.tag.appendChild(PageNavLink('n', ''));
  ContentsFrag().appendChild(NavSection.tag);

  return ContentsFrag();
};

HeaderFooter(FiftySoundsTable);

// Those are called as Gojuon/ごじゅうおん/五十音
// gojuon arrays in Hepburn Romaji
const vowels = [...'aiueo'];
const consonants = [...'kstnhmyrw'];
const hepburn = [...'hcsf'];

const gojuonHepburn = [vowels].concat(
  consonants
    .map((consonant) => {
      if (consonant === 'y') {
        return vowels
          .filter((_, i) => i % 2 === 0)
          .map((letter) => consonant + letter);
      }

      if (consonant === 'w') {
        return vowels
          .filter((_, i) => i === 0 || i === 4)
          .map((letter) => consonant + letter);
      }

      return vowels.map((letter) => {
        if (consonant === 's' && letter === 'i')
          return consonant + hepburn[0] + letter;
        if (consonant === 't') {
          if (letter === 'i') {
            return hepburn[1] + hepburn[0] + letter;
          }
          if (letter === 'u') {
            return consonant + hepburn[2] + letter;
          }
        }
        if (consonant === 'h' && letter === 'u') {
          return hepburn[3] + letter;
        }

        return consonant + letter;
      });
    })
    .concat([['n']])
);
console.log(gojuonHepburn);

// Hiragana array
const hiragana = [];
for (let i = 12354; i < 12436; i++) {
  if (
    (i <= 12362 && i % 2 === 0) ||
    (i > 12362 && i <= 12385 && i % 2 !== 0) ||
    (i > 12386 && i <= 12392 && i % 2 === 0) ||
    (i > 12393 && i <= 12398) ||
    (i > 12397 && i <= 12412 && i % 3 === 0) ||
    (i > 12413 && i <= 12418) ||
    (i > 12418 && i <= 12424 && i % 2 === 0) ||
    (i > 12424 && i <= 12429) ||
    i === 12431 ||
    (i > 12433 && i <= 12435)
  )
    hiragana.push(String.fromCharCode(i));
}
console.log(hiragana);

// The list by Hepburn Romaji and Hiragana
const combine = gojuonHepburn.map((row, i) => {
  return Object.assign(
    {},
    ...row.map((letter, pos) => {
      const count = () => {
        const common = i * 5 - 5 + 3;
        if (letter[0] === 'r') return common;
        if (letter[0] === 'w') return common;
        if (gojuonHepburn.length - 1 === i) {
          return common - 5 + 2;
        }

        return i * 5;
      };
      const position = count() + pos;

      return { [letter]: hiragana[position] };
    })
  );
});

console.log(combine);

// The result
// [
//   { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' },
//   { ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ' },
//   { sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ' },
//   { ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と' },
//   { na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の' },
//   { ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ' },
//   { ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も' },
//   { ya: 'や', yu: 'ゆ', yo: 'よ' },
//   { ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ' },
//   { wa: 'わ', o: 'を' },
//   { n: 'ん' },
// ];

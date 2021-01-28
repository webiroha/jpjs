import '../../../../../styles/main.scss';

import Element from '@root/components/atom/Element';
import Frag from '@root/components/atom/Frag';

const ConsonantLink = (consonant) => {
  const Block = Element({
    elem: 'li',
    class: 'consonant-link__item',
  });
  // const separate = (w) => w.split('').join('/');
  // const shape = consonant.length > 1 ? separate(consonant) : consonant;
  const dealedText = () => {
    if (consonant === 'N' || consonant.length > 1) return consonant;
    else return `${consonant} + vowels`;
  };

  const Link = Element({
    elem: 'a',
    class: 'consonant-link__link',
    text: dealedText(),
  });

  if (
    consonant === 'k' ||
    consonant === 's' ||
    consonant === 't' ||
    consonant === 'n'
  )
    Link.tag.href = `./${consonant}vowels/`;
  // Link.tag.href = `consonalt${consonant}`;
  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

const ConsonantLinks = () => {
  const Wrapper = Element({
    elem: 'ul',
    class: 'consonant-link fade-in',
  });

  const Fragment = Frag();

  const consonants = [
    'k',
    's',
    't',
    'n',
    'h',
    'm',
    'y',
    'r',
    'w',
    'N',
    'Fifty Sounds Table',
    // 'g',
    // 'z',
    // 'd',
    // 'b',
    // 'p',
  ];

  consonants.map((consonant) =>
    Fragment().appendChild(ConsonantLink(consonant))
  );
  Wrapper.tag.appendChild(Fragment());

  return Wrapper.tag;
};

export default ConsonantLinks;

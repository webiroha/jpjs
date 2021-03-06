import '../../../../../styles/main.scss';

import Element from '@root/components/atom/Element';
import Frag from '@root/components/atom/Frag';

const VoicedPLink = (consonant) => {
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

  Link.tag.href = `./${consonant}vowels/`;

  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

const VoicedPLinks = () => {
  const Wrapper = Element({
    elem: 'ul',
    class: 'consonant-link the-others fade-in',
  });

  const Fragment = Frag();

  const consonants = ['g', 'z', 'd', 'b', 'p'];

  consonants.map((consonant) => Fragment().appendChild(VoicedPLink(consonant)));
  Wrapper.tag.appendChild(Fragment());

  return Wrapper.tag;
};

export default VoicedPLinks;

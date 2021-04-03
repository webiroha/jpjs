import '../../../../../styles/main.scss';

import Element from '@root/components/atom/Element';
import Frag from '@root/components/atom/Frag';

const ContractedLink = (consonant) => {
  const Block = Element({
    elem: 'li',
    class: 'consonant-link__item',
  });
  // const separate = (w) => w.split('').join('/');
  // const shape = consonant.length > 1 ? separate(consonant) : consonant;
  const dealedText = () => {
    if (consonant === 's' || consonant === 'c')
      return `${consonant} + h + vowels`;
    if (consonant === 'j') return `${consonant} + vowels`;
    else return `${consonant} + y + vowels`;
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

const ContractedLinks = () => {
  const Wrapper = Element({
    elem: 'ul',
    class: 'consonant-link the-others fade-in',
  });

  const Fragment = Frag();

  const consonants = ['k', 's', 'c', 'n', 'h', 'm', 'r', 'g', 'j', 'b', 'p'];

  consonants.map((consonant) =>
    Fragment().appendChild(ContractedLink(consonant))
  );
  Wrapper.tag.appendChild(Fragment());

  return Wrapper.tag;
};

export default ContractedLinks;

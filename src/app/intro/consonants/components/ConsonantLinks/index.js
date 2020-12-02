import '../../../../../styles/main.scss';

import Element from '@root/components/atom/Element';
import Frag from '@root/components/atom/Frag';

const ConsonantLink = (consonant) => {
  const Block = Element({
    elem: 'li',
    class: 'consonant-link__item',
  });
  const shape =
    consonant.length > 1 ? `${consonant[0]}/${consonant[1]}` : consonant;
  const Link = Element({
    elem: 'a',
    class: 'consonant-link__link',
    text: `consonant ${shape}`,
  });
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
    // 's',
    // 't',
    // 'n',
    // 'hf',
    // 'm',
    // 'y',
    // 'r',
    // 'wn',
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

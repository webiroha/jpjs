import '../../../../../styles/main.scss';

import Element from '@root/components/atom/Element';

const ConsonantLink = (consonant) => {
  const Block = Element({
    elem: 'li',
    class: 'consonant-link',
  });
  const shape =
    consonant.length > 1 ? `${consonant[0]}/${consonant[1]}` : consonant;
  const Link = Element({
    elem: 'a',
    class: 'consonant-link__item',
    text: `consonant ${shape}`,
  });
  // Link.tag.href = `consonalt${consonant}`;
  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

const ConsonantLinks = () => {
  const Wrapper = Element({
    elem: 'ul',
    class: 'consonant-wrapper fade-in',
  });

  const consonants = [
    'ks',
    's',
    't',
    'n',
    'hf',
    'm',
    'y',
    'r',
    'wn',
    'g',
    'z',
    'd',
    'b',
    'p',
    'v',
  ];

  consonants.map((consonant) =>
    Wrapper.tag.appendChild(ConsonantLink(consonant))
  );

  return Wrapper.tag;
};

export default ConsonantLinks;

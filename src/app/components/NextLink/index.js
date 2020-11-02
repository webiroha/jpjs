import '../../../styles/main.scss';

import Element from '../atom/Element';

const NextLink = () => {
  const Block = Element({
    elem: 'div',
    class: 'next-link fade-in',
  });
  const Link = Element({
    elem: 'a',
    class: 'next-link__item',
    text: 'Next',
  });

  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

export default NextLink;

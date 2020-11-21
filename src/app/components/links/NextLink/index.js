import '../../../../styles/main.scss';

import Element from '../../atom/Element';

const NextLink = (link) => {
  const Block = Element({
    elem: 'div',
    class: 'next-link fade-in',
  });
  const status = link ? 'Next' : 'coming soon!';
  const Link = Element({
    elem: 'a',
    class: 'next-link__item',
    text: status,
  });
  Link.tag.href = link;

  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

export default NextLink;

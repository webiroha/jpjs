import '../../../../styles/main.scss';

import Element from '../../atom/Element';

const Link = (page, index) => {
  const Link = Element({
    elem: 'a',
    class: 'pagelink fade-in',
    text: index + '. ' + page.charAt(0).toUpperCase() + page.slice(1),
  });
  Link.tag.href = `./intro/${page}`;

  return Link.tag;
};

export default Link;

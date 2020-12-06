import '../../../../styles/main.scss';

import Element from '../../atom/Element';

const Link = (direct, link, exceptPre, exceptNext) => {
  const Block = Element({
    elem: 'div',
    class: `page-nav__item fade-in`,
  });
  const status = link ? link : 'sometime later!';
  const Link = Element({
    elem: 'a',
    class: `${direct}-link page-nav__link`,
    text: status,
  });
  if (link === 'top') Link.tag.href = `../../`;
  if (exceptPre === 'one' || exceptNext === 'one') Link.tag.href = `./`;
  else if (link) Link.tag.href = `../${link}/`;

  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

const PageNavLink = (pre, next, exceptPre, exceptNext) => {
  const Block = Element({
    elem: 'div',
    class: `page-nav fade-in`,
  });

  if (pre) Block.tag.appendChild(Link('pre', pre, exceptPre));
  Block.tag.appendChild(Link('next', next, exceptNext));

  return Block.tag;
};

export default PageNavLink;

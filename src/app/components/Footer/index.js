import '../../../styles/main.scss';

import Element from '../atom/Element';
import Frag from '@root/components/atom/Frag';
import { pagelist } from '@root/info/pagelist';

const PageLink = (page) => {
  const Block = Element({
    elem: 'li',
    class: 'footer-link__item',
  });

  const Link = Element({
    elem: 'a',
    class: 'footer-link__link',
    text: page,
  });

  Link.tag.href = `../${page}`;
  Block.tag.appendChild(Link.tag);

  return Block.tag;
};

const Footer = () => {
  const PageFooter = Element({
    elem: 'footer',
    class: 'footer fade-in',
  });

  const Nav = Element({
    elem: 'nav',
    class: 'footer-nav',
  });

  const FooterLinks = Element({
    elem: 'ul',
    class: 'footer-link',
  });

  const Fragment = Frag();

  pagelist.intro.map((page) => {
    if (typeof page === 'object')
      Fragment().appendChild(PageLink(Object.keys(page).toString()));
    else Fragment().appendChild(PageLink(page));
  });

  FooterLinks.tag.appendChild(Fragment());
  Nav.tag.appendChild(FooterLinks.tag);
  PageFooter.tag.appendChild(Nav.tag);

  const SoundThanks = Element({
    elem: 'a',
    class: 'sound-thanks',
    text: 'Special thanks: あみたろの声素材工房(小春音アミ(Ami Koharune))',
  });
  SoundThanks.tag.href = 'https://www14.big.or.jp/~amiami/happy/';
  PageFooter.tag.appendChild(SoundThanks.tag);

  const CopyRight = Element({
    elem: 'small',
    class: 'copyright',
    text: '© 2020 Keiko(webiroha) All Rights Reserved.',
  });

  PageFooter.tag.appendChild(CopyRight.tag);

  return () => PageFooter.tag;
};

export default Footer;

import '../../../styles/main.scss';

import Element from '../atom/Element';

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

  const CopyRight = Element({
    elem: 'small',
    class: 'copyright',
    text: '© 2020 Keiko(webiroha) All Rights Reserved.',
  });

  PageFooter.tag.appendChild(CopyRight.tag);

  return () => PageFooter.tag;
};

export default Footer;

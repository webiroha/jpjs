import '../../../styles/main.scss';

import Element from '../atom/Element';

const Footer = () => {
  const PageFooter = Element({
    elem: 'footer',
    class: 'footer fade-in',
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

import '../../../styles/main.scss';

import Element from '../atom/Element';

const Header = (hierarchy) => {
  const PageHeader = Element({
    elem: 'header',
    class: 'header fade-in',
  });

  const Logo = Element({
    elem: 'h1',
    class: 'logo',
  });

  const ToHome = Element({
    elem: 'a',
    class: 'logo__link',
    text: ['Japanese', 'JavaScript'],
  });

  ToHome.tag.href = hierarchy === 'consonant' ? '../../../' : '../../';

  Logo.tag.appendChild(ToHome.tag);
  PageHeader.tag.appendChild(Logo.tag);

  return () => PageHeader.tag;
};

export default Header;

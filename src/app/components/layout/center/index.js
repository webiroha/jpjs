import 'sanitize.css';
import '../../../../styles/main.scss';

import Frag from '../../atom/Frag';
import Element from '../../atom/Element';

const Center = () => {
  const root = document.getElementById('root');
  const WholeFrag = Frag();

  const Wrapper = Element({
    elem: 'div',
    class: 'wrapper',
  });

  const CenterFrag = Frag();

  return { root, WholeFrag, Wrapper, CenterFrag };
};

export default Center;

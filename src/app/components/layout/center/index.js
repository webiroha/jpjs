import 'sanitize.css';
import 'spinkit/spinkit.min.css';
import '../../../../styles/main.scss';

import Frag from '../../atom/Frag';
import Element from '../../atom/Element';

const Center = () => {
  const root = document.getElementById('root');
  const WholeFrag = Frag();

  const Spinner = Element({
    elem: 'div',
    id: 'loading',
  });

  const SpinnerItem = Element({
    elem: 'div',
    class: 'sk-pulse',
  });

  Spinner.tag.appendChild(SpinnerItem.tag);

  const Wrapper = Element({
    elem: 'div',
    class: 'wrapper',
    id: 'wrap',
  });

  const CenterFrag = Frag();

  return { root, WholeFrag, Spinner, Wrapper, CenterFrag };
};

export default Center;

window.onload = () => {
  const spinner = document.getElementById('loading');
  spinner.remove('loading');
};

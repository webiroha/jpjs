import 'sanitize.css';
import '../../../../styles/main.scss';

import Center from '../../layout/Center';
import Header from '../../Header';
import Footer from '../../Footer';

const HeaderFooter = (inside) => {
  const { root, WholeFrag, Wrapper } = Center();
  Wrapper.tag.className = 'wrapper wrapper_layout_sub';
  const PageHeader = Header();
  WholeFrag().appendChild(PageHeader());

  WholeFrag().appendChild(inside());

  const PageFooter = Footer();
  WholeFrag().appendChild(PageFooter());

  Wrapper.tag.appendChild(WholeFrag());
  root.appendChild(Wrapper.tag);

  return () => root;
};

export default HeaderFooter;

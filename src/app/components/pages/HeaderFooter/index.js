import 'sanitize.css';
import '../../../../styles/main.scss';

import Center from '../../layout/Center';
import Header from '../../Header';
import Element from '../../atom/Element';
import Footer from '../../Footer';

const HeaderFooter = (inside, hierarchy, each) => {
  const { root, WholeFrag, Wrapper } = Center();
  Wrapper.tag.className = 'wrapper wrapper_layout_sub';

  const PageHeader = Header(hierarchy);
  WholeFrag().appendChild(PageHeader());

  const Main = Element({
    elem: 'main',
    class: 'main',
  });

  Main.tag.appendChild(inside(each));
  WholeFrag().appendChild(Main.tag);

  const PageFooter = Footer(hierarchy);
  WholeFrag().appendChild(PageFooter());

  Wrapper.tag.appendChild(WholeFrag());
  root.appendChild(Wrapper.tag);

  return () => root;
};

export default HeaderFooter;

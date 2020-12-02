import Frag from '../atom/Frag';
import Element from '../atom/Element';

const SubTitleBlock = (props) => {
  const SubTitleBlockFrag = Frag();

  const Wrapper = Element({
    elem: 'div',
    class: 'sub',
  });

  const Title = Element({
    elem: 'h2',
    class: 'sub__title slide-in-upper__0',
    text: props.title,
  });

  const Text = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: props.text,
  });

  SubTitleBlockFrag().appendChild(Title.tag);
  SubTitleBlockFrag().appendChild(Text.tag);
  Wrapper.tag.appendChild(SubTitleBlockFrag());

  return () => Wrapper.tag;
};

export default SubTitleBlock;

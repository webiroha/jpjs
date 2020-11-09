import Frag from '../atom/Frag';
import Element from '../atom/Element';

const Explain = (props) => {
  const ExplainFrag = Frag();

  const Wrapper = Element({
    elem: 'div',
    class: 'explain',
  });

  const Title = Element({
    elem: 'h1',
    class: 'explain__title slide-in-upper__0',
    text: props.title,
  });

  const Text = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: props.text,
  });

  ExplainFrag().appendChild(Title.tag);
  ExplainFrag().appendChild(Text.tag);
  Wrapper.tag.appendChild(ExplainFrag());

  return () => Wrapper.tag;
};

export default Explain;

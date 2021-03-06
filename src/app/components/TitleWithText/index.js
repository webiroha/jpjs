import Frag from '../atom/Frag';
import Element from '../atom/Element';

const TitleWithText = (props) => {
  const TitleWithTextFrag = Frag();

  const Wrapper = Element({
    elem: 'div',
    class: props.role,
  });

  const Title = Element({
    elem: props.element,
    class: `${props.role}__title slide-in-upper__0`,
    text: props.title,
  });

  const Text = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: props.text,
  });

  TitleWithTextFrag().appendChild(Title.tag);
  if (props.text) TitleWithTextFrag().appendChild(Text.tag);
  Wrapper.tag.appendChild(TitleWithTextFrag());

  return () => Wrapper.tag;
};

export default TitleWithText;

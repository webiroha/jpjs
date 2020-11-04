import Element from './Element';

const ElementBr = (props) => {
  const { tag } = Element({
    elem: props.elem,
    class: props.class,
  });

  props.text.forEach((t, i) => {
    let line = document.createTextNode(t);
    const br = document.createElement('br');
    tag.appendChild(line);
    if (props.text.length - 1 > i) tag.appendChild(br);
  });

  return () => tag;
};

export default ElementBr;

const Element = (props) => {
  const tag = document.createElement(props.elem);
  if (props.class) tag.className = props.class;
  if (props.id) tag.id = props.id;

  if (Array.isArray(props.text)) {
    props.text.forEach((t, i) => {
      let line = document.createTextNode(t);
      const br = document.createElement('br');
      tag.appendChild(line);
      if (props.text.length - 1 > i) tag.appendChild(br);
    });
  } else {
    tag.textContent = props.text;
  }

  return { tag };
};

export default Element;

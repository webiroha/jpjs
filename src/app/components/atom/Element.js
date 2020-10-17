const Element = (props) => {
  const tag = document.createElement(props.elem);
  tag.className = props.class;
  tag.textContent = props.text;

  return () => tag;
};

export default Element;

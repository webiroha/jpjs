const ElementWith = (props) => {
  const tag = document.createElement(props.elem);
  tag.className = props.class;
  const firstText = document.createTextNode(props.text);
  const secondText = document.createTextNode(props.text2);
  const br = document.createElement('br');
  tag.appendChild(firstText);
  tag.appendChild(br);
  tag.appendChild(secondText);

  return () => tag;
};

export default ElementWith;

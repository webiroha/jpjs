import Element from '../atom/Element';

const NihongoMotion = (props) => {
  const { tag } = Element(props);

  tag.style.top = `${props.y}em`;
  tag.style.left = `${props.x}em`;

  return () => tag;
};

export default NihongoMotion;

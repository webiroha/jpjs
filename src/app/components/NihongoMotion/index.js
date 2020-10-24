import Element from '../atom/Element';

const NihongoMotion = (props) => {
  const { tag } = Element(props);

  tag.style.top = `${props.y}px`;
  tag.style.left = `${props.x}px`;

  return () => tag;
};

export default NihongoMotion;

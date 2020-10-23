import Element from '../atom/Element';

const NihongoMotion = (props) => {
  const { tag } = Element(props);

  // const x = document.body.offsetHeight - tag.clientHeight;
  // const y = document.body.offsetWidth - tag.clientWidth;
  // const randomX = Math.floor(Math.random() * x);
  // const randomY = Math.floor(Math.random() * y);

  tag.style.transform = `translate(${props.x}px, ${props.y}px)`;
  tag.style.opacity = 0;

  return () => tag;
};

export default NihongoMotion;

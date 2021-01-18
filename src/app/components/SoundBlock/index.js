import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';

const SoundBlock = (sounds) => {
  const Block = Element({
    elem: 'div',
  });

  const SoundButtonText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: "Let's hear the sound!",
  });
  Block.tag.appendChild(SoundButtonText.tag);

  const SoundsBlock = Element({
    elem: 'div',
    class: 'sound-block fade-in',
  });
  const SoundsFrag = Frag();

  const createSoundButtons = (item) => {
    const sound =
      item !== 'n' && item.length === 1
        ? new Audio(`../../assets/sounds/single/${item}.wav`)
        : new Audio(`../../../assets/sounds/single/${item}.wav`);

    const SoundButton = Element({
      elem: 'button',
      class: 'sound-button',
      text: item,
    });
    SoundButton.tag.type = 'button';
    SoundButton.tag.addEventListener('click', () => {
      sound.currentTime = 0;
      sound.play();
    });

    SoundsFrag().appendChild(SoundButton.tag);
  };

  sounds.map((i) => createSoundButtons(i));

  SoundsBlock.tag.appendChild(SoundsFrag());
  Block.tag.appendChild(SoundsBlock.tag);

  return Block.tag;
};

export default SoundBlock;

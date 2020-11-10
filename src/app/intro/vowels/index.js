import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Element from '../../components/atom/Element';
import Explain from '../../components/Explain';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';
import a from '../../../assets/sounds/single/a.wav';
// console.log(a);

const Vowels = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Vowels',
    text: 'Japanese has 5 vowels.',
  };
  const VowelsExplain = Explain(ExplainInfo);
  ContentsFrag().appendChild(VowelsExplain());

  const vowelsByRomaji = `const vowelsByRomaji = ['a', 'i', 'u', 'e', 'o'];`;

  const { Code: VowelsCode } = CodeBlock(vowelsByRomaji);
  ContentsFrag().appendChild(VowelsCode.tag);

  const NoteText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: 'The sounds are different from English.',
  });
  ContentsFrag().appendChild(NoteText.tag);

  const vowelsSounds = `const vowelsSounds = [
    { a: 'ah' },
    { i: 'ee' },
    { u: 'oo' },
    { e: 'eh' },
    { o: 'oh' },
  ];`;

  const { Code: VowelSoundCode } = CodeBlock(vowelsSounds);
  ContentsFrag().appendChild(VowelSoundCode.tag);

  const SoundsBlock = Element({
    elem: 'div',
    class: 'sound-block fade-in',
  });

  // const soundA = new Audio(a);

  // const AudioA = Element({
  //   elem: 'audio',
  //   class: 'audio',
  // });
  // AudioA.tag.id = 'audio';
  // AudioA.tag.controls;

  // const AudioAItem = Element({
  //   elem: 'source',
  //   class: 'source',
  // });
  // AudioAItem.tag.src = '../../../assets/sounds/single/a.wav';
  // AudioAItem.tag.type = 'wav';
  // AudioA.tag.appendChild(AudioAItem.tag);

  const SoundA = Element({
    elem: 'button',
    class: 'sound-button',
    text: 'sound a',
  });

  // SoundA.tag.type = 'button';
  // SoundA.tag.addEventListener('click', () => {
  //   document.getElementById('audio').currentTime = 0;
  //   document.getElementById('audio').play();
  // });
  SoundA.tag.type = 'button';
  SoundA.tag.addEventListener('click', () => {
    soundA.play();
  });

  // SoundsBlock.tag.appendChild(AudioA.tag);
  SoundsBlock.tag.appendChild(SoundA.tag);
  ContentsFrag().appendChild(SoundsBlock.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Vowels);

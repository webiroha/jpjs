import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Element from '../../components/atom/Element';
import Explain from '../../components/Explain';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';
import '../../../assets/sounds/single/a.wav';
import '../../../assets/sounds/single/i.wav';
import '../../../assets/sounds/single/u.wav';
import '../../../assets/sounds/single/e.wav';
import '../../../assets/sounds/single/o.wav';

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

  const vowels = ['a', 'i', 'u', 'e', 'o'];

  const SoundsBlock = Element({
    elem: 'div',
    class: 'sound-block fade-in',
  });
  const SoundsFrag = Frag();

  const createSoundButtons = (item) => {
    const sound = new Audio(`../../../assets/sounds/single/${item}.wav`);

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

  vowels.map((i) => createSoundButtons(i));

  SoundsBlock.tag.appendChild(SoundsFrag());
  ContentsFrag().appendChild(SoundsBlock.tag);

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Vowels);

// const vowelsLetters = [
//   { a: { hiragana: 'あ', katakana: 'ア' } },
//   { i: { hiragana: 'い', katakana: 'イ' } },
//   { u: { hiragana: 'う', katakana: 'ウ' } },
//   { e: { hiragana: 'え', katakana: 'エ' } },
//   { o: { hiragana: 'お', katakana: 'オ' } },
// ];

// const vowels = [
//   { a: 'ah' },
//   { i: 'ee' },
//   { u: 'oo' },
//   { e: 'eh' },
//   { o: 'oh' },
// ];

// const love = [{ romaji: 'ai', hiragana: 'あい', kanji: '愛' }];
// const house = [{ romaji: 'ie', hiragana: 'いえ', kanji: '家' }];
// const top = [{ romaji: 'ue', hiragana: 'うえ', kanji: '上' }];
// const blue = [{ romaji: 'ao', hiragana: 'あお', kanji: '青' }];

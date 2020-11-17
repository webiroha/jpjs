import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import Explain from '@root/components/Explain';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/NextLink';
import '@wav/a.wav';
import '@wav/i.wav';
import '@wav/u.wav';
import '@wav/e.wav';
import '@wav/o.wav';

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
    text: 'The sound is different from English.',
  });
  ContentsFrag().appendChild(NoteText.tag);

  const vowelSounds = `const vowelSounds = [
    { a: { sound: 'ah' } },
    { i: { sound: 'ee' } },
    { u: { sound: 'oo' } },
    { e: { sound: 'eh' } },
    { o: { sound: 'oh' } },
  ];`;

  const { Code: VowelSoundCode } = CodeBlock(vowelSounds);
  ContentsFrag().appendChild(VowelSoundCode.tag);

  const vowels = ['a', 'i', 'u', 'e', 'o'];

  const SoundsBlock = Element({
    elem: 'div',
    class: 'sound-block fade-in',
  });
  const SoundsFrag = Frag();

  const createSoundButtons = (item) => {
    const sound = new Audio(`../../assets/sounds/single/${item}.wav`);

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

// const vowelLetters = [
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

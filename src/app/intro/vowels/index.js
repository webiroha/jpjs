import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Element from '../../components/atom/Element';
import Explain from '../../components/Explain';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';

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

  ContentsFrag().appendChild(NextLink(''));

  return ContentsFrag();
};

HeaderFooter(Vowels);

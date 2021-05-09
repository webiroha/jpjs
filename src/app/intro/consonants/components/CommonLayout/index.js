import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import SoundBlock from '@root/components/SoundBlock';
import PageNavLink from '@root/components/links/PageNavLink';

const InsideCommon = (props) => {
  const Section = Element({
    elem: 'section',
    class: 'section',
  });

  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: props.explain.title,
    text: props.explain.text,
  };
  const ConsonantsExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(ConsonantsExplain());

  const { Code: consonantKVowelsCode } = CodeBlock(props.romaji);
  ContentsFrag().appendChild(consonantKVowelsCode.tag);

  ContentsFrag().appendChild(SoundBlock(props.sound));

  const HiraganaKatakana = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: props.jpText,
  });

  ContentsFrag().appendChild(HiraganaKatakana.tag);

  const { Code: LettersCode } = CodeBlock(props.letters);
  ContentsFrag().appendChild(LettersCode.tag);

  const ExampleText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: props.exampleText,
  });
  ContentsFrag().appendChild(ExampleText.tag);

  const { Code: ExamplesCode } = CodeBlock(props.examples);
  ContentsFrag().appendChild(ExamplesCode.tag);

  ContentsFrag().appendChild(PageNavLink(...props.navLink));
  Section.tag.appendChild(ContentsFrag());

  return Section.tag;
};

const CommonLayout = (info) => {
  HeaderFooter(InsideCommon, 'consonant', info);
};

export default CommonLayout;

import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import Element from '@root/components/atom/Element';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import PageNavLink from '@root/components/links/PageNavLink';

const Preparation = () => {
  const Section = Element({
    elem: 'section',
    class: 'section',
  });

  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
    element: 'h1',
    title: 'Preparation',
    text: ['You will type Japanese by changing keyboard mode', 'if you want🙂'],
  };
  const PreparationExplain = TitleWithText(ExplainInfo);
  ContentsFrag().appendChild(PreparationExplain());

  const order = `const Windows = [
    { click: 'Windows menu' },
    { open: 'Settings' },
    { select: 'Time & language' },
    { open: 'Region & language' },
    { click: 'Add a language' },
    { select: '日本語 – Japanese' }
  ];

  const Mac = [
    { click: 'Apple menu' },
    { select: 'System Preferences' },
    { open: 'Keyboard' },
    { click: 'Input Sources' },
    { click: 'Add button' },
    { select: 'Japanese' }
  ];`;

  const { Code } = CodeBlock(order);
  ContentsFrag().appendChild(Code.tag);

  ContentsFrag().appendChild(PageNavLink('top', 'characters'));
  Section.tag.appendChild(ContentsFrag());

  return Section.tag;
};

HeaderFooter(Preparation);

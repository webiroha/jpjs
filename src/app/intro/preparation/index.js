import HeaderFooter from '@root/components/pages/HeaderFooter';
import Frag from '@root/components/atom/Frag';
import TitleWithText from '@root/components/TitleWithText';
import CodeBlock from '@root/components/CodeBlock';
import NextLink from '@root/components/links/NextLink';

const Preparation = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    role: 'explain',
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

  ContentsFrag().appendChild(NextLink('../characters/'));

  return ContentsFrag();
};

HeaderFooter(Preparation);

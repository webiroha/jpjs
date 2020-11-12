import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Explain from '../../components/Explain';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';

const Preparation = () => {
  const ContentsFrag = Frag();

  const ExplainInfo = {
    title: 'Preparation',
    text: ['You will type Japanese by changing keyboard mode', 'if you want🙂'],
  };
  const PreparationExplain = Explain(ExplainInfo);
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

  ContentsFrag().appendChild(NextLink('../intro/characters/'));

  return ContentsFrag();
};

HeaderFooter(Preparation);

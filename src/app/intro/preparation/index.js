import HeaderFooter from '../../components/pages/HeaderFooter';
import Frag from '../../components/atom/Frag';
import Element from '../../components/atom/Element';
import CodeBlock from '../../components/CodeBlock';
import NextLink from '../../components/NextLink';

const Preparation = () => {
  const ContentsFrag = Frag();
  const ExplainFrag = Frag();

  const Explain = Element({
    elem: 'div',
    class: 'explain',
  });

  const Title = Element({
    elem: 'h1',
    class: 'explain__title slide-in-upper__0',
    text: 'Preparation',
  });

  const ExplainText = Element({
    elem: 'p',
    class: 'text opacity_0 slide-in-upper__1',
    text: ['You will type Japanese by changing keyboard mode', 'if you want🙂'],
  });

  ExplainFrag().appendChild(Title.tag);
  ExplainFrag().appendChild(ExplainText.tag);
  Explain.tag.appendChild(ExplainFrag());
  ContentsFrag().appendChild(Explain.tag);

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

  ContentsFrag().appendChild(NextLink());

  return ContentsFrag();
};

HeaderFooter(Preparation);

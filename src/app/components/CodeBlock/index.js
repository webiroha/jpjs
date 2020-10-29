import '../../../styles/main.scss';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/gruvbox-dark.css';
hljs.registerLanguage('javascript', javascript);

import Element from '../atom/Element';

const CodeBlock = (text) => {
  const Code = Element({
    elem: 'code',
    class: 'code fade-in gruvbox-dark hljs',
  });
  const Pre = Element({
    elem: 'pre',
    class: 'pre',
  });

  const highlight = hljs.highlight('javascript', text).value;

  Pre.tag.innerHTML = highlight;
  Code.tag.appendChild(Pre.tag);

  return { Code };
};

export default CodeBlock;

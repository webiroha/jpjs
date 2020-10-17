import 'sanitize.css';
import '../styles/main.scss';

import Element from './components/atom/Element';

const root = document.getElementById('root');

const hello = Element({ elem: 'h1', class: 'title', text: 'Hello world!' });

root.appendChild(hello());

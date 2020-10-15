const root = document.getElementById('root');
import 'sanitize.css';
import '../styles/main.scss';

const hello = document.createElement('h1');
hello.textContent = 'Hello world!';

root.appendChild(hello);

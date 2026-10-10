const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const stylePath = path.join(rootDir, 'style.css');
const cssDir = path.join(rootDir, 'css');

if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

const lines = fs.readFileSync(stylePath, 'utf-8').split(/\r?\n/);
const getLines = (start, end) => lines.slice(start - 1, end).join('\n');

fs.writeFileSync(path.join(cssDir, 'variables.css'), getLines(1, 155), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'layout.css'), getLines(156, 483), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'practice.css'), getLines(484, 774), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'exam.css'), getLines(775, 851) + '\n\n' + getLines(966, 1268), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'components.css'), getLines(852, 965) + '\n\n' + getLines(1505, 1743), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'notebook.css'), getLines(1269, 1313), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'flashcards.css'), getLines(1314, 1504), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'docs.css'), getLines(1744, 2125), 'utf-8');
fs.writeFileSync(path.join(cssDir, 'responsive.css'), getLines(2126, lines.length), 'utf-8');

const masterCss = `/* Master Stylesheet importing all modules */
@import './variables.css';
@import './layout.css';
@import './components.css';
@import './practice.css';
@import './exam.css';
@import './flashcards.css';
@import './notebook.css';
@import './docs.css';
@import './responsive.css';
`;
fs.writeFileSync(path.join(cssDir, 'style.css'), masterCss, 'utf-8');
console.log('Successfully generated modular CSS in css/ !');

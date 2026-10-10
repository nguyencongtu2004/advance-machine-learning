const fs = require('fs');
const path = require('path');

const webDir = path.join(__dirname, '..');
const cssDir = path.join(webDir, 'css');
const jsDir = path.join(webDir, 'js');
const dataDir = path.join(webDir, 'data');
const vendorDir = path.join(webDir, 'vendor');

[cssDir, jsDir, dataDir, vendorDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

console.log('Modularizing web application...');

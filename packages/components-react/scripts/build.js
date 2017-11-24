// import Node modules
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const { error } = console;

// Promisify Node functions because who uses callbacks?
const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const componentsPath = path.join(__dirname, '..', 'src', 'components');

// Check if the file has or doesn't have the needle (in this case the scss import)
function verifyFileContent(file, data) {
  const needle = `\nimport './${file}.scss';`;
  let content = data;

  const parsed = (content.indexOf(needle) > -1 ? content.replace(needle, '') : (content += needle));

  return parsed;
}

// Read file and re-write it with verified content
function prepareFile(file) {
  const filePath = path.join(componentsPath, file, `${file}.js`);

  readFile(filePath, 'utf-8')
    .then((content) => {
      writeFile(path.join(componentsPath, file, `${file}.js`), verifyFileContent(file, content));
    });
}

// Exported IIFE to run build process
module.exports = (() => {
  readDir(componentsPath)
    .then((files) => {
      files.forEach(prepareFile);
    }).catch(err => error('ERROR =>', err));
})();

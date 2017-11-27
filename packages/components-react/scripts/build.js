/**
  @author Baruch Velez
  @description Do to NextJS not being able to run webpack loaders in node_modules packages,
  we have to run a build process twice, one with the code adjusted for projects where webpack
  loaders are available and another for when it's not (NextJS).

  This file reads the folders inside packages/components-react/src/components and adjusts the
  JS and the SCSS files accordingly to be able to transpile into the corresponding folders
  'es/' for webpack ready packages and 'lib/' for NextJS projects.
 */

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

// Read JS files and add / remove the passed needle
function parseJSFile(data, needle) {
  return (data.indexOf(needle) > -1 ? data.replace(needle, '/* scss import */') : data.replace('/* scss import */', needle));
}

// Read SCSS files and add / remove `~` from imports
function parseSCSSFile(data) {
  const regexp = new RegExp('@import "~', 'gm');
  return (data.match(regexp) ? data.replace(regexp, '@import "') : data.replace(new RegExp('@import "', 'gm'), '@import "~'));
}

// Read file and re-write it with verified content
function prepareFile(name, ext, needle) {
  const filePath = path.join(componentsPath, name, `${name}.${ext}`);

  readFile(filePath, 'utf-8')
    .then((content) => {
      if (ext === 'js') {
        writeFile(filePath, parseJSFile(content, needle));
      }

      if (ext === 'scss') {
        writeFile(filePath, parseSCSSFile(content));
      }
    });
}

// Exported IIFE to run build process
module.exports = (() => {
  readDir(componentsPath)
    .then((folders) => {
      folders.forEach((fileName) => {
        prepareFile(fileName, 'js', `import './${fileName}.scss';`);
        prepareFile(fileName, 'scss');
      });
    }).catch(err => error('ERROR =>', err));
})();

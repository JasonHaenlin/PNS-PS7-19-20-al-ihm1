/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');

// compile a text and return some JS code
const compileCode = (code) => {
  // TODO: compile stuff
  // for now, the compiler doesn't work so we assume the input code contains JS code
  return code;
};

// compile a file and return some JS code
const compile = (filename) => {
  let content = fs.readFileSync(filename, 'UTF-8');
  console.log('debug...');
  let code = compileCode(content);
  return code;
};

module.exports = {
  compile,
  compileCode
};

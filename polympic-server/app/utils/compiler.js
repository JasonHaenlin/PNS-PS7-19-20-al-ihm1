/* eslint-disable security/detect-child-process */
/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const cp = require('child_process');

// compile a text and return some JS code
const compileCode = (code) => {
  const response = cp.execSync('echo "' + code.replace(/[\r\n]+/gm, ' ') +
    '" | java -jar ./app/utils/compiler/polympic-dsl.jar').toLocaleString();
  return response;
};


// compile a file and return some JS code
const compile = (filename) => {
  let content = fs.readFileSync(filename, 'UTF-8');
  let code = compileCode(content);
  return code;
};

module.exports = {
  compile,
  compileCode
};

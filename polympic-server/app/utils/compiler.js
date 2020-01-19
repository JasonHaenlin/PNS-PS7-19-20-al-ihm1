/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');
const cp = require('child_process');

// compile a text and return some JS code
const compileCode = (code) => {
  const response = cp.execSync('echo "' + code.replace('\n', ' ').replace('\r', ' ') +
<<<<<<< HEAD:polympic-server/app/utils/compiler.js
    '" | java -jar ./app/utils/compiler/polympic-dsl.jar').toLocaleString();
=======
        '" | java -jar ./utils/compiler/polympic-dsl.jar').toLocaleString();
>>>>>>> revert dsl bug comment:polympic-server/utils/compiler.js
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

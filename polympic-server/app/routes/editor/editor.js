/* eslint-disable security/detect-non-literal-fs-filename */
const resHandler = require('../../utils/response-handler');
const compiler = require('../../utils/compiler');
const fs = require('fs');

exports.saveScript = async (req, res) => {
  let code = req.body.code;
  let file = __dirname + '/../../public/scripts/' + req.body.file;
  fs.writeFileSync(file, code);
  resHandler.yahResponse(res, 'ok');
};

exports.savePreview = async (req, res) => {
  let code = req.body.code;
  let file = __dirname + '/../../public/scripts/preview_' + req.body.file;
  fs.writeFileSync(file, code);
  resHandler.yahResponse(res, 'ok');
};

exports.viewEditor = async (req, res) => {
  let id = req.query.id;
  if (id === '438c83fa-f6bc-4fe7-a20a-ee08d87df21d') {
    res.render('editor/index');
  } else {
    res.render('index', { title: 'Σ(ﾟДﾟ)' });
  }
};

exports.compile = async (req, res) => {
  let code = req.body.code;
  try {
    let compiledCode = compiler.compileCode(code);
    const lib = require('../../utils/compiler/lib');
    eval(compiledCode);
    resHandler.yahResponse(res, { compiledCode: compiledCode });
  } catch (e) {
    resHandler.nahResponse(res, 'failed');
  }
};

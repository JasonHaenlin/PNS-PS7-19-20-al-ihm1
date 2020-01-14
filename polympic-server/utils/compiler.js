const fs = require("fs");

module.exports = {
    // compile a file and return some JS code
    compile(filename) {
        let content = fs.readFileSync(filename, 'UTF-8');
        let code = compileCode(content);
        return code;
    },

    // compile a text and return some JS code
    compileCode(code) {
        // TODO: compile stuff
        // for now, the compiler doesn't work so we assume the input code contains JS code
        return code;
    }
}
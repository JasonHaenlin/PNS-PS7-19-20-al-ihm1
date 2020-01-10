// This is the compiler script for the Polygram Domain Specific Language

const fs = require("fs")

const antlr4 = require("antlr4/index")
const polygramLexer = require("./polygramLexer.js")
const polygramParser = require("./polygramParser.js")
const polygramListener = require("./polygramListener.js").polygramListener


const DEBUG = false

if(process.argv.length < 3) {
    console.log("No source given.")
    process.exit(1)
}
const iName = process.argv[2]

if(DEBUG) {
    process.argv.forEach(function (val, no, array) {
        console.log(no + ': ' + val)
    });
}

var input = fs.readFileSync(iName, 'UTF-8')
var chars = new antlr4.InputStream(input)
var lexer = new polygramLexer.polygramLexer(chars)
var tokens  = new antlr4.CommonTokenStream(lexer)
var parser = new polygramParser.polygramParser(tokens)
parser.buildParseTrees = true
var tree = parser.program()

var extractor = new polygramListener()
antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree)

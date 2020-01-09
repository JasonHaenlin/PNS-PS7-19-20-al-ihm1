// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011}\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0005\nQ\n\n\u0003\n\u0006\nT\n\n\r\n\u000e\nU\u0003\n\u0005",
    "\nY\n\n\u0003\n\u0007\n\\\n\n\f\n\u000e\n_\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0006\u000fs\n\u000f\r\u000f\u000e\u000f",
    "t\u0003\u0010\u0006\u0010x\n\u0010\r\u0010\u000e\u0010y\u0003\u0010",
    "\u0003\u0010\u0002\u0002\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011\u0003\u0002\u0006\u0003\u0002",
    "2;\u0004\u0002..00\u0004\u0002\f\f\u000f\u000f\u0004\u0002\u000b\u000b",
    "\"\"\u0002\u0082\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0003!\u0003",
    "\u0002\u0002\u0002\u0005#\u0003\u0002\u0002\u0002\u0007%\u0003\u0002",
    "\u0002\u0002\t\'\u0003\u0002\u0002\u0002\u000b/\u0003\u0002\u0002\u0002",
    "\r8\u0003\u0002\u0002\u0002\u000f@\u0003\u0002\u0002\u0002\u0011F\u0003",
    "\u0002\u0002\u0002\u0013P\u0003\u0002\u0002\u0002\u0015`\u0003\u0002",
    "\u0002\u0002\u0017d\u0003\u0002\u0002\u0002\u0019g\u0003\u0002\u0002",
    "\u0002\u001bl\u0003\u0002\u0002\u0002\u001dr\u0003\u0002\u0002\u0002",
    "\u001fw\u0003\u0002\u0002\u0002!\"\u0007@\u0002\u0002\"\u0004\u0003",
    "\u0002\u0002\u0002#$\u0007>\u0002\u0002$\u0006\u0003\u0002\u0002\u0002",
    "%&\u0007?\u0002\u0002&\b\u0003\u0002\u0002\u0002\'(\u0007f\u0002\u0002",
    "()\u0007k\u0002\u0002)*\u0007u\u0002\u0002*+\u0007r\u0002\u0002+,\u0007",
    "n\u0002\u0002,-\u0007c\u0002\u0002-.\u0007{\u0002\u0002.\n\u0003\u0002",
    "\u0002\u0002/0\u0007e\u0002\u000201\u0007q\u0002\u000212\u0007p\u0002",
    "\u000223\u0007e\u0002\u000234\u0007g\u0002\u000245\u0007t\u0002\u0002",
    "56\u0007p\u0002\u000267\u0007u\u0002\u00027\f\u0003\u0002\u0002\u0002",
    "89\u0007r\u0002\u00029:\u0007t\u0002\u0002:;\u0007q\u0002\u0002;<\u0007",
    "i\u0002\u0002<=\u0007t\u0002\u0002=>\u0007c\u0002\u0002>?\u0007o\u0002",
    "\u0002?\u000e\u0003\u0002\u0002\u0002@A\u0007u\u0002\u0002AB\u0007e",
    "\u0002\u0002BC\u0007q\u0002\u0002CD\u0007t\u0002\u0002DE\u0007g\u0002",
    "\u0002E\u0010\u0003\u0002\u0002\u0002FG\u0007h\u0002\u0002GH\u0007q",
    "\u0002\u0002HI\u0007t\u0002\u0002IJ\u0007\"\u0002\u0002JK\u0007g\u0002",
    "\u0002KL\u0007c\u0002\u0002LM\u0007e\u0002\u0002MN\u0007j\u0002\u0002",
    "N\u0012\u0003\u0002\u0002\u0002OQ\u0007/\u0002\u0002PO\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RT\t\u0002",
    "\u0002\u0002SR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002",
    "WY\t\u0003\u0002\u0002XW\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002Y]\u0003\u0002\u0002\u0002Z\\\t\u0002\u0002\u0002[Z\u0003\u0002",
    "\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]^",
    "\u0003\u0002\u0002\u0002^\u0014\u0003\u0002\u0002\u0002_]\u0003\u0002",
    "\u0002\u0002`a\u0007c\u0002\u0002ab\u0007p\u0002\u0002bc\u0007f\u0002",
    "\u0002c\u0016\u0003\u0002\u0002\u0002de\u0007q\u0002\u0002ef\u0007t",
    "\u0002\u0002f\u0018\u0003\u0002\u0002\u0002gh\u0007y\u0002\u0002hi\u0007",
    "j\u0002\u0002ij\u0007g\u0002\u0002jk\u0007p\u0002\u0002k\u001a\u0003",
    "\u0002\u0002\u0002lm\u0007v\u0002\u0002mn\u0007j\u0002\u0002no\u0007",
    "g\u0002\u0002op\u0007p\u0002\u0002p\u001c\u0003\u0002\u0002\u0002qs",
    "\t\u0004\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002",
    "tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002u\u001e\u0003\u0002",
    "\u0002\u0002vx\t\u0005\u0002\u0002wv\u0003\u0002\u0002\u0002xy\u0003",
    "\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002",
    "z{\u0003\u0002\u0002\u0002{|\b\u0010\u0002\u0002| \u0003\u0002\u0002",
    "\u0002\t\u0002PUX]ty\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function polygramLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

polygramLexer.prototype = Object.create(antlr4.Lexer.prototype);
polygramLexer.prototype.constructor = polygramLexer;

Object.defineProperty(polygramLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

polygramLexer.EOF = antlr4.Token.EOF;
polygramLexer.T__0 = 1;
polygramLexer.T__1 = 2;
polygramLexer.T__2 = 3;
polygramLexer.T__3 = 4;
polygramLexer.CONCERNS = 5;
polygramLexer.PROGRAM = 6;
polygramLexer.IDENTIFIER = 7;
polygramLexer.FOREACH = 8;
polygramLexer.NUMBER = 9;
polygramLexer.AND = 10;
polygramLexer.OR = 11;
polygramLexer.WHEN = 12;
polygramLexer.THEN = 13;
polygramLexer.EOL = 14;
polygramLexer.WS = 15;

polygramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

polygramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

polygramLexer.prototype.literalNames = [ null, "'>'", "'<'", "'='", "'display'", 
                                         "'concerns'", "'program'", "'score'", 
                                         "'for each'", null, "'and'", "'or'", 
                                         "'when'", "'then'" ];

polygramLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                          "CONCERNS", "PROGRAM", "IDENTIFIER", 
                                          "FOREACH", "NUMBER", "AND", "OR", 
                                          "WHEN", "THEN", "EOL", "WS" ];

polygramLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "CONCERNS", 
                                      "PROGRAM", "IDENTIFIER", "FOREACH", 
                                      "NUMBER", "AND", "OR", "WHEN", "THEN", 
                                      "EOL", "WS" ];

polygramLexer.prototype.grammarFileName = "polygram.g4";



exports.polygramLexer = polygramLexer;


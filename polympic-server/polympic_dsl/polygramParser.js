// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var polygramListener = require('./polygramListener').polygramListener;
var polygramVisitor = require('./polygramVisitor').polygramVisitor;

var grammarFileName = "polygram.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001ad\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0006\u0002\u0014\n\u0002",
    "\r\u0002\u000e\u0002\u0015\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u001c\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007A\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007I\n\u0007",
    "\f\u0007\u000e\u0007L\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005\bQ\n",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\b_\n\b\f\b\u000e\bb\u000b\b\u0003\b",
    "\u0002\u0004\f\u000e\t\u0002\u0004\u0006\b\n\f\u000e\u0002\u0003\u0003",
    "\u0002\b\t\u0002l\u0002\u0010\u0003\u0002\u0002\u0002\u0004\u0017\u0003",
    "\u0002\u0002\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b\u001d\u0003",
    "\u0002\u0002\u0002\n\"\u0003\u0002\u0002\u0002\f@\u0003\u0002\u0002",
    "\u0002\u000eP\u0003\u0002\u0002\u0002\u0010\u0011\u0007\u000b\u0002",
    "\u0002\u0011\u0013\u0005\u0004\u0003\u0002\u0012\u0014\u0005\u0006\u0004",
    "\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002",
    "\u0002\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002",
    "\u0002\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0018\t\u0002\u0002",
    "\u0002\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001c\u0005\n\u0006",
    "\u0002\u001a\u001c\u0005\b\u0005\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u0007\u0003\u0002\u0002",
    "\u0002\u001d\u001e\u0007\u0016\u0002\u0002\u001e\u001f\u0005\f\u0007",
    "\u0002\u001f \u0007\u0017\u0002\u0002 !\u0005\n\u0006\u0002!\t\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0007\u0002\u0002#\u000b\u0003\u0002\u0002",
    "\u0002$%\b\u0007\u0001\u0002%A\u0007\n\u0002\u0002&\'\u0005\u000e\b",
    "\u0002\'(\u0007\u0010\u0002\u0002()\u0005\u000e\b\u0002)A\u0003\u0002",
    "\u0002\u0002*+\u0005\u000e\b\u0002+,\u0007\u0011\u0002\u0002,-\u0005",
    "\u000e\b\u0002-A\u0003\u0002\u0002\u0002./\u0005\u000e\b\u0002/0\u0007",
    "\u0014\u0002\u000201\u0005\u000e\b\u00021A\u0003\u0002\u0002\u00022",
    "3\u0005\u000e\b\u000234\u0007\u0012\u0002\u000245\u0005\u000e\b\u0002",
    "5A\u0003\u0002\u0002\u000267\u0005\u000e\b\u000278\u0007\u0013\u0002",
    "\u000289\u0005\u000e\b\u00029A\u0003\u0002\u0002\u0002:;\u0005\u000e",
    "\b\u0002;<\u0007\u0015\u0002\u0002<=\u0005\u000e\b\u0002=A\u0003\u0002",
    "\u0002\u0002>?\u0007\u000f\u0002\u0002?A\u0005\f\u0007\u0003@$\u0003",
    "\u0002\u0002\u0002@&\u0003\u0002\u0002\u0002@*\u0003\u0002\u0002\u0002",
    "@.\u0003\u0002\u0002\u0002@2\u0003\u0002\u0002\u0002@6\u0003\u0002\u0002",
    "\u0002@:\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AJ\u0003\u0002",
    "\u0002\u0002BC\f\u0005\u0002\u0002CD\u0007\r\u0002\u0002DI\u0005\f\u0007",
    "\u0006EF\f\u0004\u0002\u0002FG\u0007\u000e\u0002\u0002GI\u0005\f\u0007",
    "\u0005HB\u0003\u0002\u0002\u0002HE\u0003\u0002\u0002\u0002IL\u0003\u0002",
    "\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002K\r",
    "\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002MN\b\b\u0001\u0002",
    "NQ\u0007\n\u0002\u0002OQ\u0007\f\u0002\u0002PM\u0003\u0002\u0002\u0002",
    "PO\u0003\u0002\u0002\u0002Q`\u0003\u0002\u0002\u0002RS\f\u0006\u0002",
    "\u0002ST\u0007\u0003\u0002\u0002T_\u0005\u000e\b\u0007UV\f\u0005\u0002",
    "\u0002VW\u0007\u0004\u0002\u0002W_\u0005\u000e\b\u0006XY\f\u0004\u0002",
    "\u0002YZ\u0007\u0005\u0002\u0002Z_\u0005\u000e\b\u0005[\\\f\u0003\u0002",
    "\u0002\\]\u0007\u0006\u0002\u0002]_\u0005\u000e\b\u0004^R\u0003\u0002",
    "\u0002\u0002^U\u0003\u0002\u0002\u0002^X\u0003\u0002\u0002\u0002^[\u0003",
    "\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002",
    "`a\u0003\u0002\u0002\u0002a\u000f\u0003\u0002\u0002\u0002b`\u0003\u0002",
    "\u0002\u0002\n\u0015\u001b@HJP^`"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'display'", "'program'", 
                     "'event'", null, "'for each'", null, "'and'", "'or'", 
                     "'not'", "'>'", "'<'", "'>='", "'<='", "'='", "'!='", 
                     "'when'", "'then'" ];

var symbolicNames = [ null, null, null, null, null, "DISPLAY", "PROGRAM", 
                      "EVENT", "IDENTIFIER", "FOREACH", "NUMBER", "AND", 
                      "OR", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "WHEN", 
                      "THEN", "EOL", "WS", "COMMENT" ];

var ruleNames =  [ "program", "subject", "statement", "condition", "action", 
                   "bool", "number" ];

function polygramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

polygramParser.prototype = Object.create(antlr4.Parser.prototype);
polygramParser.prototype.constructor = polygramParser;

Object.defineProperty(polygramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

polygramParser.EOF = antlr4.Token.EOF;
polygramParser.T__0 = 1;
polygramParser.T__1 = 2;
polygramParser.T__2 = 3;
polygramParser.T__3 = 4;
polygramParser.DISPLAY = 5;
polygramParser.PROGRAM = 6;
polygramParser.EVENT = 7;
polygramParser.IDENTIFIER = 8;
polygramParser.FOREACH = 9;
polygramParser.NUMBER = 10;
polygramParser.AND = 11;
polygramParser.OR = 12;
polygramParser.NOT = 13;
polygramParser.GT = 14;
polygramParser.LT = 15;
polygramParser.GE = 16;
polygramParser.LE = 17;
polygramParser.EQ = 18;
polygramParser.NE = 19;
polygramParser.WHEN = 20;
polygramParser.THEN = 21;
polygramParser.EOL = 22;
polygramParser.WS = 23;
polygramParser.COMMENT = 24;

polygramParser.RULE_program = 0;
polygramParser.RULE_subject = 1;
polygramParser.RULE_statement = 2;
polygramParser.RULE_condition = 3;
polygramParser.RULE_action = 4;
polygramParser.RULE_bool = 5;
polygramParser.RULE_number = 6;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.FOREACH = function() {
    return this.getToken(polygramParser.FOREACH, 0);
};

ProgramContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




polygramParser.ProgramContext = ProgramContext;

polygramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, polygramParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(polygramParser.FOREACH);
        this.state = 15;
        this.subject();
        this.state = 17; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 16;
            this.statement();
            this.state = 19; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===polygramParser.DISPLAY || _la===polygramParser.WHEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.PROGRAM = function() {
    return this.getToken(polygramParser.PROGRAM, 0);
};

SubjectContext.prototype.EVENT = function() {
    return this.getToken(polygramParser.EVENT, 0);
};

SubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterSubject(this);
	}
};

SubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitSubject(this);
	}
};

SubjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitSubject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




polygramParser.SubjectContext = SubjectContext;

polygramParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, polygramParser.RULE_subject);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        _la = this._input.LA(1);
        if(!(_la===polygramParser.PROGRAM || _la===polygramParser.EVENT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

StatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




polygramParser.StatementContext = StatementContext;

polygramParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, polygramParser.RULE_statement);
    try {
        this.state = 25;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.DISPLAY:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.action();
            break;
        case polygramParser.WHEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            this.condition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.WHEN = function() {
    return this.getToken(polygramParser.WHEN, 0);
};

ConditionContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ConditionContext.prototype.THEN = function() {
    return this.getToken(polygramParser.THEN, 0);
};

ConditionContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




polygramParser.ConditionContext = ConditionContext;

polygramParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, polygramParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.match(polygramParser.WHEN);
        this.state = 28;
        this.bool(0);
        this.state = 29;
        this.match(polygramParser.THEN);
        this.state = 30;
        this.action();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;

ActionContext.prototype.DISPLAY = function() {
    return this.getToken(polygramParser.DISPLAY, 0);
};

ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitAction(this);
	}
};

ActionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitAction(this);
    } else {
        return visitor.visitChildren(this);
    }
};




polygramParser.ActionContext = ActionContext;

polygramParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, polygramParser.RULE_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(polygramParser.DISPLAY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.IDENTIFIER = function() {
    return this.getToken(polygramParser.IDENTIFIER, 0);
};

BoolContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

BoolContext.prototype.GT = function() {
    return this.getToken(polygramParser.GT, 0);
};

BoolContext.prototype.LT = function() {
    return this.getToken(polygramParser.LT, 0);
};

BoolContext.prototype.EQ = function() {
    return this.getToken(polygramParser.EQ, 0);
};

BoolContext.prototype.GE = function() {
    return this.getToken(polygramParser.GE, 0);
};

BoolContext.prototype.LE = function() {
    return this.getToken(polygramParser.LE, 0);
};

BoolContext.prototype.NE = function() {
    return this.getToken(polygramParser.NE, 0);
};

BoolContext.prototype.NOT = function() {
    return this.getToken(polygramParser.NOT, 0);
};

BoolContext.prototype.bool = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BoolContext);
    } else {
        return this.getTypedRuleContext(BoolContext,i);
    }
};

BoolContext.prototype.AND = function() {
    return this.getToken(polygramParser.AND, 0);
};

BoolContext.prototype.OR = function() {
    return this.getToken(polygramParser.OR, 0);
};

BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};



polygramParser.prototype.bool = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BoolContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, polygramParser.RULE_bool, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 35;
            this.match(polygramParser.IDENTIFIER);
            break;

        case 2:
            this.state = 36;
            this.number(0);
            this.state = 37;
            this.match(polygramParser.GT);
            this.state = 38;
            this.number(0);
            break;

        case 3:
            this.state = 40;
            this.number(0);
            this.state = 41;
            this.match(polygramParser.LT);
            this.state = 42;
            this.number(0);
            break;

        case 4:
            this.state = 44;
            this.number(0);
            this.state = 45;
            this.match(polygramParser.EQ);
            this.state = 46;
            this.number(0);
            break;

        case 5:
            this.state = 48;
            this.number(0);
            this.state = 49;
            this.match(polygramParser.GE);
            this.state = 50;
            this.number(0);
            break;

        case 6:
            this.state = 52;
            this.number(0);
            this.state = 53;
            this.match(polygramParser.LE);
            this.state = 54;
            this.number(0);
            break;

        case 7:
            this.state = 56;
            this.number(0);
            this.state = 57;
            this.match(polygramParser.NE);
            this.state = 58;
            this.number(0);
            break;

        case 8:
            this.state = 60;
            this.match(polygramParser.NOT);
            this.state = 61;
            this.bool(1);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 72;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 70;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BoolContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_bool);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 65;
                    this.match(polygramParser.AND);
                    this.state = 66;
                    this.bool(4);
                    break;

                case 2:
                    localctx = new BoolContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_bool);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 68;
                    this.match(polygramParser.OR);
                    this.state = 69;
                    this.bool(3);
                    break;

                } 
            }
            this.state = 74;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.IDENTIFIER = function() {
    return this.getToken(polygramParser.IDENTIFIER, 0);
};

NumberContext.prototype.NUMBER = function() {
    return this.getToken(polygramParser.NUMBER, 0);
};

NumberContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof polygramVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};



polygramParser.prototype.number = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumberContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, polygramParser.RULE_number, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.IDENTIFIER:
            this.state = 76;
            this.match(polygramParser.IDENTIFIER);
            break;
        case polygramParser.NUMBER:
            this.state = 77;
            this.match(polygramParser.NUMBER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 94;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 92;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 80;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 81;
                    this.match(polygramParser.T__0);
                    this.state = 82;
                    this.number(5);
                    break;

                case 2:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 83;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 84;
                    this.match(polygramParser.T__1);
                    this.state = 85;
                    this.number(4);
                    break;

                case 3:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 86;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 87;
                    this.match(polygramParser.T__2);
                    this.state = 88;
                    this.number(3);
                    break;

                case 4:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 89;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 90;
                    this.match(polygramParser.T__3);
                    this.state = 91;
                    this.number(2);
                    break;

                } 
            }
            this.state = 96;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


polygramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 5:
			return this.bool_sempred(localctx, predIndex);
	case 6:
			return this.number_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

polygramParser.prototype.bool_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

polygramParser.prototype.number_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 4);
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.polygramParser = polygramParser;

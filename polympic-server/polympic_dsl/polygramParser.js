// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var polygramListener = require('./polygramListener').polygramListener;
var grammarFileName = "polygram.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0018b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004,\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u00053",
    "\n\u0005\f\u0005\u000e\u00056\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006;\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006U\n\u0006\f\u0006\u000e\u0006",
    "X\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0002\u0004\b\n\t\u0002\u0004",
    "\u0006\b\n\f\u000e\u0002\u0003\u0003\u0002\r\u000e\u0002j\u0002\u0010",
    "\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006+",
    "\u0003\u0002\u0002\u0002\b-\u0003\u0002\u0002\u0002\n:\u0003\u0002\u0002",
    "\u0002\fY\u0003\u0002\u0002\u0002\u000e_\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0007\u0010\u0002\u0002\u0011\u0012\u0007\u0017\u0002\u0002\u0012",
    "\u0013\u0005\u0004\u0003\u0002\u0013\u0014\u0007\u0016\u0002\u0002\u0014",
    "\u0015\u0005\u0006\u0004\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016",
    "\u0017\t\u0002\u0002\u0002\u0017\u0005\u0003\u0002\u0002\u0002\u0018",
    ",\u0007\u0016\u0002\u0002\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b",
    "\u0007\u0016\u0002\u0002\u001b,\u0003\u0002\u0002\u0002\u001c,\u0005",
    "\f\u0007\u0002\u001d\u001e\u0007\u0014\u0002\u0002\u001e\u001f\u0007",
    "\u0017\u0002\u0002\u001f \u0005\n\u0006\u0002 !\u0007\u0016\u0002\u0002",
    "!\"\u0007\u0015\u0002\u0002\"#\u0007\u0017\u0002\u0002#$\u0005\u0006",
    "\u0004\u0002$,\u0003\u0002\u0002\u0002%&\u0005\u000e\b\u0002&\'\u0007",
    "\u0016\u0002\u0002\',\u0003\u0002\u0002\u0002()\u0007\n\u0002\u0002",
    "),\u0007\u0016\u0002\u0002*,\u0005\b\u0005\u0002+\u0018\u0003\u0002",
    "\u0002\u0002+\u0019\u0003\u0002\u0002\u0002+\u001c\u0003\u0002\u0002",
    "\u0002+\u001d\u0003\u0002\u0002\u0002+%\u0003\u0002\u0002\u0002+(\u0003",
    "\u0002\u0002\u0002+*\u0003\u0002\u0002\u0002,\u0007\u0003\u0002\u0002",
    "\u0002-.\b\u0005\u0001\u0002./\u0007\u0016\u0002\u0002/4\u0003\u0002",
    "\u0002\u000201\f\u0004\u0002\u000213\u0005\u0006\u0004\u000220\u0003",
    "\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u00025\t\u0003\u0002\u0002\u000264\u0003\u0002",
    "\u0002\u000278\b\u0006\u0001\u00028;\u0007\u0011\u0002\u00029;\u0005",
    "\u000e\b\u0002:7\u0003\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;",
    "V\u0003\u0002\u0002\u0002<=\f\n\u0002\u0002=>\u0007\u0003\u0002\u0002",
    ">U\u0005\n\u0006\u000b?@\f\t\u0002\u0002@A\u0007\u0004\u0002\u0002A",
    "U\u0005\n\u0006\nBC\f\b\u0002\u0002CD\u0007\u0005\u0002\u0002DU\u0005",
    "\n\u0006\tEF\f\u0007\u0002\u0002FG\u0007\u0006\u0002\u0002GU\u0005\n",
    "\u0006\bHI\f\u0006\u0002\u0002IJ\u0007\u0007\u0002\u0002JU\u0005\n\u0006",
    "\u0007KL\f\u0005\u0002\u0002LM\u0007\b\u0002\u0002MU\u0005\n\u0006\u0006",
    "NO\f\u0004\u0002\u0002OP\u0007\u0012\u0002\u0002PU\u0005\n\u0006\u0005",
    "QR\f\u0003\u0002\u0002RS\u0007\u0013\u0002\u0002SU\u0005\n\u0006\u0004",
    "T<\u0003\u0002\u0002\u0002T?\u0003\u0002\u0002\u0002TB\u0003\u0002\u0002",
    "\u0002TE\u0003\u0002\u0002\u0002TH\u0003\u0002\u0002\u0002TK\u0003\u0002",
    "\u0002\u0002TN\u0003\u0002\u0002\u0002TQ\u0003\u0002\u0002\u0002UX\u0003",
    "\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002",
    "W\u000b\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YZ\u0007\u000b",
    "\u0002\u0002Z[\u0005\u000e\b\u0002[\\\u0007\t\u0002\u0002\\]\u0007\u0016",
    "\u0002\u0002]^\u0005\u0006\u0004\u0002^\r\u0003\u0002\u0002\u0002_`",
    "\u0007\u000f\u0002\u0002`\u000f\u0003\u0002\u0002\u0002\u0007+4:TV"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'>'", "'<'", "'='", "'>='", "'<='", "'!='", 
                     "':'", "'display'", "'define'", "'CONCERNS'", "'PROGRAM'", 
                     "'EVENT'", null, "'for each'", null, "'and'", "'or'", 
                     "'when'", "'then'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "DISP", 
                      "DEFINITION", "CONCERNS", "PROGRAM", "EVENT", "IDENTIFIER", 
                      "FOREACH", "NUMBER", "AND", "OR", "WHEN", "THEN", 
                      "EOL", "WS", "COMMENT" ];

var ruleNames =  [ "program", "subject", "statement", "statement_list", 
                   "expression", "func_decl", "variable_prototype" ];

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
polygramParser.T__4 = 5;
polygramParser.T__5 = 6;
polygramParser.T__6 = 7;
polygramParser.DISP = 8;
polygramParser.DEFINITION = 9;
polygramParser.CONCERNS = 10;
polygramParser.PROGRAM = 11;
polygramParser.EVENT = 12;
polygramParser.IDENTIFIER = 13;
polygramParser.FOREACH = 14;
polygramParser.NUMBER = 15;
polygramParser.AND = 16;
polygramParser.OR = 17;
polygramParser.WHEN = 18;
polygramParser.THEN = 19;
polygramParser.EOL = 20;
polygramParser.WS = 21;
polygramParser.COMMENT = 22;

polygramParser.RULE_program = 0;
polygramParser.RULE_subject = 1;
polygramParser.RULE_statement = 2;
polygramParser.RULE_statement_list = 3;
polygramParser.RULE_expression = 4;
polygramParser.RULE_func_decl = 5;
polygramParser.RULE_variable_prototype = 6;


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

ProgramContext.prototype.WS = function() {
    return this.getToken(polygramParser.WS, 0);
};

ProgramContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

ProgramContext.prototype.EOL = function() {
    return this.getToken(polygramParser.EOL, 0);
};

ProgramContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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




polygramParser.ProgramContext = ProgramContext;

polygramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, polygramParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(polygramParser.FOREACH);
        this.state = 15;
        this.match(polygramParser.WS);
        this.state = 16;
        this.subject();
        this.state = 17;
        this.match(polygramParser.EOL);
        this.state = 18;
        this.statement();
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




polygramParser.SubjectContext = SubjectContext;

polygramParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, polygramParser.RULE_subject);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
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

StatementContext.prototype.EOL = function() {
    return this.getToken(polygramParser.EOL, 0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.func_decl = function() {
    return this.getTypedRuleContext(Func_declContext,0);
};

StatementContext.prototype.WHEN = function() {
    return this.getToken(polygramParser.WHEN, 0);
};

StatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(polygramParser.WS);
    } else {
        return this.getToken(polygramParser.WS, i);
    }
};


StatementContext.prototype.THEN = function() {
    return this.getToken(polygramParser.THEN, 0);
};

StatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatementContext.prototype.variable_prototype = function() {
    return this.getTypedRuleContext(Variable_prototypeContext,0);
};

StatementContext.prototype.DISP = function() {
    return this.getToken(polygramParser.DISP, 0);
};

StatementContext.prototype.statement_list = function() {
    return this.getTypedRuleContext(Statement_listContext,0);
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




polygramParser.StatementContext = StatementContext;

polygramParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, polygramParser.RULE_statement);
    try {
        this.state = 41;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.match(polygramParser.EOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.expression(0);
            this.state = 24;
            this.match(polygramParser.EOL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 26;
            this.func_decl();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 27;
            this.match(polygramParser.WHEN);
            this.state = 28;
            this.match(polygramParser.WS);
            this.state = 29;
            this.expression(0);
            this.state = 30;
            this.match(polygramParser.EOL);
            this.state = 31;
            this.match(polygramParser.THEN);
            this.state = 32;
            this.match(polygramParser.WS);
            this.state = 33;
            this.statement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 35;
            this.variable_prototype();
            this.state = 36;
            this.match(polygramParser.EOL);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 38;
            this.match(polygramParser.DISP);
            this.state = 39;
            this.match(polygramParser.EOL);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 40;
            this.statement_list(0);
            break;

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


function Statement_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_statement_list;
    return this;
}

Statement_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Statement_listContext.prototype.constructor = Statement_listContext;

Statement_listContext.prototype.EOL = function() {
    return this.getToken(polygramParser.EOL, 0);
};

Statement_listContext.prototype.statement_list = function() {
    return this.getTypedRuleContext(Statement_listContext,0);
};

Statement_listContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Statement_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterStatement_list(this);
	}
};

Statement_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitStatement_list(this);
	}
};



polygramParser.prototype.statement_list = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Statement_listContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, polygramParser.RULE_statement_list, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(polygramParser.EOL);
        this._ctx.stop = this._input.LT(-1);
        this.state = 50;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Statement_listContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_statement_list);
                this.state = 46;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 47;
                this.statement(); 
            }
            this.state = 52;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.NUMBER = function() {
    return this.getToken(polygramParser.NUMBER, 0);
};

ExpressionContext.prototype.variable_prototype = function() {
    return this.getTypedRuleContext(Variable_prototypeContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(polygramParser.AND, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(polygramParser.OR, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitExpression(this);
	}
};



polygramParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, polygramParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.NUMBER:
            this.state = 54;
            this.match(polygramParser.NUMBER);
            break;
        case polygramParser.IDENTIFIER:
            this.state = 55;
            this.variable_prototype();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 84;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 82;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 58;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 59;
                    this.match(polygramParser.T__0);
                    this.state = 60;
                    this.expression(9);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 61;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 62;
                    this.match(polygramParser.T__1);
                    this.state = 63;
                    this.expression(8);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 64;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 65;
                    this.match(polygramParser.T__2);
                    this.state = 66;
                    this.expression(7);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 67;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 68;
                    this.match(polygramParser.T__3);
                    this.state = 69;
                    this.expression(6);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 70;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 71;
                    this.match(polygramParser.T__4);
                    this.state = 72;
                    this.expression(5);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 73;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 74;
                    this.match(polygramParser.T__5);
                    this.state = 75;
                    this.expression(4);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 76;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 77;
                    this.match(polygramParser.AND);
                    this.state = 78;
                    this.expression(3);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 79;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 80;
                    this.match(polygramParser.OR);
                    this.state = 81;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 86;
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


function Func_declContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_func_decl;
    return this;
}

Func_declContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Func_declContext.prototype.constructor = Func_declContext;

Func_declContext.prototype.DEFINITION = function() {
    return this.getToken(polygramParser.DEFINITION, 0);
};

Func_declContext.prototype.variable_prototype = function() {
    return this.getTypedRuleContext(Variable_prototypeContext,0);
};

Func_declContext.prototype.EOL = function() {
    return this.getToken(polygramParser.EOL, 0);
};

Func_declContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

Func_declContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterFunc_decl(this);
	}
};

Func_declContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitFunc_decl(this);
	}
};




polygramParser.Func_declContext = Func_declContext;

polygramParser.prototype.func_decl = function() {

    var localctx = new Func_declContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, polygramParser.RULE_func_decl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.match(polygramParser.DEFINITION);
        this.state = 88;
        this.variable_prototype();
        this.state = 89;
        this.match(polygramParser.T__6);
        this.state = 90;
        this.match(polygramParser.EOL);
        this.state = 91;
        this.statement();
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


function Variable_prototypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_variable_prototype;
    return this;
}

Variable_prototypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Variable_prototypeContext.prototype.constructor = Variable_prototypeContext;

Variable_prototypeContext.prototype.IDENTIFIER = function() {
    return this.getToken(polygramParser.IDENTIFIER, 0);
};

Variable_prototypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterVariable_prototype(this);
	}
};

Variable_prototypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitVariable_prototype(this);
	}
};




polygramParser.Variable_prototypeContext = Variable_prototypeContext;

polygramParser.prototype.variable_prototype = function() {

    var localctx = new Variable_prototypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, polygramParser.RULE_variable_prototype);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(polygramParser.IDENTIFIER);
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


polygramParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 3:
			return this.statement_list_sempred(localctx, predIndex);
	case 4:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

polygramParser.prototype.statement_list_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

polygramParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.polygramParser = polygramParser;

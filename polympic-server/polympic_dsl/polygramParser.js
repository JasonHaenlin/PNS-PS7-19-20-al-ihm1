// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var polygramListener = require('./polygramListener').polygramListener;
var grammarFileName = "polygram.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011<\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002\u0011\n\u0002\f\u0002\u000e\u0002",
    "\u0014\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004!\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005-\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u00055\n\u0005\f\u0005\u000e\u0005",
    "8\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0003\b\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0003\u0004\u0002\t\t\u000b\u000b\u0002",
    "=\u0002\f\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002",
    "\u0006 \u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002\u0002\n9\u0003",
    "\u0002\u0002\u0002\f\r\u0007\n\u0002\u0002\r\u000e\u0005\u0004\u0003",
    "\u0002\u000e\u0012\u0007\u0010\u0002\u0002\u000f\u0011\u0005\u0006\u0004",
    "\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0014\u0003\u0002\u0002",
    "\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002",
    "\u0002\u0013\u0015\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0007\u0002\u0002\u0003\u0016\u0003\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0007\b\u0002\u0002\u0018\u0005\u0003\u0002\u0002",
    "\u0002\u0019!\u0007\u0010\u0002\u0002\u001a!\u0005\n\u0006\u0002\u001b",
    "\u001c\u0007\u000e\u0002\u0002\u001c\u001d\u0005\b\u0005\u0002\u001d",
    "\u001e\u0007\u000f\u0002\u0002\u001e\u001f\u0005\n\u0006\u0002\u001f",
    "!\u0003\u0002\u0002\u0002 \u0019\u0003\u0002\u0002\u0002 \u001a\u0003",
    "\u0002\u0002\u0002 \u001b\u0003\u0002\u0002\u0002!\u0007\u0003\u0002",
    "\u0002\u0002\"#\b\u0005\u0001\u0002#$\t\u0002\u0002\u0002$%\u0007\u0003",
    "\u0002\u0002%-\t\u0002\u0002\u0002&\'\t\u0002\u0002\u0002\'(\u0007\u0004",
    "\u0002\u0002(-\t\u0002\u0002\u0002)*\t\u0002\u0002\u0002*+\u0007\u0005",
    "\u0002\u0002+-\t\u0002\u0002\u0002,\"\u0003\u0002\u0002\u0002,&\u0003",
    "\u0002\u0002\u0002,)\u0003\u0002\u0002\u0002-6\u0003\u0002\u0002\u0002",
    "./\f\u0004\u0002\u0002/0\u0007\f\u0002\u000205\u0005\b\u0005\u00051",
    "2\f\u0003\u0002\u000223\u0007\r\u0002\u000235\u0005\b\u0005\u00044.",
    "\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000258\u0003\u0002\u0002",
    "\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\t\u0003",
    "\u0002\u0002\u000286\u0003\u0002\u0002\u00029:\u0007\u0006\u0002\u0002",
    ":\u000b\u0003\u0002\u0002\u0002\u0007\u0012 ,46"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'>'", "'<'", "'='", "'display'", "'concerns'", 
                     "'program'", "'score'", "'for each'", null, "'and'", 
                     "'or'", "'when'", "'then'" ];

var symbolicNames = [ null, null, null, null, null, "CONCERNS", "PROGRAM", 
                      "IDENTIFIER", "FOREACH", "NUMBER", "AND", "OR", "WHEN", 
                      "THEN", "EOL", "WS" ];

var ruleNames =  [ "program", "subject", "statement", "expression", "action" ];

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
polygramParser.CONCERNS = 5;
polygramParser.PROGRAM = 6;
polygramParser.IDENTIFIER = 7;
polygramParser.FOREACH = 8;
polygramParser.NUMBER = 9;
polygramParser.AND = 10;
polygramParser.OR = 11;
polygramParser.WHEN = 12;
polygramParser.THEN = 13;
polygramParser.EOL = 14;
polygramParser.WS = 15;

polygramParser.RULE_program = 0;
polygramParser.RULE_subject = 1;
polygramParser.RULE_statement = 2;
polygramParser.RULE_expression = 3;
polygramParser.RULE_action = 4;


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

ProgramContext.prototype.EOL = function() {
    return this.getToken(polygramParser.EOL, 0);
};

ProgramContext.prototype.EOF = function() {
    return this.getToken(polygramParser.EOF, 0);
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




polygramParser.ProgramContext = ProgramContext;

polygramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, polygramParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.match(polygramParser.FOREACH);
        this.state = 11;
        this.subject();
        this.state = 12;
        this.match(polygramParser.EOL);
        this.state = 16;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << polygramParser.T__3) | (1 << polygramParser.WHEN) | (1 << polygramParser.EOL))) !== 0)) {
            this.state = 13;
            this.statement();
            this.state = 18;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 19;
        this.match(polygramParser.EOF);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(polygramParser.PROGRAM);
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

StatementContext.prototype.action = function() {
    return this.getTypedRuleContext(ActionContext,0);
};

StatementContext.prototype.WHEN = function() {
    return this.getToken(polygramParser.WHEN, 0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.THEN = function() {
    return this.getToken(polygramParser.THEN, 0);
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
        this.state = 30;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.EOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.match(polygramParser.EOL);
            break;
        case polygramParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 24;
            this.action();
            break;
        case polygramParser.WHEN:
            this.enterOuterAlt(localctx, 3);
            this.state = 25;
            this.match(polygramParser.WHEN);
            this.state = 26;
            this.expression(0);
            this.state = 27;
            this.match(polygramParser.THEN);
            this.state = 28;
            this.action();
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

ExpressionContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(polygramParser.NUMBER);
    } else {
        return this.getToken(polygramParser.NUMBER, i);
    }
};


ExpressionContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(polygramParser.IDENTIFIER);
    } else {
        return this.getToken(polygramParser.IDENTIFIER, i);
    }
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
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, polygramParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 33;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 34;
            this.match(polygramParser.T__0);
            this.state = 35;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            this.state = 36;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 37;
            this.match(polygramParser.T__1);
            this.state = 38;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 3:
            this.state = 39;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 40;
            this.match(polygramParser.T__2);
            this.state = 41;
            _la = this._input.LA(1);
            if(!(_la===polygramParser.IDENTIFIER || _la===polygramParser.NUMBER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 52;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 50;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 44;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 45;
                    this.match(polygramParser.AND);
                    this.state = 46;
                    this.expression(3);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_expression);
                    this.state = 47;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 48;
                    this.match(polygramParser.OR);
                    this.state = 49;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 54;
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




polygramParser.ActionContext = ActionContext;

polygramParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, polygramParser.RULE_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 55;
        this.match(polygramParser.T__3);
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
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

polygramParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.polygramParser = polygramParser;

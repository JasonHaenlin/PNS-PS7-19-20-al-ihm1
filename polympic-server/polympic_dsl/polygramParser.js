// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var polygramListener = require('./polygramListener').polygramListener;
var grammarFileName = "polygram.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001ak\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0006",
    "\u0002\u0018\n\u0002\r\u0002\u000e\u0002\u0019\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004 \n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007,\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u00074\n\u0007",
    "\f\u0007\u000e\u00077\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\bQ\n\b\u0003\t\u0003\t\u0003\t\u0005\tV\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0007\td\n\t\f\t\u000e\tg\u000b\t\u0003\n\u0003\n",
    "\u0003\n\u0002\u0004\f\u0010\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0002\u0003\u0003\u0002\b\t\u0002p\u0002\u0014\u0003\u0002\u0002",
    "\u0002\u0004\u001b\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002",
    "\u0002\b!\u0003\u0002\u0002\u0002\n&\u0003\u0002\u0002\u0002\f+\u0003",
    "\u0002\u0002\u0002\u000eP\u0003\u0002\u0002\u0002\u0010U\u0003\u0002",
    "\u0002\u0002\u0012h\u0003\u0002\u0002\u0002\u0014\u0015\u0007\u000b",
    "\u0002\u0002\u0015\u0017\u0005\u0004\u0003\u0002\u0016\u0018\u0005\u0006",
    "\u0004\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002",
    "\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002",
    "\u0002\u0002\u001a\u0003\u0003\u0002\u0002\u0002\u001b\u001c\t\u0002",
    "\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002\u001d \u0005\n\u0006",
    "\u0002\u001e \u0005\b\u0005\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f\u001e\u0003\u0002\u0002\u0002 \u0007\u0003\u0002\u0002\u0002",
    "!\"\u0007\u0016\u0002\u0002\"#\u0005\f\u0007\u0002#$\u0007\u0017\u0002",
    "\u0002$%\u0005\n\u0006\u0002%\t\u0003\u0002\u0002\u0002&\'\u0007\u0007",
    "\u0002\u0002\'\u000b\u0003\u0002\u0002\u0002()\b\u0007\u0001\u0002)",
    ",\u0005\u0012\n\u0002*,\u0005\u000e\b\u0002+(\u0003\u0002\u0002\u0002",
    "+*\u0003\u0002\u0002\u0002,5\u0003\u0002\u0002\u0002-.\f\u0004\u0002",
    "\u0002./\u0007\r\u0002\u0002/4\u0005\f\u0007\u000501\f\u0003\u0002\u0002",
    "12\u0007\u000e\u0002\u000224\u0005\f\u0007\u00043-\u0003\u0002\u0002",
    "\u000230\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u00026\r\u0003\u0002\u0002\u000275",
    "\u0003\u0002\u0002\u000289\u0005\u0010\t\u00029:\u0007\u0010\u0002\u0002",
    ":;\u0005\u0010\t\u0002;Q\u0003\u0002\u0002\u0002<=\u0005\u0010\t\u0002",
    "=>\u0007\u0011\u0002\u0002>?\u0005\u0010\t\u0002?Q\u0003\u0002\u0002",
    "\u0002@A\u0005\u0010\t\u0002AB\u0007\u0014\u0002\u0002BC\u0005\u0010",
    "\t\u0002CQ\u0003\u0002\u0002\u0002DE\u0005\u0010\t\u0002EF\u0007\u0012",
    "\u0002\u0002FG\u0005\u0010\t\u0002GQ\u0003\u0002\u0002\u0002HI\u0005",
    "\u0010\t\u0002IJ\u0007\u0013\u0002\u0002JK\u0005\u0010\t\u0002KQ\u0003",
    "\u0002\u0002\u0002LM\u0005\u0010\t\u0002MN\u0007\u0015\u0002\u0002N",
    "O\u0005\u0010\t\u0002OQ\u0003\u0002\u0002\u0002P8\u0003\u0002\u0002",
    "\u0002P<\u0003\u0002\u0002\u0002P@\u0003\u0002\u0002\u0002PD\u0003\u0002",
    "\u0002\u0002PH\u0003\u0002\u0002\u0002PL\u0003\u0002\u0002\u0002Q\u000f",
    "\u0003\u0002\u0002\u0002RS\b\t\u0001\u0002SV\u0005\u0012\n\u0002TV\u0007",
    "\f\u0002\u0002UR\u0003\u0002\u0002\u0002UT\u0003\u0002\u0002\u0002V",
    "e\u0003\u0002\u0002\u0002WX\f\u0006\u0002\u0002XY\u0007\u0003\u0002",
    "\u0002Yd\u0005\u0010\t\u0007Z[\f\u0005\u0002\u0002[\\\u0007\u0004\u0002",
    "\u0002\\d\u0005\u0010\t\u0006]^\f\u0004\u0002\u0002^_\u0007\u0005\u0002",
    "\u0002_d\u0005\u0010\t\u0005`a\f\u0003\u0002\u0002ab\u0007\u0006\u0002",
    "\u0002bd\u0005\u0010\t\u0004cW\u0003\u0002\u0002\u0002cZ\u0003\u0002",
    "\u0002\u0002c]\u0003\u0002\u0002\u0002c`\u0003\u0002\u0002\u0002dg\u0003",
    "\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002",
    "f\u0011\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002hi\u0007\n",
    "\u0002\u0002i\u0013\u0003\u0002\u0002\u0002\u000b\u0019\u001f+35PUc",
    "e"].join("");


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
                   "bool", "num_cmp", "number", "attribute" ];

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
polygramParser.RULE_num_cmp = 6;
polygramParser.RULE_number = 7;
polygramParser.RULE_attribute = 8;


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




polygramParser.ProgramContext = ProgramContext;

polygramParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, polygramParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(polygramParser.FOREACH);
        this.state = 19;
        this.subject();
        this.state = 21; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 20;
            this.statement();
            this.state = 23; 
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




polygramParser.SubjectContext = SubjectContext;

polygramParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, polygramParser.RULE_subject);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
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




polygramParser.StatementContext = StatementContext;

polygramParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, polygramParser.RULE_statement);
    try {
        this.state = 29;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.DISPLAY:
            this.enterOuterAlt(localctx, 1);
            this.state = 27;
            this.action();
            break;
        case polygramParser.WHEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
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




polygramParser.ConditionContext = ConditionContext;

polygramParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, polygramParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(polygramParser.WHEN);
        this.state = 32;
        this.bool(0);
        this.state = 33;
        this.match(polygramParser.THEN);
        this.state = 34;
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




polygramParser.ActionContext = ActionContext;

polygramParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, polygramParser.RULE_action);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
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

BoolContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
};

BoolContext.prototype.num_cmp = function() {
    return this.getTypedRuleContext(Num_cmpContext,0);
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
        this.state = 41;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 39;
            this.attribute();
            break;

        case 2:
            this.state = 40;
            this.num_cmp();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 51;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 49;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BoolContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_bool);
                    this.state = 43;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 44;
                    this.match(polygramParser.AND);
                    this.state = 45;
                    this.bool(3);
                    break;

                case 2:
                    localctx = new BoolContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_bool);
                    this.state = 46;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 47;
                    this.match(polygramParser.OR);
                    this.state = 48;
                    this.bool(2);
                    break;

                } 
            }
            this.state = 53;
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


function Num_cmpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_num_cmp;
    return this;
}

Num_cmpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Num_cmpContext.prototype.constructor = Num_cmpContext;

Num_cmpContext.prototype.number = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NumberContext);
    } else {
        return this.getTypedRuleContext(NumberContext,i);
    }
};

Num_cmpContext.prototype.GT = function() {
    return this.getToken(polygramParser.GT, 0);
};

Num_cmpContext.prototype.LT = function() {
    return this.getToken(polygramParser.LT, 0);
};

Num_cmpContext.prototype.EQ = function() {
    return this.getToken(polygramParser.EQ, 0);
};

Num_cmpContext.prototype.GE = function() {
    return this.getToken(polygramParser.GE, 0);
};

Num_cmpContext.prototype.LE = function() {
    return this.getToken(polygramParser.LE, 0);
};

Num_cmpContext.prototype.NE = function() {
    return this.getToken(polygramParser.NE, 0);
};

Num_cmpContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterNum_cmp(this);
	}
};

Num_cmpContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitNum_cmp(this);
	}
};




polygramParser.Num_cmpContext = Num_cmpContext;

polygramParser.prototype.num_cmp = function() {

    var localctx = new Num_cmpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, polygramParser.RULE_num_cmp);
    try {
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.number(0);
            this.state = 55;
            this.match(polygramParser.GT);
            this.state = 56;
            this.number(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.number(0);
            this.state = 59;
            this.match(polygramParser.LT);
            this.state = 60;
            this.number(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.number(0);
            this.state = 63;
            this.match(polygramParser.EQ);
            this.state = 64;
            this.number(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 66;
            this.number(0);
            this.state = 67;
            this.match(polygramParser.GE);
            this.state = 68;
            this.number(0);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 70;
            this.number(0);
            this.state = 71;
            this.match(polygramParser.LE);
            this.state = 72;
            this.number(0);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 74;
            this.number(0);
            this.state = 75;
            this.match(polygramParser.NE);
            this.state = 76;
            this.number(0);
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

NumberContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
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



polygramParser.prototype.number = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new NumberContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, polygramParser.RULE_number, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case polygramParser.IDENTIFIER:
            this.state = 81;
            this.attribute();
            break;
        case polygramParser.NUMBER:
            this.state = 82;
            this.match(polygramParser.NUMBER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 99;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 97;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 86;
                    this.match(polygramParser.T__0);
                    this.state = 87;
                    this.number(5);
                    break;

                case 2:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 88;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 89;
                    this.match(polygramParser.T__1);
                    this.state = 90;
                    this.number(4);
                    break;

                case 3:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 91;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 92;
                    this.match(polygramParser.T__2);
                    this.state = 93;
                    this.number(3);
                    break;

                case 4:
                    localctx = new NumberContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, polygramParser.RULE_number);
                    this.state = 94;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 95;
                    this.match(polygramParser.T__3);
                    this.state = 96;
                    this.number(2);
                    break;

                } 
            }
            this.state = 101;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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


function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = polygramParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.IDENTIFIER = function() {
    return this.getToken(polygramParser.IDENTIFIER, 0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof polygramListener ) {
        listener.exitAttribute(this);
	}
};




polygramParser.AttributeContext = AttributeContext;

polygramParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, polygramParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
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
	case 5:
			return this.bool_sempred(localctx, predIndex);
	case 7:
			return this.number_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

polygramParser.prototype.bool_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
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

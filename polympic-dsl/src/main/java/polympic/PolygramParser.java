// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.ATN;
import org.antlr.v4.runtime.atn.ATNDeserializer;
import org.antlr.v4.runtime.atn.ParserATNSimulator;
import org.antlr.v4.runtime.atn.PredictionContextCache;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;
import org.antlr.v4.runtime.tree.TerminalNode;

import java.util.List;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PolygramParser extends Parser {
    public static final int
            PROGRAM = 1, DISPLAY = 2, MUL = 3, DIV = 4, PLUS = 5, MINUS = 6, EVENT = 7, FOREACH = 8,
            NUMBER = 9, AND = 10, OR = 11, NOT = 12, GT = 13, LT = 14, GE = 15, LE = 16, EQ = 17, NE = 18,
            WHEN = 19, THEN = 20, EOL = 21, COMMENT = 22, WS = 23, IDENTIFIER = 24;
    public static final int
            RULE_program = 0, RULE_subject = 1, RULE_statement = 2, RULE_condition = 3,
            RULE_action = 4, RULE_bool = 5, RULE_number_cmp = 6, RULE_bool_cmp = 7,
            RULE_number = 8;
    public static final String[] ruleNames = makeRuleNames();
    /**
     * @deprecated Use {@link #VOCABULARY} instead.
     */
    @Deprecated
    public static final String[] tokenNames;
    public static final String _serializedATN =
            "\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\32n\4\2\t\2\4\3\t" +
                    "\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\3\2\3\2\3\2" +
                    "\6\2\30\n\2\r\2\16\2\31\3\3\3\3\3\4\3\4\5\4 \n\4\3\5\3\5\3\5\3\5\6\5&" +
                    "\n\5\r\5\16\5\'\3\6\3\6\3\7\3\7\3\7\5\7/\n\7\3\7\3\7\7\7\63\n\7\f\7\16" +
                    "\7\66\13\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b" +
                    "\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bP\n\b\3\t\3\t\3\t\3\t\5\tV\n\t" +
                    "\3\n\3\n\3\n\5\n[\n\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n" +
                    "\7\ni\n\n\f\n\16\nl\13\n\3\n\2\4\f\22\13\2\4\6\b\n\f\16\20\22\2\3\4\2" +
                    "\3\3\t\t\2t\2\24\3\2\2\2\4\33\3\2\2\2\6\37\3\2\2\2\b!\3\2\2\2\n)\3\2\2" +
                    "\2\f.\3\2\2\2\16O\3\2\2\2\20U\3\2\2\2\22Z\3\2\2\2\24\25\7\n\2\2\25\27" +
                    "\5\4\3\2\26\30\5\6\4\2\27\26\3\2\2\2\30\31\3\2\2\2\31\27\3\2\2\2\31\32" +
                    "\3\2\2\2\32\3\3\2\2\2\33\34\t\2\2\2\34\5\3\2\2\2\35 \5\n\6\2\36 \5\b\5" +
                    "\2\37\35\3\2\2\2\37\36\3\2\2\2 \7\3\2\2\2!\"\7\25\2\2\"#\5\f\7\2#%\7\26" +
                    "\2\2$&\5\6\4\2%$\3\2\2\2&\'\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(\t\3\2\2\2)" +
                    "*\7\4\2\2*\13\3\2\2\2+,\b\7\1\2,/\7\32\2\2-/\5\16\b\2.+\3\2\2\2.-\3\2" +
                    "\2\2/\64\3\2\2\2\60\61\f\3\2\2\61\63\5\20\t\2\62\60\3\2\2\2\63\66\3\2" +
                    "\2\2\64\62\3\2\2\2\64\65\3\2\2\2\65\r\3\2\2\2\66\64\3\2\2\2\678\5\22\n" +
                    "\289\7\17\2\29:\5\22\n\2:P\3\2\2\2;<\5\22\n\2<=\7\20\2\2=>\5\22\n\2>P" +
                    "\3\2\2\2?@\5\22\n\2@A\7\23\2\2AB\5\22\n\2BP\3\2\2\2CD\5\22\n\2DE\7\21" +
                    "\2\2EF\5\22\n\2FP\3\2\2\2GH\5\22\n\2HI\7\22\2\2IJ\5\22\n\2JP\3\2\2\2K" +
                    "L\5\22\n\2LM\7\24\2\2MN\5\22\n\2NP\3\2\2\2O\67\3\2\2\2O;\3\2\2\2O?\3\2" +
                    "\2\2OC\3\2\2\2OG\3\2\2\2OK\3\2\2\2P\17\3\2\2\2QR\7\r\2\2RV\5\f\7\2ST\7" +
                    "\f\2\2TV\5\f\7\2UQ\3\2\2\2US\3\2\2\2V\21\3\2\2\2WX\b\n\1\2X[\7\32\2\2" +
                    "Y[\7\13\2\2ZW\3\2\2\2ZY\3\2\2\2[j\3\2\2\2\\]\f\6\2\2]^\7\7\2\2^i\5\22" +
                    "\n\7_`\f\5\2\2`a\7\b\2\2ai\5\22\n\6bc\f\4\2\2cd\7\5\2\2di\5\22\n\5ef\f" +
                    "\3\2\2fg\7\6\2\2gi\5\22\n\4h\\\3\2\2\2h_\3\2\2\2hb\3\2\2\2he\3\2\2\2i" +
                    "l\3\2\2\2jh\3\2\2\2jk\3\2\2\2k\23\3\2\2\2lj\3\2\2\2\f\31\37\'.\64OUZh" +
                    "j";
    public static final ATN _ATN =
            new ATNDeserializer().deserialize(_serializedATN.toCharArray());
    protected static final DFA[] _decisionToDFA;
    protected static final PredictionContextCache _sharedContextCache =
            new PredictionContextCache();
    private static final String[] _LITERAL_NAMES = makeLiteralNames();
    private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
    public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

    static {
        RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION);
    }

    static {
        tokenNames = new String[_SYMBOLIC_NAMES.length];
        for (int i = 0; i < tokenNames.length; i++) {
            tokenNames[i] = VOCABULARY.getLiteralName(i);
            if (tokenNames[i] == null) {
                tokenNames[i] = VOCABULARY.getSymbolicName(i);
            }

            if (tokenNames[i] == null) {
                tokenNames[i] = "<INVALID>";
            }
        }
    }

    static {
        _decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
        for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
            _decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
        }
    }

    public PolygramParser(TokenStream input) {
        super(input);
        _interp = new ParserATNSimulator(this, _ATN, _decisionToDFA, _sharedContextCache);
    }

    private static String[] makeRuleNames() {
        return new String[]{
                "program", "subject", "statement", "condition", "action", "bool", "number_cmp",
                "bool_cmp", "number"
        };
    }

    private static String[] makeLiteralNames() {
        return new String[]{
                null, "'program'", "'display'", "'*'", "'/'", "'+'", "'-'", "'event'",
                "'for each'", null, "'and'", "'or'", "'not'", "'>'", "'<'", "'>='", "'<='",
                "'='", "'!='", "'when'", "'then'"
        };
    }

    private static String[] makeSymbolicNames() {
        return new String[]{
                null, "PROGRAM", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENT", "FOREACH",
                "NUMBER", "AND", "OR", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "WHEN",
                "THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
        };
    }

    @Override
    @Deprecated
    public String[] getTokenNames() {
        return tokenNames;
    }

    @Override

    public Vocabulary getVocabulary() {
        return VOCABULARY;
    }

    @Override
    public String getGrammarFileName() {
        return "Polygram.g4";
    }

    @Override
    public String[] getRuleNames() {
        return ruleNames;
    }

    @Override
    public String getSerializedATN() {
        return _serializedATN;
    }

    @Override
    public ATN getATN() {
        return _ATN;
    }

    public final ProgramContext program() throws RecognitionException {
        ProgramContext _localctx = new ProgramContext(_ctx, getState());
        enterRule(_localctx, 0, RULE_program);
        int _la;
        try {
            enterOuterAlt(_localctx, 1);
            {
                setState(18);
                match(FOREACH);
                setState(19);
                subject();
                setState(21);
                _errHandler.sync(this);
                _la = _input.LA(1);
                do {
                    {
                        {
                            setState(20);
                            statement();
                        }
                    }
                    setState(23);
                    _errHandler.sync(this);
                    _la = _input.LA(1);
                } while (_la == DISPLAY || _la == WHEN);
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final SubjectContext subject() throws RecognitionException {
        SubjectContext _localctx = new SubjectContext(_ctx, getState());
        enterRule(_localctx, 2, RULE_subject);
        int _la;
        try {
            enterOuterAlt(_localctx, 1);
            {
                setState(25);
                _la = _input.LA(1);
                if (!(_la == PROGRAM || _la == EVENT)) {
                    _errHandler.recoverInline(this);
                } else {
                    if (_input.LA(1) == Token.EOF) matchedEOF = true;
                    _errHandler.reportMatch(this);
                    consume();
                }
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final StatementContext statement() throws RecognitionException {
        StatementContext _localctx = new StatementContext(_ctx, getState());
        enterRule(_localctx, 4, RULE_statement);
        try {
            setState(29);
            _errHandler.sync(this);
            switch (_input.LA(1)) {
                case DISPLAY:
                    enterOuterAlt(_localctx, 1);
                {
                    setState(27);
                    action();
                }
                break;
                case WHEN:
                    enterOuterAlt(_localctx, 2);
                {
                    setState(28);
                    condition();
                }
                break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final ConditionContext condition() throws RecognitionException {
        ConditionContext _localctx = new ConditionContext(_ctx, getState());
        enterRule(_localctx, 6, RULE_condition);
        try {
            int _alt;
            enterOuterAlt(_localctx, 1);
            {
                setState(31);
                match(WHEN);
                setState(32);
                bool(0);
                setState(33);
                match(THEN);
                setState(35);
                _errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1: {
                            {
                                setState(34);
                                statement();
                            }
                        }
                        break;
                        default:
                            throw new NoViableAltException(this);
                    }
                    setState(37);
                    _errHandler.sync(this);
                    _alt = getInterpreter().adaptivePredict(_input, 2, _ctx);
                } while (_alt != 2 && _alt != org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER);
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final ActionContext action() throws RecognitionException {
        ActionContext _localctx = new ActionContext(_ctx, getState());
        enterRule(_localctx, 8, RULE_action);
        try {
            enterOuterAlt(_localctx, 1);
            {
                setState(39);
                match(DISPLAY);
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final BoolContext bool() throws RecognitionException {
        return bool(0);
    }

    private BoolContext bool(int _p) throws RecognitionException {
        ParserRuleContext _parentctx = _ctx;
        int _parentState = getState();
        BoolContext _localctx = new BoolContext(_ctx, _parentState);
        BoolContext _prevctx = _localctx;
        int _startState = 10;
        enterRecursionRule(_localctx, 10, RULE_bool, _p);
        try {
            int _alt;
            enterOuterAlt(_localctx, 1);
            {
                setState(44);
                _errHandler.sync(this);
                switch (getInterpreter().adaptivePredict(_input, 3, _ctx)) {
                    case 1: {
                        setState(42);
                        match(IDENTIFIER);
                    }
                    break;
                    case 2: {
                        setState(43);
                        number_cmp();
                    }
                    break;
                }
                _ctx.stop = _input.LT(-1);
                setState(50);
                _errHandler.sync(this);
                _alt = getInterpreter().adaptivePredict(_input, 4, _ctx);
                while (_alt != 2 && _alt != org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER) {
                    if (_alt == 1) {
                        if (_parseListeners != null) triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            {
                                _localctx = new BoolContext(_parentctx, _parentState);
                                pushNewRecursionContext(_localctx, _startState, RULE_bool);
                                setState(46);
                                if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
                                setState(47);
                                bool_cmp();
                            }
                        }
                    }
                    setState(52);
                    _errHandler.sync(this);
                    _alt = getInterpreter().adaptivePredict(_input, 4, _ctx);
                }
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }

    public final Number_cmpContext number_cmp() throws RecognitionException {
        Number_cmpContext _localctx = new Number_cmpContext(_ctx, getState());
        enterRule(_localctx, 12, RULE_number_cmp);
        try {
            setState(77);
            _errHandler.sync(this);
            switch (getInterpreter().adaptivePredict(_input, 5, _ctx)) {
                case 1:
                    enterOuterAlt(_localctx, 1);
                {
                    setState(53);
                    number(0);
                    setState(54);
                    match(GT);
                    setState(55);
                    number(0);
                }
                break;
                case 2:
                    enterOuterAlt(_localctx, 2);
                {
                    setState(57);
                    number(0);
                    setState(58);
                    match(LT);
                    setState(59);
                    number(0);
                }
                break;
                case 3:
                    enterOuterAlt(_localctx, 3);
                {
                    setState(61);
                    number(0);
                    setState(62);
                    match(EQ);
                    setState(63);
                    number(0);
                }
                break;
                case 4:
                    enterOuterAlt(_localctx, 4);
                {
                    setState(65);
                    number(0);
                    setState(66);
                    match(GE);
                    setState(67);
                    number(0);
                }
                break;
                case 5:
                    enterOuterAlt(_localctx, 5);
                {
                    setState(69);
                    number(0);
                    setState(70);
                    match(LE);
                    setState(71);
                    number(0);
                }
                break;
                case 6:
                    enterOuterAlt(_localctx, 6);
                {
                    setState(73);
                    number(0);
                    setState(74);
                    match(NE);
                    setState(75);
                    number(0);
                }
                break;
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final Bool_cmpContext bool_cmp() throws RecognitionException {
        Bool_cmpContext _localctx = new Bool_cmpContext(_ctx, getState());
        enterRule(_localctx, 14, RULE_bool_cmp);
        try {
            setState(83);
            _errHandler.sync(this);
            switch (_input.LA(1)) {
                case OR:
                    enterOuterAlt(_localctx, 1);
                {
                    setState(79);
                    match(OR);
                    setState(80);
                    bool(0);
                }
                break;
                case AND:
                    enterOuterAlt(_localctx, 2);
                {
                    setState(81);
                    match(AND);
                    setState(82);
                    bool(0);
                }
                break;
                default:
                    throw new NoViableAltException(this);
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            exitRule();
        }
        return _localctx;
    }

    public final NumberContext number() throws RecognitionException {
        return number(0);
    }

    private NumberContext number(int _p) throws RecognitionException {
        ParserRuleContext _parentctx = _ctx;
        int _parentState = getState();
        NumberContext _localctx = new NumberContext(_ctx, _parentState);
        NumberContext _prevctx = _localctx;
        int _startState = 16;
        enterRecursionRule(_localctx, 16, RULE_number, _p);
        try {
            int _alt;
            enterOuterAlt(_localctx, 1);
            {
                setState(88);
                _errHandler.sync(this);
                switch (_input.LA(1)) {
                    case IDENTIFIER: {
                        setState(86);
                        match(IDENTIFIER);
                    }
                    break;
                    case NUMBER: {
                        setState(87);
                        match(NUMBER);
                    }
                    break;
                    default:
                        throw new NoViableAltException(this);
                }
                _ctx.stop = _input.LT(-1);
                setState(104);
                _errHandler.sync(this);
                _alt = getInterpreter().adaptivePredict(_input, 9, _ctx);
                while (_alt != 2 && _alt != org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER) {
                    if (_alt == 1) {
                        if (_parseListeners != null) triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            setState(102);
                            _errHandler.sync(this);
                            switch (getInterpreter().adaptivePredict(_input, 8, _ctx)) {
                                case 1: {
                                    _localctx = new NumberContext(_parentctx, _parentState);
                                    pushNewRecursionContext(_localctx, _startState, RULE_number);
                                    setState(90);
                                    if (!(precpred(_ctx, 4)))
                                        throw new FailedPredicateException(this, "precpred(_ctx, 4)");
                                    setState(91);
                                    match(PLUS);
                                    setState(92);
                                    number(5);
                                }
                                break;
                                case 2: {
                                    _localctx = new NumberContext(_parentctx, _parentState);
                                    pushNewRecursionContext(_localctx, _startState, RULE_number);
                                    setState(93);
                                    if (!(precpred(_ctx, 3)))
                                        throw new FailedPredicateException(this, "precpred(_ctx, 3)");
                                    setState(94);
                                    match(MINUS);
                                    setState(95);
                                    number(4);
                                }
                                break;
                                case 3: {
                                    _localctx = new NumberContext(_parentctx, _parentState);
                                    pushNewRecursionContext(_localctx, _startState, RULE_number);
                                    setState(96);
                                    if (!(precpred(_ctx, 2)))
                                        throw new FailedPredicateException(this, "precpred(_ctx, 2)");
                                    setState(97);
                                    match(MUL);
                                    setState(98);
                                    number(3);
                                }
                                break;
                                case 4: {
                                    _localctx = new NumberContext(_parentctx, _parentState);
                                    pushNewRecursionContext(_localctx, _startState, RULE_number);
                                    setState(99);
                                    if (!(precpred(_ctx, 1)))
                                        throw new FailedPredicateException(this, "precpred(_ctx, 1)");
                                    setState(100);
                                    match(DIV);
                                    setState(101);
                                    number(2);
                                }
                                break;
                            }
                        }
                    }
                    setState(106);
                    _errHandler.sync(this);
                    _alt = getInterpreter().adaptivePredict(_input, 9, _ctx);
                }
            }
        } catch (RecognitionException re) {
            _localctx.exception = re;
            _errHandler.reportError(this, re);
            _errHandler.recover(this, re);
        } finally {
            unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }

    public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
        switch (ruleIndex) {
            case 5:
                return bool_sempred((BoolContext) _localctx, predIndex);
            case 8:
                return number_sempred((NumberContext) _localctx, predIndex);
        }
        return true;
    }

    private boolean bool_sempred(BoolContext _localctx, int predIndex) {
        switch (predIndex) {
            case 0:
                return precpred(_ctx, 1);
        }
        return true;
    }

    private boolean number_sempred(NumberContext _localctx, int predIndex) {
        switch (predIndex) {
            case 1:
                return precpred(_ctx, 4);
            case 2:
                return precpred(_ctx, 3);
            case 3:
                return precpred(_ctx, 2);
            case 4:
                return precpred(_ctx, 1);
        }
        return true;
    }

    public static class ProgramContext extends ParserRuleContext {
        public ProgramContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode FOREACH() {
            return getToken(PolygramParser.FOREACH, 0);
        }

        public SubjectContext subject() {
            return getRuleContext(SubjectContext.class, 0);
        }

        public List<StatementContext> statement() {
            return getRuleContexts(StatementContext.class);
        }

        public StatementContext statement(int i) {
            return getRuleContext(StatementContext.class, i);
        }

        @Override
        public int getRuleIndex() {
            return RULE_program;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitProgram(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class SubjectContext extends ParserRuleContext {
        public SubjectContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode PROGRAM() {
            return getToken(PolygramParser.PROGRAM, 0);
        }

        public TerminalNode EVENT() {
            return getToken(PolygramParser.EVENT, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_subject;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitSubject(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class StatementContext extends ParserRuleContext {
        public StatementContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public ActionContext action() {
            return getRuleContext(ActionContext.class, 0);
        }

        public ConditionContext condition() {
            return getRuleContext(ConditionContext.class, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_statement;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor)
                return ((PolygramVisitor<? extends T>) visitor).visitStatement(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class ConditionContext extends ParserRuleContext {
        public ConditionContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode WHEN() {
            return getToken(PolygramParser.WHEN, 0);
        }

        public BoolContext bool() {
            return getRuleContext(BoolContext.class, 0);
        }

        public TerminalNode THEN() {
            return getToken(PolygramParser.THEN, 0);
        }

        public List<StatementContext> statement() {
            return getRuleContexts(StatementContext.class);
        }

        public StatementContext statement(int i) {
            return getRuleContext(StatementContext.class, i);
        }

        @Override
        public int getRuleIndex() {
            return RULE_condition;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor)
                return ((PolygramVisitor<? extends T>) visitor).visitCondition(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class ActionContext extends ParserRuleContext {
        public ActionContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode DISPLAY() {
            return getToken(PolygramParser.DISPLAY, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_action;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitAction(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class BoolContext extends ParserRuleContext {
        public BoolContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode IDENTIFIER() {
            return getToken(PolygramParser.IDENTIFIER, 0);
        }

        public Number_cmpContext number_cmp() {
            return getRuleContext(Number_cmpContext.class, 0);
        }

        public BoolContext bool() {
            return getRuleContext(BoolContext.class, 0);
        }

        public Bool_cmpContext bool_cmp() {
            return getRuleContext(Bool_cmpContext.class, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_bool;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitBool(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class Number_cmpContext extends ParserRuleContext {
        public Number_cmpContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public List<NumberContext> number() {
            return getRuleContexts(NumberContext.class);
        }

        public NumberContext number(int i) {
            return getRuleContext(NumberContext.class, i);
        }

        public TerminalNode GT() {
            return getToken(PolygramParser.GT, 0);
        }

        public TerminalNode LT() {
            return getToken(PolygramParser.LT, 0);
        }

        public TerminalNode EQ() {
            return getToken(PolygramParser.EQ, 0);
        }

        public TerminalNode GE() {
            return getToken(PolygramParser.GE, 0);
        }

        public TerminalNode LE() {
            return getToken(PolygramParser.LE, 0);
        }

        public TerminalNode NE() {
            return getToken(PolygramParser.NE, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_number_cmp;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor)
                return ((PolygramVisitor<? extends T>) visitor).visitNumber_cmp(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class Bool_cmpContext extends ParserRuleContext {
        public Bool_cmpContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode OR() {
            return getToken(PolygramParser.OR, 0);
        }

        public BoolContext bool() {
            return getRuleContext(BoolContext.class, 0);
        }

        public TerminalNode AND() {
            return getToken(PolygramParser.AND, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_bool_cmp;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitBool_cmp(this);
            else return visitor.visitChildren(this);
        }
    }

    public static class NumberContext extends ParserRuleContext {
        public NumberContext(ParserRuleContext parent, int invokingState) {
            super(parent, invokingState);
        }

        public TerminalNode IDENTIFIER() {
            return getToken(PolygramParser.IDENTIFIER, 0);
        }

        public TerminalNode NUMBER() {
            return getToken(PolygramParser.NUMBER, 0);
        }

        public List<NumberContext> number() {
            return getRuleContexts(NumberContext.class);
        }

        public NumberContext number(int i) {
            return getRuleContext(NumberContext.class, i);
        }

        public TerminalNode PLUS() {
            return getToken(PolygramParser.PLUS, 0);
        }

        public TerminalNode MINUS() {
            return getToken(PolygramParser.MINUS, 0);
        }

        public TerminalNode MUL() {
            return getToken(PolygramParser.MUL, 0);
        }

        public TerminalNode DIV() {
            return getToken(PolygramParser.DIV, 0);
        }

        @Override
        public int getRuleIndex() {
            return RULE_number;
        }

        @Override
        public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
            if (visitor instanceof PolygramVisitor) return ((PolygramVisitor<? extends T>) visitor).visitNumber(this);
            else return visitor.visitChildren(this);
        }
    }
}
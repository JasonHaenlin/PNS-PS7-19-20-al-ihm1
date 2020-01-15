// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PolygramParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, PROGRAM=5, DISPLAY=6, EVENT=7, IDENTIFIER=8, 
		FOREACH=9, NUMBER=10, AND=11, OR=12, NOT=13, GT=14, LT=15, GE=16, LE=17, 
		EQ=18, NE=19, WHEN=20, THEN=21, EOL=22, WS=23, COMMENT=24;
	public static final int
		RULE_program = 0, RULE_subject = 1, RULE_statement = 2, RULE_condition = 3, 
		RULE_action = 4, RULE_bool = 5, RULE_number = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "subject", "statement", "condition", "action", "bool", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "'-'", "'*'", "'/'", "'program'", "'display'", "'event'", 
			null, "'for each'", null, "'and'", "'or'", "'not'", "'>'", "'<'", "'>='", 
			"'<='", "'='", "'!='", "'when'", "'then'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "PROGRAM", "DISPLAY", "EVENT", "IDENTIFIER", 
			"FOREACH", "NUMBER", "AND", "OR", "NOT", "GT", "LT", "GE", "LE", "EQ", 
			"NE", "WHEN", "THEN", "EOL", "WS", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
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
	public String getGrammarFileName() { return "Polygram.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PolygramParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode FOREACH() { return getToken(PolygramParser.FOREACH, 0); }
		public SubjectContext subject() {
			return getRuleContext(SubjectContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitProgram(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			match(FOREACH);
			setState(15);
			subject();
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				statement();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DISPLAY || _la==WHEN );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubjectContext extends ParserRuleContext {
		public TerminalNode PROGRAM() { return getToken(PolygramParser.PROGRAM, 0); }
		public TerminalNode EVENT() { return getToken(PolygramParser.EVENT, 0); }
		public SubjectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subject; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitSubject(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubjectContext subject() throws RecognitionException {
		SubjectContext _localctx = new SubjectContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_subject);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_la = _input.LA(1);
			if ( !(_la==PROGRAM || _la==EVENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public ActionContext action() {
			return getRuleContext(ActionContext.class,0);
		}
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(25);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				action();
				}
				break;
			case WHEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				condition();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(PolygramParser.WHEN, 0); }
		public BoolContext bool() {
			return getRuleContext(BoolContext.class,0);
		}
		public TerminalNode THEN() { return getToken(PolygramParser.THEN, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_condition);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(WHEN);
			setState(28);
			bool(0);
			setState(29);
			match(THEN);
			setState(31); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(30);
					statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(33); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActionContext extends ParserRuleContext {
		public TerminalNode DISPLAY() { return getToken(PolygramParser.DISPLAY, 0); }
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitAction(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_action);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(DISPLAY);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoolContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public TerminalNode GT() { return getToken(PolygramParser.GT, 0); }
		public TerminalNode LT() { return getToken(PolygramParser.LT, 0); }
		public TerminalNode EQ() { return getToken(PolygramParser.EQ, 0); }
		public TerminalNode GE() { return getToken(PolygramParser.GE, 0); }
		public TerminalNode LE() { return getToken(PolygramParser.LE, 0); }
		public TerminalNode NE() { return getToken(PolygramParser.NE, 0); }
		public TerminalNode NOT() { return getToken(PolygramParser.NOT, 0); }
		public List<BoolContext> bool() {
			return getRuleContexts(BoolContext.class);
		}
		public BoolContext bool(int i) {
			return getRuleContext(BoolContext.class,i);
		}
		public TerminalNode AND() { return getToken(PolygramParser.AND, 0); }
		public TerminalNode OR() { return getToken(PolygramParser.OR, 0); }
		public BoolContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitBool(this);
			else return visitor.visitChildren(this);
		}
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
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(38);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(39);
				number(0);
				setState(40);
				match(GT);
				setState(41);
				number(0);
				}
				break;
			case 3:
				{
				setState(43);
				number(0);
				setState(44);
				match(LT);
				setState(45);
				number(0);
				}
				break;
			case 4:
				{
				setState(47);
				number(0);
				setState(48);
				match(EQ);
				setState(49);
				number(0);
				}
				break;
			case 5:
				{
				setState(51);
				number(0);
				setState(52);
				match(GE);
				setState(53);
				number(0);
				}
				break;
			case 6:
				{
				setState(55);
				number(0);
				setState(56);
				match(LE);
				setState(57);
				number(0);
				}
				break;
			case 7:
				{
				setState(59);
				number(0);
				setState(60);
				match(NE);
				setState(61);
				number(0);
				}
				break;
			case 8:
				{
				setState(63);
				match(NOT);
				setState(64);
				bool(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(75);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(73);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new BoolContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool);
						setState(67);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(68);
						match(AND);
						setState(69);
						bool(4);
						}
						break;
					case 2:
						{
						_localctx = new BoolContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_bool);
						setState(70);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(71);
						match(OR);
						setState(72);
						bool(3);
						}
						break;
					}
					} 
				}
				setState(77);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public TerminalNode NUMBER() { return getToken(PolygramParser.NUMBER, 0); }
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitNumber(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NumberContext number() throws RecognitionException {
		return number(0);
	}

	private NumberContext number(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NumberContext _localctx = new NumberContext(_ctx, _parentState);
		NumberContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_number, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(79);
				match(IDENTIFIER);
				}
				break;
			case NUMBER:
				{
				setState(80);
				match(NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(97);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(95);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(83);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(84);
						match(T__0);
						setState(85);
						number(5);
						}
						break;
					case 2:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(86);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(87);
						match(T__1);
						setState(88);
						number(4);
						}
						break;
					case 3:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(89);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(90);
						match(T__2);
						setState(91);
						number(3);
						}
						break;
					case 4:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(92);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(93);
						match(T__3);
						setState(94);
						number(2);
						}
						break;
					}
					} 
				}
				setState(99);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 5:
			return bool_sempred((BoolContext)_localctx, predIndex);
		case 6:
			return number_sempred((NumberContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean bool_sempred(BoolContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean number_sempred(NumberContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 4);
		case 3:
			return precpred(_ctx, 3);
		case 4:
			return precpred(_ctx, 2);
		case 5:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\32g\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3\2\3\2\3\2\6\2\24\n\2\r\2"+
		"\16\2\25\3\3\3\3\3\4\3\4\5\4\34\n\4\3\5\3\5\3\5\3\5\6\5\"\n\5\r\5\16\5"+
		"#\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7D\n\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\7\7L\n\7\f\7\16\7O\13\7\3\b\3\b\3\b\5\bT\n\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\bb\n\b\f\b\16\be\13\b\3\b\2"+
		"\4\f\16\t\2\4\6\b\n\f\16\2\3\4\2\7\7\t\t\2p\2\20\3\2\2\2\4\27\3\2\2\2"+
		"\6\33\3\2\2\2\b\35\3\2\2\2\n%\3\2\2\2\fC\3\2\2\2\16S\3\2\2\2\20\21\7\13"+
		"\2\2\21\23\5\4\3\2\22\24\5\6\4\2\23\22\3\2\2\2\24\25\3\2\2\2\25\23\3\2"+
		"\2\2\25\26\3\2\2\2\26\3\3\2\2\2\27\30\t\2\2\2\30\5\3\2\2\2\31\34\5\n\6"+
		"\2\32\34\5\b\5\2\33\31\3\2\2\2\33\32\3\2\2\2\34\7\3\2\2\2\35\36\7\26\2"+
		"\2\36\37\5\f\7\2\37!\7\27\2\2 \"\5\6\4\2! \3\2\2\2\"#\3\2\2\2#!\3\2\2"+
		"\2#$\3\2\2\2$\t\3\2\2\2%&\7\b\2\2&\13\3\2\2\2\'(\b\7\1\2(D\7\n\2\2)*\5"+
		"\16\b\2*+\7\20\2\2+,\5\16\b\2,D\3\2\2\2-.\5\16\b\2./\7\21\2\2/\60\5\16"+
		"\b\2\60D\3\2\2\2\61\62\5\16\b\2\62\63\7\24\2\2\63\64\5\16\b\2\64D\3\2"+
		"\2\2\65\66\5\16\b\2\66\67\7\22\2\2\678\5\16\b\28D\3\2\2\29:\5\16\b\2:"+
		";\7\23\2\2;<\5\16\b\2<D\3\2\2\2=>\5\16\b\2>?\7\25\2\2?@\5\16\b\2@D\3\2"+
		"\2\2AB\7\17\2\2BD\5\f\7\3C\'\3\2\2\2C)\3\2\2\2C-\3\2\2\2C\61\3\2\2\2C"+
		"\65\3\2\2\2C9\3\2\2\2C=\3\2\2\2CA\3\2\2\2DM\3\2\2\2EF\f\5\2\2FG\7\r\2"+
		"\2GL\5\f\7\6HI\f\4\2\2IJ\7\16\2\2JL\5\f\7\5KE\3\2\2\2KH\3\2\2\2LO\3\2"+
		"\2\2MK\3\2\2\2MN\3\2\2\2N\r\3\2\2\2OM\3\2\2\2PQ\b\b\1\2QT\7\n\2\2RT\7"+
		"\f\2\2SP\3\2\2\2SR\3\2\2\2Tc\3\2\2\2UV\f\6\2\2VW\7\3\2\2Wb\5\16\b\7XY"+
		"\f\5\2\2YZ\7\4\2\2Zb\5\16\b\6[\\\f\4\2\2\\]\7\5\2\2]b\5\16\b\5^_\f\3\2"+
		"\2_`\7\6\2\2`b\5\16\b\4aU\3\2\2\2aX\3\2\2\2a[\3\2\2\2a^\3\2\2\2be\3\2"+
		"\2\2ca\3\2\2\2cd\3\2\2\2d\17\3\2\2\2ec\3\2\2\2\13\25\33#CKMSac";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
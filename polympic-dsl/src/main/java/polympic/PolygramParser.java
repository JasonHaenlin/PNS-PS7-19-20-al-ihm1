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
		PROGRAM=1, DISPLAY=2, MUL=3, DIV=4, PLUS=5, MINUS=6, EVENT=7, FOREACH=8, 
		NUMBER=9, NOT=10, GT=11, LT=12, GE=13, LE=14, EQ=15, NE=16, AND=17, OR=18, 
		MARK_AS=19, IS=20, WHEN=21, THEN=22, EOL=23, COMMENT=24, WS=25, IDENTIFIER=26;
	public static final int
		RULE_program = 0, RULE_subject = 1, RULE_statement = 2, RULE_condition = 3, 
		RULE_action = 4, RULE_place_state = 5, RULE_expr = 6, RULE_str_cmp = 7, 
		RULE_number_cmp = 8, RULE_expr_cmp = 9, RULE_number = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "subject", "statement", "condition", "action", "place_state", 
			"expr", "str_cmp", "number_cmp", "expr_cmp", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "'display'", "'*'", "'/'", "'+'", "'-'", "'event'", 
			"'for each'", null, "'not'", "'>'", "'<'", "'>='", "'<='", "'='", "'!='", 
			"'and'", "'or'", "'mark as'", "'is'", "'when'", "'then'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAM", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENT", "FOREACH", 
			"NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", "OR", "MARK_AS", 
			"IS", "WHEN", "THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
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
			setState(22);
			match(FOREACH);
			setState(23);
			subject();
			setState(25); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(24);
				statement();
				}
				}
				setState(27); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DISPLAY) | (1L << MARK_AS) | (1L << WHEN))) != 0) );
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
			setState(29);
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
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
			case MARK_AS:
				enterOuterAlt(_localctx, 1);
				{
				setState(31);
				action();
				}
				break;
			case WHEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(32);
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
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode THEN() { return getToken(PolygramParser.THEN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
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
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(WHEN);
			setState(36);
			expr(0);
			setState(37);
			match(THEN);
			setState(38);
			statement();
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
		public TerminalNode MARK_AS() { return getToken(PolygramParser.MARK_AS, 0); }
		public Place_stateContext place_state() {
			return getRuleContext(Place_stateContext.class,0);
		}
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
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				match(DISPLAY);
				}
				break;
			case MARK_AS:
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				match(MARK_AS);
				setState(42);
				place_state();
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

	public static class Place_stateContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public Place_stateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_place_state; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitPlace_state(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Place_stateContext place_state() throws RecognitionException {
		Place_stateContext _localctx = new Place_stateContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_place_state);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(IDENTIFIER);
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

	public static class ExprContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public Number_cmpContext number_cmp() {
			return getRuleContext(Number_cmpContext.class,0);
		}
		public Str_cmpContext str_cmp() {
			return getRuleContext(Str_cmpContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Expr_cmpContext expr_cmp() {
			return getRuleContext(Expr_cmpContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(48);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(49);
				number_cmp();
				}
				break;
			case 3:
				{
				setState(50);
				str_cmp();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(57);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(53);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(54);
					expr_cmp();
					}
					} 
				}
				setState(59);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
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

	public static class Str_cmpContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(PolygramParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(PolygramParser.IDENTIFIER, i);
		}
		public TerminalNode IS() { return getToken(PolygramParser.IS, 0); }
		public Str_cmpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str_cmp; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitStr_cmp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Str_cmpContext str_cmp() throws RecognitionException {
		Str_cmpContext _localctx = new Str_cmpContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_str_cmp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(IDENTIFIER);
			setState(61);
			match(IS);
			setState(62);
			match(IDENTIFIER);
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

	public static class Number_cmpContext extends ParserRuleContext {
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
		public Number_cmpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number_cmp; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitNumber_cmp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Number_cmpContext number_cmp() throws RecognitionException {
		Number_cmpContext _localctx = new Number_cmpContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_number_cmp);
		try {
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(64);
				number(0);
				setState(65);
				match(GT);
				setState(66);
				number(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				number(0);
				setState(69);
				match(LT);
				setState(70);
				number(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(72);
				number(0);
				setState(73);
				match(EQ);
				setState(74);
				number(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(76);
				number(0);
				setState(77);
				match(GE);
				setState(78);
				number(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(80);
				number(0);
				setState(81);
				match(LE);
				setState(82);
				number(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(84);
				number(0);
				setState(85);
				match(NE);
				setState(86);
				number(0);
				}
				break;
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

	public static class Expr_cmpContext extends ParserRuleContext {
		public TerminalNode OR() { return getToken(PolygramParser.OR, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode AND() { return getToken(PolygramParser.AND, 0); }
		public Expr_cmpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_cmp; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitExpr_cmp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Expr_cmpContext expr_cmp() throws RecognitionException {
		Expr_cmpContext _localctx = new Expr_cmpContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_expr_cmp);
		try {
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OR:
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(OR);
				setState(91);
				expr(0);
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 2);
				{
				setState(92);
				match(AND);
				setState(93);
				expr(0);
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

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public TerminalNode NUMBER() { return getToken(PolygramParser.NUMBER, 0); }
		public List<NumberContext> number() {
			return getRuleContexts(NumberContext.class);
		}
		public NumberContext number(int i) {
			return getRuleContext(NumberContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(PolygramParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(PolygramParser.MINUS, 0); }
		public TerminalNode MUL() { return getToken(PolygramParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(PolygramParser.DIV, 0); }
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_number, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(97);
				match(IDENTIFIER);
				}
				break;
			case NUMBER:
				{
				setState(98);
				match(NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(115);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(113);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
					case 1:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(101);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(102);
						match(PLUS);
						setState(103);
						number(5);
						}
						break;
					case 2:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(104);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(105);
						match(MINUS);
						setState(106);
						number(4);
						}
						break;
					case 3:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(107);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(108);
						match(MUL);
						setState(109);
						number(3);
						}
						break;
					case 4:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(110);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(111);
						match(DIV);
						setState(112);
						number(2);
						}
						break;
					}
					} 
				}
				setState(117);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
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
		case 6:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 10:
			return number_sempred((NumberContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\34y\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\3\2\3\2\3\2\6\2\34\n\2\r\2\16\2\35\3\3\3\3\3\4\3\4\5\4$\n\4\3\5"+
		"\3\5\3\5\3\5\3\5\3\6\3\6\3\6\5\6.\n\6\3\7\3\7\3\b\3\b\3\b\3\b\5\b\66\n"+
		"\b\3\b\3\b\7\b:\n\b\f\b\16\b=\13\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\n\3\n\5\n[\n\n\3\13\3\13\3\13\3\13\5\13a\n\13\3\f\3\f\3\f\5\ff\n\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\7\ft\n\f\f\f\16\fw\13\f"+
		"\3\f\2\4\16\26\r\2\4\6\b\n\f\16\20\22\24\26\2\3\4\2\3\3\t\t\2~\2\30\3"+
		"\2\2\2\4\37\3\2\2\2\6#\3\2\2\2\b%\3\2\2\2\n-\3\2\2\2\f/\3\2\2\2\16\65"+
		"\3\2\2\2\20>\3\2\2\2\22Z\3\2\2\2\24`\3\2\2\2\26e\3\2\2\2\30\31\7\n\2\2"+
		"\31\33\5\4\3\2\32\34\5\6\4\2\33\32\3\2\2\2\34\35\3\2\2\2\35\33\3\2\2\2"+
		"\35\36\3\2\2\2\36\3\3\2\2\2\37 \t\2\2\2 \5\3\2\2\2!$\5\n\6\2\"$\5\b\5"+
		"\2#!\3\2\2\2#\"\3\2\2\2$\7\3\2\2\2%&\7\27\2\2&\'\5\16\b\2\'(\7\30\2\2"+
		"()\5\6\4\2)\t\3\2\2\2*.\7\4\2\2+,\7\25\2\2,.\5\f\7\2-*\3\2\2\2-+\3\2\2"+
		"\2.\13\3\2\2\2/\60\7\34\2\2\60\r\3\2\2\2\61\62\b\b\1\2\62\66\7\34\2\2"+
		"\63\66\5\22\n\2\64\66\5\20\t\2\65\61\3\2\2\2\65\63\3\2\2\2\65\64\3\2\2"+
		"\2\66;\3\2\2\2\678\f\4\2\28:\5\24\13\29\67\3\2\2\2:=\3\2\2\2;9\3\2\2\2"+
		";<\3\2\2\2<\17\3\2\2\2=;\3\2\2\2>?\7\34\2\2?@\7\26\2\2@A\7\34\2\2A\21"+
		"\3\2\2\2BC\5\26\f\2CD\7\r\2\2DE\5\26\f\2E[\3\2\2\2FG\5\26\f\2GH\7\16\2"+
		"\2HI\5\26\f\2I[\3\2\2\2JK\5\26\f\2KL\7\21\2\2LM\5\26\f\2M[\3\2\2\2NO\5"+
		"\26\f\2OP\7\17\2\2PQ\5\26\f\2Q[\3\2\2\2RS\5\26\f\2ST\7\20\2\2TU\5\26\f"+
		"\2U[\3\2\2\2VW\5\26\f\2WX\7\22\2\2XY\5\26\f\2Y[\3\2\2\2ZB\3\2\2\2ZF\3"+
		"\2\2\2ZJ\3\2\2\2ZN\3\2\2\2ZR\3\2\2\2ZV\3\2\2\2[\23\3\2\2\2\\]\7\24\2\2"+
		"]a\5\16\b\2^_\7\23\2\2_a\5\16\b\2`\\\3\2\2\2`^\3\2\2\2a\25\3\2\2\2bc\b"+
		"\f\1\2cf\7\34\2\2df\7\13\2\2eb\3\2\2\2ed\3\2\2\2fu\3\2\2\2gh\f\6\2\2h"+
		"i\7\7\2\2it\5\26\f\7jk\f\5\2\2kl\7\b\2\2lt\5\26\f\6mn\f\4\2\2no\7\5\2"+
		"\2ot\5\26\f\5pq\f\3\2\2qr\7\6\2\2rt\5\26\f\4sg\3\2\2\2sj\3\2\2\2sm\3\2"+
		"\2\2sp\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2v\27\3\2\2\2wu\3\2\2\2\f\35"+
		"#-\65;Z`esu";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
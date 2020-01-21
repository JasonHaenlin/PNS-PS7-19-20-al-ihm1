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
		IT_STEPS=1, DISPLAY=2, MUL=3, DIV=4, PLUS=5, MINUS=6, EVENTS=7, PREFS=8, 
		CONCERNING=9, NUMBER=10, NOT=11, GT=12, LT=13, GE=14, LE=15, EQ=16, NE=17, 
		AND=18, OR=19, MARK_AS=20, IS=21, WHEN=22, THEN=23, EOL=24, COMMENT=25, 
		WS=26, IDENTIFIER=27;
	public static final int
		RULE_program = 0, RULE_sub_prog_steps = 1, RULE_sub_prog_events = 2, RULE_subject_it_steps = 3, 
		RULE_subject_events = 4, RULE_statement = 5, RULE_condition = 6, RULE_action = 7, 
		RULE_place_state = 8, RULE_expr = 9, RULE_str_cmp = 10, RULE_number_cmp = 11, 
		RULE_expr_cmp = 12, RULE_bool_cmp = 13, RULE_number = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sub_prog_steps", "sub_prog_events", "subject_it_steps", "subject_events", 
			"statement", "condition", "action", "place_state", "expr", "str_cmp", 
			"number_cmp", "expr_cmp", "bool_cmp", "number"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'itinerary steps'", "'display'", "'*'", "'/'", "'+'", "'-'", "'all events'", 
			null, "'concerning'", null, "'not'", "'>'", "'<'", "'>='", "'<='", "'='", 
			"'!='", "'and'", "'or'", "'mark as'", "'is'", "'when'", "'then'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IT_STEPS", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENTS", 
			"PREFS", "CONCERNING", "NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", 
			"NE", "AND", "OR", "MARK_AS", "IS", "WHEN", "THEN", "EOL", "COMMENT", 
			"WS", "IDENTIFIER"
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
		public Sub_prog_stepsContext sub_prog_steps() {
			return getRuleContext(Sub_prog_stepsContext.class,0);
		}
		public List<Sub_prog_eventsContext> sub_prog_events() {
			return getRuleContexts(Sub_prog_eventsContext.class);
		}
		public Sub_prog_eventsContext sub_prog_events(int i) {
			return getRuleContext(Sub_prog_eventsContext.class,i);
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
			setState(36);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				sub_prog_steps();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(32); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(31);
					sub_prog_events();
					}
					}
					setState(34); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CONCERNING );
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

	public static class Sub_prog_stepsContext extends ParserRuleContext {
		public TerminalNode CONCERNING() { return getToken(PolygramParser.CONCERNING, 0); }
		public Subject_it_stepsContext subject_it_steps() {
			return getRuleContext(Subject_it_stepsContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Sub_prog_stepsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sub_prog_steps; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitSub_prog_steps(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Sub_prog_stepsContext sub_prog_steps() throws RecognitionException {
		Sub_prog_stepsContext _localctx = new Sub_prog_stepsContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sub_prog_steps);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(CONCERNING);
			setState(39);
			subject_it_steps();
			setState(41); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(40);
				statement();
				}
				}
				setState(43); 
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

	public static class Sub_prog_eventsContext extends ParserRuleContext {
		public TerminalNode CONCERNING() { return getToken(PolygramParser.CONCERNING, 0); }
		public Subject_eventsContext subject_events() {
			return getRuleContext(Subject_eventsContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Sub_prog_eventsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sub_prog_events; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitSub_prog_events(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Sub_prog_eventsContext sub_prog_events() throws RecognitionException {
		Sub_prog_eventsContext _localctx = new Sub_prog_eventsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sub_prog_events);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(CONCERNING);
			setState(46);
			subject_events();
			setState(48); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(47);
				statement();
				}
				}
				setState(50); 
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

	public static class Subject_it_stepsContext extends ParserRuleContext {
		public TerminalNode IT_STEPS() { return getToken(PolygramParser.IT_STEPS, 0); }
		public Subject_it_stepsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subject_it_steps; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitSubject_it_steps(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Subject_it_stepsContext subject_it_steps() throws RecognitionException {
		Subject_it_stepsContext _localctx = new Subject_it_stepsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_subject_it_steps);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			match(IT_STEPS);
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

	public static class Subject_eventsContext extends ParserRuleContext {
		public TerminalNode PREFS() { return getToken(PolygramParser.PREFS, 0); }
		public TerminalNode EVENTS() { return getToken(PolygramParser.EVENTS, 0); }
		public Subject_eventsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subject_events; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitSubject_events(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Subject_eventsContext subject_events() throws RecognitionException {
		Subject_eventsContext _localctx = new Subject_eventsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_subject_events);
		try {
			setState(57);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
			case MARK_AS:
			case WHEN:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case PREFS:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				match(PREFS);
				}
				break;
			case EVENTS:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				match(EVENTS);
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
		enterRule(_localctx, 10, RULE_statement);
		try {
			setState(61);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
			case MARK_AS:
				enterOuterAlt(_localctx, 1);
				{
				setState(59);
				action();
				}
				break;
			case WHEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(60);
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
		enterRule(_localctx, 12, RULE_condition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(WHEN);
			setState(64);
			expr(0);
			setState(65);
			match(THEN);
			setState(66);
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
		enterRule(_localctx, 14, RULE_action);
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DISPLAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				match(DISPLAY);
				}
				break;
			case MARK_AS:
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				match(MARK_AS);
				setState(70);
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
		enterRule(_localctx, 16, RULE_place_state);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
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
		public Bool_cmpContext bool_cmp() {
			return getRuleContext(Bool_cmpContext.class,0);
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
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expr, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(80);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(76);
				match(IDENTIFIER);
				}
				break;
			case 2:
				{
				setState(77);
				number_cmp();
				}
				break;
			case 3:
				{
				setState(78);
				str_cmp();
				}
				break;
			case 4:
				{
				setState(79);
				bool_cmp();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(86);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(82);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(83);
					expr_cmp();
					}
					} 
				}
				setState(88);
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
		enterRule(_localctx, 20, RULE_str_cmp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(IDENTIFIER);
			setState(90);
			match(IS);
			setState(91);
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
		enterRule(_localctx, 22, RULE_number_cmp);
		try {
			setState(117);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(93);
				number(0);
				setState(94);
				match(GT);
				setState(95);
				number(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				number(0);
				setState(98);
				match(LT);
				setState(99);
				number(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(101);
				number(0);
				setState(102);
				match(EQ);
				setState(103);
				number(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(105);
				number(0);
				setState(106);
				match(GE);
				setState(107);
				number(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(109);
				number(0);
				setState(110);
				match(LE);
				setState(111);
				number(0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(113);
				number(0);
				setState(114);
				match(NE);
				setState(115);
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
		enterRule(_localctx, 24, RULE_expr_cmp);
		try {
			setState(123);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OR:
				enterOuterAlt(_localctx, 1);
				{
				setState(119);
				match(OR);
				setState(120);
				expr(0);
				}
				break;
			case AND:
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				match(AND);
				setState(122);
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

	public static class Bool_cmpContext extends ParserRuleContext {
		public TerminalNode IS() { return getToken(PolygramParser.IS, 0); }
		public TerminalNode IDENTIFIER() { return getToken(PolygramParser.IDENTIFIER, 0); }
		public Bool_cmpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bool_cmp; }
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof PolygramVisitor ) return ((PolygramVisitor<? extends T>)visitor).visitBool_cmp(this);
			else return visitor.visitChildren(this);
		}
	}

	public final Bool_cmpContext bool_cmp() throws RecognitionException {
		Bool_cmpContext _localctx = new Bool_cmpContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_bool_cmp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(IS);
			setState(126);
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
		int _startState = 28;
		enterRecursionRule(_localctx, 28, RULE_number, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IDENTIFIER:
				{
				setState(129);
				match(IDENTIFIER);
				}
				break;
			case NUMBER:
				{
				setState(130);
				match(NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(147);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(145);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(133);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(134);
						match(PLUS);
						setState(135);
						number(5);
						}
						break;
					case 2:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(136);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(137);
						match(MINUS);
						setState(138);
						number(4);
						}
						break;
					case 3:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(139);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(140);
						match(MUL);
						setState(141);
						number(3);
						}
						break;
					case 4:
						{
						_localctx = new NumberContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_number);
						setState(142);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(143);
						match(DIV);
						setState(144);
						number(2);
						}
						break;
					}
					} 
				}
				setState(149);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
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
		case 9:
			return expr_sempred((ExprContext)_localctx, predIndex);
		case 14:
			return number_sempred((NumberContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\35\u0099\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\6\2#\n\2\r"+
		"\2\16\2$\5\2\'\n\2\3\3\3\3\3\3\6\3,\n\3\r\3\16\3-\3\4\3\4\3\4\6\4\63\n"+
		"\4\r\4\16\4\64\3\5\3\5\3\6\3\6\3\6\5\6<\n\6\3\7\3\7\5\7@\n\7\3\b\3\b\3"+
		"\b\3\b\3\b\3\t\3\t\3\t\5\tJ\n\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\5\13"+
		"S\n\13\3\13\3\13\7\13W\n\13\f\13\16\13Z\13\13\3\f\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\r\5\rx\n\r\3\16\3\16\3\16\3\16\5\16~\n\16\3\17\3\17\3"+
		"\17\3\20\3\20\3\20\5\20\u0086\n\20\3\20\3\20\3\20\3\20\3\20\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\3\20\7\20\u0094\n\20\f\20\16\20\u0097\13\20\3\20"+
		"\2\4\24\36\21\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36\2\2\2\u00a0\2&\3"+
		"\2\2\2\4(\3\2\2\2\6/\3\2\2\2\b\66\3\2\2\2\n;\3\2\2\2\f?\3\2\2\2\16A\3"+
		"\2\2\2\20I\3\2\2\2\22K\3\2\2\2\24R\3\2\2\2\26[\3\2\2\2\30w\3\2\2\2\32"+
		"}\3\2\2\2\34\177\3\2\2\2\36\u0085\3\2\2\2 \'\5\4\3\2!#\5\6\4\2\"!\3\2"+
		"\2\2#$\3\2\2\2$\"\3\2\2\2$%\3\2\2\2%\'\3\2\2\2& \3\2\2\2&\"\3\2\2\2\'"+
		"\3\3\2\2\2()\7\13\2\2)+\5\b\5\2*,\5\f\7\2+*\3\2\2\2,-\3\2\2\2-+\3\2\2"+
		"\2-.\3\2\2\2.\5\3\2\2\2/\60\7\13\2\2\60\62\5\n\6\2\61\63\5\f\7\2\62\61"+
		"\3\2\2\2\63\64\3\2\2\2\64\62\3\2\2\2\64\65\3\2\2\2\65\7\3\2\2\2\66\67"+
		"\7\3\2\2\67\t\3\2\2\28<\3\2\2\29<\7\n\2\2:<\7\t\2\2;8\3\2\2\2;9\3\2\2"+
		"\2;:\3\2\2\2<\13\3\2\2\2=@\5\20\t\2>@\5\16\b\2?=\3\2\2\2?>\3\2\2\2@\r"+
		"\3\2\2\2AB\7\30\2\2BC\5\24\13\2CD\7\31\2\2DE\5\f\7\2E\17\3\2\2\2FJ\7\4"+
		"\2\2GH\7\26\2\2HJ\5\22\n\2IF\3\2\2\2IG\3\2\2\2J\21\3\2\2\2KL\7\35\2\2"+
		"L\23\3\2\2\2MN\b\13\1\2NS\7\35\2\2OS\5\30\r\2PS\5\26\f\2QS\5\34\17\2R"+
		"M\3\2\2\2RO\3\2\2\2RP\3\2\2\2RQ\3\2\2\2SX\3\2\2\2TU\f\5\2\2UW\5\32\16"+
		"\2VT\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y\25\3\2\2\2ZX\3\2\2\2[\\\7"+
		"\35\2\2\\]\7\27\2\2]^\7\35\2\2^\27\3\2\2\2_`\5\36\20\2`a\7\16\2\2ab\5"+
		"\36\20\2bx\3\2\2\2cd\5\36\20\2de\7\17\2\2ef\5\36\20\2fx\3\2\2\2gh\5\36"+
		"\20\2hi\7\22\2\2ij\5\36\20\2jx\3\2\2\2kl\5\36\20\2lm\7\20\2\2mn\5\36\20"+
		"\2nx\3\2\2\2op\5\36\20\2pq\7\21\2\2qr\5\36\20\2rx\3\2\2\2st\5\36\20\2"+
		"tu\7\23\2\2uv\5\36\20\2vx\3\2\2\2w_\3\2\2\2wc\3\2\2\2wg\3\2\2\2wk\3\2"+
		"\2\2wo\3\2\2\2ws\3\2\2\2x\31\3\2\2\2yz\7\25\2\2z~\5\24\13\2{|\7\24\2\2"+
		"|~\5\24\13\2}y\3\2\2\2}{\3\2\2\2~\33\3\2\2\2\177\u0080\7\27\2\2\u0080"+
		"\u0081\7\35\2\2\u0081\35\3\2\2\2\u0082\u0083\b\20\1\2\u0083\u0086\7\35"+
		"\2\2\u0084\u0086\7\f\2\2\u0085\u0082\3\2\2\2\u0085\u0084\3\2\2\2\u0086"+
		"\u0095\3\2\2\2\u0087\u0088\f\6\2\2\u0088\u0089\7\7\2\2\u0089\u0094\5\36"+
		"\20\7\u008a\u008b\f\5\2\2\u008b\u008c\7\b\2\2\u008c\u0094\5\36\20\6\u008d"+
		"\u008e\f\4\2\2\u008e\u008f\7\5\2\2\u008f\u0094\5\36\20\5\u0090\u0091\f"+
		"\3\2\2\u0091\u0092\7\6\2\2\u0092\u0094\5\36\20\4\u0093\u0087\3\2\2\2\u0093"+
		"\u008a\3\2\2\2\u0093\u008d\3\2\2\2\u0093\u0090\3\2\2\2\u0094\u0097\3\2"+
		"\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\37\3\2\2\2\u0097\u0095"+
		"\3\2\2\2\20$&-\64;?IRXw}\u0085\u0093\u0095";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
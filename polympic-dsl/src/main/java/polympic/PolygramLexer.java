// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PolygramLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, PROGRAM=5, DISPLAY=6, EVENT=7, FOREACH=8, 
		NUMBER=9, AND=10, OR=11, NOT=12, GT=13, LT=14, GE=15, LE=16, EQ=17, NE=18, 
		WHEN=19, THEN=20, EOL=21, COMMENT=22, WS=23, IDENTIFIER=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "PROGRAM", "DISPLAY", "EVENT", "FOREACH", 
			"NUMBER", "AND", "OR", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "WHEN", 
			"THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "'-'", "'*'", "'/'", "'program'", "'display'", "'event'", 
			"'for each'", null, "'and'", "'or'", "'not'", "'>'", "'<'", "'>='", "'<='", 
			"'='", "'!='", "'when'", "'then'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "PROGRAM", "DISPLAY", "EVENT", "FOREACH", 
			"NUMBER", "AND", "OR", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "WHEN", 
			"THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
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


	public PolygramLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Polygram.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\32\u00b4\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\n\5\n\\\n\n\3\n\6\n_\n\n\r\n\16\n`\3\n\5\nd\n"+
		"\n\3\n\7\ng\n\n\f\n\16\nj\13\n\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3"+
		"\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26\6"+
		"\26\u0091\n\26\r\26\16\26\u0092\3\26\3\26\3\27\3\27\3\27\3\27\7\27\u009b"+
		"\n\27\f\27\16\27\u009e\13\27\3\27\3\27\3\27\3\27\3\30\6\30\u00a5\n\30"+
		"\r\30\16\30\u00a6\3\30\3\30\3\31\6\31\u00ac\n\31\r\31\16\31\u00ad\3\31"+
		"\6\31\u00b1\n\31\r\31\16\31\u00b2\3\u009c\2\32\3\3\5\4\7\5\t\6\13\7\r"+
		"\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25"+
		")\26+\27-\30/\31\61\32\3\2\b\3\2\62;\4\2..\60\60\4\2\f\f\17\17\4\2\13"+
		"\13\"\"\4\2C\\c|\5\2\62;C\\c|\2\u00bc\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2"+
		"\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2"+
		"\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3"+
		"\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3"+
		"\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\3\63\3\2\2\2\5\65"+
		"\3\2\2\2\7\67\3\2\2\2\t9\3\2\2\2\13;\3\2\2\2\rC\3\2\2\2\17K\3\2\2\2\21"+
		"Q\3\2\2\2\23[\3\2\2\2\25k\3\2\2\2\27o\3\2\2\2\31r\3\2\2\2\33v\3\2\2\2"+
		"\35x\3\2\2\2\37z\3\2\2\2!}\3\2\2\2#\u0080\3\2\2\2%\u0082\3\2\2\2\'\u0085"+
		"\3\2\2\2)\u008a\3\2\2\2+\u0090\3\2\2\2-\u0096\3\2\2\2/\u00a4\3\2\2\2\61"+
		"\u00ab\3\2\2\2\63\64\7-\2\2\64\4\3\2\2\2\65\66\7/\2\2\66\6\3\2\2\2\67"+
		"8\7,\2\28\b\3\2\2\29:\7\61\2\2:\n\3\2\2\2;<\7r\2\2<=\7t\2\2=>\7q\2\2>"+
		"?\7i\2\2?@\7t\2\2@A\7c\2\2AB\7o\2\2B\f\3\2\2\2CD\7f\2\2DE\7k\2\2EF\7u"+
		"\2\2FG\7r\2\2GH\7n\2\2HI\7c\2\2IJ\7{\2\2J\16\3\2\2\2KL\7g\2\2LM\7x\2\2"+
		"MN\7g\2\2NO\7p\2\2OP\7v\2\2P\20\3\2\2\2QR\7h\2\2RS\7q\2\2ST\7t\2\2TU\7"+
		"\"\2\2UV\7g\2\2VW\7c\2\2WX\7e\2\2XY\7j\2\2Y\22\3\2\2\2Z\\\7/\2\2[Z\3\2"+
		"\2\2[\\\3\2\2\2\\^\3\2\2\2]_\t\2\2\2^]\3\2\2\2_`\3\2\2\2`^\3\2\2\2`a\3"+
		"\2\2\2ac\3\2\2\2bd\t\3\2\2cb\3\2\2\2cd\3\2\2\2dh\3\2\2\2eg\t\2\2\2fe\3"+
		"\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2i\24\3\2\2\2jh\3\2\2\2kl\7c\2\2lm"+
		"\7p\2\2mn\7f\2\2n\26\3\2\2\2op\7q\2\2pq\7t\2\2q\30\3\2\2\2rs\7p\2\2st"+
		"\7q\2\2tu\7v\2\2u\32\3\2\2\2vw\7@\2\2w\34\3\2\2\2xy\7>\2\2y\36\3\2\2\2"+
		"z{\7@\2\2{|\7?\2\2| \3\2\2\2}~\7>\2\2~\177\7?\2\2\177\"\3\2\2\2\u0080"+
		"\u0081\7?\2\2\u0081$\3\2\2\2\u0082\u0083\7#\2\2\u0083\u0084\7?\2\2\u0084"+
		"&\3\2\2\2\u0085\u0086\7y\2\2\u0086\u0087\7j\2\2\u0087\u0088\7g\2\2\u0088"+
		"\u0089\7p\2\2\u0089(\3\2\2\2\u008a\u008b\7v\2\2\u008b\u008c\7j\2\2\u008c"+
		"\u008d\7g\2\2\u008d\u008e\7p\2\2\u008e*\3\2\2\2\u008f\u0091\t\4\2\2\u0090"+
		"\u008f\3\2\2\2\u0091\u0092\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0093\3\2"+
		"\2\2\u0093\u0094\3\2\2\2\u0094\u0095\b\26\2\2\u0095,\3\2\2\2\u0096\u0097"+
		"\7\61\2\2\u0097\u0098\7\61\2\2\u0098\u009c\3\2\2\2\u0099\u009b\13\2\2"+
		"\2\u009a\u0099\3\2\2\2\u009b\u009e\3\2\2\2\u009c\u009d\3\2\2\2\u009c\u009a"+
		"\3\2\2\2\u009d\u009f\3\2\2\2\u009e\u009c\3\2\2\2\u009f\u00a0\5+\26\2\u00a0"+
		"\u00a1\3\2\2\2\u00a1\u00a2\b\27\2\2\u00a2.\3\2\2\2\u00a3\u00a5\t\5\2\2"+
		"\u00a4\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a4\3\2\2\2\u00a6\u00a7"+
		"\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a9\b\30\2\2\u00a9\60\3\2\2\2\u00aa"+
		"\u00ac\t\6\2\2\u00ab\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00ab\3\2"+
		"\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b0\3\2\2\2\u00af\u00b1\t\7\2\2\u00b0"+
		"\u00af\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2"+
		"\2\2\u00b3\62\3\2\2\2\f\2[`ch\u0092\u009c\u00a6\u00ad\u00b2\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
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
		PROGRAMS=1, DISPLAY=2, MUL=3, DIV=4, PLUS=5, MINUS=6, EVENTS=7, CONCERNING=8, 
		NUMBER=9, NOT=10, GT=11, LT=12, GE=13, LE=14, EQ=15, NE=16, AND=17, OR=18, 
		MARK_AS=19, IS=20, WHEN=21, THEN=22, EOL=23, COMMENT=24, WS=25, IDENTIFIER=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAMS", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENTS", "CONCERNING", 
			"NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", "OR", "MARK_AS", 
			"IS", "WHEN", "THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'programs'", "'display'", "'*'", "'/'", "'+'", "'-'", "'events'", 
			"'concerning'", null, "'not'", "'>'", "'<'", "'>='", "'<='", "'='", "'!='", 
			"'and'", "'or'", "'mark as'", "'is'", "'when'", "'then'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAMS", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENTS", 
			"CONCERNING", "NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", 
			"OR", "MARK_AS", "IS", "WHEN", "THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\34\u00c2\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\5\nd\n"+
		"\n\3\n\6\ng\n\n\r\n\16\nh\3\n\5\nl\n\n\3\n\7\no\n\n\f\n\16\nr\13\n\3\13"+
		"\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20"+
		"\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27"+
		"\3\27\3\27\3\27\3\30\6\30\u00a4\n\30\r\30\16\30\u00a5\3\30\3\30\3\31\3"+
		"\31\3\31\3\31\7\31\u00ae\n\31\f\31\16\31\u00b1\13\31\3\31\3\31\3\32\6"+
		"\32\u00b6\n\32\r\32\16\32\u00b7\3\32\3\32\3\33\3\33\7\33\u00be\n\33\f"+
		"\33\16\33\u00c1\13\33\2\2\34\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13"+
		"\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61"+
		"\32\63\33\65\34\3\2\b\3\2\62;\4\2..\60\60\4\2\f\f\17\17\4\2\13\13\"\""+
		"\4\2C\\c|\6\2\62;C\\aac|\2\u00c9\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\3\67\3\2\2\2\5@\3\2\2\2\7H\3\2\2\2\tJ\3\2\2\2\13L\3\2\2\2\rN\3\2\2"+
		"\2\17P\3\2\2\2\21W\3\2\2\2\23c\3\2\2\2\25s\3\2\2\2\27w\3\2\2\2\31y\3\2"+
		"\2\2\33{\3\2\2\2\35~\3\2\2\2\37\u0081\3\2\2\2!\u0083\3\2\2\2#\u0086\3"+
		"\2\2\2%\u008a\3\2\2\2\'\u008d\3\2\2\2)\u0095\3\2\2\2+\u0098\3\2\2\2-\u009d"+
		"\3\2\2\2/\u00a3\3\2\2\2\61\u00a9\3\2\2\2\63\u00b5\3\2\2\2\65\u00bb\3\2"+
		"\2\2\678\7r\2\289\7t\2\29:\7q\2\2:;\7i\2\2;<\7t\2\2<=\7c\2\2=>\7o\2\2"+
		">?\7u\2\2?\4\3\2\2\2@A\7f\2\2AB\7k\2\2BC\7u\2\2CD\7r\2\2DE\7n\2\2EF\7"+
		"c\2\2FG\7{\2\2G\6\3\2\2\2HI\7,\2\2I\b\3\2\2\2JK\7\61\2\2K\n\3\2\2\2LM"+
		"\7-\2\2M\f\3\2\2\2NO\7/\2\2O\16\3\2\2\2PQ\7g\2\2QR\7x\2\2RS\7g\2\2ST\7"+
		"p\2\2TU\7v\2\2UV\7u\2\2V\20\3\2\2\2WX\7e\2\2XY\7q\2\2YZ\7p\2\2Z[\7e\2"+
		"\2[\\\7g\2\2\\]\7t\2\2]^\7p\2\2^_\7k\2\2_`\7p\2\2`a\7i\2\2a\22\3\2\2\2"+
		"bd\7/\2\2cb\3\2\2\2cd\3\2\2\2df\3\2\2\2eg\t\2\2\2fe\3\2\2\2gh\3\2\2\2"+
		"hf\3\2\2\2hi\3\2\2\2ik\3\2\2\2jl\t\3\2\2kj\3\2\2\2kl\3\2\2\2lp\3\2\2\2"+
		"mo\t\2\2\2nm\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2q\24\3\2\2\2rp\3\2\2"+
		"\2st\7p\2\2tu\7q\2\2uv\7v\2\2v\26\3\2\2\2wx\7@\2\2x\30\3\2\2\2yz\7>\2"+
		"\2z\32\3\2\2\2{|\7@\2\2|}\7?\2\2}\34\3\2\2\2~\177\7>\2\2\177\u0080\7?"+
		"\2\2\u0080\36\3\2\2\2\u0081\u0082\7?\2\2\u0082 \3\2\2\2\u0083\u0084\7"+
		"#\2\2\u0084\u0085\7?\2\2\u0085\"\3\2\2\2\u0086\u0087\7c\2\2\u0087\u0088"+
		"\7p\2\2\u0088\u0089\7f\2\2\u0089$\3\2\2\2\u008a\u008b\7q\2\2\u008b\u008c"+
		"\7t\2\2\u008c&\3\2\2\2\u008d\u008e\7o\2\2\u008e\u008f\7c\2\2\u008f\u0090"+
		"\7t\2\2\u0090\u0091\7m\2\2\u0091\u0092\7\"\2\2\u0092\u0093\7c\2\2\u0093"+
		"\u0094\7u\2\2\u0094(\3\2\2\2\u0095\u0096\7k\2\2\u0096\u0097\7u\2\2\u0097"+
		"*\3\2\2\2\u0098\u0099\7y\2\2\u0099\u009a\7j\2\2\u009a\u009b\7g\2\2\u009b"+
		"\u009c\7p\2\2\u009c,\3\2\2\2\u009d\u009e\7v\2\2\u009e\u009f\7j\2\2\u009f"+
		"\u00a0\7g\2\2\u00a0\u00a1\7p\2\2\u00a1.\3\2\2\2\u00a2\u00a4\t\4\2\2\u00a3"+
		"\u00a2\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2"+
		"\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\b\30\2\2\u00a8\60\3\2\2\2\u00a9\u00aa"+
		"\7\61\2\2\u00aa\u00ab\7\61\2\2\u00ab\u00af\3\2\2\2\u00ac\u00ae\n\4\2\2"+
		"\u00ad\u00ac\3\2\2\2\u00ae\u00b1\3\2\2\2\u00af\u00ad\3\2\2\2\u00af\u00b0"+
		"\3\2\2\2\u00b0\u00b2\3\2\2\2\u00b1\u00af\3\2\2\2\u00b2\u00b3\b\31\2\2"+
		"\u00b3\62\3\2\2\2\u00b4\u00b6\t\5\2\2\u00b5\u00b4\3\2\2\2\u00b6\u00b7"+
		"\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\u00ba\b\32\2\2\u00ba\64\3\2\2\2\u00bb\u00bf\t\6\2\2\u00bc\u00be\t\7\2"+
		"\2\u00bd\u00bc\3\2\2\2\u00be\u00c1\3\2\2\2\u00bf\u00bd\3\2\2\2\u00bf\u00c0"+
		"\3\2\2\2\u00c0\66\3\2\2\2\u00c1\u00bf\3\2\2\2\13\2chkp\u00a5\u00af\u00b7"+
		"\u00bf\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
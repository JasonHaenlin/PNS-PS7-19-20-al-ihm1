// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PolygramLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PROGRAM=1, DISPLAY=2, MUL=3, DIV=4, PLUS=5, MINUS=6, EVENT=7, FOREACH=8, 
		NUMBER=9, NOT=10, GT=11, LT=12, GE=13, LE=14, EQ=15, NE=16, AND=17, OR=18, 
		MARK_AS=19, WHEN=20, THEN=21, IMPORTANT=22, EOL=23, COMMENT=24, WS=25, 
		IDENTIFIER=26;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PROGRAM", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENT", "FOREACH", 
			"NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", "OR", "MARK_AS", 
			"WHEN", "THEN", "IMPORTANT", "EOL", "COMMENT", "WS", "IDENTIFIER"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'program'", "'display'", "'*'", "'/'", "'+'", "'-'", "'event'", 
			"'for each'", null, "'not'", "'>'", "'<'", "'>='", "'<='", "'='", "'!='", 
			"'and'", "'or'", "'mark as'", "'when'", "'then'", "'important'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PROGRAM", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENT", "FOREACH", 
			"NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", "OR", "MARK_AS", 
			"WHEN", "THEN", "IMPORTANT", "EOL", "COMMENT", "WS", "IDENTIFIER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\34\u00c5\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\5\n`\n\n\3\n\6\nc\n\n\r"+
		"\n\16\nd\3\n\5\nh\n\n\3\n\7\nk\n\n\f\n\16\nn\13\n\3\13\3\13\3\13\3\13"+
		"\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\21"+
		"\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\30\6\30\u00a7\n\30\r\30\16\30\u00a8"+
		"\3\30\3\30\3\31\3\31\3\31\3\31\7\31\u00b1\n\31\f\31\16\31\u00b4\13\31"+
		"\3\31\3\31\3\32\6\32\u00b9\n\32\r\32\16\32\u00ba\3\32\3\32\3\33\3\33\7"+
		"\33\u00c1\n\33\f\33\16\33\u00c4\13\33\2\2\34\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26"+
		"+\27-\30/\31\61\32\63\33\65\34\3\2\b\3\2\62;\4\2..\60\60\4\2\f\f\17\17"+
		"\4\2\13\13\"\"\4\2C\\c|\6\2\62;C\\aac|\2\u00cc\2\3\3\2\2\2\2\5\3\2\2\2"+
		"\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3"+
		"\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2"+
		"\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2"+
		"\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2"+
		"\2\2\2\65\3\2\2\2\3\67\3\2\2\2\5?\3\2\2\2\7G\3\2\2\2\tI\3\2\2\2\13K\3"+
		"\2\2\2\rM\3\2\2\2\17O\3\2\2\2\21U\3\2\2\2\23_\3\2\2\2\25o\3\2\2\2\27s"+
		"\3\2\2\2\31u\3\2\2\2\33w\3\2\2\2\35z\3\2\2\2\37}\3\2\2\2!\177\3\2\2\2"+
		"#\u0082\3\2\2\2%\u0086\3\2\2\2\'\u0089\3\2\2\2)\u0091\3\2\2\2+\u0096\3"+
		"\2\2\2-\u009b\3\2\2\2/\u00a6\3\2\2\2\61\u00ac\3\2\2\2\63\u00b8\3\2\2\2"+
		"\65\u00be\3\2\2\2\678\7r\2\289\7t\2\29:\7q\2\2:;\7i\2\2;<\7t\2\2<=\7c"+
		"\2\2=>\7o\2\2>\4\3\2\2\2?@\7f\2\2@A\7k\2\2AB\7u\2\2BC\7r\2\2CD\7n\2\2"+
		"DE\7c\2\2EF\7{\2\2F\6\3\2\2\2GH\7,\2\2H\b\3\2\2\2IJ\7\61\2\2J\n\3\2\2"+
		"\2KL\7-\2\2L\f\3\2\2\2MN\7/\2\2N\16\3\2\2\2OP\7g\2\2PQ\7x\2\2QR\7g\2\2"+
		"RS\7p\2\2ST\7v\2\2T\20\3\2\2\2UV\7h\2\2VW\7q\2\2WX\7t\2\2XY\7\"\2\2YZ"+
		"\7g\2\2Z[\7c\2\2[\\\7e\2\2\\]\7j\2\2]\22\3\2\2\2^`\7/\2\2_^\3\2\2\2_`"+
		"\3\2\2\2`b\3\2\2\2ac\t\2\2\2ba\3\2\2\2cd\3\2\2\2db\3\2\2\2de\3\2\2\2e"+
		"g\3\2\2\2fh\t\3\2\2gf\3\2\2\2gh\3\2\2\2hl\3\2\2\2ik\t\2\2\2ji\3\2\2\2"+
		"kn\3\2\2\2lj\3\2\2\2lm\3\2\2\2m\24\3\2\2\2nl\3\2\2\2op\7p\2\2pq\7q\2\2"+
		"qr\7v\2\2r\26\3\2\2\2st\7@\2\2t\30\3\2\2\2uv\7>\2\2v\32\3\2\2\2wx\7@\2"+
		"\2xy\7?\2\2y\34\3\2\2\2z{\7>\2\2{|\7?\2\2|\36\3\2\2\2}~\7?\2\2~ \3\2\2"+
		"\2\177\u0080\7#\2\2\u0080\u0081\7?\2\2\u0081\"\3\2\2\2\u0082\u0083\7c"+
		"\2\2\u0083\u0084\7p\2\2\u0084\u0085\7f\2\2\u0085$\3\2\2\2\u0086\u0087"+
		"\7q\2\2\u0087\u0088\7t\2\2\u0088&\3\2\2\2\u0089\u008a\7o\2\2\u008a\u008b"+
		"\7c\2\2\u008b\u008c\7t\2\2\u008c\u008d\7m\2\2\u008d\u008e\7\"\2\2\u008e"+
		"\u008f\7c\2\2\u008f\u0090\7u\2\2\u0090(\3\2\2\2\u0091\u0092\7y\2\2\u0092"+
		"\u0093\7j\2\2\u0093\u0094\7g\2\2\u0094\u0095\7p\2\2\u0095*\3\2\2\2\u0096"+
		"\u0097\7v\2\2\u0097\u0098\7j\2\2\u0098\u0099\7g\2\2\u0099\u009a\7p\2\2"+
		"\u009a,\3\2\2\2\u009b\u009c\7k\2\2\u009c\u009d\7o\2\2\u009d\u009e\7r\2"+
		"\2\u009e\u009f\7q\2\2\u009f\u00a0\7t\2\2\u00a0\u00a1\7v\2\2\u00a1\u00a2"+
		"\7c\2\2\u00a2\u00a3\7p\2\2\u00a3\u00a4\7v\2\2\u00a4.\3\2\2\2\u00a5\u00a7"+
		"\t\4\2\2\u00a6\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8"+
		"\u00a9\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ab\b\30\2\2\u00ab\60\3\2\2"+
		"\2\u00ac\u00ad\7\61\2\2\u00ad\u00ae\7\61\2\2\u00ae\u00b2\3\2\2\2\u00af"+
		"\u00b1\n\4\2\2\u00b0\u00af\3\2\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b0\3\2"+
		"\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5"+
		"\u00b6\b\31\2\2\u00b6\62\3\2\2\2\u00b7\u00b9\t\5\2\2\u00b8\u00b7\3\2\2"+
		"\2\u00b9\u00ba\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bc"+
		"\3\2\2\2\u00bc\u00bd\b\32\2\2\u00bd\64\3\2\2\2\u00be\u00c2\t\6\2\2\u00bf"+
		"\u00c1\t\7\2\2\u00c0\u00bf\3\2\2\2\u00c1\u00c4\3\2\2\2\u00c2\u00c0\3\2"+
		"\2\2\u00c2\u00c3\3\2\2\2\u00c3\66\3\2\2\2\u00c4\u00c2\3\2\2\2\13\2_dg"+
		"l\u00a8\u00b2\u00ba\u00c2\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
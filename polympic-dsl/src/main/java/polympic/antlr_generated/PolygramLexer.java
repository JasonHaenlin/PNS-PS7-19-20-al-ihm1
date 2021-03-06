// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic.antlr_generated;
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
		IT_STEPS=1, DISPLAY=2, MUL=3, DIV=4, PLUS=5, MINUS=6, EVENTS=7, PREFS=8, 
		CONCERNING=9, NUMBER=10, NOT=11, GT=12, LT=13, GE=14, LE=15, EQ=16, NE=17, 
		AND=18, OR=19, MARK_AS=20, IS=21, WHEN=22, THEN=23, EOL=24, COMMENT=25, 
		WS=26, IDENTIFIER=27;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"IT_STEPS", "DISPLAY", "MUL", "DIV", "PLUS", "MINUS", "EVENTS", "PREFS", 
			"CONCERNING", "NUMBER", "NOT", "GT", "LT", "GE", "LE", "EQ", "NE", "AND", 
			"OR", "MARK_AS", "IS", "WHEN", "THEN", "EOL", "COMMENT", "WS", "IDENTIFIER"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\35\u00f7\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4"+
		"\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\5\t\u008b\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3"+
		"\13\5\13\u0099\n\13\3\13\6\13\u009c\n\13\r\13\16\13\u009d\3\13\5\13\u00a1"+
		"\n\13\3\13\7\13\u00a4\n\13\f\13\16\13\u00a7\13\13\3\f\3\f\3\f\3\f\3\r"+
		"\3\r\3\16\3\16\3\17\3\17\3\17\3\20\3\20\3\20\3\21\3\21\3\22\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\25\3\25"+
		"\3\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\3\30\3\30\3\30\3\30\3\30"+
		"\3\31\6\31\u00d9\n\31\r\31\16\31\u00da\3\31\3\31\3\32\3\32\3\32\3\32\7"+
		"\32\u00e3\n\32\f\32\16\32\u00e6\13\32\3\32\3\32\3\33\6\33\u00eb\n\33\r"+
		"\33\16\33\u00ec\3\33\3\33\3\34\3\34\7\34\u00f3\n\34\f\34\16\34\u00f6\13"+
		"\34\2\2\35\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33"+
		"\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67"+
		"\35\3\2\b\3\2\62;\4\2..\60\60\4\2\f\f\17\17\4\2\13\13\"\"\4\2C\\c|\6\2"+
		"\62;C\\aac|\2\u00ff\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2"+
		"\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2"+
		"\2\2\39\3\2\2\2\5I\3\2\2\2\7Q\3\2\2\2\tS\3\2\2\2\13U\3\2\2\2\rW\3\2\2"+
		"\2\17Y\3\2\2\2\21\u008a\3\2\2\2\23\u008c\3\2\2\2\25\u0098\3\2\2\2\27\u00a8"+
		"\3\2\2\2\31\u00ac\3\2\2\2\33\u00ae\3\2\2\2\35\u00b0\3\2\2\2\37\u00b3\3"+
		"\2\2\2!\u00b6\3\2\2\2#\u00b8\3\2\2\2%\u00bb\3\2\2\2\'\u00bf\3\2\2\2)\u00c2"+
		"\3\2\2\2+\u00ca\3\2\2\2-\u00cd\3\2\2\2/\u00d2\3\2\2\2\61\u00d8\3\2\2\2"+
		"\63\u00de\3\2\2\2\65\u00ea\3\2\2\2\67\u00f0\3\2\2\29:\7k\2\2:;\7v\2\2"+
		";<\7k\2\2<=\7p\2\2=>\7g\2\2>?\7t\2\2?@\7c\2\2@A\7t\2\2AB\7{\2\2BC\7\""+
		"\2\2CD\7u\2\2DE\7v\2\2EF\7g\2\2FG\7r\2\2GH\7u\2\2H\4\3\2\2\2IJ\7f\2\2"+
		"JK\7k\2\2KL\7u\2\2LM\7r\2\2MN\7n\2\2NO\7c\2\2OP\7{\2\2P\6\3\2\2\2QR\7"+
		",\2\2R\b\3\2\2\2ST\7\61\2\2T\n\3\2\2\2UV\7-\2\2V\f\3\2\2\2WX\7/\2\2X\16"+
		"\3\2\2\2YZ\7c\2\2Z[\7n\2\2[\\\7n\2\2\\]\7\"\2\2]^\7g\2\2^_\7x\2\2_`\7"+
		"g\2\2`a\7p\2\2ab\7v\2\2bc\7u\2\2c\20\3\2\2\2de\7g\2\2ef\7x\2\2fg\7g\2"+
		"\2gh\7p\2\2hi\7v\2\2ij\7u\2\2jk\7\"\2\2kl\7o\2\2lm\7c\2\2mn\7v\2\2no\7"+
		"e\2\2op\7j\2\2pq\7k\2\2qr\7p\2\2rs\7i\2\2st\7\"\2\2tu\7r\2\2uv\7t\2\2"+
		"vw\7g\2\2wx\7h\2\2xy\7g\2\2yz\7t\2\2z{\7g\2\2{|\7p\2\2|}\7e\2\2}~\7g\2"+
		"\2~\u008b\7u\2\2\177\u0080\7r\2\2\u0080\u0081\7t\2\2\u0081\u0082\7g\2"+
		"\2\u0082\u0083\7h\2\2\u0083\u0084\7g\2\2\u0084\u0085\7t\2\2\u0085\u0086"+
		"\7g\2\2\u0086\u0087\7p\2\2\u0087\u0088\7e\2\2\u0088\u0089\7g\2\2\u0089"+
		"\u008b\7u\2\2\u008ad\3\2\2\2\u008a\177\3\2\2\2\u008b\22\3\2\2\2\u008c"+
		"\u008d\7e\2\2\u008d\u008e\7q\2\2\u008e\u008f\7p\2\2\u008f\u0090\7e\2\2"+
		"\u0090\u0091\7g\2\2\u0091\u0092\7t\2\2\u0092\u0093\7p\2\2\u0093\u0094"+
		"\7k\2\2\u0094\u0095\7p\2\2\u0095\u0096\7i\2\2\u0096\24\3\2\2\2\u0097\u0099"+
		"\7/\2\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2\2\2\u0099\u009b\3\2\2\2\u009a"+
		"\u009c\t\2\2\2\u009b\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u009b\3\2"+
		"\2\2\u009d\u009e\3\2\2\2\u009e\u00a0\3\2\2\2\u009f\u00a1\t\3\2\2\u00a0"+
		"\u009f\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a5\3\2\2\2\u00a2\u00a4\t\2"+
		"\2\2\u00a3\u00a2\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5"+
		"\u00a6\3\2\2\2\u00a6\26\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00a9\7p\2\2"+
		"\u00a9\u00aa\7q\2\2\u00aa\u00ab\7v\2\2\u00ab\30\3\2\2\2\u00ac\u00ad\7"+
		"@\2\2\u00ad\32\3\2\2\2\u00ae\u00af\7>\2\2\u00af\34\3\2\2\2\u00b0\u00b1"+
		"\7@\2\2\u00b1\u00b2\7?\2\2\u00b2\36\3\2\2\2\u00b3\u00b4\7>\2\2\u00b4\u00b5"+
		"\7?\2\2\u00b5 \3\2\2\2\u00b6\u00b7\7?\2\2\u00b7\"\3\2\2\2\u00b8\u00b9"+
		"\7#\2\2\u00b9\u00ba\7?\2\2\u00ba$\3\2\2\2\u00bb\u00bc\7c\2\2\u00bc\u00bd"+
		"\7p\2\2\u00bd\u00be\7f\2\2\u00be&\3\2\2\2\u00bf\u00c0\7q\2\2\u00c0\u00c1"+
		"\7t\2\2\u00c1(\3\2\2\2\u00c2\u00c3\7o\2\2\u00c3\u00c4\7c\2\2\u00c4\u00c5"+
		"\7t\2\2\u00c5\u00c6\7m\2\2\u00c6\u00c7\7\"\2\2\u00c7\u00c8\7c\2\2\u00c8"+
		"\u00c9\7u\2\2\u00c9*\3\2\2\2\u00ca\u00cb\7k\2\2\u00cb\u00cc\7u\2\2\u00cc"+
		",\3\2\2\2\u00cd\u00ce\7y\2\2\u00ce\u00cf\7j\2\2\u00cf\u00d0\7g\2\2\u00d0"+
		"\u00d1\7p\2\2\u00d1.\3\2\2\2\u00d2\u00d3\7v\2\2\u00d3\u00d4\7j\2\2\u00d4"+
		"\u00d5\7g\2\2\u00d5\u00d6\7p\2\2\u00d6\60\3\2\2\2\u00d7\u00d9\t\4\2\2"+
		"\u00d8\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db"+
		"\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00dd\b\31\2\2\u00dd\62\3\2\2\2\u00de"+
		"\u00df\7\61\2\2\u00df\u00e0\7\61\2\2\u00e0\u00e4\3\2\2\2\u00e1\u00e3\n"+
		"\4\2\2\u00e2\u00e1\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e4"+
		"\u00e5\3\2\2\2\u00e5\u00e7\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7\u00e8\b\32"+
		"\2\2\u00e8\64\3\2\2\2\u00e9\u00eb\t\5\2\2\u00ea\u00e9\3\2\2\2\u00eb\u00ec"+
		"\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee"+
		"\u00ef\b\33\2\2\u00ef\66\3\2\2\2\u00f0\u00f4\t\6\2\2\u00f1\u00f3\t\7\2"+
		"\2\u00f2\u00f1\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2\u00f4\u00f5"+
		"\3\2\2\2\u00f58\3\2\2\2\u00f6\u00f4\3\2\2\2\f\2\u008a\u0098\u009d\u00a0"+
		"\u00a5\u00da\u00e4\u00ec\u00f4\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
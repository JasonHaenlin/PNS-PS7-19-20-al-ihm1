package polympic;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.ATNConfigSet;
import org.antlr.v4.runtime.dfa.DFA;

import java.io.IOException;
import java.util.BitSet;


public class MainPolygram implements ANTLRErrorListener {

    static String getJSCodeForRunFunction(RuleContext tree) {
        GeneratorVisitor visitor = new GeneratorVisitor();
        String result = "function run(array, user_prefs) {\n    ";
        result += "let output = [];\n    ";
        result += visitor.visit(tree);
        result += "return output;\n};\n";
        result += "module.exports = { run };";
        return result;
    }

    static String runCompilation(String filePath) throws IOException {
        CharStream input;
        if (filePath.equals("")) {
            input = new ANTLRInputStream(System.in);
        } else {
            input = new ANTLRFileStream(filePath);
        }
        PolygramLexer lexer = new PolygramLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PolygramParser parser = new PolygramParser(tokens);

        ANTLRErrorListener errorListener = new MainPolygram();
        parser.addErrorListener(errorListener);

        parser.setBuildParseTree(true);

        return getJSCodeForRunFunction(parser.program());
    }

    /**
     * Compiles the specified file written in Polygram.
     *
     * @param args When no arguments : waits for std in input
     *             when 1 argument : compiles the specified file target
     * @throws IOException
     */
    public static void main(String[] args) throws IOException {
        String compiledCode;
        if (args.length == 0) {
            compiledCode = MainPolygram.runCompilation("");
        } else if (args.length == 1) {
            compiledCode = MainPolygram.runCompilation(args[0]);
        } else {
            throw new IllegalArgumentException("Expected 0 or 1 argument.");
        }
        System.out.println(compiledCode);
    }

    @Override
    public void syntaxError(Recognizer<?, ?> recognizer, Object o, int i, int i1, String s, RecognitionException e) {
        throw new ThrowableSyntaxErrorException(i, i1, "Syntax error at line " + i + " column " + i1 + " ; " + s);
    }

    @Override
    public void reportAmbiguity(Parser recognizer, DFA dfa, int startIndex, int stopIndex, boolean exact, BitSet ambigAlts, ATNConfigSet configs) {
        // Ignored
    }

    @Override
    public void reportAttemptingFullContext(Parser recognizer, DFA dfa, int startIndex, int stopIndex, BitSet conflictingAlts, ATNConfigSet configs) {
        // Ignored
    }

    @Override
    public void reportContextSensitivity(Parser recognizer, DFA dfa, int startIndex, int stopIndex, int prediction, ATNConfigSet configs) {
        // Ignored
    }

}

package polympic;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.ATNConfigSet;
import org.antlr.v4.runtime.dfa.DFA;

import java.io.IOException;
import java.util.BitSet;


public class MainPolygram implements ANTLRErrorListener {

    static String getJSCodeForRunFunction(RuleContext tree) {
        GeneratorVisitor visitor = new GeneratorVisitor();
        String result = "function run(array) {\n    ";
        result += "let output = [];\n    ";
        result += visitor.visit(tree);
        result += "\n    return output;\n};\n";
        result += "module.exports = { run };";
        return result;
    }

    public static void main(String[] args) throws IOException {

        CharStream input;
        if (args.length == 0) {
            input = new ANTLRInputStream(System.in);
        } else if (args.length == 1) {
            input = new ANTLRFileStream(args[0]);
        } else {
            throw new IllegalArgumentException("Expected 0 or 1 argument");
        }
        PolygramLexer lexer = new PolygramLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PolygramParser parser = new PolygramParser(tokens);


        ANTLRErrorListener errorListener = new MainPolygram();
        parser.addErrorListener(errorListener);


        parser.setBuildParseTree(true);

        System.out.println(getJSCodeForRunFunction(parser.program()));

    }

    @Override
    public void syntaxError(Recognizer<?, ?> recognizer, Object o, int i, int i1, String s, RecognitionException e) {
        throw new ThrowableSyntaxErrorException("Syntax error at line " + i + " column " + i1 + " ; " + s);
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

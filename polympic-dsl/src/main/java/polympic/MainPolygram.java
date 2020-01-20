package polympic;

import org.antlr.v4.runtime.*;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;


public class MainPolygram {

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
        }
        else {
            throw new IllegalArgumentException("Expected 0 or 1 argument");
        }
        PolygramLexer lexer = new PolygramLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PolygramParser parser = new PolygramParser(tokens);
        parser.setBuildParseTree(true);

        System.out.println(getJSCodeForRunFunction(parser.program()));
    }

}

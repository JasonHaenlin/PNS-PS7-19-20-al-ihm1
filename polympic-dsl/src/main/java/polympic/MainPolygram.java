package polympic;

import org.antlr.v4.runtime.*;

import java.io.IOException;


public class MainPolygram {

    public static void main(String[] args) throws IOException {

        CharStream input = new ANTLRInputStream(System.in);
        PolygramLexer lexer = new PolygramLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PolygramParser parser = new PolygramParser(tokens);
        parser.setBuildParseTree(true);
        RuleContext tree = parser.program();
        GeneratorVisitor visitor = new GeneratorVisitor();
        String result = "function run(array) {\n    ";
        result += "eval('./lib.js');\n    ";
        result += "let output = [];\n    ";
        result += visitor.visit(tree);
        result += "\n    return output;\n};\n";
        result += "module.exports = { run };";
        System.out.println(result);

    }

}

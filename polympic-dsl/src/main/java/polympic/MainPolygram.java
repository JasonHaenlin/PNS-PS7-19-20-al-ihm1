package polympic;

import org.antlr.v4.runtime.*;

import java.io.IOException;


public class MainPolygram {

    public static void main(String[] args) throws IOException {

        CharStream input = new ANTLRFileStream("C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/resources/sample-code.txt");
        PolygramLexer lexer = new PolygramLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PolygramParser parser = new PolygramParser(tokens);
        parser.setBuildParseTree(true);
        RuleContext tree = parser.program();
        GeneratorVisitor visitor = new GeneratorVisitor();
        String result = visitor.visit(tree);
        System.out.println(result);

    }

}

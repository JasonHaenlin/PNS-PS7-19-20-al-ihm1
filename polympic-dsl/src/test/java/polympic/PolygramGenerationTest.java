package polympic;

import org.antlr.v4.runtime.ANTLRFileStream;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PolygramGenerationTest {

    CharStream input;
    String scriptToExecute;
    ScriptEngine engine;

    PolygramLexer lexer;
    CommonTokenStream tokens;
    PolygramParser parser;

    Invocable inv;

    @BeforeEach
    void setUp() {
        ScriptEngineManager manager = new ScriptEngineManager();
        engine = manager.getEngineByName("JavaScript");
    }

    @Disabled
    @Test
    void simpleBasicTest() throws IOException, ScriptException, NoSuchMethodException {
        input = new ANTLRFileStream("src/main/resources/sample-code.txt");

        lexer = new PolygramLexer(input);
        tokens = new CommonTokenStream(lexer);
        parser = new PolygramParser(tokens);

        parser.setBuildParseTree(true);

        scriptToExecute = MainPolygram.getJSCodeForRunFunction(parser.program());

        // evaluate script
        engine.eval(scriptToExecute);

        inv = (Invocable) engine;

        List<String> events = new ArrayList<>(Arrays.asList("1", "2", "3"));

        inv.invokeFunction("run", events);
    }
}
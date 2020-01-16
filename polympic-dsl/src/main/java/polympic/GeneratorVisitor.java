package polympic;

import org.antlr.v4.runtime.tree.TerminalNode;

public class GeneratorVisitor extends PolygramBaseVisitor<String> {

    private static final String EVENT = "event";
    private static final String PROGRAM = "program";

    int indentation = 0;
    String subject;

    private String indent() {
        indentation++;
        String indent = "\n";
        for (int i = 0; i < indentation; i++) {
            indent += "    ";
        }
        return indent;
    }

    private String unIndent() {
        indentation--;
        String indent = "\n";
        for (int i = 0; i < indentation; i++) {
            indent += "    ";
        }
        indent += "}";
        return indent;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#program}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitProgram(PolygramParser.ProgramContext ctx) {
        String result = "";
        indentation++;
        result += "for (const ";
        result += this.visitSubject(ctx.subject());
        result += this.indent();
        for (PolygramParser.StatementContext statementContext : ctx.statement()) {
            result += this.visitStatement(statementContext);
        }
        result += this.unIndent();
        indentation--;
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#subject}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitSubject(PolygramParser.SubjectContext ctx) {
        String result = "";
        if (ctx.PROGRAM() != null) {
            this.subject = GeneratorVisitor.EVENT;
        } else if (ctx.EVENT() != null) {
            this.subject = GeneratorVisitor.PROGRAM;
        }
        result += subject + " of array) {";
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#statement}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitStatement(PolygramParser.StatementContext ctx) {
        return this.visitChildren(ctx);
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#condition}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitCondition(PolygramParser.ConditionContext ctx) {
        String result = "";
        if (ctx.WHEN() != null) {
            result += "if (";
            result += this.visitBool(ctx.bool());
            result += ") {";
            if (ctx.THEN() != null) {
                result += indent();
                for (PolygramParser.StatementContext statement : ctx.statement()) {
                    result += this.visitStatement(statement);
                }
            }
        }
        result += unIndent();
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#action}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitAction(PolygramParser.ActionContext ctx) {
        String result = "";
        if (ctx.DISPLAY() != null) {
            result += "display();";
        }
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#bool}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitBool(PolygramParser.BoolContext ctx) {
        String result = "";
        if (ctx.IDENTIFIER() != null) {
            result += ctx.getText();
        } else if (ctx.number_cmp() != null) {
            result += this.visitNumber_cmp(ctx.number_cmp());
        } else {
            result += this.visitBool(ctx.bool());
            result += this.visitBool_cmp((ctx.bool_cmp()));
        }
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#number}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitNumber(PolygramParser.NumberContext ctx) {
        String result = "";
        if (ctx.IDENTIFIER() != null) {
            result += ctx.getText();
        } else if (ctx.NUMBER() != null) {
            result += ctx.getText();
        } else {
            result += visitNumber(ctx.number(0));
            if (ctx.MUL() != null) {
                result += " * ";
            } else if (ctx.DIV() != null) {
                result += " / ";
            } else if (ctx.PLUS() != null) {
                result += " + ";
            } else if (ctx.MINUS() != null) {
                result += " - ";
            }
            result += visitNumber(ctx.number(1));
        }
        return result;
    }

    /**
     * {@inheritDoc}
     *
     * <p>The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.</p>
     *
     * @param ctx
     */
    @Override
    public String visitNumber_cmp(PolygramParser.Number_cmpContext ctx) {
        String result = "";
        result += this.visitNumber(ctx.number(0));
        if (ctx.GT() != null)
            result += " > ";
        else if (ctx.LT() != null)
            result += " < ";
        else if (ctx.EQ() != null)
            result += " == ";
        else if (ctx.GE() != null)
            result += " >= ";
        else if (ctx.LE() != null)
            result += " <= ";
        else if (ctx.NE() != null)
            result += " != ";
        result += this.visitNumber(ctx.number(1));
        return result;
    }

    /**
     * {@inheritDoc}
     *
     * <p>The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.</p>
     *
     * @param ctx
     */
    @Override
    public String visitBool_cmp(PolygramParser.Bool_cmpContext ctx) {
        String result = "";
        if (ctx.AND() != null) {
            result += " && ";
        } else if (ctx.OR() != null) {
            result += " || ";
        }
        result += this.visitBool(ctx.bool());
        return result;
    }

    @Override
    public String visitTerminal(TerminalNode terminalNode) {
        return null;
    }
}

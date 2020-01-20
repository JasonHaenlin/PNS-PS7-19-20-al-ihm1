package polympic;

import org.antlr.v4.runtime.tree.TerminalNode;

public class GeneratorVisitor extends PolygramBaseVisitor<String> {

    private static final String EVENT = "event";
    private static final String PROGRAM = "program";

    private int indentation = 0;
    private String subject;

    private void updateIndentEnteringBlock() {
        indentation++;
    }

    private void updateIndentClosingBlock() {
        indentation--;
    }

    private String goToLine() {
        String indent = "\n";
        for (int i = 0; i < indentation; i++) {
            indent += "    ";
        }
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
        for (PolygramParser.StatementContext statementContext : ctx.statement()) {
            result += this.visitStatement(statementContext);
        }
        this.updateIndentClosingBlock();
        result += this.goToLine();
        result += "}";
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
        if (ctx.PROGRAMS() != null) {
            this.subject = GeneratorVisitor.PROGRAM;
        } else if (ctx.EVENTS() != null) {
            this.subject = GeneratorVisitor.EVENT;
        }
        result += subject + " of array) {";
        this.updateIndentEnteringBlock();
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
        String result = "";
        result += goToLine() + this.visitChildren(ctx);
        return result;
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
            result += this.visitExpr(ctx.expr());
            result += ") {";
            this.updateIndentEnteringBlock();
            if (ctx.THEN() != null) {
                result += this.visitStatement(ctx.statement());

            }
        }
        this.updateIndentClosingBlock();
        result += this.goToLine();
        result += "}";
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
            result += "output.push(" + subject + ");";
        } else if (ctx.place_state() != null) {
            result += this.visitPlace_state(ctx.place_state());
        }
        return result;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#expr}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitExpr(PolygramParser.ExprContext ctx) {
        String result = "";
        if (ctx.IDENTIFIER() != null) {
            result += this.subject + "." + ctx.getText();
        } else if (ctx.number_cmp() != null) {
            result += this.visitNumber_cmp(ctx.number_cmp());
        } else if (ctx.str_cmp() != null) {
            result += this.visitStr_cmp(ctx.str_cmp());
        } else if (ctx.bool_cmp() != null) {
            result += this.visitBool_cmp(ctx.bool_cmp());
        } else {
            result += this.visitExpr(ctx.expr());
            result += this.visitExpr_cmp((ctx.expr_cmp()));
        }
        return result;
    }

    /**
     * {@inheritDoc}
     *
     * <p>
     * The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.
     * </p>
     *
     * @param ctx
     */
    @Override
    public String visitStr_cmp(PolygramParser.Str_cmpContext ctx) {
        String result = "";
        result += this.subject + "." + ctx.IDENTIFIER(0).getText();
        result += " === ";
        result += "\"" + ctx.IDENTIFIER(1) + "\"";
        return result;
    }

    /**
     * {@inheritDoc}
     *
     * <p>
     * The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.
     * </p>
     *
     * @param ctx
     */
    @Override
    public String visitBool_cmp(PolygramParser.Bool_cmpContext ctx) {
        return this.subject + ".getSport() === \"" + ctx.IDENTIFIER().getText() + "\"";
    }

    /**
     * {@inheritDoc}
     *
     * <p>
     * The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.
     * </p>
     *
     * @param ctx
     */
    @Override
    public String visitPlace_state(PolygramParser.Place_stateContext ctx) {
        String result = "";
        for (PlaceState state : PlaceState.values()) {
            if (ctx.IDENTIFIER().getText().equals(state.getState())) {
                result += this.subject + ".setState(\"" + ctx.getText() + "\");";
                return result;
            }
        }
        throw new NoSuchStateException("The state " + ctx.IDENTIFIER().getText() + " does not exist.");
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
            result += this.subject + "." + ctx.getText();
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
     * <p>
     * The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.
     * </p>
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
     * <p>
     * The default implementation returns the result of calling
     * {@link #visitChildren} on {@code ctx}.
     * </p>
     *
     * @param ctx
     */
    @Override
    public String visitExpr_cmp(PolygramParser.Expr_cmpContext ctx) {
        String result = "";
        if (ctx.AND() != null) {
            result += " && ";
        } else if (ctx.OR() != null) {
            result += " || ";
        }
        result += this.visitExpr(ctx.expr());
        return result;
    }

    @Override
    public String visitTerminal(TerminalNode terminalNode) {
        return null;
    }
}

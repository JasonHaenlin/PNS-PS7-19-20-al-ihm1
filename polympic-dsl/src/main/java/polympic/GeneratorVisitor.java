package polympic;

import org.antlr.v4.runtime.tree.TerminalNode;

public class GeneratorVisitor extends PolygramBaseVisitor<String>{
    /**
     * Visit a parse tree produced by {@link PolygramParser#program}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitProgram(PolygramParser.ProgramContext ctx) {
        //System.out.println(ctx.getText());
        return ctx.getText();
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#subject}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitSubject(PolygramParser.SubjectContext ctx) {
        return null;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#statement}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitStatement(PolygramParser.StatementContext ctx) {
        return null;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#condition}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitCondition(PolygramParser.ConditionContext ctx) {
        return null;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#action}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitAction(PolygramParser.ActionContext ctx) {
        return null;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#bool}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitBool(PolygramParser.BoolContext ctx) {
        return null;
    }

    /**
     * Visit a parse tree produced by {@link PolygramParser#number}.
     *
     * @param ctx the parse tree
     * @return the visitor result
     */
    @Override
    public String visitNumber(PolygramParser.NumberContext ctx) {
        return null;
    }

    @Override
    public String visitTerminal(TerminalNode terminalNode) {
        return null;
    }
}

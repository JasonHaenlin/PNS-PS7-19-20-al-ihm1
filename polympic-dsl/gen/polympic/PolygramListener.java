// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PolygramParser}.
 */
public interface PolygramListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PolygramParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(PolygramParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(PolygramParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#sub_program_programs}.
	 * @param ctx the parse tree
	 */
	void enterSub_program_programs(PolygramParser.Sub_program_programsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#sub_program_programs}.
	 * @param ctx the parse tree
	 */
	void exitSub_program_programs(PolygramParser.Sub_program_programsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#sub_program_events}.
	 * @param ctx the parse tree
	 */
	void enterSub_program_events(PolygramParser.Sub_program_eventsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#sub_program_events}.
	 * @param ctx the parse tree
	 */
	void exitSub_program_events(PolygramParser.Sub_program_eventsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#subject_events}.
	 * @param ctx the parse tree
	 */
	void enterSubject_events(PolygramParser.Subject_eventsContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#subject_events}.
	 * @param ctx the parse tree
	 */
	void exitSubject_events(PolygramParser.Subject_eventsContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(PolygramParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(PolygramParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(PolygramParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(PolygramParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#action}.
	 * @param ctx the parse tree
	 */
	void enterAction(PolygramParser.ActionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#action}.
	 * @param ctx the parse tree
	 */
	void exitAction(PolygramParser.ActionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#place_state}.
	 * @param ctx the parse tree
	 */
	void enterPlace_state(PolygramParser.Place_stateContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#place_state}.
	 * @param ctx the parse tree
	 */
	void exitPlace_state(PolygramParser.Place_stateContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(PolygramParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(PolygramParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#str_cmp}.
	 * @param ctx the parse tree
	 */
	void enterStr_cmp(PolygramParser.Str_cmpContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#str_cmp}.
	 * @param ctx the parse tree
	 */
	void exitStr_cmp(PolygramParser.Str_cmpContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#number_cmp}.
	 * @param ctx the parse tree
	 */
	void enterNumber_cmp(PolygramParser.Number_cmpContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#number_cmp}.
	 * @param ctx the parse tree
	 */
	void exitNumber_cmp(PolygramParser.Number_cmpContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#expr_cmp}.
	 * @param ctx the parse tree
	 */
	void enterExpr_cmp(PolygramParser.Expr_cmpContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#expr_cmp}.
	 * @param ctx the parse tree
	 */
	void exitExpr_cmp(PolygramParser.Expr_cmpContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#bool_cmp}.
	 * @param ctx the parse tree
	 */
	void enterBool_cmp(PolygramParser.Bool_cmpContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#bool_cmp}.
	 * @param ctx the parse tree
	 */
	void exitBool_cmp(PolygramParser.Bool_cmpContext ctx);
	/**
	 * Enter a parse tree produced by {@link PolygramParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(PolygramParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link PolygramParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(PolygramParser.NumberContext ctx);
}
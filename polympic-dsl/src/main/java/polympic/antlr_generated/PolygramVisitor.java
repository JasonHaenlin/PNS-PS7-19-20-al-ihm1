// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic.antlr_generated;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link PolygramParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface PolygramVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link PolygramParser#program}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProgram(PolygramParser.ProgramContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#sub_prog_steps}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSub_prog_steps(PolygramParser.Sub_prog_stepsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#sub_prog_events}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSub_prog_events(PolygramParser.Sub_prog_eventsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#subject_it_steps}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubject_it_steps(PolygramParser.Subject_it_stepsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#subject_events}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubject_events(PolygramParser.Subject_eventsContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(PolygramParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondition(PolygramParser.ConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#action}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAction(PolygramParser.ActionContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#place_state}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlace_state(PolygramParser.Place_stateContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr(PolygramParser.ExprContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#str_cmp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStr_cmp(PolygramParser.Str_cmpContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#number_cmp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber_cmp(PolygramParser.Number_cmpContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#expr_cmp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpr_cmp(PolygramParser.Expr_cmpContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#bool_cmp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBool_cmp(PolygramParser.Bool_cmpContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(PolygramParser.NumberContext ctx);
}
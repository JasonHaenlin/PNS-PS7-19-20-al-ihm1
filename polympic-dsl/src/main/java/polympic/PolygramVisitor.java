// Generated from C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-dsl/src/main/java/polympic\Polygram.g4 by ANTLR 4.7.2
package polympic;
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
	 * Visit a parse tree produced by {@link PolygramParser#subject}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubject(PolygramParser.SubjectContext ctx);
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
	 * Visit a parse tree produced by {@link PolygramParser#bool}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBool(PolygramParser.BoolContext ctx);
	/**
	 * Visit a parse tree produced by {@link PolygramParser#number_cmp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber_cmp(PolygramParser.Number_cmpContext ctx);
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
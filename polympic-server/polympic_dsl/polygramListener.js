// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by polygramParser.
function polygramListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

polygramListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
polygramListener.prototype.constructor = polygramListener;

// Enter a parse tree produced by polygramParser#program.
polygramListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by polygramParser#program.
polygramListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by polygramParser#subject.
polygramListener.prototype.enterSubject = function(ctx) {
};

// Exit a parse tree produced by polygramParser#subject.
polygramListener.prototype.exitSubject = function(ctx) {
};


// Enter a parse tree produced by polygramParser#statement.
polygramListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by polygramParser#statement.
polygramListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by polygramParser#statement_list.
polygramListener.prototype.enterStatement_list = function(ctx) {
};

// Exit a parse tree produced by polygramParser#statement_list.
polygramListener.prototype.exitStatement_list = function(ctx) {
};


// Enter a parse tree produced by polygramParser#expression.
polygramListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by polygramParser#expression.
polygramListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by polygramParser#func_decl.
polygramListener.prototype.enterFunc_decl = function(ctx) {
};

// Exit a parse tree produced by polygramParser#func_decl.
polygramListener.prototype.exitFunc_decl = function(ctx) {
};


// Enter a parse tree produced by polygramParser#variable_prototype.
polygramListener.prototype.enterVariable_prototype = function(ctx) {
};

// Exit a parse tree produced by polygramParser#variable_prototype.
polygramListener.prototype.exitVariable_prototype = function(ctx) {
};



exports.polygramListener = polygramListener;
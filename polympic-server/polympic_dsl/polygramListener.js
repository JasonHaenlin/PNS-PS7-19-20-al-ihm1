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


// Enter a parse tree produced by polygramParser#expression.
polygramListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by polygramParser#expression.
polygramListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by polygramParser#action.
polygramListener.prototype.enterAction = function(ctx) {
};

// Exit a parse tree produced by polygramParser#action.
polygramListener.prototype.exitAction = function(ctx) {
};



exports.polygramListener = polygramListener;
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


// Enter a parse tree produced by polygramParser#condition.
polygramListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by polygramParser#condition.
polygramListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by polygramParser#action.
polygramListener.prototype.enterAction = function(ctx) {
};

// Exit a parse tree produced by polygramParser#action.
polygramListener.prototype.exitAction = function(ctx) {
};


// Enter a parse tree produced by polygramParser#bool.
polygramListener.prototype.enterBool = function(ctx) {
};

// Exit a parse tree produced by polygramParser#bool.
polygramListener.prototype.exitBool = function(ctx) {
};


// Enter a parse tree produced by polygramParser#number.
polygramListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by polygramParser#number.
polygramListener.prototype.exitNumber = function(ctx) {
};



exports.polygramListener = polygramListener;
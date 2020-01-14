// Generated from polygram.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by polygramParser.

function polygramVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

polygramVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
polygramVisitor.prototype.constructor = polygramVisitor;

// Visit a parse tree produced by polygramParser#program.
polygramVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#subject.
polygramVisitor.prototype.visitSubject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#statement.
polygramVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#condition.
polygramVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#action.
polygramVisitor.prototype.visitAction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#bool.
polygramVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#number.
polygramVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.polygramVisitor = polygramVisitor;
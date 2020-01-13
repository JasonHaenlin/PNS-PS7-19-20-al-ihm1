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
  console.log(ctx.getText() + "s.forEach(element => {");
  return this.visits(ctx);
};


// Visit a parse tree produced by polygramParser#statement.
polygramVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#action.
polygramVisitor.prototype.visitAction = function(ctx) {
  console.log(ctx.getText() + "(element);");
  return null;
};

// Visit a parse tree produced by polygramParser#action.
polygramVisitor.prototype.visitCondition = function(ctx) {
  console.log("if (");
  this.visitBool(ctx.getChild(1));
  console.log(") { ");
  this.visitAction(ctx.getChild(3));
  console.log(" }");
  return null;
};

// Visit a parse tree produced by polygramParser#bool.
polygramVisitor.prototype.visitBool = function(ctx) {
  if (ctx.getChildCount() == 1) {
    this.visitAttribute(ctx.getChild(0));
  } else if (ctx.getChildCount() == 2) {
    console.log("!");
    this.visitBool(ctx.getChild(1));
  } else if (ctx.getChildCount() == 3) {
    if (ctx.getToken(1) in [11, 12]) { // AND / OR
      this.visitBool(ctx.getChild(0));
      if (ctx.getToken(1) == 11) console.log(" && ");
      if (ctx.getToken(1) == 12) console.log(" || ");
      this.visitBool(ctx.getChild(2));
    } else { // > < >= <= = !=
      this.visitNumCmp(ctx);
    }
  }
  return null;
};

polygramVisitor.prototype.visitNumCmp = function(ctx) {
  console.log(ctx.getText());
  return null;
}

// Visit a parse tree produced by polygramParser#number.
polygramVisitor.prototype.visitNumber = function(ctx) {
  console.log(ctx.getText());
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#attribute.
polygramVisitor.prototype.visitAttribute = function(ctx) {
  console.log("element." + ctx.getText().toLowerCase());
  return null;
};



exports.polygramVisitor = polygramVisitor;

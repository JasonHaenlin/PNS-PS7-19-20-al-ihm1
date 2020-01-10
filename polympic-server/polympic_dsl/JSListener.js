import {write} from 'eslint';

var antlr4 = require('antlr4/index');
const calcListener = require('./calcListener.js').calcListener
const fs = require("fs")

// include directly the implementation of the compiler

//eval(fs.readFileSync("implement.js", "UTF-8"))

JSListener = function () {
  calcListener.call(this);
  return this;
}

JSListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JSListener.prototype.constructor = JSListener;

JSListener.tFileName = "test"

JSListener.prototype.enterProgram = function(ctx) {
  // create the target file
  openTarget()
};

JSListener.prototype.exitProgram = function(ctx) {
  // fill the target file and close it
  closeTarget()
};



JSListener.prototype.enterAssign = function(ctx) {
};

JSListener.prototype.exitAssign = function(ctx) {
  // get the variable
  var t1 = ctx.getChild(0).getText()
  // skip the := symbol to use = instead
  // get the expression
  var t2 = ctx.getChild(2).getText()
  write(t1 + "=" + t2)
};

JSListener.prototype.enterPrint = function(ctx) {
};

JSListener.prototype.exitPrint = function(ctx) {
  var temp = "console.log("
  // I skip the 'print' keyword so go to second child
  temp += ctx.getChild(1).getText()
  temp +=")"
  write(temp)
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

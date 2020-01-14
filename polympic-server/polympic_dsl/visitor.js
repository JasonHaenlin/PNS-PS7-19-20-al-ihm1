var polygramVisitor = require('./polygramVisitor').polygramVisitor;

function Visitor() {
  polygramVisitor.call(this);
  return this;
}

// continue inheriting default listener
Visitor.prototype = Object.create(polygramVisitor.prototype);
Visitor.prototype.constructor = Visitor;

function isTerminal(ctx) {
  return this.getChildCount() == 0;
}

// Visit a parse tree produced by polygramParser#program.
Visitor.prototype.visitProgram = function (ctx) {
  //let subject = this.visitChildren(1);
  //let statements = this.visitChildren(2);
  //console.log(Object.getOwnPropertyDescriptors(ctx))
  ctx.getText();
  //this.visitSubject(ctx);
  //this.visitStatement(ctx);
  return this.visitChildren(ctx);
};

Visitor.prototype.visitSubject = function (ctx) {
  if (ctx.getText().toUpperCase() === 'PROGRAM') {
    console.log('Concernant les programmes');
  } else {
    console.log('Concernant les evenements');
  }
  return this.visitChildren(ctx);
};

Visitor.prototype.visitStatement = function (ctx) {
  if (ctx.getText().toUpperCase() === 'ACTION') {
    console.log('Ceci est une action : ');
  } else {
    console.log('Ceci est une condition : ');
  }
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#action.
polygramVisitor.prototype.visitAction = function (ctx) {
  //console.log(ctx.getText() + '(element);');
  if (ctx.getText().toUpperCase() === 'DISPLAY') {
    console.log('DISPLAY');
  }
  return this.visitChildren(ctx);
};

polygramVisitor.prototype.visitCondition = function (ctx) {
  console.log('if (');
  this.visitChildren(ctx);
  console.log(') { ');
  this.visitChildren(ctx);
  console.log(' }');
  return this.visitChildren(ctx);
};

polygramVisitor.prototype.visitBool = function (ctx) {
  if (ctx.getChildCount() == 1) {
    if (ctx.getText().toUpperCase() === 'IDENTIFIER') {
      console.log(ctx.getText());
    }
  } else if (ctx.getChildCount == 2) {
    console.log(ctx.getText());
  } else if (ctx.getChildCount == 3) {
    console.log(ctx.getText());
  }

  return this.visitChildren(ctx);
};

polygramVisitor.prototype.visitNumCmp = function (ctx) {
  console.log(ctx.getText());
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by polygramParser#number.
polygramVisitor.prototype.visitNumber = function (ctx) {
  console.log(ctx.getText());
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by polygramParser#attribute.
polygramVisitor.prototype.visitAttribute = function (ctx) {
  console.log('element.' + ctx.getText().toLowerCase());
  return this.visitChildren(ctx);
};

exports.Visitor = Visitor;


// if (ctx.getChildCount() == 1) {
//   this.visitAttribute(ctx.getChild(0));
// } else if (ctx.getChildCount() == 2) {
//   console.log('!');
//   this.visitBool(ctx.getChild(1));
// } else if (ctx.getChildCount() == 3) {
//   if (ctx.getToken(1) in [11, 12]) { // AND / OR
//     this.visitBool(ctx.getChild(0));
//     if (ctx.getToken(1) == 11) {
//       console.log(' && ');
//     }
//     if (ctx.getToken(1) == 12) {
//       console.log(' || ');
//     }
//     this.visitBool(ctx.getChild(2));
//   } else { // > < >= <= = !=
//     this.visitNumCmp(ctx);
//   }
// }

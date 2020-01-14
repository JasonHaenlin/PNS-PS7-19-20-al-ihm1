const polygramListener = require("./polygramListener").polygramListener;

var PolygramPrinter = function() {
  polygramListener.call(this); // inherit default listener
  return this;
};

// continue inheriting default listener
PolygramPrinter.prototype = Object.create(polygramListener.prototype);
PolygramPrinter.prototype.constructor = PolygramPrinter;

// override default listener behavior
PolygramPrinter.prototype.exitSubject = function(ctx) {
  console.log("Oh, a key!");
  ctx.getChild();
};

exports.PolygramPrinter = PolygramPrinter

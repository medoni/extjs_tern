(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    var path = require("path"), ternDir = path.resolve(process.argv[1], "..");
    return mod(require(ternDir + "/../lib/tern"), require(ternDir + "/../lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("tern_extjs", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
      "!name": "mylibrary",
      "!define": {
        "point": {
          "x": "number",
          "y": "number"
        }
      },
      "MyConstructor": {
        "!type": "fn(arg: string)",
        "staticFunction": "fn() -> bool",
        "prototype": {
          "property": "[number]",
          "clone": "fn() -> +MyConstructor",
          "getPoint": "fn(i: number) -> point"
        }
      },
      "someOtherGlobal": "string"
  }

});
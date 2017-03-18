(function(mod) {
    if (typeof exports == "object" && typeof module == "object") { // CommonJS
        var path = require("path"),
            ternDir = path.resolve(process.argv[1], "..");
        return mod(require(ternDir + "/../lib/infer"), require(ternDir + "/../lib/tern"));
    }
    if (typeof define == "function" && define.amd) // AMD
        return define(["tern/lib/infer", "tern/lib/tern"], mod);
    mod(infer, tern);
})(function(infer, tern) {
    "use strict";

    tern.registerPlugin("tern_extjs", function(server, options) {

        //server.on('completion', findCompletitions);

        return {
            defs: defs
        };
    });

    /**
     * @param {tern.File} file
     * @param {object} query 
     */
    function findCompletitions(file, query) {

    }

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
    };

});
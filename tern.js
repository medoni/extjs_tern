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

    tern.registerPlugin("tern", function(server, options) {

        return {
            defs: defs
        };
    });


    var defs = {
        "!name": "tern",
        "!define": {
            "PluginOptions": {
                "x": "number"
            },
            "registerPlugin_options": {
                "!type": "fn(server: tern, options: PluginOptions) -> registerPlugin_return"
            },
            "registerPlugin_return": {
                "defs": "TernDefinition",
                "passes": "?"
            },
            "TernDefinition": {
            },
            "TernFile": {
                "ast": "AST",
                "hasAstral": "bool",
                "lineOffsets": "?",
                "text": "string"
            }
        },
        "AST": {
            "foo": "number"
        },
        "infer": {
            "ANull": {
                "addType": "fn(type: +infer.Type, weight: number)",
                "forAllProps": "fn(c: ?)",
                "gatherProperties": "fn()",
                "getFunctionType": "fn()",
                "getObjType": "fn()",
                "getProp": "fn(prop: infer.ANull) -> infer.ANull",
                "getSymbolType": "fn()",
                "getType": "fn()",
                "hasType": "fn(type: +infer.Type) -> bool",
                "isEmpty": "fn() -> bool",
                "on": "fn(type: string, f: fn())",
                "propagate": "fn(target: infer.ANull, weight: number)",
                "propagatesTo": "fn()",
                "propHint": "fn()",
                "toString": "fn() -> string",
                "typeHint": "fn()"
            },
            "AVal": {
                "!type": "fn()",            
                "prototype": {
                    "!proto": "infer.ANull",
                    "forward": "?",
                    "maxWeight": "number",
                    "types": "[+infer.Type]"
                }
            },
            "parse": "fn(text: string, options: ?)",
            "toString": "fn(type: ?, maxDepth: number, parent: ?) -> string",
            "Type": {
                "!type": "fn()",
                "prototype": {

                }
            }
        },
        "signal": {
            "mixin": "fn(obj: ?)",
            "prototype": {
                "on": "fn(type: string, f: fn())"
            }
        },
        "tern": {
            "registerPlugin": "fn(name: string, init: registerPlugin_options)",
            "addDefs": "fn(defs: TernDefinition, toFront?: bool)",
            "File": "TernFile"
        }
    }; //eo defs


}); // eo module
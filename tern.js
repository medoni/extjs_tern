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
            "IsCallee_propagatesTo_return": {
                "target": 'infer.ANull',
                "pathExt": "string"
            },
            "PluginOptions": {
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
        "acorn": {
            "Node": {
                "!type": "fn(parser: +acorn.Parser, pos: number, loc: ?)",
                "prototype": {
                    "end": "number",
                    "loc": "?",
                    "sourceFile": "+acorn.SourceFile",
                    "range": "number[]",
                    "start": "number",
                    "type": "string"
                }
            },
            "Parser": {
                "!type": "fn()",
                "prototype": {
                }
            },
            "SourceFile": {
                "!type": "fn()",
                "prototype": {                    
                }
            }
        },
        "AST": {
            "!type": "fn()",
            "prototype": {

            }
        },
        "infer": {
            "ANull": {
                "addType": "fn(type: +infer.Type, weight: number)",
                "forAllProps": "fn(c: ?)", // todo type
                "gatherProperties": "fn(f: fn(prop: string, owner: infer.ANull, depth: number), depth: number)",
                "getFunctionType": "fn() -> +infer.Fn",
                "getObjType": "fn() -> +infer.Obj",
                "getProp": "fn(prop: string) -> infer.ANull", // todo correct type missing
                "getSymbolType": "fn() -> +infer.Sym",
                "getType": "fn(guess: bool) -> +infer.Type",
                "hasType": "fn(type: +infer.Type) -> bool",
                "isEmpty": "fn() -> bool",
                "on": "fn(type: string, f: fn())",
                "propagate": "fn(target: infer.ANull, weight: number)",
                "propagatesTo": "fn() -> infer.ANull",
                "propHint": "fn()",
                "toString": "fn(maxDepth: number, parent: ANull) -> string",
                "typeHint": "fn() -> typeHint"
            },
            "AVal": {
                "!type": "fn()",            
                "prototype": {
                    "!proto": "infer.ANull",
                    "forward": "?", // todo
                    "guessProperties": "fn(f: fn(prop: string, owner: infer.ANull, depth: number))",
                    "maxWeight": "number",
                    "makeupPropType": "fn(obj: infer.ANull) -> +infer.Type",
                    "makeupType": "fn(+infer.Type)",
                    "propagatesTo": "fn() -> +infer.AVal",
                    "types": "[+infer.Type]"
                }
            },
            "constraint": "fn(methods: object) -> infer.ANull", // todo, the passed methods are mixed in dynamic ANull instance
            "Context": { // todo
                "!type": "fn()",
                "prototype": {
                }
            },
            "DefProp": {
                "!type": "fn(prop: string, type: +infer.Type, originNode: +acorn.Node)",
                "prototype": {
                    "!proto": "infer.ANull",
                    "addType": "fn(type: +infer.Type, weight: number)",
                    "originNode": "+acorn.Node",
                    "prop": "string",
                    "propHint": "fn() -> +infer.DefProp",
                    "type": "+infer.Type"
                }
            },
            "Fn": { // todo
                "!type": "fn()",
                "prototype": {
                    "!proto": "infer.ANull"
                }
            },
            "getInstance": "fn(obj: +infer.Obj, ctor: +infer.Fn) -> +infer.Obj",
            "IsCallee": {
                "!type": "fn(self: +infer.Obj, args: [+infer.ANull], argNodes: [+acorn.Node], retval: +infer.ANull)",
                "prototype": {
                    "!proto": "infer.ANull",
                    "addType": "fn(f: +infer.Fn, weight: number)",
                    "args": "[+infer.ANull]", 
                    "argNodes": "[+acorn.Node]", 
                    "propagatesTo": "fn() -> IsCallee_propagatesTo_return",                    
                    "retval": "+infer.ANull",
                    "self": "+infer.Obj",
                    "typeHint": "fn() -> +infer.Fn"
                }
            },
            "IsCtor": {
                "!type": "fn(target: +infer.AVal, noReuse: bool)",
                "prototype": {
                    "!proto": "infer.ANull",
                    "addType": "fn(f: +infer.Fn, weight: number)",
                    "noReuse": "bool",
                    "target": "+infer.AVal"
                }
            },
            "IsProto": {
                "!type": "fn(ctor: +infer.Fn, target: +infer.AVal)",
                "prototype": {
                    "!proto": "infer.ANull",
                    "addType": "fn(o: +infer.Obj)",
                    "ctor": "+infer.Fn", 
                    "target": "+infer.AVal"
                }
            },
            "Obj": { // todo
                "!type": "fn()",
                "prototype": {
                    "!proto": "infer.ANull"
                }
            },
            "Prim": { // todo
                "!type": "fn()",
                "prototype": {
                    "!proto": "infer.ANull"
                }
            },
            "parse": "fn(text: string, options: ?)", // todo
            "PropHasSubset": {
                "!type": "infer.DefProp"
            },
            "Sym": { // todo
                "!type": "fn()",
                "prototype": {
                    "!proto": "infer.ANull"
                }
            },
            "simplifyTypes": "fn(types: [+infer.Type]) -> [+infer.Type]",
            "Scope": {
                "!type": "fn()", 
                "prototype": {
                    // todo
                }
            },
            "scopeAt": "fn(ast: +AST, pos: number, defaultScope: +infer.Scope) -> +infer.Scope",
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
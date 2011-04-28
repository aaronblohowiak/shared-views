var sharedViews = require('../index'),
    Haml = Haml = require("haml"),
    fs = require('fs'),
    glob = require('glob').globSync;

var uglify = function(orig_code, options){
  options || (options = {});
  var jsp = uglify.parser;
  var pro = uglify.uglify;

  var ast = jsp.parse(orig_code, options.strict_semicolons); // parse code and get the initial AST
  ast = pro.ast_mangle(ast, options.mangle_options); // get a new AST with mangled names
  ast = pro.ast_squeeze(ast, options.squeeze_options); // get an AST with compression optimizations
  var final_code = pro.gen_code(ast, options.gen_options); // compressed code here
  return final_code;
};

uglify.parser = require("uglify-js").parser;
uglify.uglify = require("uglify-js").uglify;
    
var options = {
  templateFileNames : glob("./views/*.haml"),
  outputPath : "./output.js",
  asignee : "templates",
  sourceToFunction: function(source) { return Haml(source, false); },
  filenameToTemplateName : function(filename){
    return filename.replace(/^\.\/views\//, '').replace(/\.haml$/, '');
  }
};

var templates = sharedViews.filenamesToTemplates(options);

sharedViews.writeTemplateStrings(options.outputPath, options.asignee, templates.strings, uglify);

console.log("\n\n\n\ntemplates.js file written to ./output.js\n\n\n\n");
console.log(templates.functions["embedded_code"](
    {
      chapter: {
        name: "Introduction",
        number: 1
      },
      name: "hello",
      id: 3899
    }
  )
);


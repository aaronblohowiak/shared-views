var sharedViews = require('../index'),
    Haml = Haml = require("haml"),
    glob = require('glob').globSync;

var options = {
  templateFileNames : glob("./views/*.haml"),
  outputPath : "./output.js",
  asignee : "$templates",
  sourceToFunction: function(source) { return Haml(source, false); },
  filenameToTemplateName : function(filename){
    return filename.replace(/^\.\/views\//, '').replace(/\.haml$/, '');
  }
};

var templates = sharedViews.filenamesToTemplates(options);

sharedViews.writeTemplateStrings(options.outputPath, options.asignee, templates.strings);

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
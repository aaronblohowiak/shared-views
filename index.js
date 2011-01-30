var fs = require('fs');

var nameRemovalRX = new RegExp(/^function anonymous\(/);

module.exports = {
  filenamesToTemplateFunctions : function (options){
    var currentFile,
        fn,
        templateFileNames = options.templateFileNames,
        filenameToTemplateName = options.filenameToTemplateName,
        templateFunctions = {};

    for (var i=0, l = templateFileNames.length; i < l; i++) {
      currentFile = templateFileNames[i];
      fn = options.sourceToFunction(fs.readFileSync(currentFile, 'utf-8'));
      templateFunctions[filenameToTemplateName(currentFile)] = fn;
    }
  
    templateFunctions.render = function(name, locals){
      return this[name](locals);
    };
    
    return templateFunctions;
  },

  templateFunctionToString : function(fn){
    var str = fn.toString();
    str = str.replace(nameRemovalRX, "function (");
    return str;
  },

  templateFunctionsToStrings : function(templateFunctions){
    var fn, str, 
        templateFunctionStrings = {};

    for(var templateName in templateFunctions){
      if(templateFunctions.hasOwnProperty(templateName)){
        fn = templateFunctions[templateName];
        str = this.templateFunctionToString(fn);
        templateFunctionStrings[templateName] = str;
      }
    }

    return templateFunctionStrings;
  },


  filenamesToTemplates : function (options){
    var templateFunctions = this.filenamesToTemplateFunctions(options);
    var templateFunctionStrings = this.templateFunctionsToStrings(templateFunctions);

    return {
      functions: templateFunctions,
      strings: templateFunctionStrings
    };
  },

  writeTemplateStrings : function(outputPath, asignee, templateFunctionStrings){
    var first = true,
        f = fs.openSync(outputPath, "w");

    fs.writeSync(f, asignee +"={\n");

    for(var k in templateFunctionStrings){
      if(first){
        fs.writeSync(f, '  "'+k+'": '+templateFunctionStrings[k]+"\n");
        first = false;
      } else{
        fs.writeSync(f, ', "'+k+'": '+templateFunctionStrings[k]+"\n");
      }
    }
    
    fs.writeSync(f, ", render: function(name, locals){ return this[name](locals); }")
    fs.writeSync(f, "\n}" );
    fs.close(f);
  }
}

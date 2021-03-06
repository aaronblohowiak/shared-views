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
      try{
        fn = options.sourceToFunction(fs.readFileSync(currentFile, 'utf-8'), currentFile);
      }catch(e){
        console.error("Error while compiling:", currentFile);
        throw e;
      }

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
        if(typeof(fn)=="function"){
          str = this.templateFunctionToString(fn);
        } else if(typeof(fn)=="object"){
          str = this.templateFunctionsToStrings(fn);
        }
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

  //this should possibly be a different project
  objToString: function (obj){
    var template = "",
        output = "{",
        first = true;

    for(var k in obj){
      template = obj[k];
      if(typeof(template)==="object"){
        template = this.objToString(template);
      }else if(typeof(template)==="string"){
        template = JSON.stringify(template);
      }
      if(first){
        first = false;
      } else{
        output = output + ',';
      }
      output = output + '  "'+k+'": '+template+"\n";
    }

    return output + "}";
  },
  
  writeTemplateStrings : function(outputPath, asignee, templateFunctionStrings, filter){
    templateFunctionStrings["render"] = "function(k, v){ return this[k](v); }";
    var src = asignee +"=" + this.objToString(templateFunctionStrings);
    if(filter){
      src = filter(src);
    }

    var  f = fs.openSync(outputPath, "w");
    fs.writeSync(f, src);
    fs.close(f);
  },
};

var connect = require('connect'),
    sharedViews = require('../index'),
    Haml = Haml = require("haml");

//grab a list of file names that end in .haml in the views/ folder
var filenames = require('glob').globSync("./views/*.haml");

var options = {
  templateFileNames : filenames,
  sourceToFunction: function(source) { return Haml(source, false); },
  filenameToTemplateName : function(filename){
    //let's call the views by their base filename, without the folder or ext
    return filename.replace(/^\.\/views\//, '').replace(/\.haml$/, '');
  }
};

//do all of the compilation and preparation of templates
var compiledTemplates = sharedViews.filenamesToTemplates(options),
    $templates = compiledTemplates.functions;

//write out the templates to public/templates.js, assigned to the $templates global var
sharedViews.writeTemplateStrings(
  (__dirname + "/public/templates.js"), 
  "$templates",
  compiledTemplates.strings
);

//convienence to render template by name with a layout
var render = function(name, locals){
  return $templates.render('layout', { 
    content: $templates.render(name, locals)
  });
};

function getColor(){
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  };
}

//build your "site"
function htmlRoutes(app){
  app.get('/', function(req, res){
    var color = getColor();
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(render('home', {color: color} ));
  });
};

//build your api
function jsonRoutes(app){
  app.get('/random_color.json', function(req, res){
    var color = getColor();
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(color));
  });
};

var server = connect.createServer(
  connect.staticProvider(__dirname + '/public'),
  connect.router(htmlRoutes),
  connect.router(jsonRoutes)
);

server.listen(3030);
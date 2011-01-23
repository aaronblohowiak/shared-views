fs = require('fs'),
glob = require('glob').globSync,
Haml = require("haml");

stuff = glob("./views/*.haml");

output = {};

reg = new RegExp(/^function anonymous\(/);

for (var i=0; i < stuff.length; i++) {
  str = Haml(fs.readFileSync(stuff[i], 'utf-8'), false).toString();
  /* replace the "function anonymous(locals)" with a true anon fun*/
  
  str = str.replace(reg, "function (");
  
  output[stuff[i]] = str;
};

f = fs.openSync("./output.js", "w");
fs.writeSync(f, "$GLOBAL_TEMPLATE$$$={\n");
first = true;
for(var k in output){
  if(first){
    fs.writeSync(f, '  "'+k+'": '+output[k]+"\n");
    first = false;
  } else{
    fs.writeSync(f, ', "'+k+'": '+output[k]+"\n");
  }
}

fs.writeSync(f, "\n}" );

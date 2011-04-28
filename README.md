# Share your views with the browser

`shared-views` lets you compile templates for use on the server and browser.  You'll be able to have the same templates and call `render` and have it "just work" on the server and on the client.

`shared-views` has no dependencies, but to use it you will need a template engine that is able to take a string and return a function that applies that template. The example uses haml-js.

### install
  
`npm install shared-views`

## Example

Source: https://github.com/aaronblohowiak/shared-views/blob/master/example/

1. git clone git://github.com/aaronblohowiak/shared-views.git
2. cd shared-views/example
3. node server.js

## API

The API is pretty low-level; this is a library, not a framework.  Everything is exposed in a C-style API where you pass in the data that each function needs.

If you want to use all of the default functionality, you:

    sv = require('shared-views);
    
    //define options (documented below)
    options = {...}
    
    //do all of the compilation and preparation of templates
    var compiledTemplates = sharedViews.filenamesToTemplates(options),
        $templates = compiledTemplates.functions;

    //write out the templates to public/templates.js, assigned to the $templates global var
    sharedViews.writeTemplateStrings(
      (__dirname + "/public/templates.js"), 
      "$templates",
      compiledTemplates.strings
    );

Then, in your layout, you include the `templates.js` file.

It is easy to extend the default behavior of `shared-views`. Object.create() the module's exports and then override the appropriate functions.

### options

The `options` that you pass around must have the following properties:

`templateFileNames`: An array of file names that contain the sources. Example: ["./views/item.haml"]

`sourceToFunction`: a function that is passed a template `source` and returns a function able to render that template. Example: function(source) { return Haml(source, false); }

`filenameToTemplateName`: a function that is passed a `filename` and returns the template name as a string. Example: function(filename){ return filename.replace(/^\.\/views\//, '').replace(/\.haml$/, '');}

### functions

`templateFunctionToString`: Haml-js (and possibly other) libraries use `new Function`, which returns "function anonymous(" when .toString is called upon it.  This helper function modifies that function declaration to be an unnamed function (instead of a function named anonymous.)

`templateFunctionsToStrings`: Takes `templateFunctions` object that has `templateName: fn` key/value pairs and returns a new object that has `templateName: fnString` pairs, where the fnString is the string of the function declaration, as passed through `templateFunctionToString`.

`filenamesToTemplateFunctions`: Requires `options.templateFileNames` and `options.filenameToTemplateName`. Reads the contents of each file, passing it to `options.sourceToFunction` and recording the result. Uses  `options.filenameToTemplateName` to convert the filename to the name of the template.

`filenamesToTemplates`: Requires `options` (all of them!). Reads `options.templateFileNames` and then uses `filenamesToTemplateFunctions` and `templateFunctionsToStrings` to return an object that has `functions` and `strings` properties.  Each of those properties is an object that has the templates by name (one as executable functions, the other as cleaned-up function declaration strings).

`writeTemplateStrings`: Requires `outputPath`, `asignee`, and `templateFunctionStrings`.  Writes a valid js file to `outputPath` that assigns the templates to `asignee`, and includes a `render` function for convenience.  If you pass an optional `filter` parameter, then the file source will be set to the return value of `filter(source)`. **Performs Synchronous I/O**

## TODO

Create a high-level interface which will also monitor partials for changes and refresh things to avoid complete server restart.
Create a high-level interface with reasonable defaults.
Create examples for other template engines.
Create example that shows multiple template engines in same project.

# Patches accepted!

By issuing a pull request to me or submitting a patch, you are declaring that you assign the copyright for all of the content contained within the patch to me and that you have the legal authority to do so.

#License:

Copyright (C) 2010 by Aaron Blohowiak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
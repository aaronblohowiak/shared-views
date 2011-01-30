$templates={
  "color_detail": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<div style=\"color: rgb(" +
r +
", " +
g +
", " +
b +
")\">rgb(" +
r +
", " +
g +
", " +
b +
")</div>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "home": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<h1>Random Color App!</h1><div id=\"color\">" + 
this.render('color_detail', color) + 
"</div><button class=\"next\">Next</button><p>If you look in firebug at the 'Net' request or 'View Source', you will see that the initial rendering of the color is right there in the source html.  However, when you hit 'Next', we use $.getJSON to retrieve another color and then render the *exact same* haml-js template on the client.  If you view templates.js you'll see that the template is pre-compiled, so we dont have to worry about a compilation lag.</p>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "layout": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><script src=\"/jquery-1.4.4.min.js\"></script><script src=\"/templates.js\"></script><script src=\"/app.js\"></script><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/app.css\" /><title>Sample page for shared-views</title></head><body><div class=\"outer-wrapper\"><div class=\"inner-wrapper\"><div class=\"content\">" + 
content + 
"</div></div></div></body></html>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "render": function (name, locals){
      return this[name](locals);
    }
, render: function(name, locals){ return this[name](locals); }
}
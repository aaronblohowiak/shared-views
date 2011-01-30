$templates={
  "alt_attribs": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<tag name=\"value\" name2=\"name2\" ns:tag=\"100\"></tag><input type=\"hidden\" value=\"3\" id=\"space-end\" /><input type=\"hidden\" value=\"3\" id=\"space-start\" /><input type=\"hidden\" value=\"3\" id=\"space-middle\" />");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "div_nesting": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<div>Does not close properly<div>Nested same level as next div</div></div><div>Will be nested, but should be top level</div>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "doctype": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1//EN\" \"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\">\n<!DOCTYPE html>\n<?xml version='1.0' encoding='utf-8' ?>\n");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "embedded_code": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<head>\n<script type=\"text/javascript\">\n//<![CDATA[\nPage.chapter = " +
JSON.stringify(chapter) +
";\n//]]>\n</script>\n</head><body><h1>Welcome " +
name + 
"</h1><div class=\"div_" +
id +
"\"></div></body>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "foreach": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ((function () { var __result__ = [], __key__, color; for (__key__ in colors) { if (colors.hasOwnProperty(__key__)) { color = colors[__key__]; __result__.push(
"<div style=\"" + html_escape("color: " + color + ";") + "\" class=\"preview\">" + 
html_escape(name) + 
"</div>"
); } } return __result__.join(""); }).call(this) +
(function () { var __result__ = [], __key__, item; for (__key__ in data) { if (data.hasOwnProperty(__key__)) { item = data[__key__]; __result__.push(
(function () { if (item.age < 100) { return (
"<dl>" + 
(function () { var __result__ = [], name, value; for (name in item) { if (item.hasOwnProperty(name)) { value = item[name]; __result__.push(
"<dt>" + 
html_escape(name) + 
"</dt><dd>" + 
html_escape(value) + 
"</dd>"
); } } return __result__.join(""); }).call(this) + 
"</dl>"
);} else { return ""; } }).call(this)
); } } return __result__.join(""); }).call(this) +
(function () { var __result__ = [], __key__, number; for (__key__ in [1,2,3,4,5,6,7]) { if ([1,2,3,4,5,6,7].hasOwnProperty(__key__)) { number = [1,2,3,4,5,6,7][__key__]; __result__.push(
number
); } } return __result__.join(""); }).call(this) +
(function () { var __result__ = [], __key__, word; for (__key__ in "Hello World".split(" ")) { if ("Hello World".split(" ").hasOwnProperty(__key__)) { word = "Hello World".split(" ")[__key__]; __result__.push(
word
); } } return __result__.join(""); }).call(this));
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "meta": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" />");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "nanline": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<!DOCTYPE html>\n<html><head><title>atomix</title>" + 
"<script src=\"" + html_escape('atomix_xlib.js') + "\">" + 
"</script></head></html>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "nested_context": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<p>" + 
this.name + 
"</p><div id=\"main\">" + 
(function () { var __result__ = [], __key__, item; for (__key__ in items) { if (items.hasOwnProperty(__key__)) { item = items[__key__]; __result__.push(
"<div class=\"item\">" + 
this.name + ": " + item + 
"</div>"
); } } return __result__.join(""); }).call(this) +
(function () { if (items) { return (
"<div id=\"cool\">" + 
this.name + 
"</div>"
);} else { return ""; } }).call(this) + 
"</div>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "no_self_close_div": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<html><body><div id=\"a\"></div><div>I do not self close.</div>\n<script type=\"text/javascript\">\n//<![CDATA[\n(function(){\n  document.getElementById('a').textContent='I self close';\n})();\n//]]>\n</script>\n</body></html>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "non-string-attribs": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<div id=\"plain\">Plain Text</div><div id=\"escaped\">&lt;escaped&gt;</div><input checked=\"checked\" /><input /><input /><input /><input checked=\"0\" /><input />");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "script_css": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<head>\n<script type=\"text/javascript\">\n//<![CDATA[\nfunction greet(message) {\n  alert(\"Message from MCP: \" + message);\n}\n//]]>\n</script>\n<title>Script and Css test</title>\n<style type=\"text/css\">\nbody {\n  color: pink;\n}\n</style>\n</head><body onload=\"greet(&quot;I'm Pink&quot;)\">COLOR ME PINK</body>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "self_close": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<html><head>" + 
(function () { if (url !='/') { return (
"<script></script>"
);} else { return ""; } }).call(this) +
"<meta name=\"test\" value=\"Monkey\" /></head><body>" + 
"<a href=\"" + html_escape(url) + "\">" + 
"link</a></body></html>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}
, "standard": function (locals) {
function html_escape(text) {
    return (text + "").
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/\"/g, "&quot;");
  }
with(locals || {}) {
  try {
    return ("<?xml version='1.0' encoding='utf-8' ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><title>Sample haml template</title></head><body><div class=\"profile\"><div class=\"left column\"><div id=\"date\">" + 
print_date() + 
"</div><div id=\"address\">" + 
current_user.address + 
"</div></div><div class=\"right column\"><div id=\"email\">" + 
current_user.email + 
"</div><div id=\"bio\">" + 
current_user.bio + 
"</div></div></div></body></html>");
  } catch (e) {
    return "\n<pre class='error'>" + html_escape(e.stack) + "</pre>\n";
  }
}
}

}
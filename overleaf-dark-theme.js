// ==UserScript==
// @name          Overleaf Dark Theme
// @description	  Dark Theme for Overleaf (optimized)
// @author        Enrique Tomás Martínez Beltrán
// @include       https://www.overleaf.com/project/
// ==/UserScript==
var dark = function() {
  var css = [
    "/*.pdfjs-viewer {",
    "filter: invert(85%);",
    "}*/",
    "",
    ".ace-editor-body .ace_gutter {",
    "background: #3c3c44;",
    "color: #f0f0f0;   ",
    "}",
    "",
    ".ace-editor-body .ace_gutter-active-line {",
    "background-color: #2c3645;",
    "}",
    "",
    "body{",
    "background-color: #2b2b30;   ",
    "}",
    "",
    ".ace-tm {",
    "background-color: #2b2b30;",
    "color: #c4c4c4;",
    "}",
    "",
    ".ace_content{",
    "color: #e8e8f0;",
    "}",
    "",
    ".pdf-viewer {",
    "background-color: #2b2b30;",
    "}"
  ].join("\n");

  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  var arr = document.getElementsByTagName("head");
  if (arr.length > 0) {
    arr[0].appendChild(style);
  } else {
    document.documentElement.appendChild(style);
  }
};

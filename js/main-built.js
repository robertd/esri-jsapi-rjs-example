define("app/mapA",["esri/map"],function(e){var t={startup:function(){new e("mapDivA",{center:[-56.049,38.485],zoom:3,basemap:"satellite"})}};return t}),define("app/mapB",["esri/map"],function(e){var t={startup:function(){new e("mapDivB",{center:[-56.049,38.485],zoom:3,basemap:"streets"})}};return t}),define("app/mapC",["esri/map"],function(e){var t={startup:function(){new e("mapDivC",{center:[-56.049,38.485],zoom:3,basemap:"gray"})}};return t}),define("text!app/templates/TemplatedWidget.html",[],function(){return"<div>This is a templated widget and the value of the message property is: ${message}.</div>"}),define("app/TemplatedWidget",["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","text!./templates/TemplatedWidget.html"],function(e,t,a,p){return e([t,a],{templateString:p})}),require(["dojo/dom","app/mapA","app/mapB","app/mapC","app/TemplatedWidget","domReady!"],function(e,t,a,p,i){t.startup(),a.startup(),p.startup();var n=new i({message:"Hi!"},e.byId("templatedWidget"));n.startup()}),define("main",function(){});
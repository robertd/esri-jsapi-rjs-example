require([
    "dojo/dom",
    "app/mapA",
    "app/mapB",
    "app/mapC",
    "app/TemplatedWidget",
    "dojo/domReady!"
], function(dom, MapA, MapB, MapC, TemplatedWidget) {
    MapA.startup();
    MapB.startup();
    MapC.startup();
    var widget = new TemplatedWidget({
      message: "Hi!"
    }, dom.byId("templatedWidget"));
    widget.startup();
});

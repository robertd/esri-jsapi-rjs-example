require([
	"app/mapA",
	"app/mapB",
	"app/mapC",
	"dojo/domReady!"
], function(MapA, MapB, MapC) {
	MapA.startup();
	MapB.startup();
	MapC.startup();
});
	
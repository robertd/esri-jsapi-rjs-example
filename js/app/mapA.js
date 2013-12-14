define([
	"esri/map"
], function (Map) {
	var MapA = {
		startup: function () {
			var mapA = new Map("mapDivA", {
				center: [-56.049, 38.485],
				zoom: 3,
				basemap: "satellite"
			});
		}
	};
	return MapA;
	
});
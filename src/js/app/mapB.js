define([
    "esri/map"
], function (Map) {
    var MapB = {
        startup: function () {
            var mapB = new Map("mapDivB", {
                center: [-56.049, 38.485],
                zoom: 3,
                basemap: "streets"
            });
        }
    };
    return MapB;
});
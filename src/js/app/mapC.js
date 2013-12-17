define([
    "esri/map"
], function (Map) {
    var MapC = {
        startup: function () {
            var mapC = new Map("mapDivC", {
                center: [-56.049, 38.485],
                zoom: 3,
                basemap: "gray"
            });
        }
    };
    return MapC;
});
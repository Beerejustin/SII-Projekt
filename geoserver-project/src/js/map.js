// This file contains the JavaScript code for initializing the Leaflet map, adding the GeoServer layer, and handling any interactions with the map.

var map = L.map('map').setView([51.965749, 7.617958], 13);

// Add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// Add the GeoServer layer
var geoServerLayer = L.tileLayer('http://localhost:8080/geoserver/wms?service=WMS&version=1.1.0&request=GetMap&layers=geoserver:layer_name&styles=&bbox={bbox-epsg-4326}&width={width}&height={height}&srs=EPSG:4326&format=image/png', {
    maxZoom: 19,
    attribution: 'GeoServer'
}).addTo(map);

// Show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);
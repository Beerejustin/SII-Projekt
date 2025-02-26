// initialize Leaflet
var map = L.map('map').setView([51.965749, 7.617958], 18);

// add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// add the GeoServer WFS layer
var wfsLayer = L.tileLayer.wfs("http://localhost:8080/geoserver/wfs", {
  layers: 'hydrants:hydranten_schadensradius',  // Ersetzen Sie 'hydrants:hydranten_schadensradius' durch den tatsächlichen Layer-Namen
  format: 'application/json',
}).addTo(map);
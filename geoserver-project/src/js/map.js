// initialize Leaflet
var map = L.map('map').setView([51.965749, 7.617958], 18);

// add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 30,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);

// add the GeoServer WMS layer
var wmsLayer = L.tileLayer.wms("http://localhost:8080/geoserver/Hydranten/wms", {
  layers: 'Hydranten:hydranten_r',
  format: 'image/png',
  transparent: true,
  opacity: 0.5,
}).addTo(map);
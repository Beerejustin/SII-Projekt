# SII-Projekt

Feuerhydranten Krisensimulation

Use Case Szenario Kneipenstraße Münster

Dataset: OSM Data (fire_hydrant)

Framework: Leaflet

1. Detaillierte Fragestellung
„Welche Bereiche in Münster sind besonders gefährdet, wenn ein Feuerhydrant ausfällt oder beschädigt wird?“

2. Datenquellen & Datenaufbereitung
Externe Datenquelle:
	OpenStreetMap (OSM) für Feuerhydranten-Daten und Stadtpläne, Straßendaten (über Overpass API oder andere Schnittstellen)
Eigener Datensatz (Simulationsergebnis):
	Berechnung eines „Schadensradius“ für jeden Hydranten
	Datenstruktur: GeoJSON
	Speicherung in JSON

3. Technologien
	Backend: GeoServer (lokal oder über Docker)
	Frontend: Leaflet zur Visualisierung, evtl. mit zusätzlichen Overlays für die Simulation
	Datenabruf: REST-API oder WFS (Web Feature Service)
	

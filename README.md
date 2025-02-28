# **SII-Projekt: Feuerhydranten-Krisensimulation in Münster**

## **Projektübersicht**
Dieses Projekt simuliert den potenziellen Einfluss von Feuerhydrantenausfällen in Münster, insbesondere in der Kneipenstraße. Ziel ist es, gefährdete Bereiche zu identifizieren, falls ein Feuerhydrant ausfällt oder beschädigt wird.

## **Use Case Szenario**
### **Forschungsfrage**  
*"Welche Bereiche in Münster sind besonders gefährdet, wenn ein Feuerhydrant ausfällt oder beschädigt wird?"*

### **Anwendungsfall**  
- Eine effektive Feuerwehrversorgung hängt von funktionierenden Hydranten ab.
- Ein Ausfall eines oder mehrerer Hydranten könnte die Brandbekämpfung in bestimmten Gebieten erheblich beeinträchtigen.
- Diese Simulation hilft Behörden, Risikogebiete zu erkennen und vorbeugende Maßnahmen zu ergreifen.

## **Datenquellen & Datenaufbereitung**
### **Externe Datenquelle (interoperabler Webdienst)**
- **OpenStreetMap (OSM) - Overpass API**  
  - Enthält Geodaten zu Feuerhydranten in Münster.
  - Abfrage mittels Overpass API:
    ```overpassql
    [out:json][timeout:25];
    {{geocodeArea:Münster}}->.searchArea;
    (
      node["emergency"="fire_hydrant"](area.searchArea);
    );
    out body;
    >;
    out skel qt;
    ```
  - Ergebnisse werden in **GeoJSON**-Format exportiert.

### **Eigener Datensatz (Simulationsdaten)**
- **Berechneter Schadensradius für jeden Hydranten**  
- **Erzeugt durch Python-Skript `hydranten_schadensradius.py`**
  - Liest die OSM-Daten ein.
  - Erstellt Pufferzonen (Schadensradien) um jeden Hydranten.
  - Konvertiert die Daten in ein **GeoPackage (.gpkg)**.

### **Datenmodell**
| **Feld**       | **Beschreibung**                     | **Datentyp**  |
|---------------|---------------------------------|--------------|
| `id`         | Eindeutige ID des Hydranten    | Integer      |
| `coordinates` | Geografische Koordinaten       | Punkt (Lat, Lng) |
| `extent`     | Berechneter Schadensradius (m) | Float        |
| `location`   | Straßenname oder Ort           | String       |
| `type`       | Art des Hydranten              | String       |

### **Datenformat & Speicherung**
- **Encoding**: GeoJSON für die Verarbeitung, GeoPackage für die Speicherung.
- **Speicherung**: Datei-basiert im Verzeichnis `data/` als `geopackage.gpkg`.

## **Technologien**
### **Backend**
- **GeoServer**  
  - Bereitstellung der Simulationsdaten als **WFS** (Web Feature Service).
  - Lokaler Betrieb via Docker oder direkter Installation.

### **Frontend**
- **Leaflet.js**  
  - Interaktive Karte zur Visualisierung der Hydranten und ihrer Schadensradien.

### **Datenbereitstellung**
- **GeoServer WFS API** zur Abfrage der Simulationsdaten.
- **Overpass API** zur Live-Abfrage der OSM-Hydrantendaten.

## **Projektstruktur**

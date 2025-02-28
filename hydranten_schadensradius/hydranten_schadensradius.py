import geopandas as gpd
import shapely
import numpy as np
from shapely.geometry import Point
from pathlib import Path

try:
    # Datei einlesen aus dem Data-Ordner
    file_path = Path(__file__).parent.parent / "Data" / "export.geojson"
    gdf = gpd.read_file(file_path)

    # Sicherstellen, dass die Geometrie aus Punkten besteht
    gdf["geometry"] = gdf.geometry.apply(lambda geom: Point(geom.x, geom.y))

    # In projiziertes Koordinatensystem (UTM Zone 32N für Münster) umwandeln
    gdf = gdf.to_crs(epsg=25832)

    # Schadensradius 50m um die Hydranten hinzufügen
    gdf["radius_m"] = 50

    # Erstellung der Pufferzonen um die Hydranten
    gdf["geometry"] = gdf.apply(lambda row: row.geometry.buffer(row.radius_m), axis=1)

    # Nur die gewünschten Spalten auswählen
    gdf = gdf[["id", "radius_m", "geometry", "fire_hydrant:type"]]

    # GeoPackage-Dateipfad
    output_path = Path(__file__).parent / "hydranten_schadensradius.gpkg"

    # Speichern als GeoPackage mit Schichtnamen "hydranten_schadensradius"
    gdf.to_file(output_path, driver="GPKG", layer="hydranten_schadensradius")

    print(f"GeoPackage wurde erfolgreich gespeichert unter: {output_path}")

except Exception as e:
    print(f"Ein Fehler ist aufgetreten: {str(e)}")
import geopandas as gpd
from pathlib import Path

try:
    # Load the GeoPackage
    file_path = Path(__file__).parent / "hydranten_schadensradius.gpkg"
    gdf = gpd.read_file(file_path, layer="hydranten_schadensradius")
    
    # Display first rows
    # print(gdf.head())
    
    # Display columns
    print("Columns:", gdf.columns)
    
except FileNotFoundError:
    print("The file 'hydranten_schadensradius.gpkg' was not found.")
except ValueError as e:
    print(f"An error occurred: {e}")

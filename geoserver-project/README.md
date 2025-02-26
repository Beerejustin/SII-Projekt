# geoserver-project/geoserver-project/README.md

# GeoServer Project

This project sets up a GeoServer instance using Docker to serve geospatial data from a GeoPackage. The front end utilizes Leaflet for map visualization.

## Project Structure

- **docker-compose.yml**: Defines the services, networks, and volumes for the Docker application.
- **Dockerfile**: Contains instructions for building the Docker image for GeoServer.
- **data/geopackage.gpkg**: The GeoPackage containing the geospatial data.
- **src/index.html**: The main HTML file that sets up the web page and includes Leaflet.
- **src/js/map.js**: JavaScript code for initializing the Leaflet map and adding the GeoServer layer.

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd geoserver-project
   ```

2. **Build and Run the Docker Container**:
   ```
   docker-compose up --build
   ```

3. **Access GeoServer**:
   Open your web browser and navigate to `http://localhost:8080/geoserver`.

4. **View the Map**:
   Open `src/index.html` in your web browser to view the map with the GeoServer layer.

## Usage

- The GeoServer serves the data from `data/geopackage.gpkg`.
- The Leaflet map in `src/index.html` displays the geospatial data served by GeoServer.

## Additional Information

- Ensure Docker is installed and running on your machine.
- Modify the GeoPackage and map settings as needed for your specific use case.
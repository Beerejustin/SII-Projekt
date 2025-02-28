# GeoServer Project

## Project Structure

- **docker-compose.yml**: Defines the services, networks, and volumes for the Docker application.
- **Dockerfile**: Contains instructions for building the Docker image for GeoServer.
- **data/geopackage.gpkg**: The GeoPackage containing the geospatial data.
- **src/index.html**: The main HTML file that sets up the web page and includes Leaflet.
- **src/js/map.js**: JavaScript code for initializing the Leaflet map and adding the GeoServer layer.

## Setup Instructions

1. **Clone the Repository**:
   ```sh
   git clone <repository-url>
   cd geoserver-project
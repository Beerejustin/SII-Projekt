# SII-Projekt: Feuerhydranten Krisensimulation

## Overview

This project simulates the impact of fire hydrant failures in Münster, specifically focusing on the Kneipenstraße area. The goal is to identify areas that are particularly vulnerable if a fire hydrant fails or is damaged.

## Use Case Scenario

**Scenario**: Kneipenstraße, Münster

**Research Question**: "Which areas in Münster are particularly at risk if a fire hydrant fails or is damaged?"

## Data Sources & Preparation

### External Data Source
- **OpenStreetMap (OSM)**: Used for fire hydrant data, city maps, and street data. Data is retrieved via the Overpass API or other interfaces.

### Own Dataset (Simulation Results)
- **Damage Radius Calculation**: For each hydrant, a "damage radius" is calculated.
- **Data Structure**: GeoJSON
- **Storage**: JSON

## Technologies

### Backend
- **GeoServer**: Used for serving geospatial data. It can be run locally or via Docker.

### Frontend
- **Leaflet**: Used for visualization, potentially with additional overlays for the simulation.

### Data Retrieval
- **REST API** or **WFS (Web Feature Service)**: Used for fetching data.

## Project Structure

- **docker-compose.yml**: Defines the services, networks, and volumes for the Docker application.
- **Dockerfile**: Contains instructions for building the Docker image for GeoServer.
- **data/geopackage.gpkg**: The GeoPackage containing the geospatial data.
- **src/index.html**: The main HTML file that sets up the web page and includes Leaflet.
- **src/js/map.js**: JavaScript code for initializing the Leaflet map and adding the GeoServer layer.

## Setup Instructions

### Clone the Repository
   ```sh
   git clone <repository-url>
   cd geoserver-project
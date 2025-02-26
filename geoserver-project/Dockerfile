FROM osgeo/geoserver:latest

COPY data/geopackage.gpkg /opt/geoserver/data/geoserver/data/

RUN /opt/geoserver/bin/startup.sh && \
    /opt/geoserver/bin/geoserver-2.19.x/bin/geoserver -Dgeoserver.data.dir=/opt/geoserver/data/geoserver/data/ -Dgeoserver.webapp.dir=/opt/geoserver/webapps/geoserver -Dgeoserver.home=/opt/geoserver/data/geoserver && \
    /opt/geoserver/bin/shutdown.sh

EXPOSE 8080
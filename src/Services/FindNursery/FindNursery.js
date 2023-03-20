import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import data from './data.json';
import redMarker from './redMarker.png';
import './styles.css';

const FindNursery = () => {
  useEffect(() => {
    const mapOptions = {
      center: [23.385044, 90.486671],
      zoom: 10,
    };

    const map = L.map('map', mapOptions);
    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    map.addLayer(tileLayer);
    
    const googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    });

    map.addLayer(googleStreets);

    const myIcon = L.icon({
      iconUrl: redMarker,
      iconSize: [50, 50],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });

    navigator.geolocation.getCurrentPosition((position) => {
      const userLat = position.coords.latitude;
      const userLong = position.coords.longitude;

      const redMarker = L.marker([userLat, userLong], { icon: myIcon });
      const popUp = redMarker.bindPopup('Sample text');
      popUp.addTo(map);

      const userLatLng = L.latLng(userLat, userLong);

      data.forEach((nursery) => {
        const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);
        nursery.distance = userLatLng.distanceTo(nurseryLatLng);
      });

      data.sort((a, b) => a.distance - b.distance);

      for (let i = 0; i < 5 && i < data.length; i++) {
        const nursery = data[i];
        const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);

        const marker = L.marker(nurseryLatLng).addTo(map);
        marker.bindPopup(`${nursery.NAME}<br>Distance: ${nursery.distance.toFixed(2)} meters`);

        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(position.coords.latitude, position.coords.longitude),
            nurseryLatLng,
          ],
          routeWhileDragging: true,
          showAlternatives: false,
          createMarker: function () {
            return null;
          },
        });

        routingControl.addTo(map);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '10vh'} } />;
};

export default FindNursery;
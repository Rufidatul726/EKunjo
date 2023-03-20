var mapOptions = {
   center: [23.385044, 90.486671],
   zoom: 10
}
//create map then add layer
const map = new L.map('map', mapOptions);
var layer = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                           maxZoom: 19,
                           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        });
map.addLayer(layer);

//google map street
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
});
map.addLayer(googleStreets);

//customize marker
var myIcon = L.icon({
   iconUrl: 'redMarker.png',
   iconSize: [50, 50],
   iconAnchor: [22, 94],
   popupAnchor: [-3, -76],
});


let nurseries = [];

navigator.geolocation.getCurrentPosition(position => {
  //add marker
  var userLat = position.coords.latitude;
  var userLong = position.coords.longitude;
  var redMarker = L.marker([userLat, userLong], {icon : myIcon});
  var popUp = redMarker.bindPopup('Sample text');
  popUp.addTo(map);
  const userLatLng = L.latLng(userLat, userLong);

// Load nurseries data from JSON file
fetch('data.json')
   .then(response => response.json())
   .then(nurseries => {
     // Calculate distance between user and each nursery
     nurseries.forEach(nursery => {
        const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);
        nursery.distance = userLatLng.distanceTo(nurseryLatLng);
     });

     nurseries.sort((a, b) => a.distance - b.distance);

      // Show the top 5 nearest nurseries
     for (let i = 0; i < 5 && i < nurseries.length; i++) {
           const nursery = nurseries[i];
           const nurseryLatLng = L.latLng(nursery.LATITUDE, nursery.LONGITUDE);

           // Create a marker for the nursery and add it to the map
           const marker = L.marker(nurseryLatLng).addTo(map);

           // Add a popup to the marker with the nursery's name and distance
           marker.bindPopup(`${nursery.NAME}<br>Distance: ${nursery.distance.toFixed(2)} meters`);
           
           const routingControl = L.Routing.control({
                 waypoints: [
                    L.latLng(position.coords.latitude, position.coords.longitude),
                    nurseryLatLng
                 ],
                 routeWhileDragging: true,
                 showAlternatives: false,
                 createMarker: function() {
                    return null;
                 }
           });

        routingControl.addTo(map);
        }

     });

});
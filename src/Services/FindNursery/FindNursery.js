import React, { useEffect, useState } from "react";

function FindNursery() {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  
    const nottingham = new window.google.maps.LatLng(23.8103, 90.4125);
    const style = [
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          { saturation: -100 },
          { lightness: -8 },
          { gamma: 1.18 },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { saturation: -100 },
          { gamma: 1 },
          { lightness: -24 },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'administrative',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'transit',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'road',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'administrative',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'landscape',
        stylers: [{ saturation: -100 }],
      },
      {
        featureType: 'poi',
        stylers: [{ saturation: -100 }],
      },
      {},
    ];
    const mapOptions = {
      center: nottingham,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      backgroundColor: '#000',
      zoom: 17,
      panControl: false,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: false,
      zoomControlOptions: {
        style: window.google.maps.ZoomControlStyle.LARGE,
      },
    };
    const map = new window.google.maps.Map(
      document.getElementById('map'),
      mapOptions
    );
    const mapType = new window.google.maps.StyledMapType(style, {
      name: 'Grayscale',
    });
    map.mapTypes.set('grey', mapType);
    map.setMapTypeId('grey');
    const marker_image = 'plugins/google-map/images/marker.png';
    const pinIcon = new window.google.maps.MarkerImage(marker_image, null, null, null, new window.google.maps.Size(74, 73));
    const marker = new window.google.maps.Marker({
      position: nottingham,
      map: map,
      icon: pinIcon,
      title: 'eventre',
    });
    setMap(map);
    setMarker(marker);
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
}

export default FindNursery;

/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:08:38 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:08:38 
 */


function myMap() {
  const myLatLng = {
    lat: -37.817049,
    lng: 144.965803,
  };

  const mapOptions = {
    center: new google.maps.LatLng(myLatLng),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };

  const marker = new google.maps.Marker({
    position: myLatLng,
    title: 'JapanTravel',
  });

  const map = new google.maps.Map(document.getElementById('mymap'), mapOptions);
  marker.setMap(map);
}



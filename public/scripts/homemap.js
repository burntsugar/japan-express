function myMap() {

    var myLatLng = {
        lat: -37.817049,
        lng: 144.965803
    };

    var mapOptions = {
        center: new google.maps.LatLng(myLatLng),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        title: 'JapanTravel'
    });

    var map = new google.maps.Map(document.getElementById("mymap"), mapOptions);
    marker.setMap(map);
}



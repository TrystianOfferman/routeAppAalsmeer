//view

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {


directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(52.25597,4.768396),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"),
                                mapOptions);

  directionsDisplay.setMap(map);
  directionsDisplay.setOptions( { suppressMarkers: true } );
  var geolocate;
    navigator.geolocation.getCurrentPosition(function(position) {
	    		
		    		window.geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		    		
		    		var positionMarker = new google.maps.Marker({
		    			   map: map,
		    			   position: window.geolocate,
		    			   icon: people
		    		
		    		});
		    		
		    		map.setCenter(window.geolocate);
		    		
	    		});
          setMarkers(map, horeca);


  
}


var people = {
    url: 'images/people.png',
    size: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 32)
};





var markers_array = [];

function setMarkers(map, locations) {
  console.log("markers");
  for (var i = 0; i < locations.length; i++) {
    var horecas = locations[i];
    
    var myLatLng = new google.maps.LatLng(horecas.lat, horecas.longi);

    var marker = new google.maps.Marker({
        
        position: myLatLng,
        map: map,
        shadow: horecas.shadow,
        icon: horecas.img,
        title: horecas.naam,
        zIndex: horecas.z,
        horecaType: horecas.typeHoreca,
        description: horecas.description,
        });
  markers_array.push(marker);

var position;


select.on('click', filterMarkers);

var filterMarkers = function(select){
    
    console.log(select);
    console.log(select.target.innerHTML);
    var i;
  for (i = 0; i < markers_array.length; i++){
   
    if(markers_array[i].horecaType != select.target.innerHTML){
        
        markers_array[i].setMap(null);
    }else{
      markers_array[i].setMap(map);
    }

    if(select.target.innerHTML == "alles"){
        
        markers_array[i].setMap(map);
    }

  }
    
  };

}



 
  

google.maps.event.addDomListener(window, 'load', initialize);

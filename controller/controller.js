var routeApp = routeApp || {};

routeApp.directionsDisplay;
routeApp.directionsService = new google.maps.DirectionsService();
routeApp.map;

routeApp.initialize = function(){


routeApp.directionsDisplay = new google.maps.DirectionsRenderer();

routeApp.mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(52.25597,4.768396),
    mapTypeId: google.maps.MapTypeId.ROADMAP
}

routeApp.map = new google.maps.Map(document.getElementById("map-canvas"),
                                routeApp.mapOptions);

routeApp.directionsDisplay.setMap(routeApp.map);
routeApp.directionsDisplay.setOptions( { suppressMarkers: true } );
routeApp.geolocate;

navigator.geolocation.getCurrentPosition(function(position) {
          
            routeApp.geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            var positionMarker = new google.maps.Marker({
                 map: routeApp.map,
                 position: routeApp.geolocate,
                 icon: routeApp.people
            
            });
            
            routeApp.map.setCenter(routeApp.geolocate);

            
          });



}

routeApp.clickFuntion = function(){

    google.maps.event.addListener(routeApp.marker, 'click', function() {
     
      document.getElementById('info').style.display='block';
      document.getElementById('name').innerHTML = this.title;
      document.getElementById('horecatype').innerHTML =  this.horecaType;
      document.getElementById('description').innerHTML =  this.description;
      document.getElementById('route_knop').innerHTML = "route";
      
      var routeButton = document.getElementById('route_knop');
      routeButton.addEventListener("click", function(e){
        routeApp.calcRoute();
        },false);

    });

    

    routeApp.close = document.getElementById('close');

    routeApp.close.addEventListener("click", function(e){
      document.getElementById('info').style.display='none';
    },false);


    routeApp.select = $('.selectie_button');
    routeApp.select.on('click', routeApp.filterMarkers);

    routeApp.filterMarkers = function(select){
        

      var i;
      
      for (i = 0; i < routeApp.markers_array.length; i++){
       
        if(routeApp.markers_array[i].horecaType != select.target.innerHTML){
            
            routeApp.markers_array[i].setMap(null);
        }else{
          routeApp.markers_array[i].setMap(routeApp.map);
        }if(select.target.innerHTML == "alles"){
            
            routeApp.markers_array[i].setMap(routeApp.map);
        }

      }

    }
    routeApp.calcRoute = function() {
      
      routeApp.start = routeApp.geolocate;
      routeApp.end = routeApp.marker.position;
      routeApp.request = {
              origin: routeApp.start,
              destination: routeApp.end,
              travelMode: google.maps.DirectionsTravelMode.BICYCLING
      };

      routeApp.directionsService.route(routeApp.request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
                routeApp.directionsDisplay.setDirections(response);
        }
      });

    }  

}

routeApp.categorie_knop = document.getElementById('categorie');
    routeApp.menu = document.getElementById('menu');

    routeApp.menu.addEventListener("click", function(e){
          //show_categories();
        if(routeApp.categorie_knop.style.display == "block"){
          routeApp.categorie_knop.style.display = "none";
        }else{
          routeApp.categorie_knop.style.display = "block";
        }
},false);

routeApp.selectie_button = document.getElementById('selectie_button');
routeApp.categorie_blok = $('.categorie');
  
routeApp.aalsmeerButton = document.getElementById('button_aalsmeer');   

routeApp.aalsmeerButton.addEventListener("click",function(e){
        var center_aalsmeer = new google.maps.LatLng(52.268341,4.751108);
        
         routeApp.map.panTo(center_aalsmeer);
         


},false);


routeApp.initialize();

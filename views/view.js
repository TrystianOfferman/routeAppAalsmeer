//view
var routeApp = routeApp || {};

routeApp.setMarkers = function(map, location) {
 

routeApp.markers_array = [];


for (var i = 0; i < routeApp.horeca.length; i++) {
  
  routeApp.horecas = routeApp.horeca[i];
    
  routeApp.myLatLng = new google.maps.LatLng(routeApp.horecas.lat, routeApp.horecas.longi);

  routeApp.marker = new google.maps.Marker({
        
        position: routeApp.myLatLng,
        map: routeApp.map,
        shadow: routeApp.horecas.shadow,
        icon: routeApp.horecas.img,
        title: routeApp.horecas.naam,
        zIndex: routeApp.horecas.z,
        horecaType: routeApp.horecas.typeHoreca,
        description: routeApp.horecas.description,
        

    });
    routeApp.markers_array.push(routeApp.marker); 
    
   console.log(routeApp.marker);

   routeApp.clickFuntion();

}

}

routeApp.setMarkers(routeApp.map, routeApp.horeca);




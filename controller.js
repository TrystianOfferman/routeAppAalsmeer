var categorie_knop = document.getElementById('categorie')
var menu = document.getElementById('menu');


menu.addEventListener("click", function(e){
      //show_categories();
    if(categorie_knop.style.display == "block"){
      categorie_knop.style.display = "none";
    }else{
      categorie_knop.style.display = "block";
    }
},false);
var close = document.getElementById('close');
close.addEventListener("click", function(e){
  document.getElementById('info').style.display='none';
},false);


function calcRoute() {
  
  var start = geolocate;
  var end = this.position;
  var request = {
          origin:start,
          destination:end,
          travelMode: google.maps.DirectionsTravelMode.BICYCLING
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });

}  

var aalsmeerButton = document.getElementById('button_aalsmeer');   
  aalsmeerButton.addEventListener("click",function(e){
        var center_aalsmeer = new google.maps.LatLng(52.268341,4.751108);
        
         map.panTo(center_aalsmeer);
         


},false);


  
  var selectie_button = document.getElementById('selectie_button');
  var categorie_blok = $('.categorie');
  var select = $('.selectie_button');
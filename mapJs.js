




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
  //    var contentString = "<h1>Hoi </h1>";
      //console.log(this);


      
 

var aalsmeerButton = document.getElementById('button_aalsmeer');   
  aalsmeerButton.addEventListener("click",function(e){
        var center_aalsmeer = new google.maps.LatLng(52.268341,4.751108);
        
         map.panTo(center_aalsmeer);
         


      },false);


  
  var selectie_button = document.getElementById('selectie_button');
  var categorie_blok = $('.categorie');
  
 
  var select = $('.selectie_button');
   // selectie_button.style.display = "none";
 //$('.show_menu').on('click', show_categories);

 

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



var show_categories = function(){
     console.log(categorie_knop.style.display);
     console.log("aaa_aaaa_aaa");
     console.log(markers_array[i]);
     console.log(i);
   
    categorie.toggleClass("aaa");
    
    //categorie_knop.toggleClass('golden');
/*
    //categorie.removeClass('categorie').toggleClass('golden');
    if (categorie.hasClass('closed')){
      categorie.addClass('open');
      //categorie.removeClass('categorie').toggleClass('golden');
    }else{
      categorie.addClass('categorie');
      //categorie.removeClass('glow golden').toggleClass();
    }*/
 }


    


     google.maps.event.addListener(marker, 'click', function() {
      console.log("aa");
      show_categories();
      console.log(this.position);
      window.position = this.position;
      document.getElementById('info').style.display='block';
      document.getElementById('name').innerHTML = this.title;
      document.getElementById('horecatype').innerHTML =  this.horecaType;
      document.getElementById('description').innerHTML =  this.description;

      
      var routeButton = document.getElementById('route_knop');
      routeButton.addEventListener("click", function(e){
        calcRoute();
        },false);

  });
 
 
  }
  

}
/*
var categorie_knop = document.getElementById('categorie')
var menu = document.getElementById('menu');
    menu.addEventListener("click", function(e){
      //show_categories();
    if(categorie_knop.style.display == "block"){
      categorie_knop.style.display = "none";
    }else{
      categorie_knop.style.display = "block";
    }
},false);*/

 
  

google.maps.event.addDomListener(window, 'load', initialize);

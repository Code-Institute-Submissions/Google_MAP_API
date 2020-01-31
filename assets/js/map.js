
      var map;
      var img;
      var infowindow; 
      var placesList;
      var img_parent;
      var start_centre;
      var request;
      var service;
      var markers =[];

    function initMap() {
        
        start_centre = {lat: 51.506164642, lng: -0.124832834};
        Start_location(start_centre,function(start_city){
            $("span.start").text(start_city);
        });
        
       
        //document.getElementById('start').textContent = start_city; 

        map = new google.maps.Map(document.getElementById('map'),
           {
            center: start_centre,
            Zoom:15,
            minZoom:12,
            maxZoom: 18,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            restriction: {
                        latLngBounds: {
                           north: 51.561872,
                           south: 51.446044,
                           west: -0.210685,
                           east: -0.03846
                        },
                        strictBounds: true 
                         }
            });
     
         service = new google.maps.places.PlacesService(map);
         infowindow = new google.maps.InfoWindow();

         placesList = document.getElementById('text-display');
         img_parent = document.getElementById('img-display');
         
       
        
       map.addListener('rightclick', function(e){
            
         for (var i = 0; i < markers.length; i++) {  
          markers[i].setMap(null); 
         }     
           markers = [];

           var request = {
              location: e.latLng,
              radius: 1000,
              types: [Select_Activity()]
               };

           
           service.nearbySearch(request, function(results, status) {
             if (status == google.maps.places.PlacesServiceStatus.OK) {
               for (var i = 0; i < results.length; i++) {             
                 createMarker(results[i],i,request.types);
                }
             }
            });
  
       });
    }      
                 
    function createMarker(plot,index,place_type) {
        var photoUrl;

            markers[index] = new google.maps.Marker({
                       map: map,
                       draggable: false,
                       animation: google.maps.Animation.DROP,
                       position: plot.geometry.location,
                       title: plot.name,
                       icon: Set_Icon (place_type) 
                     });
            
            markers[index].placeResult=plot;
            
                 
           markers[index].addListener('click', function() {   
                var prev_info = this;
            
                var request = {
                  placeId: this.placeResult.place_id,
                  fields: ['formatted_address', 'international_phone_number', 'reviews']
                };
               
              service = new google.maps.places.PlacesService(map);

              service.getDetails(request, function (place, status) {  
                 if (status == google.maps.places.PlacesServiceStatus.OK) {  
                       
                     placesList.innerHTML = "<p>"+ prev_info.placeResult.name + "<br> "
                                     + "Rating: " + valid_field(prev_info.placeResult.rating)+" stars"+"<br> "
                                     + "Address: " + place.formatted_address +"<br>"
                                     +"Phone: " + place.international_phone_number + "</p>"; 
                               
                        
                     if (img_parent.hasChildNodes()) {
                        $(img_parent).empty();
                     }
                         
                     var myImage = $('<img/>');
                    
                     
                     myImage.attr('class', "image-style");
                     myImage.attr('src', prev_info.placeResult.photos[0].getUrl({maxWidth: 400, maxHeight: 400}));
                     
                     myImage.appendTo($("#img-display"));
                   
    
                 }
               });
               
               infowindow.setContent(prev_info.placeResult.name);
               infowindow.open(map, this);

               for (var i = 0; i < markers.length; i++) {  
                    markers[i].setAnimation(null)
               }
                    toggleBounce(this);
              
            });

    }

            function Select_Activity () {
                var criteria;

               var activities = $("input[name~='type']");
               
               for(var i = 0; i < activities.length; i++){
                  if(activities[i].checked){
                     criteria = activities[i].value; 
                    }
                }  
               return criteria;
            }
 
            function toggleBounce(ele) {
                 if (ele.getAnimation() !== null) {
                   ele.setAnimation(null);
                 } else {
                  ele.setAnimation(google.maps.Animation.BOUNCE);
                  }
            }

            function valid_field (txt) {
                     var tmp="";
                     if (txt != null) {tmp = txt};
                     return tmp;
            }

            function Set_Icon (Estab_type) {
                var Icon_Str;

                if (Estab_type == 'cafe') {
                Icon_Str ='assets/images/icons8-coffee-to-go-48.png'}
                else if (Estab_type == 'lodging') {
                Icon_Str ='assets/images/icons8-hotel-40.png'}
                else if (Estab_type == 'restaurant') {
                Icon_Str ='assets/images/icons8-hamburger-50.png'}
                else if (Estab_type == 'bar')  {
                Icon_Str ='assets/images/icons8-bar-40.png'}
                else if (Estab_type == 'museum') {
                Icon_Str ='assets/images/icons8-museum-40.png'}
                else {Icon_Str = null}

                return Icon_Str;
            }

   
       function Start_location (location, callback) {
        var geocoder;
         
        geocoder = new google.maps.Geocoder();
        

        geocoder.geocode({'latLng': location}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            
            if (results[0]) {
                var add= results[0].formatted_address;
                var  value = add.split(",");
                count = value.length;
                var city = value[count-2];
                var city2 = city.split(" ");
                
                callback (city2[1]);
                                     /* November 2017, Stackover Flow snippet by Max*/
            }
            
        }
        
        });
         
       }
    
            
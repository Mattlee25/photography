
var markers = [];
    var locations = [
        ['DC', 38.889630, -77.036383],
        ['Baltimore', 39.290386, -76.612190],
        ['Philadelphia', 39.952583, -75.165222],
        ['New York', 40.712776, -74.005974],
        ['New HAven', 41.3082138, -72.9250518],
        ['Boston', 42.3602534, -71.0582912],
        ['Portland', 43.6610277, -70.2548596],
        ['Acadia National Park', 44.35617135, -68.2155106],
        ['Syracuse', 43.0481221, -76.1474244],
        ['Buffalo', 42.8867166, -78.8783922],
        ['Toronto', 43.6534817, -79.3839347],
        ['Thousand Island Park', 44.2869911, -76.0277259],
        ['Virginia Beach', 36.8529841, -75.9774183],
        ['Charlotte', 35.2272, -80.843083],
        ['Fayettesville', 35.0525759, -78.878292],
        ['Nashville', 36.1622296, -86.7743531],
        ['Charleston', 32.7876012, -79.9402728],
        ['Atlanta', 33.7490987, -84.3901849],
        ['Savannah', 32.0809263, -81.0911768],
        ['Miami', 25.7742658, -80.1936589],
        ['Nassau', 25.0783456, -77.3383331],
        ['Seattle', 47.6038321, -122.3300624],
        ['Victoria', 48.4283182, -123.3649533],
        ['Ketchikan', 55.3430696, -131.6466819],
        ['Juneau', 58.3019497, -134.419734],
        ['Glacier Bay National Park', 58.8130745, -136.87235223],
        ['Skagway', 59.4556412, -135.3116103],
        ['Carcross', 60.1692232, -134.7095838],
        ['Reykjavik', 64.141453, -21.954876],
        ['Blue Lagoon', 63.880007, -22.44921002],
        ['Kirkjufell', 64.9399465, -23.3074783],
        ['Arnarstapi', 64.766727, -23.628085],
        ['Seljalandsfoss', 63.6154571, -19.9881686],
        ['Skogafoss', 63.5321038, -19.511292],
        ['Reynisfjara', 63.4043774, -19.05829632],
        ['Fjaðrárgljúfur', 63.7725995, -18.1737214],
        ['Breiðamerkursandur', 64.0431158, -16.175248],
        ['Vatnajökull', 64.38259695, -16.9356698],
        ['London', 51.5073219, -0.1276474],
        ['Paris', 48.8588897, 2.32004103],
        ['Venice', 45.4371908, 12.3345898],
        ['Vicenze', 45.5488306, 11.5478825], 
        ['Florence', 43.7698712, 11.2555757],
        ['Assisi', 43.0711952, 12.6146669],
        ['Rome', 41.8933203, 12.4829321],
        ['Seoul', 37.5666791, 126.9782914],
        ['Jeju Island', 33.38034645, 126.54825446],
    ];

    function hideAllInfoWindows(map) {
      markers.forEach((marker) => marker.infowindow.close(map, marker));
    }

    var pinIcon = "https://img.icons8.com/fluent/48/000000/map-pin.png";

    function setMarkers(map) {
        for (var i = 0; i < locations.length; i++) {

            var location = locations[i];
            var locationInfowindow = new google.maps.InfoWindow({
                content: location[0],
            });

            var marker = new google.maps.Marker({
                position: {lat: location[1], lng: location[2]},
                map: map,
                title: location[0],
                icon: pinIcon,
                infowindow: locationInfowindow
            });

            markers.push(marker);

            google.maps.event.addListener(marker, 'click', function() {
                hideAllInfoWindows(map);
                this.infowindow.open(map, this);
            });

            google.maps.event.addListener(map, "click", function(event) {
              hideAllInfoWindows(map);
            });

        }
    }

function initMap() {
    
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2c2c2c"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ],
        {name: 'Dark Map'});
    

    
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 32.647, lng: -5.581},
      zoom: 4,
      mapTypeControlOptions: {
        mapTypeIds: []
      }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    setMarkers(map);
  }
  
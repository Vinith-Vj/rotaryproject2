// var google;

// function init() {
// 	var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

// 	var mapOptions = {
// 		zoom: 7,
// 		center: myLatlng,
// 		scrollwheel: false,
// 		styles: [
// 			{ "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
// 			{ "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
// 			{ "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
// 			{ "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f5f5" }] },
// 			{ "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
// 			{ "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] },
// 			{ "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
// 			{ "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] },
// 			{ "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
// 			{ "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
// 			{ "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
// 			{ "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#dadada" }] },
// 			{ "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
// 			{ "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] },
// 			{ "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#e5e5e5" }] },
// 			{ "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }] },
// 			{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] },
// 			{ "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }
// 		]
// 	};

// 	var mapElement = document.getElementById('map');
// 	var map = new google.maps.Map(mapElement, mapOptions);

// 	var addresses = ['New York'];

// 	for (var x = 0; x < addresses.length; x++) {
// 		$.getJSON('https://maps.app.goo.gl/bZgiSVn4CuirFP8a9' + addresses[x] + '&sensor=false', null, function (data) {
// 			var p = data.results[0].geometry.location;
// 			var latlng = new google.maps.LatLng(p.lat, p.lng);
// 			new google.maps.Marker({
// 				position: latlng,
// 				map: map,
// 				icon: 'images/loc.png'
// 			});
// 		});
// 	}
// }

// google.maps.event.addDomListener(window, 'load', init);
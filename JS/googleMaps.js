document.getElementById("tm").addEventListener("click", initMap);
var map,
	locSelection = { lat: -33.9477229, lng: 18.4002639 },
	marker;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: locSelection,
		zoom: 14,
		mapTypeId: "terrain"
	});
	marker = new google.maps.Marker({ position: locSelection, map: map });
}

//infoWindow = new google.maps.InfoWindow();

// Try HTML5 geolocation.
// only use this when you want to get directions!!
/*	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				infoWindow.setPosition(pos);
				infoWindow.setContent("Location found.");
				infoWindow.open(map);
				map.setCenter(pos);
			},
			function() {
				handleLocationError(true, infoWindow, map.getCenter());
			}
		);
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}*/

/*function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
		browserHasGeolocation
			? "So Sorry But The Geolocation service has failed."
			: "Sorry to say, but your browser doesn't support geolocation."
	);
	infoWindow.open(map);
}*/

initMap();
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -33.8666, lng: 151.1958 },
		zoom: 14,
		mapTypeId: "terrain"
	});

	var request = {
		placeId: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
		fields: [
			"name",
			"rating",
			"formatted_phone_number",
			"geometry",
			"icon",
			"plus_code",
			"website",
			"opening_hours",
			"user_ratings_total"
		]
	};

	service = new google.maps.places.PlacesService(map);
	service.getDetails(request, callback);

	function callback(place, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			var marker = new google.maps.Marker({
				map: map,
				position: place.geometry.location
			});
			map.setCenter(marker.getPosition());

			//createMarker(place);
		}
	}

	// Checks that the PlacesServiceStatus is OK, and adds a marker
	// using the place ID and location from the PlacesService.

	/*function ocfinder(lnglat) {
	eventDetails = "Event Name " + event.type + "ID " + event.id;
	console.log(eventDetails);

}*/

	/* document.addEventListener('click', handleClickEvents, false);

function handleClickEvents(evt) {
    myEventTarget = event.target;

    if (myEventTarget.id === 'id1') {

    } else if (myEventTarget.id === 'id2) {

    }
}*/

	/*
document.getElementById("tm").addEventListener("click", function() {
	(locSelection = { lat: -33.9477226, lng: 18.4002639 }), initMap();
});

document.getElementById("cp").addEventListener("click", function() {
	(locSelection = { lat: -34.3476358, lng: 18.4751317 }), initMap();
});
document.getElementById("bk").addEventListener("click", function() {
	(locSelection = { lat: -33.9210519, lng: 18.3964133 }), initMap();
});

document.getElementById("con").addEventListener("click", function() {
	(locSelection = { lat: -34.0275608, lng: 18.3964169 }), initMap();
});
document.getElementById("kb").addEventListener("click", function() {
	(locSelection = { lat: -34.1284835, lng: 18.4126414 }), initMap();
});
document.getElementById("bl").addEventListener("click", function() {
	(locSelection = { lat: -34.1972039, lng: 18.4162426 }), initMap();
});
document.getElementById("chp").addEventListener("click", function() {
	(locSelection = { lat: -34.08604, lng: 18.3232238 }), initMap();
});

document.getElementById("dsm").addEventListener("click", function() {
	(locSelection = { lat: -33.9270086, lng: 18.3894798 }), initMap();
});
document.getElementById("lh").addEventListener("click", function() {
	(locSelection = { lat: -33.9350189, lng: 18.3539519 }), initMap();
});
document.getElementById("ri").addEventListener("click", function() {
	(locSelection = { lat: -33.805019, lng: 18.369591 }), initMap();
});
var map, locSelection;
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
} 

*/
}

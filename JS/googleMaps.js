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
		}
	}
}

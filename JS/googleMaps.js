let TM = {
	Id: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
	about: `The Table Mountain Aerial Cableway Company has been providing visitors
			with a world-class experience since October 4, 1929. The company 
			operates in a National Park and World Heritage Site.`
};
let CP = {
	Id: "ChIJAf2PqQkjzB0RTEFJZ9rJSSM",
	about: ""
};
let BK = {
	Id: "ChIJLSz2VWhnzB0Rpm9vazg9yw4",
	about: ""
};

function locfinder(locfinder_id) {
	console.log(locfinder_id);
	if (locfinder_id === "tm") {
		(iD = "ChIJdeCOYqJnzB0Rm5YhSFRUI2w"),
			(about = `The Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. The company operates in a National Park and World Heritage Site.`),
			initMap();
	}
	//initMap();

	function initMap() {
		map = new google.maps.Map(document.getElementById("map"), {
			center: { lat: -33.9142686, lng: 18.0955572 },
			zoom: 14,
			mapTypeId: "terrain"
		});

		var request = {
			placeId: iD,
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
					position: place.geometry.location,
					title: place.name
				});
				var name = place.name;
				var rating = place.rating;
				var icon = place.icon;

				console.log(name, rating, icon);
				var markerData =
					'<div class="infowindowContiner">' +
					'<div class="infowidHeading">' +
					'<h2 class="infoHeading">' +
					`${name}` +
					"</h2>" +
					"</div>" +
					'<div class="infowindoBody">' +
					'<p class="infobody">' +
					`${about}` +
					"</p>" +
					'<div class="scocial">' +
					"facebook webpage" +
					"</div>" +
					'<div class="rating">' +
					'<p class="rating">' +
					"Ratings" +
					" " +
					`${rating}` +
					" " +
					"/5" +
					"Make Stars";
				("</p>");
				"</div>" + "</div>" + "</div>";

				var infowindow = new google.maps.InfoWindow({
					content: markerData
				});
				map.setCenter(marker.getPosition());
				infowindow.open(Map, marker);
			}
		}
	}
}
//'<h1 id="firstHeading" class="firstHeading">' +
//				`${name}` +
//				"</h1>";}

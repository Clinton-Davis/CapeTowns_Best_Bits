/*=-=-=-=-=-=-SIGHT SEEING INFORMAION OBJECTS-=-=-*/
//Table Mountain Cable Car
let TM = {
	Id: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
	info: `The Table Mountain Aerial Cableway Company has been providing visitors
			with a world-class experience since October 4, 1929. The company 
			operates in a National Park and World Heritage Site.`
};
//Cape Point
let CP = {
	Id: "ChIJAf2PqQkjzB0RTEFJZ9rJSSM",
	info: ""
};
//Boo-Kaap
let BK = {
	Id: "ChIJLSz2VWhnzB0Rpm9vazg9yw4",
	info: ""
};
// Constainta
let CON = {
	Id: "ChIJ29Ra-NNpzB0R03JXGGkr6Bo",
	info: ""
};
// Kalk Bay
let KB = {
	Id: "ChIJu2x0EhZAzB0RCyIwnb_NXFY",
	info: ""
};
// Boulders Beach/Penguins
let BL = {
	Id: "ChIJvxVitEk-zB0RVJetXFk0qww",
	info: ""
};
// Chapmens Peak Drive
let CHP = {
	Id: "ChIJVagz7BNpzB0Rv9p0tMDvZsg",
	info: ""
};
// Distrct Six Mus
let DSM = {
	Id: "ChIJXdpUhHtnzB0RI8TYhHL5028",
	info: ""
};
// Lions Head
let LH = {
	Id: "ChIJ7Tf0rQVnzB0REQJgaykzKEg",
	info: ""
};
// Robin Island
let RI = {
	Id: "ChIJy3XfS2WKzB0RYZDeLkVkb30",
	info: ""
};

// locfinder is the onClick function to initMap on clicked Location
function locfinder(locfinder_id) {
	console.log(locfinder_id);
	switch (locfinder_id) {
		case "tm":
			(iD = TM.Id), (info = TM.info), initMap();
			break;
		case "cp":
			(iD = CP.Id), (info = CP.info), initMap();
			break;
		case "bk":
			(iD = BK.Id), (info = BK.info), initMap();
			break;
		case "con":
			(iD = CON.Id), (info = CON.info), initMap();
			break;
		case "kb":
			(iD = KB.Id), (info = KB.info), initMap();
			break;
		case "bl":
			(iD = BL.Id), (info = BL.info), initMap();
			break;
		case "chp":
			(iD = CHP.Id), (info = CHP.info), initMap();
			break;

		case "dsm":
			(iD = DSM.Id), (info = DSM.info), initMap();
			break;
		case "lh":
			(iD = LH.Id), (info = LH.info), initMap();
			break;
		case "ri":
			(iD = RI.Id), (info = RI.info), initMap();
			break;
		default:
			console.log("ERROR");
	}

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
					`${info}` +
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

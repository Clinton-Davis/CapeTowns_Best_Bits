/*=-=-=-=-=-=-SIGHT SEEING INFORMAION OBJECTS-=-=-*/
//Table Mountain Cable Car
let TM = {
	Id: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
	info: `The Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. The company operates in a National Park and World Heritage Site.`
};
//Cape Point
let CP = {
	Id: "ChIJAf2PqQkjzB0RTEFJZ9rJSSM",
	info: `Mistakenly cited as the point where the Atlantic and Indian Oceans meet, Cape Point is, nonetheless, a place like no other. (Incidentally, the two oceans’ meeting point is at Cape Agulhas). At Cape Point Nature Reserve, the mountain and ocean meet in a thunderous clash of water against rock, producing a dramatic landscape inhabited by an incredible diversity of life. As the tip of land juts out like on outstretched arm, the ocean swells around it, and multitudes of birds flock to its pristine beaches and rugged cliffs.`
};
//Boo-Kaap
let BK = {
	Id: "ChIJLSz2VWhnzB0Rpm9vazg9yw4",
	info: `A popular daytime destination, hillside Bo-Kaap is known for its narrow cobbled streets lined with colorful houses. Local Cape Malay culture is represented at sites like the 1790s-built Auwal Mosque and the Bo-Kaap Museum, with exhibits about the achievements of Muslim immigrants. Nearby, simple restaurants serve curries, roti and other Cape Malay dishes. The Noon Gun cannon is fired daily at midday from Signal Hill.`
};
// Constainta
let CON = {
	Id: "ChIJ29Ra-NNpzB0R03JXGGkr6Bo",
	info: `Constantia is a wine-producing suburb of Cape Town, South Africa. The Constantia Wine Route links the many wineries dotting the Constantia Valley. Housed in a 17th-century wine estate, Groot Constantia Homestead and Wine Museum includes a manor house with 18th- and 19th-century furnishings, plus collections of drinking vessels and carriages. The Constantia Greenbelt network includes the tree-lined Alphen Trail.`
};
// Kalk Bay
let KB = {
	Id: "ChIJu2x0EhZAzB0RCyIwnb_NXFY",
	info: `Kalk Bay is a fishing village on the coast of False Bay, South Africa and is now a suburb of greater Cape Town. It lies between the ocean and sharply rising mountainous heights that are buttressed by crags of grey Table Mountain Sandstone. A literal translation from the Dutch/Afrikaans name "Kalkbaai" is "Lime Bay".`
};
// Boulders Beach/Penguins
let BL = {
	Id: "ChIJvxVitEk-zB0RVJetXFk0qww",
	info: `Sheltered public bay with a sandy beach & boardwalk, plus free-roaming colony of African penguins.`
};
// Chapmens Peak Drive
let CHP = {
	Id: "ChIJVagz7BNpzB0Rv9p0tMDvZsg",
	info: `Chapman's Peak is the name of a mountain on the western side of the Cape Peninsula, between Hout Bay and Noordhoek. The mountain falls sharply for hundreds of metres into the Atlantic Ocean. A spectacular road, known as Chapman's Peak Drive, hugs the near-vertical face of the mountain.`
};
// Distrct Six Mus
let DSM = {
	Id: "ChIJXdpUhHtnzB0RI8TYhHL5028",
	info: `Museum tracing the 1970s forced clearance of 60,000 residents & demolition of homes under apartheid.`
};
// Lions Head
let LH = {
	Id: "ChIJ7Tf0rQVnzB0REQJgaykzKEg",
	info: `Boasting panoramic views of the city, this landmark mountain offers hiking trails & historic graves.`
};
// Robin Island
let RI = {
	Id: "ChIJy3XfS2WKzB0RYZDeLkVkb30",
	info: `Historical landmark known for housing political prisoners such as Nelson Mandela, now with a museum.`
};

// locationFinder is the onClick function to initMap on clicked Location
function locationFinder(locationFinder_id) {
	console.log(locationFinder_id);
	switch (locationFinder_id) {
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
				if (rating == undefined) {
					var rating = " ";
				} else {
					var rating = place.rating;
				}
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
					" " +
					`${rating}` +
					" " +
					"Make Stars";
				("</p>");
				"</div>" + "</div>" + "</div>";

				var infowindow = new google.maps.InfoWindow({
					content: markerData
				});
				map.setCenter(marker.getPosition());
				infowindow.open(Map, marker);
			} else {
				console.log("states error");
			}
		}
	}
}
//'<h1 id="firstHeading" class="firstHeading">' +
//				`${name}` +
//				"</h1>";}

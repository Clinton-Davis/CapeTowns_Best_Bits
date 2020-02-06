# CapeTowns_Best_Bits

This is my MileStone Project for Code Ins
Bugs:
toggle is not working probaly with showing and hiding the hidden tabs
Had a issue with footer jumping up and down when my divs where shoing and hiding: Fix-added Display Flex to Body and added margin-Top: auto / to footer.

Google Maps Help: https://developers.google.com/maps/documentation/javascript/geolocation

map locations:
Table mountain = / places id = ChIJdeCOYqJnzB0Rm5YhSFRUI2w
var about = `The Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. The company operates in a National Park and World Heritage Site.`

Cape point = places id = ChIJAf2PqQkjzB0RTEFJZ9rJSSM
bo-koop = -33.9210519,18.3964133 / places id = ChIJLSz2VWhnzB0Rpm9vazg9yw4
Constainta = -34.0275608,18.3964169 / places id = ChIJ29Ra-NNpzB0R03JXGGkr6Bo
Kalk Bay = -34.1284835,18.4126414 / places id = ChIJu2x0EhZAzB0RCyIwnb_NXFY
boulders = -34.1972039,18.4162426 / places id = ChIJvxVitEk-zB0RVJetXFk0qww
Chapmens peak = -34.08604,18.3232238 / places id = ChIJVagz7BNpzB0Rv9p0tMDvZsg
Dist six mus = -33.9270086,18.3894798 / places id = ChIJXdpUhHtnzB0RI8TYhHL5028
Lions head = -33.9350189,18.3539519 / places id = ChIJ7Tf0rQVnzB0REQJgaykzKEg
robin Island = -33.805019,18.369591 / places id = ChIJy3XfS2WKzB0RYZDeLkVkb30

/\*
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
/\* if (navigator.geolocation) {
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

/\*function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(
browserHasGeolocation
? "So Sorry But The Geolocation service has failed."
: "Sorry to say, but your browser doesn't support geolocation."
);
infoWindow.open(map);
}

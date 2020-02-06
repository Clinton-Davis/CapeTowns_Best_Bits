# CapeTowns_Best_Bits

This is my MileStone Project for Code Ins
Bugs:
toggle is not working probaly with showing and hiding the hidden tabs
Had a issue with footer jumping up and down when my divs where shoing and hiding: Fix-added Display Flex to Body and added margin-Top: auto / to footer.

Google Maps Help: https://developers.google.com/maps/documentation/javascript/geolocation

map locations:
Table mountain = / places id = ChIJdeCOYqJnzB0Rm5YhSFRUI2w
info = `The Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. The company operates in a National Park and World Heritage Site.`

Cape point = places id = ChIJAf2PqQkjzB0RTEFJZ9rJSSM
info = `Mistakenly cited as the point where the Atlantic and Indian Oceans meet, Cape Point is, nonetheless, a place like no other. (Incidentally, the two oceans’ meeting point is at Cape Agulhas). At Cape Point Nature Reserve, the mountain and ocean meet in a thunderous clash of water against rock, producing a dramatic landscape inhabited by an incredible diversity of life. As the tip of land juts out like on outstretched arm, the ocean swells around it, and multitudes of birds flock to its pristine beaches and rugged cliffs.`
bo-koop = places id = ChIJLSz2VWhnzB0Rpm9vazg9yw4
info = `A popular daytime destination, hillside Bo-Kaap is known for its narrow cobbled streets lined with colorful houses. Local Cape Malay culture is represented at sites like the 1790s-built Auwal Mosque and the Bo-Kaap Museum, with exhibits about the achievements of Muslim immigrants. Nearby, simple restaurants serve curries, roti and other Cape Malay dishes. The Noon Gun cannon is fired daily at midday from Signal Hill.`
Constainta = id=con / places id = ChIJ29Ra-NNpzB0R03JXGGkr6Bo
info = `Constantia is a wine-producing suburb of Cape Town, South Africa. The Constantia Wine Route links the many wineries dotting the Constantia Valley. Housed in a 17th-century wine estate, Groot Constantia Homestead and Wine Museum includes a manor house with 18th- and 19th-century furnishings, plus collections of drinking vessels and carriages. The Constantia Greenbelt network includes the tree-lined Alphen Trail.`
Kalk Bay = places id = ChIJu2x0EhZAzB0RCyIwnb_NXFY
info = `Kalk Bay is a fishing village on the coast of False Bay, South Africa and is now a suburb of greater Cape Town. It lies between the ocean and sharply rising mountainous heights that are buttressed by crags of grey Table Mountain Sandstone. A literal translation from the Dutch/Afrikaans name "Kalkbaai" is "Lime Bay".`
boulders = places id = ChIJvxVitEk-zB0RVJetXFk0qww
info = `Sheltered public bay with a sandy beach & boardwalk, plus free-roaming colony of African penguins.`
Chapmens peak = places id = ChIJVagz7BNpzB0Rv9p0tMDvZsg
info = `Chapman's Peak is the name of a mountain on the western side of the Cape Peninsula, between Hout Bay and Noordhoek. The mountain falls sharply for hundreds of metres into the Atlantic Ocean. A spectacular road, known as Chapman's Peak Drive, hugs the near-vertical face of the mountain.`
Dist six mus = places id = ChIJXdpUhHtnzB0RI8TYhHL5028
info = `Museum tracing the 1970s forced clearance of 60,000 residents & demolition of homes under apartheid.`
Lions head = places id = ChIJ7Tf0rQVnzB0REQJgaykzKEg
info = `Boasting panoramic views of the city, this landmark mountain offers hiking trails & historic graves.`
robin Island = places id = ChIJy3XfS2WKzB0RYZDeLkVkb30
info = `Historical landmark known for housing political prisoners such as Nelson Mandela, now with a museum.`

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

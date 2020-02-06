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
info =
bo-koop = places id = ChIJLSz2VWhnzB0Rpm9vazg9yw4
info =
Constainta = id=con / places id = ChIJ29Ra-NNpzB0R03JXGGkr6Bo
info =
Kalk Bay = places id = ChIJu2x0EhZAzB0RCyIwnb_NXFY
info =
boulders = places id = ChIJvxVitEk-zB0RVJetXFk0qww
info =
Chapmens peak = places id = ChIJVagz7BNpzB0Rv9p0tMDvZsg
info =
Dist six mus = places id = ChIJXdpUhHtnzB0RI8TYhHL5028
info =
Lions head = places id = ChIJ7Tf0rQVnzB0REQJgaykzKEg
info =
robin Island = places id = ChIJy3XfS2WKzB0RYZDeLkVkb30
info =

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

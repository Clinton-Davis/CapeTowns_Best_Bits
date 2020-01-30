

//document.getElementById("tableMountain").addEventListener("click", function() {
	//var location = { lat: -33.9483307, lng: 18.4007576 };
//	console.log(location)
//	initMap ()
 // });



// Initialize and add the map
function initMap() {
	
	// The location
	var location = { lat: -33.9483307, lng: 18.4007576 };
	// The map, centered
	var map = new google.maps.Map(document.getElementById("mapDiv"), {
		zoom: 13,
		center: location
	});
	// The marker, positioned
	var marker = new google.maps.Marker({ position: location, map: map });
}

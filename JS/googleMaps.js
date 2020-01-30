// Initialize and add the map
function initMap() {
	// The location
	var CableCarStation = { lat: -33.9483307, lng: 18.4007576 };
	// The map, centered
	var map = new google.maps.Map(document.getElementById("tm"), {
		zoom: 13,
		center: CableCarStation
	});
	// The marker, positioned
	var marker = new google.maps.Marker({ position: CableCarStation, map: map });
}

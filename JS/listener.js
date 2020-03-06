/*Adds Spinner and loading divs to page when GetDirections is clicked
function addSpinner() {
	$("#googleIcon").css("display", "block");
	$("#loadingText").css("display", "block");
	observer.observe(directionsList, {
		attributes: true
	});
}

/* This is a MutationObdrtver to see then the directions have been loaded by
	the google-api 
const directionsList = document.querySelector("#directionsPanel");
const observer = new MutationObserver(mutations => {
	mutations.forEach(record => {
		if (record.type === "attributes") {
			changepic();
		} else {
			console.log("MutatuinObserver has Failed");
		}
	});
});

/*This function removes the loader Div and spinner image when Google Api 
  has finished
function changepic() {
	$("#googleIcon").css("display", "none");
	$("#loadingText").css("display", "none");
	$("#getDirectionsBtn").addClass("hide");
	checkWidth();
}
/* This checkWidth check to see if the screen with is more than 700px so the map and 
	directions display next to each other

function checkWidth() {
	$(window).width(function() {
		var screenWindow = $(this),
			height = screenWindow.height(),
			width = screenWindow.width();
		console.log(`Screen width ${width}px Screen height ${height}px`);
		if (width > 700) {
			$(".mapContainer").css("display", "flex");
		}
	});
} */

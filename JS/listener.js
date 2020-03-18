/*Adds Spinner and loading divs to page when GetDirections is clicked */
function addSpinner() {
	$("#googleIcon").css("display", "block");
	$("#loadingText").css("display", "block");
	$(".back-to-top").css("display", "block");
	
}
/* This is a MutationObdrtver to see then the directions have been loaded by
	the google-api */
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
observer.observe(directionsList, {
	attributes: true
});
/*This function removes the loader Div and spinner image when Google Api 
  has finished also add's the back to top btn*/
function changepic() {
	$("#googleIcon").css("display", "none");
	$("#loadingText").css("display", "none");
	$("#getDirectionsBtn").addClass("hide");

}

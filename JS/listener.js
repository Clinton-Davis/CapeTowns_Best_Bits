function addSpinner() {
	$("#googleIcon").css("display", "block");
	$("#loadingText").css("display", "block");
}

/*
1. making a new MO object
2. tell it what to observe
3. what to do with the observed changes/mutatutions
*/
const myList = document.querySelector("#directionsPanel");
/*1*/
const observer = new MutationObserver(mutations => {
	mutations.forEach(record => {
		console.log(record);

		if (record.type === "attributes") {
			changepic();
		} else {
			console.log("MutatuinObserver has Failed");
		}
	});

	/*try to get it to do somethnog*/
});
/*function that removes the loadeer image when Google Api loads directions*/
function changepic() {
	$("#googleIcon").css("display", "none");
	$("#loadingText").css("display", "none");
	$("#getDirectionsBtn").addClass("hide");
}
/*2*/
observer.observe(myList, {
	attributes: true
});

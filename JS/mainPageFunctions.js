$(function() {
	// Removing main heading and adding colums in
	$("#sights").click(function() {
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").removeClass("hide");
		$("#adventureCol").addClass("hide");
		$("#foodieCol").addClass("hide");
	});
	$("#adventure").click(function() {
		$("#adventureCol").removeClass("hide");
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").addClass("hide");
		$("#foodieCol").addClass("hide");
	});
	$("#foodie").click(function() {
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").addClass("hide");
		$("#adventureCol").addClass("hide");
		$("#foodieCol").removeClass("hide");
	});
	// Back Botton fuctions for colums
	$("#sback").click(function() {
		$("#sightsCol").addClass("hide");
		$("h1,h2,h3,p").removeClass("hide");
	});
	$("#aback").click(function() {
		$("#adventureCol").addClass("hide");
		$("h1,h2,h3,p").removeClass("hide");
	});
	$("#fback").click(function() {
		$("#foodieCol").addClass("hide");
		$("h1,h2,h3,p").removeClass("hide");
	});
});

$(function() {
	// Removing main heading and adding colums in
	$("#sights").click(function() {
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").removeClass("hide");
		$("#adventureCol").addClass("hide");
		$("#foodieCol").addClass("hide");
		$("#map").addClass("hide");
	});
	$("#adventure").click(function() {
		$("#adventureCol").removeClass("hide");
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").addClass("hide");
		$("#foodieCol").addClass("hide");
		$("#map").addClass("hide");
	});
	$("#foodie").click(function() {
		$("h1,h2,h3,p").addClass("hide");
		$("#sightsCol").addClass("hide");
		$("#adventureCol").addClass("hide");
		$("#foodieCol").removeClass("hide");
		$("#map").addClass("hide");
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

	// Click on selection to show maps
	$("li").click(function() {
		$("#sightsCol").addClass("hide");
		$("#map").removeClass("hide");
		$("#directions").removeClass("hide");
		$("#back").removeClass("hide");
	});
	$("li").click(function() {
		$("#adventureCol").addClass("hide");
		$("#map").removeClass("hide");
		$("#directions").removeClass("hide");
		$("#back").removeClass("hide");
	});
	$("li").click(function() {
		$("#foodieCol").addClass("hide");
		$("#map").removeClass("hide");
		$("#directions").removeClass("hide");
		$("#back").removeClass("hide");
	});
	//Back botton in maps
	$("#back").click(function() {
		$("h1,h2,h3,p").removeClass("hide");
		$("#map").addClass("hide");
		$("#back").addClass("hide");
		$("#directions").addClass("hide");
	});

	$("#about").click(function() {
		$("h1,h2,h3,p").addClass("hide");
		$("#map").addClass("hide");
		$("#sights").addClass("hide");
		$("#adventure").addClass("hide");
		$("#foodie").addClass("hide");
		$("#back").addClass("hide");
		$("#modal-heading").removeClass("hide");
	});
});

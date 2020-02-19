$(function() {
	// Removing main heading and adding colums in
	$("#sights").click(function() {
		$("h1,h2,h3,p").fadeOut(200, function() {
			$("h1,h2,h3,p").addClass("hide");
			$("#sights").addClass("hide");
			$("#adventure").addClass("hide");
			$("#foodie").addClass("hide");
			$("#sightsCol").fadeIn(200, function() {
				$("#sightsCol").removeClass("hide");
			});
		});
	});
	/*	$("#adventure").click(function() {
		$("#mainHeading").fadeOut(200, function() {
			/*$("#adventureCol").fadeIn(200, function() {
				$("#mainHeading")
					.children()
					.addClass("hide");
				$(
		});
		$("#sightsCol").addClass("hide");
		$("#foodieCol").addClass("hide");
		$("#map").addClass("hide");
	});
	$("#foodie").click(function() {
		$("#foodieCol").removeClass("hide");
		$("#mainHeading")
			.children()
			.addClass("hide");
		$("#sightsCol").addClass("hide");
		$("#adventureCol").addClass("hide");
		$("#map").addClass("hide");
	}); */
	// Flag Colse button fuctions for colums
	$("#sback").click(function() {
		$("#sightsCol").fadeOut(200, function() {
			$("#sightsCol").addClass("hide");
			$("h1,h2,h3,p").fadeIn(200, function() {
				$("h1,h2,h3,p").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
			});
		});
	});
	/*
	$("#aback").click(function() {
		$("#mainHeading")
			.children()
			.removeClass("hide");
		$("#adventureCol").addClass("hide");
	});
	$("#fback").click(function() {
		$("#foodieCol").addClass("hide");
		$("#mainHeading")
			.children()
			.removeClass("hide");
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
		$("#mainHeading")
			.children()
			.removeClass("hide");
		$("#map").addClass("hide");
		$("#back").addClass("hide");
		$("#directions").addClass("hide");
	});
	$("#about").click(function() {
		$("#map").addClass("hide");
		$("#back").addClass("hide");
	});*/
});

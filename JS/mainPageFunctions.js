$(function() {
	// Removing main heading and adding Sights col
	$("#sights").click(function() {
		$("h1,h2,h3,p").fadeOut(200, function() {
			$("h1,h2,h3,p").addClass("hide");
			$("#sights").addClass("hide");
			$("#adventure").addClass("hide");
			$("#foodie").addClass("hide");
			$("#about").addClass("hide");
			$("#contact").addClass("hide");

			$("#sightsCol").fadeIn(200, function() {
				$("#sightsCol").removeClass("hide");
			});
		});
	});
	// Flag Close button sights col
	$("#sback").click(function() {
		$("#sightsCol").fadeOut(200, function() {
			$("#sightsCol").addClass("hide");

			$("h1,h2,h3,p").fadeIn(200, function() {
				$("h1,h2,h3,p").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
			});
		});
	});
	// Removing main heading and adding Adventure col
	$("#adventure").click(function() {
		$("h1,h2,h3,p").fadeOut(200, function() {
			$("h1,h2,h3,p").addClass("hide");
			$("#sights").addClass("hide");
			$("#adventure").addClass("hide");
			$("#foodie").addClass("hide");
			$("#about").addClass("hide");
			$("#contact").addClass("hide");
			$("#adventureCol").fadeIn(200, function() {
				$("#adventureCol").removeClass("hide");
			});
		});
	});
	// Flag Close button Adventure col
	$("#aback").click(function() {
		$("#adventureCol").fadeOut(200, function() {
			$("#adventureCol").addClass("hide");

			$("h1,h2,h3,p").fadeIn(200, function() {
				$("h1,h2,h3,p").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
			});
		});
	});

	// Removing main heading and adding Foodie col
	$("#foodie").click(function() {
		$("h1,h2,h3,p").fadeOut(200, function() {
			$("h1,h2,h3,p").addClass("hide");
			$("#sights").addClass("hide");
			$("#adventure").addClass("hide");
			$("#foodie").addClass("hide");
			$("#about").addClass("hide");
			$("#contact").addClass("hide");

			$("#foodieCol").fadeIn(200, function() {
				$("#foodieCol").removeClass("hide");
			});
		});
	});
	// Flag Close button for Foodie col
	$("#fback").click(function() {
		$("#foodieCol").fadeOut(200, function() {
			$("#foodieCol").addClass("hide");

			$("h1,h2,h3,p").fadeIn(200, function() {
				$("h1,h2,h3,p").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
			});
		});
	});

	/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-GOOGLE MAPS SECTION-=-=-=-=-=-=-=-*/

	// Click on Item Selection to show details and maps

	$(".item").click(function() {
		// Sights Selection
		$("#sightsCol").fadeOut(200, function() {
			$("#sightsCol").addClass("hide");
			$("#about").addClass("hide");
			$("#contact").addClass("hide");
		}); //adds maps back btn and map div and getDirection Btn from sightsCol
		$("#back").fadeIn(200, function() {
			$("#back").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
			$("#pageBack").removeClass("hide");
		});
		// Adventure Selection
		$("#adventureCol").fadeOut(200, function() {
			$("#adventureCol").addClass("hide");
		}); //adds maps back btn and map div and getDirection Btn from adventureCol
		$("#back").fadeIn(200, function() {
			$("#back").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
		});
		//Foodie Selection
		$("#foodieCol").fadeOut(200, function() {
			$("#foodieCol").addClass("hide");
		}); //adds maps back btn and map div and getDirection Btn from foodieCol
		$("#back").fadeIn(200, function() {
			$("#back").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
		});
	});

	$(".item").click(function(event) {
		if (event.target.classList[4] === "sights") {
			$("#pageBackSights").removeClass("hide");
		} else if (event.target.classList[4] === "adventure") {
			$("#pageBackAdventure").removeClass("hide");
		} else if (event.target.classList[4] === "foodie") {
			$("#pageBackFoodie").removeClass("hide");
		} else {
			console.log("We have a Problem with eventFunction .item");
		}
	});

	//Back Btn in Map section to bring back to main page
	$("#back").click(function() {
		$("h1,h2,h3,p").fadeIn(200, function() {
			$("h1,h2,h3,p").removeClass("hide");
			$("#sights").removeClass("hide");
			$("#adventure").removeClass("hide");
			$("#foodie").removeClass("hide");
			$("#map").addClass("hide");
			$("#pageBackSights").addClass("hide");
			$("#pageBackAdventures").addClass("hide");
			$("#pageBackFoodie").addClass("hide");
			$("#getDirectionsBtn").addClass("hide");
			$("#directionsPanel").css("display", "none");
			$("#loadingText").css("display", "none");
			$("#back").css("display", "none");
			$("#about").removeClass("hide");
			$("#contact").removeClass("hide");
		});
	});
	// MODAL SECTION
	//Modal About Botton Open
	$("#about").click(function() {
		$("#aboutModal").fadeIn(1000);
		$("#mapCon").css("display", "none");
		$("#back").css("display", "none");
		$("#about").addClass("hide");
	}); // Close span on about mondal
	$("#modal-close").click(function() {
		$("#aboutModal").fadeOut(1000);
		$("#about").removeClass("hide");
		$("#contact").removeClass("hide");
	});
	//Closing Form
	$("#contact-send").click(function() {
		$("#mainform").css("display", "none");
		$(".conLead").addClass("hide");
	});
});

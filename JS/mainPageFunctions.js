$(function() {
	// Removing main heading and adding Sights col
	$("#sights").click(function() {
		$(".main-Heading").fadeOut(200, function() {
			$(".main-Heading").addClass("hide");
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

			$(".main-Heading").fadeIn(200, function() {
				$(".main-Heading").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
				$("#mainPageBack").css("display", "none");
				$("#directionsPanel").css("display", "none");
			});
		});
	});
	// Removing main heading and adding Adventure col
	$("#adventure").click(function() {
		$(".main-Heading").fadeOut(200, function() {
			$(".main-Heading").addClass("hide");
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

			$(".main-Heading").fadeIn(200, function() {
				$(".main-Heading").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
				$("#pageBackAdventure").css("display", "none");
				$("#mainPageBack").css("display", "none");
				$("#directionsPanel").css("display", "none");
			});
		});
	});

	// Removing main heading and adding Foodie col
	$("#foodie").click(function() {
		$(".main-Heading").fadeOut(200, function() {
			$(".main-Heading").addClass("hide");
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
			$(".main-Heading").fadeIn(200, function() {
				$(".main-Heading").removeClass("hide");
				$("#sights").removeClass("hide");
				$("#adventure").removeClass("hide");
				$("#foodie").removeClass("hide");
				$("#about").removeClass("hide");
				$("#contact").removeClass("hide");
				$("#loadingText").css("display", "none");
				$("#pageBackFoodie").css("display", "none");
				$("#mainPageBack").css("display", "none");
				$("#directionsPanel").css("display", "none");
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
		$("#mainPageBack").fadeIn(200, function() {
			$("#mainPageBack").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
			$("#pageBack").removeClass("hide");
		});
		// Adventure Selection
		$("#adventureCol").fadeOut(200, function() {
			$("#adventureCol").addClass("hide");
		}); //adds maps back btn and map div and getDirection Btn from adventureCol
		$("#mainPageBack").fadeIn(200, function() {
			$("#mainPageBack").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
		});
		//Foodie Selection
		$("#foodieCol").fadeOut(200, function() {
			$("#foodieCol").addClass("hide");
		}); //adds maps back btn and map div and getDirection Btn from foodieCol
		$("#mainPageBack").fadeIn(200, function() {
			$("#mainPageBack").removeClass("hide");
			$("#getDirectionsBtn").removeClass("hide");
			$("#map").removeClass("hide");
		});
	});


	$("#getDirectionsBtn").click(function () { 
		$(".mainOptions").css("display", "none")
		
	});
	//PageBack Btns
	//PageBack to Sights
	$("#pageBackSights").click(function() {
		$(".mapContainer").css("display", "block");
		$("#sightsCol").css("display", "block");
		$("#getDirectionsBtn").addClass("hide");
		$("#map").addClass("hide");
		$(this).addClass("hide");
	});
	//PageBack to Adventure
	$("#pageBackAdventure").click(function() {
		$(".mapContainer").css("display", "block");
		$("#adventureCol").css("display", "block");
		$("#getDirectionsBtn").addClass("hide");
		$("#map").addClass("hide");
		$(this).addClass("hide");
	});
	//PageBack to Foodies
	$("#pageBackFoodie").click(function() {
		$(".mapContainer").css("display", "block");
		$("#foodieCol").css("display", "block");
		$("#getDirectionsBtn").addClass("hide");
		$("#map").addClass("hide");
		$(this).addClass("hide");
	});

	//Back to Main Page Btn in Map section to bring back to main page

	$("#mainPageBack").click(function() {
		location.reload();
		$(".back-to-top").css("display", "block");
		$(".main-Heading").fadeIn(200, function() {
			$(".main-Heading").removeClass("hide");
			$("#sights").removeClass("hide");
			$("#sightsCol").css("display", "none");
			$("#adventure").removeClass("hide");
			$("#adventureCol").css("display", "none");
			$("#foodie").removeClass("hide");
			$("#foodieCol").css("display", "none");
			$("#map").addClass("hide");
			$("#getDirectionsBtn").addClass("hide");
			$("#directionsPanel").css("display", "none");
			$("#loadingText").css("display", "none");
			$("#mainPageBack").css("display", "none");
			$("#about").removeClass("hide");
			$("#contact").removeClass("hide");
			$(".mapContainer").css("display", "block");
			
		});
	});
	// MODAL SECTION
	//Modal About Botton Open
	$("#about").click(function() {
		$("#aboutModal").fadeIn(1000);
		$("#mapCon").css("display", "none");
		$("#mainPageBack").css("display", "none");
		$("#about").addClass("hide");
	}); // Close span on about mondal
	$("#modal-close").click(function() {
		$("#aboutModal").fadeOut(1000);
		$("#about").removeClass("hide");
		$("#contact").removeClass("hide");
	});

	//Making the Nav Icon (Table Mountain) click back to main
	$("#tableIcon").click(function() {
		location.reload();
	});

	// Toggels the Weather Deatils Div
	$("#temp-api").click(function() {
		$("#weatherDetails").toggle("hide");
		$("#info").toggle("hide");
	});
	$("#wind-api").click(function() {
		$("#weatherDetails").toggle("hide");
		$("#info").toggle("hide");
	});

	//Back To Top Btn
	$(".back-to-top").click(function() {
		$("html").animate({ scrollTop: 0 }, 1000);
	});
});

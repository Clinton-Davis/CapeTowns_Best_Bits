$(function() {
	$("#sights").click(function() {
		$("#selections").toggle(1000);
	});
	$("#sights").click(function() {
		$("#h-con").toggle(1000);
	});
	// Shows - Map Div / information div. Removes thumb img / adds flex-direction class
	$("#tableMountain").click(function() {
		$("#data1").show();
		$("#thumbImg").remove();
		$("#innerBlock").toggleClass("itemContainer", "itemContainer-colum");
	});
});

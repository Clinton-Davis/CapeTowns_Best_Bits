$(function() {
	$("#sights").click(function() {
		$("#selections").toggle(1000);
		$("#h-con").toggle(1000).delay(2000);
		return;
	});
	// Shows - Map Div / information div. Removes thumb img / adds flex-direction class
	$("#tableMountain").click(function() {
		$("#data1").show(2000);
		$("#thumbImg").remove();
		$("#innerBlock").toggleClass("itemContainer", "itemContainer-colum");
	});
});

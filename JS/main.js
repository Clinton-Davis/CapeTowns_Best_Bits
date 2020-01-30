$(function() {
	$("#sights").click(function() {
		$("#selections").toggle(1000);
	});
	$("#sights").click(function() {
		$("#h-con").toggle(2000);
	});

	$("#tableMountain").click(function() {
		$("#data1").show();
	});
	$("#tableMountain").click(function() {
		$("#thumbImg").remove();
	});
	$("#tableMountain").click(function() {
		$("#innerBlock").toggleClass("itemContainer", "itemContainer-colum");
	});
});

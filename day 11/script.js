$(document).ready(function() {
	
	$(".bottom_button").mouseenter(function(){
		
		$(".bottom_button").fadeTo(1000, 1);	
	});
	$(".bottom_button").mouseleave(function(){
		$(".bottom_button").fadeTo(1000, .5);
	});
	
	$("img").click(function(){
		if($(this).attr("src")=="img/3.png") {
			$(this).attr("src","img/1.png");
		} else if ($(this).attr("src")=="img/2.png") {
			$(this).attr("src", "img/3.png");
		} else if ($(this).attr("src")=="img/1.png") {
			$(this).attr("src", "img/2.png");}	
	});


 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 

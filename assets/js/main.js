$(function(){
	
	$(".go-to-features").click(function(e) {

		e.preventDefault();
		$(window).scrollTo("#features", 1000);
	});
});
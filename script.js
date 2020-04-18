$(document).ready(function() {
	var s = $(".nav-bar");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos >= pos.top & windowpos <=800) {
			s.addClass("nav-bar-color");
		} else {
			s.removeClass("nav-bar-color");	
		}
	});
});
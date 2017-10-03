$(function() {

	$(".changed-text").typed({
		strings: ["Акция дейтсвует с 3.10.2017", "Акция не действует без меня в команде =)" ,"После пяти просмотров - акция начинает действовать на нервы"],
		typeSpeed: 100,
		loop: true,
		startDelay: 100
	});

		
	var changeClass = function (r,className1,className2) {
		var regex = new RegExp("(?:^|\\s+)" + className1 + "(?:\\s+|$)");
		if( regex.test(r.className) ) {
			r.className = r.className.replace(regex,' '+className2+' ');
		}
		else{
			r.className = r.className.replace(new RegExp("(?:^|\\s+)" + className2 + "(?:\\s+|$)"),' '+className1+' ');
		}
		return r.className;
	};	
});

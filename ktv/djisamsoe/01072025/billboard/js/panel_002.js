function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

(function($) {
				
	// .wppanel-c-close: container panel posisi tertutup
	// .wppanel-c-open: container panel posisi terbuka

	$('.wppanel-hide').click(function() {
		$(this).hide();
		$('.wppanel-c-open').slideUp();
		$('.wppanel-c-close').slideDown();
		$('.wppanel-show').fadeIn('slow');
		createCookie('toppanel','hide',7)

	});
	
	$('.wppanel-show').click(function() {
		$('.wppanel-c-close').slideUp();
		$('.wppanel-c-open').slideDown();
		$('.wppanel-hide').fadeIn('slow');
		createCookie('toppanel','show',7)
	});

	//alert (document.cookie);
	
	if (readCookie('toppanel') == 'hide') {
		
		$('.wppanel-c-open').css("display","none");
		$('.wppanel-hide').css("display","none");
		$('.wppanel-show').css("display","block");
	};

})(jQuery);


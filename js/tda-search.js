(function($) {
	"use strict";

	$('button.tim-kiem').click(function(e) {
		e.preventDefault();

		const query_string = $('input.tim-kiem').val();

		window.location.href = 'tim-kiem.html?q=' + query_string;
	});
})(jQuery);

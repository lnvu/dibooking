(function($) {
	$('button.tim-kiem').click(function(e) {
		e.preventDefault();

		const query_string = $('input.tim-kiem').val();

		if (is_empty(query_string)) {
			return;
		}

		window.location.href = 'tim-kiem.html?q=' + $.trim(query_string);
	});
})(jQuery);

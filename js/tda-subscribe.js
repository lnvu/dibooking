(function($) {
	$('button.dang-ky-nhan-tin').click(function(e) {
		e.preventDefault();

		const email = $('input.dang-ky-nhan-tin').val();

		if (is_empty(email)) {
			return;
		}

		const regx = /^\w+(\.\w+|\w+)@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/g;

		if (!regx.test(email)) {
			return;
		}

		$('input.dang-ky-nhan-tin').val('');

		$('#popup-subscribe').modal('show');
	});
})(jQuery);

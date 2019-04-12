(function($) {
	localStorage.removeItem('dat-phong');
	localStorage.removeItem('dat-phong-2');

	$('.tro-lai-trang-chu').click(function(e) {
		e.preventDefault();

		window.location.href = 'index.html';
	});
})(jQuery);

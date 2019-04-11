(function($) {
	$('.chon-phong').click(function(e) {
		e.preventDefault();

		const me = $(this);
		const selected_price = $('.selected-price .ks-price');
		const selected_name = $('.selected-price .ks-name');
		const price = me.data('price');
		const name = me.data('name');

		if (is_empty(price) || is_empty(price)) {
			selected_price.html(0);
			selected_name.html('')

			return;
		}

		selected_price.html(price);
		selected_name.html(name)
	});

	$('#dat-phong').click(function(e) {
		e.preventDefault();

		const ho = $('.ho').val();
		const ten = $('.ten').val();
		const email = $('.email').val();
		const dien_thoai = $('.dien-thoai').val();
		const ngay_nhan = $('.ngay-nhan').val().split('/');
		const ngay_tra = $('.ngay-tra').val().split('/');
		const phong = parseInt($('.phong').val(), 10);
		const nguoi_lon = parseInt($('.nguoi-lon').val(), 10);
		const tre_em = parseInt($('.tre-em').val(), 10);
		const thanh_toan = $('.thanh-toan').val();
		const dong_y = $('#dong-y:checked').length > 0;

		if (!dong_y || is_empty(ho) || is_empty(ten) || is_empty(email) || is_empty(dien_thoai) || ngay_nhan.length !== 3 || ngay_tra.length !== 3 || isNaN(phong) || isNaN(nguoi_lon) || is_empty(thanh_toan)) {
			localStorage.removeItem('dat-phong');

			return;
		}

		const data = {
			'ho': ho,
			'ten': ten,
			'email': email,
			'dien_thoai': dien_thoai,
			'ngay_nhan': {
				'ngay': parseInt(ngay_nhan[1], 10),
				'thang': parseInt(ngay_nhan[0], 10),
				'nam': parseInt(ngay_nhan[2], 10)
			},
			'ngay_tra': {
				'ngay': parseInt(ngay_tra[1], 10),
				'thang': parseInt(ngay_tra[0], 10),
				'nam': parseInt(ngay_tra[2], 10)
			},
			'phong': phong,
			'nguoi_lon': nguoi_lon,
			'tre_em': isNaN(tre_em) ? 0 : tre_em,
			'thanh_toan': thanh_toan
		}

		localStorage.setItem('dat-phong', JSON.stringify(data));

		window.location.href = 'dat-phong.html';
	});
})(jQuery);

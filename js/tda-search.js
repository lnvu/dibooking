(function($) {
	$('button.tim-kiem').click(function(e) {
		e.preventDefault();

		const query_string = $('input.tim-kiem').val();

		if (is_empty(query_string)) {
			return;
		}

		window.location.href = 'danh-sach-khach-san.html?q=' + $.trim(query_string);
	});

	$('button.tim-phong').click(function(e) {
		e.preventDefault();

		const dia_diem = $('.dia-diem').val();
		const ngay_nhan = $('.ngay-nhan').val().split('/');
		const ngay_tra = $('.ngay-tra').val().split('/');
		const phong = parseInt($('.phong').val(), 10);
		const nguoi_lon = parseInt($('.nguoi-lon').val(), 10);
		const tre_em = parseInt($('.tre-em').val(), 10);

		if (is_empty(dia_diem) || ngay_nhan.length !== 3 || ngay_tra.length !== 3 || isNaN(phong) || isNaN(nguoi_lon)) {
			return;
		}

		window.location.href = 'danh-sach-khach-san.html?l=' + dia_diem + '&di=' + ngay_nhan[1] + '&mi=' + ngay_nhan[0] + '&yi=' + ngay_nhan[2] + '&do=' + ngay_tra[1] + '&mo=' + ngay_tra[0] + '&yo=' + ngay_tra[2] + '&r=' + phong + '&a=' + nguoi_lon + '&k=' + (isNaN(tre_em) ? 0 : tre_em);
	});
})(jQuery);

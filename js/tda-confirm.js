(function($) {
	const booking_info = is_empty(localStorage.getItem('dat-phong-2')) ? null : JSON.parse(localStorage.getItem('dat-phong-2'));

	if (is_empty(booking_info)) {
		window.location.href = 'index.html';
	}

	$('.ho').text(booking_info.thong_tin_khach.ho);
	$('.ten').text(booking_info.thong_tin_khach.ten);
	$('.ngay-sinh').text(booking_info.thong_tin_khach.ngay_sinh.format);
	$('.email').text(booking_info.thong_tin_khach.email);
	$('.dien-thoai').text(booking_info.thong_tin_khach.dien_thoai);
	$('.dia-chi').text(booking_info.thong_tin_khach.dia_chi);

	$('.ks-name').text(booking_info.thong_tin_khach_san.ten);

	$('.ks-don-gia').text(booking_info.thong_tin_thanh_toan.don_gia).formatdigits().append('đ');

	$('.ks-ngay-nhan').text(booking_info.thong_tin_dat_phong.ngay_nhan);
	$('.ks-ngay-tra').text(booking_info.thong_tin_dat_phong.ngay_tra);
	$('.ks-ngay-nghi').text(booking_info.thong_tin_dat_phong.ngay_nghi);

	$('.ks-so-phong').text(booking_info.thong_tin_dat_phong.so_phong);
	$('.ks-loai-phong').text(booking_info.thong_tin_dat_phong.loai_phong);

	$('.ks-khach').text(booking_info.thong_tin_dat_phong.khach);

	$('.ks-thanh-toan').text(booking_info.thong_tin_thanh_toan.ten_phuong_thuc);
	$('.ks-phi').text(booking_info.thong_tin_thanh_toan.tong).formatdigits().append('đ');

	$('[class^=payment-method-]').hide();

	$('.payment-method-' + booking_info.thong_tin_thanh_toan.phuong_thuc).show();

	if (booking_info.thong_tin_thanh_toan.phuong_thuc === 'cc') {
		$('.pm-loai-the').text(booking_info.thong_tin_thanh_toan.thong_tin_the.loai);
		$('.pm-so-the').text(booking_info.thong_tin_thanh_toan.thong_tin_the.so);
		$('.pm-het-han').text(booking_info.thong_tin_thanh_toan.thong_tin_the.het_han);
	}

	$('.tro-lai').click(function(e) {
		e.preventDefault();

		window.location.href = 'thong-tin-dat-phong.html';
	});

	$('.xac-nhan-thanh-toan').click(function(e) {
		e.preventDefault();

		window.location.href = 'cam-on.html';
	});
})(jQuery);

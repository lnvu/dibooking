(function($) {
	const booking_info = is_empty(localStorage.getItem('dat-phong')) ? (is_empty(localStorage.getItem('dat-phong-2')) ? null : JSON.parse(localStorage.getItem('dat-phong-2'))) : JSON.parse(localStorage.getItem('dat-phong'));

	if (is_empty(booking_info)) {
		window.location.href = 'index.html';
	}

	$('.ho').val(booking_info.thong_tin_khach.ho);
	$('.ten').val(booking_info.thong_tin_khach.ten);
	$('.email').val(booking_info.thong_tin_khach.email);
	$('.dien-thoai').val(booking_info.thong_tin_khach.dien_thoai);

	if (booking_info.thong_tin_khach.hasOwnProperty('ngay_sinh')) {
		// $('.ngay-sinh').val();
		$('.ngay-sinh').datepicker('setValue', new Date(booking_info.thong_tin_khach.ngay_sinh.nam, booking_info.thong_tin_khach.ngay_sinh.thang - 1, booking_info.thong_tin_khach.ngay_sinh.ngay));
	}

	if (booking_info.thong_tin_khach.hasOwnProperty('dia_chi')) {
		$('.dia-chi').val(booking_info.thong_tin_khach.dia_chi);
	}

	$('.ks-name').text(booking_info.thong_tin_khach_san.ten);
	$('.ks-area').text(booking_info.thong_tin_khach_san.khu_vuc);
	$('.ks-url').attr('href', booking_info.thong_tin_khach_san.link);
	$('.ks-img').attr('src', booking_info.thong_tin_khach_san.img);

	$('.ks-danh-gia span').each(function(ind) {
		if (ind + 1 > booking_info.thong_tin_khach_san.danh_gia) {
			$(this).find('i').removeClass('fa-star').addClass('fa-star-o');
		}
	});

	$('.ks-don-gia').html(booking_info.thong_tin_thanh_toan.don_gia).formatdigits().append('<span> / đêm</span>');

	$('.ks-ngay-nhan').text(booking_info.thong_tin_dat_phong.ngay_nhan);
	$('.ks-ngay-tra').text(booking_info.thong_tin_dat_phong.ngay_tra);
	$('.ks-ngay-nghi').text(booking_info.thong_tin_dat_phong.ngay_nghi);

	$('.ks-so-phong').text(booking_info.thong_tin_dat_phong.so_phong);
	$('.ks-loai-phong').text(booking_info.thong_tin_dat_phong.loai_phong);

	$('.ks-khach').text(booking_info.thong_tin_dat_phong.khach);

	$('.ks-phi').text(booking_info.thong_tin_thanh_toan.tong).formatdigits();

	$('.right-side-bar').show();

	$('.payment-' + booking_info.thong_tin_thanh_toan.phuong_thuc).click();

	$('.xac-nhan-dat-phong').click(function(e) {
		e.preventDefault();

		const data = is_empty(localStorage.getItem('dat-phong')) ? (is_empty(localStorage.getItem('dat-phong-2')) ? null : JSON.parse(localStorage.getItem('dat-phong-2'))) : JSON.parse(localStorage.getItem('dat-phong'));

		if (is_empty(booking_info)) {
			window.location.href = 'index.html';
		}

		const ho = $('.ho').val();
		const ten = $('.ten').val();
		const email = $('.email').val();
		const dien_thoai = $('.dien-thoai').val();
		const ngay_sinh = $('.ngay-sinh').val().split('-');
		const dia_chi = $('.dia-chi').val();
		const dong_y = $('#dong-y:checked').length > 0;

		if (!dong_y || is_empty(ho) || is_empty(ten) || ngay_sinh.length !== 3 || is_empty(email) || is_empty(dien_thoai) || is_empty(dia_chi)) {
			return;
		}

		if (data.thong_tin_thanh_toan.phuong_thuc === 'cc') {
			const loai_the = $('.loai-the').val();
			const so_the = $('.so-the').val();
			const chu_the = $('.chu-the').val();
			const ccv = $('.chu-the').val();
			const thang_het_han = $('.thang-het-han').val();
			const nam_het_han = $('.nam-het-han').val();

			if (is_empty(loai_the) || is_empty(loai_the) || is_empty(loai_the) || is_empty(loai_the) || is_empty(loai_the) || is_empty(loai_the)) {
				return;
			}

			data.thong_tin_thanh_toan['thong_tin_the'] = {
				'loai': $('.loai-the option:selected').text(),
				'so': so_the.replace(so_the.substr(4, 8), 'XXXXXXXX'),
				'het_han': thang_het_han + '-' + nam_het_han
			};
		}

		data.thong_tin_khach['ho'] = ho;
		data.thong_tin_khach['ten'] = ten;
		data.thong_tin_khach['ngay_sinh'] = {
			'format': ngay_sinh[0] + '-' + ngay_sinh[1] + '-' + ngay_sinh[2],
			'ngay': ngay_sinh[0],
			'thang': ngay_sinh[1],
			'nam': ngay_sinh[2]
		};
		data.thong_tin_khach['dien_thoai'] = dien_thoai;
		data.thong_tin_khach['email'] = email;
		data.thong_tin_khach['dia_chi'] = dia_chi;

		localStorage.setItem('dat-phong-2', JSON.stringify(data));
		localStorage.removeItem('dat-phong');

		window.location.href = 'xac-nhan-thong-tin-dat-phong.html';
	});
})(jQuery);

(function($) {
	const dat_phong_el = $('#dat-phong');

	$('.chon-phong').click(function(e) {
		e.preventDefault();

		const me = $(this);
		const selected_price = $('.selected-price .ks-price');
		const selected_name = $('.selected-price .ks-name');
		const price = parseFloat(me.data('price'));
		const name = me.data('name');

		if (is_empty(price) || is_empty(price)) {
			selected_price.html(0);
			selected_name.html('');

			return;
		}

		selected_price.html(price);
		selected_name.html(name);

		selected_price.formatdigits();

		dat_phong_el.data('roomtype', name);
		dat_phong_el.data('price', price);
	});

	dat_phong_el.click(function(e) {
		e.preventDefault();

		const me = $(this);
		const ho = $('.ho').val();
		const ten = $('.ten').val();
		const email = $('.email').val();
		const dien_thoai = $('.dien-thoai').val();
		const ngay_nhan = $('.ngay-nhan').val().split('-');
		const ngay_tra = $('.ngay-tra').val().split('-');
		const phong = parseInt($('.phong').val(), 10);
		const nguoi_lon = parseInt($('.nguoi-lon').val(), 10);
		const tre_em = parseInt($('.tre-em').val(), 10);
		const thanh_toan = $('.thanh-toan').val();
		const dong_y = $('#dong-y:checked').length > 0;

		if (is_empty(me.data('roomtype')) || !dong_y || is_empty(ho) || is_empty(ten) || is_empty(email) || is_empty(dien_thoai) || ngay_nhan.length !== 3 || ngay_tra.length !== 3 || isNaN(phong) || isNaN(nguoi_lon) || is_empty(thanh_toan)) {
			return;
		}

		const ad = parseInt(ngay_nhan[0], 10);
		const am = parseInt(ngay_nhan[1], 10);
		const ay = parseInt(ngay_nhan[2], 10);
		const dd = parseInt(ngay_tra[0], 10);
		const dm = parseInt(ngay_tra[1], 10);
		const dy = parseInt(ngay_tra[2], 10);

		const so_ngay = ((new Date(dy, dm - 1, dd)) - (new Date(ay, am - 1, ad)))/86400000;

		const data = {
			'thong_tin_khach': {
				'ho': ho,
				'ten': ten,
				'email': email,
				'dien_thoai': dien_thoai
			},
			'thong_tin_dat_phong': {
				'ngay_nhan': ad + '-' + am + '-' + ay,
				'ngay_tra': dd + '-' + dm + '-' + dy,
				'so_ngay': so_ngay,
				'ngay_nghi': (so_ngay + 1) + ' ngày ' + so_ngay + ' đêm',
				'loai_phong': me.data('roomtype'),
				'so_phong': phong,
				'nguoi_lon': nguoi_lon,
				'tre_em': isNaN(tre_em) ? 0 : tre_em,
				'khach': nguoi_lon + (isNaN(tre_em) || tre_em === 0 ? '' : ' người lớn ' + tre_em + ' trẻ em')
			},
			'thong_tin_thanh_toan': {
				'phuong_thuc': thanh_toan,
				'don_gia': me.data('price'),
				'tong': me.data('price') * so_ngay
			},
			'thong_tin_khach_san': {
				'ten': me.data('name'),
				'danh_gia': parseInt(me.data('rate'), 10),
				'khu_vuc': me.data('area'),
				'link': window.location.pathname,
				'img': me.data('img')
			}
		}

		localStorage.setItem('dat-phong', JSON.stringify(data));

		localStorage.removeItem('dat-phong-2');

		window.location.href = 'thong-tin-dat-phong.html';
	});
})(jQuery);

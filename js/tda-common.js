window.ga = function() {}

function formatNumber(num) {
	var parts = (num + '').toString().split('.');

	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return parts.join('.');
}

function is_empty(obj) {
	const objType = typeof(obj)

	if(objType === 'undefined' || obj === null) {
		return true;
	}

	if(objType === 'object') {
		// JSON
		if (isNaN(parseInt(obj.length, 10))) {
			return (JSON.stringify(obj) === JSON.stringify({}));
		}
		// List
		else {
			return (obj.length === 0);
		}
	}
	if(objType === 'string') {
		return ($.trim(obj) === '');
	}

	return false;
}

$.fn.formatdigits = function(){ 
    return this.each(function(){ 
        $(this).text(formatNumber($(this).text())); 
    })
}
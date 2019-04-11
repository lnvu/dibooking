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
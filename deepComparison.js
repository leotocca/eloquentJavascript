// Eloquent JS - Deep Comparison - https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC

const deepEqual = (obj1, obj2) => {
	if (
		obj1 === null ||
		typeof obj1 !== 'object' ||
		obj2 === null ||
		typeof obj2 !== 'object'
	) {
		return false;
	}

	if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
		return true;
	}

	for (let i = 0; i <= Object.keys(obj1).length; i++) {
		if (typeof Object.values(obj1)[i] === 'object') {
			if (
				Object.keys(Object.values(obj1)[i])[0] ===
					Object.keys(Object.values(obj2)[i])[0] &&
				Object.values(Object.values(obj1)[i])[0] ===
					Object.values(Object.values(obj2)[i])[0]
			) {
				return true;
			} else {
				return false;
			}
		} else if (
			Object.keys(obj1)[i] === Object.keys(obj2)[i] &&
			Object.values(obj1)[i] === Object.values(obj2)[i]
		) {
			delete obj1[Object.keys(obj1)[i]];
			delete obj2[Object.keys(obj2)[i]];
		} else {
			return false;
		}
	}

	return deepEqual(obj1, obj2);
};

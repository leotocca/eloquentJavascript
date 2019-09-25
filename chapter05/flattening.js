// Eloquent JS - Flattening - https://eloquentjavascript.net/05_higher_order.html

const flatten = arr => {
	return arr.reduce((previous, current) => {
		return previous.concat(current);
	});
};

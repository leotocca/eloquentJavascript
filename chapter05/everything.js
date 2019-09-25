// Eloquent JS - Everything - https://eloquentjavascript.net/05_higher_order.html

const every = (array, testFunct) => {
	for (const e of array) {
		if (testFunct(e) === false) {
			return false;
		}
	}
	return true;
};

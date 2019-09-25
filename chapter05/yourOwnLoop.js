// Eloquent JS - Your own loop - https://eloquentjavascript.net/05_higher_order.html

const loop = (value, testFunct, updateFunct, bodyFunct) => {
	if (testFunct(value)) {
		bodyFunct(value);
	} else {
		return false;
	}

	loop(updateFunct(value), testFunct, updateFunct, bodyFunct);
};

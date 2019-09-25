// Bean counting - https://eloquentjavascript.net/03_functions.html

const countBs = (str, char) => {
	let count = 0;
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i].includes(char)) {
			count += 1;
		}
	}
	return count;
};

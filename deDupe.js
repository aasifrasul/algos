var deDupeArray = arr => {
	if (!this.isValidArray(arr)) {
		return arr;
	}
	const count = arr.length;
	const hash = {};
	const uniqueVals = [];
	let num = 0;
	for (i = 0; i < count; i++) {
		num = arr[i];
		if (!hash[num]) {
			hash[num] = num;
			uniqueVals.push(num);
		}
	}
	return uniqueVals;
};

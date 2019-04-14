var bubbleSort = arr => {
	let count = arr.length;
	let i = 0,
		j = 0,
		swappped = true,
		temp;
	while (swappped) {
		swappped = false;
		for (i = j; i < count; i++) {
			console.info(arr);
			if (arr[j] > arr[i]) {
				console.info('swappped');
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
				swappped = true;
			}
		}
		j++;
	}
	return arr;
};

bubbleSort([5, 7, 8, 3, 4, 5, 14, 2]);

var bubbleSortWithRecursion = (arr, pos = 0, swapped = null) => {
	const len = arr.length;
	let i, temp;

	if (swapped === false) return arr;
	swapped = false;

	for (i = pos; i < len; i++) {
		if (arr[pos] > arr[i + 1]) {
			temp = arr[pos];
			arr[pos] = arr[i + 1];
			arr[i + 1] = temp;
			swapped = true;
		}
	}

	return bubbleSortWithRecursion(arr, ++pos, swapped);
};

bubbleSortWithRecursion([5, 7, 8, 3, 4, 5, 14, 2]);

var swap = (arr, i, j) => {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

var bubbleSort = arr => {
	let count = arr.length;
	let i = 0,
		j = 0,
		swappped = true,
		temp;
	while (swappped) {
		swappped = false;
		for (i = j; i < count; i++) {
			console.info(arr);
			if (arr[j] > arr[i]) {
				console.info('swappped');
				swap(arr, i, j);
				swappped = true;
			}
		}
		if (arr[i] > arr[count - 1]) {
			swap(arr, i, count - 1);
		}
		j++;
	}
	return arr;
};

bubbleSort([7, 8, 5, 4]);

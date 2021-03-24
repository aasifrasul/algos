
var swap = (arr, i, j) => {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
};

var quickSort = (arr, low = 0, high) => {
	high = high || Math.floor(arr.length / 2);
	if (low < high) {
		/* pi is partitioning index, arr[pi] is now
		   at right place */
		const pi = partition(arr, low, high);
		console.log('pi', pi);
		quickSort(arr, low, pi - 1); // Before pi
		quickSort(arr, pi + 1, high); // After pi
	}

	return arr;
};

var partition = (arr, low, high) => {
	const pivot = arr[high];
	let i = low - 1; // Index of smaller element

	for (let j = low; j <= high - 1; j++) {
		// If current element is smaller than or
		// equal to pivot
		if (arr[j] <= pivot) {
			i++; // increment index of smaller element
			swap(arr, i, j);
		}
	}
	console.log('arr', arr);
	swap(arr, i + 1, high);
	return i + 1;
};

// The algorithm finds the minimum value, swaps it with the value in the first position,
// and repeats these steps for the remainder of the list.[20] It does no more than n swaps,
// and thus is useful where swapping is very expensive.

var selectionSort = arr => {
	var i = 0,
		j,
		count = arr.length,
		min = 0,
		temp;
	for (i = 0; i < count; i++) {
		min = i;
		for (j = i; j < count; j++) {
			if (arr[j + 1] < arr[min]) {
				min = j + 1;
			}
		}
		if (arr[i] > arr[min]) {
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}

	return arr;
};

selectionSort([6, 3, 1, 7, 9, 4, 5, 2, 7]);

var selectionSortWithRecursion = (arr, i = 0) => {
	var j,
		count = arr.length,
		min = 0,
		temp,
		min = i;
	if (count === i) return arr;
	for (j = i; j < count; j++) {
		if (arr[j + 1] < arr[min]) {
			min = j + 1;
		}
	}
	if (arr[i] > arr[min]) {
		temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	return selectionSortWithRecursion(arr, ++i);
};

selectionSortWithRecursion([6, 3, 1, 7, 9, 4, 5, 2, 7]);

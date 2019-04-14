// Insertion sort is a simple sorting algorithm that is relatively efficient for small lists 
// and mostly sorted lists, and is often used as part of more sophisticated algorithms. 
// It works by taking elements from the list one by one and inserting them in their correct position 
// into a new sorted list.[19] In arrays, the new list and the remaining elements can share the array's space, 
// but insertion is expensive, requiring shifting all following elements over by one. 
// Shellsort (see below) is a variant of insertion sort that is more efficient for larger lists.


var insertionSort = arr => {
	let i,
		j,
		count = arr.length,
		temp;
	for (i = 1; i < count; i++) {
		for (j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}
	return arr;
};

insertionSort([5, 7, 8, 3, 4, 5, 14, 2]);

var insertionSortWithRecursion = (arr, pos = 1) => {
	const count = arr.length;
	if (count === pos) return arr;
	let temp, j = pos;
	while (j-- > 0) {
		if (arr[j + 1] < arr[j]) {
			temp = arr[j + 1];
			arr[j + 1] = arr[j];
			arr[j] = temp;
		}
	}
	return insertionSortWithRecursion(arr, ++pos);
};

insertionSortWithRecursion([5, 7, 8, 3, 4, 5, 14, 2]);

// This algorithm is an attempt at improve upon the Bubble Sort.
// For each iteration it only checks half of the element.
// Identifies min and Max and swaps them at the extreme end of the array in their correct slot.
// In the next iteration it does not consider the sorted elements at the extreme end
// So effectively it has to compare only n/2 times.

// In the first iteration min and and max of the entire array is identified and min is placed at the begining
// and max is placed at the end.
// In the next iteration the above two sorted positions are ignored and then min and max is identified
// form the remaining elements and then placed at the extreme end (in the reduced array).
// This is continued till it reaches near the mid element, and this point
// min and max points to the same element
// At this point the array is completely sorted

var swap = (arr, i, j) => {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
};

var doubleSort = arr => {
	var count = arr.length,
		maxChecks = Math.ceil(count / 2);
	let i = 0,
		j = 0,
		iMin,
		iMax,
		iCur;
	for (j = 0; j < maxChecks; j++) {
		iMin = j;
		iCur = iMax = count - j - 1;
		if (iMin >= iMax) {
			break;
		}
		// console.info('iCur', arr[iCur]);
		for (i = j; i < count - j; i++) {
			// Identify the min and max for this iteration.
			arr[i] < arr[iMin] && (iMin = i);
			arr[i] > arr[iMax] && (iMax = i);
		}
		// console.info('min', arr[iMin]);
		// console.info('max', arr[iMax]);
		// Place the identified min and max to their correct position, i.e. at the extreme end.
		if (iMax === j) {
			arr[iCur] < arr[iMax] && (arr = swap(arr, iCur, iMax));
			arr[j] > arr[iMin] && (arr = swap(arr, j, iMin));
		} else {
			arr[j] > arr[iMin] && (arr = swap(arr, j, iMin));
			arr[iCur] < arr[iMax] && (arr = swap(arr, iCur, iMax));
		}
		console.info('arr', arr);
	}
	return arr;
};

doubleSort(Array.from({ length: 500 }, () => Math.floor(Math.random() * 100000000)));

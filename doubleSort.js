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

var doubleSort = arr => {
	let count = arr.length;
	let i = 0,
		j = 0,
		iMin,
		iMax,
		iCur,
		maxCHecks = Math.floor(count / 2) + 1;
	for (j = 0; j < maxCHecks; j++) {
		iMin = j;
		iCur = iMax = count - j - 1;
		for (i = iCur; i > j; i--) {
			// Identify the min and max for this iteration.
			if (arr[iMin] > arr[i]) {
				iMin = i;
			}
			if (arr[iMax] < arr[i]) {
				iMax = i;
			}
		}
		// Place the identified min and max to their correct position, i.e. at the extreme end.
		if (arr[j] > arr[iMin]) {
			const temp = arr[j];
			arr[j] = arr[iMin];
			arr[iMin] = temp;
		}
		if (arr[iCur] < arr[iMax]) {
			const temp = arr[iCur];
			arr[iCur] = arr[iMax];
			arr[iMax] = temp;
		}
	}
	return arr;
};

doubleSort([6, 3, 1, 7, 9, 4, 5, 2, 7]);

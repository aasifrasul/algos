function shellSort(arr) {
	const len = arr.length;
	let i, j;

	// Sort an array arr[0...n-1].
	const gaps = [701, 301, 132, 57, 23, 10, 4, 1];

	// Start with the largest gap and work down to a gap of 1
	gaps.forEach(gap => {
		// Do a gapped insertion sort for this gap size.
		// The first gap elements arr[0..gap-1] are already in gapped order
		// keep adding one more element until the entire array is gap sorted
		for (i = gap; i < len; i++) {
			// add arr[i] to the elements that have been gap sorted
			// save arr[i] in temp and make a hole at position i
			temp = arr[i];
			// shift earlier gap-sorted elements up until the correct location for arr[i] is found
			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
				arr[j] = arr[j - gap];
			}
			// put temp (the original arr[i]) in its correct location
			arr[j] = temp;
		}
	});

	return arr;
}

shellSort([5, 7, 8, 3, 4, 5, 14, 2]);

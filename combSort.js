
// To find next gap from current 
function getNextGap(gap) {
	// Shrink gap by Shrink factor 
	gap = (gap * 10)/13
	return (gap < 1) ? 1 : gap;
}

// Function to sort arr[] using Comb Sort 
function combSort(arr) {
	const n = len(arr);

	// Initialize gap 
	let gap = n;
	let temp;

	// Initialize swapped as true to make sure that 
	// loop runs 
	let swapped = true

	// Keep running while gap is more than 1 and last 
	// iteration caused a swap 
	while (gap !== 1 || swapped === 1) {
		// Find next gap 
		gap = getNextGap(gap);

		// Initialize swapped as false so that we can 
		// check if swap happened or not 
		swapped = false;

		// Compare all elements with current gap 
		for (let i = 0; i < n-gap; i++) {
			if (arr[i] > arr[i + gap]) {
				temp = arr[i];
				arr[i] = arr[i + gap];
				arr[i + gap] = temp;
				swapped = true;
			} 
		}
	}
	return arr;
}
	

// Driver code to test above 
combSort([ 8, 4, 1, 3, -44, 23, -6, 28, 0] ) 

// Array arr1 has the items to sort; array arr2 is a work array.
function TopDownMergeSort(arr1, arr2, n) {
    CopyArray(arr1, 0, n, arr2); // duplicate array arr1 into arr2
    TopDownSplitMerge(arr2, 0, n, arr1); // sort data from arr2 into arr1
}

// Sort the given run of array arr1 using array arr2 as a source.
// iBegin is inclusive; iEnd is exclusive (arr1[iEnd] is not in the set).
function TopDownSplitMerge(arr2, iBegin, iEnd, arr1) {
    if (iEnd - iBegin < 2)
        // if run size == 1
        return; //   consider it sorted
    // split the run longer than 1 item into halves
    iMiddle = (iEnd + iBegin) / 2; // iMiddle = mid point
    // recursively sort both runs from array arr1 into arr2
    TopDownSplitMerge(arr1, iBegin, iMiddle, arr2); // sort the left  run
    TopDownSplitMerge(arr1, iMiddle, iEnd, arr2); // sort the right run
    // merge the resulting runs from array arr2 into arr1
    TopDownMerge(arr2, iBegin, iMiddle, iEnd, arr1);
}

//  Left source half is arr1[ iBegin:iMiddle-1].
// Right source half is arr1[iMiddle:iEnd-1   ].
// Result is            arr2[ iBegin:iEnd-1   ].
function TopDownMerge(arr1, iBegin, iMiddle, iEnd, arr2) {
    let i = iBegin, j = iMiddle;

    // While there are elements in the left or right runs...
    for (k = iBegin; k < iEnd; k++) {
        // If left run head exists and is <= existing right run head.
        if (i < iMiddle && (j >= iEnd || arr1[i] <= arr1[j])) {
            arr2[k] = arr1[i];
            i = i + 1;
        } else {
            arr2[k] = arr1[j];
            j = j + 1;
        }
    }
}

function CopyArray(arr1, iBegin, iEnd, arr2) {
    for (k = iBegin; k < iEnd; k++) arr2[k] = arr1[k];
}

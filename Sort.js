class Sort {
	swap(arr, i, j) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	isValidArray(arr) {
		return Array.isArray(arr) || arr.length > 1;
	}
	deDupeArray(arr) {
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
	}
	doubleSort(arr) {
		if(!this.isValidArray(arr)) {
			return arr;
		}
		let count = arr.length;
		let i = 0,
			j = 0,
			iMin,
			iMax,
			iCur;
		for (j = 0; j < count / 2 + 1; j++) {
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
				this.swap(arr, iMin, j);
			}
			if (arr[iCur] < arr[iMax]) {
				this.swap(arr, iCur, iMax);
			}
		}
		return arr;
	};
}

const sort = new Sort();
sort.doubleSort([40, 46, 93, 39, 5, 7, 9, 23, 76, 98, 45, 46, 68, 73, 45]);

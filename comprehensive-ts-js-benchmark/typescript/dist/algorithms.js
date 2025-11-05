"use strict";
// COMPREHENSIVE ALGORITHMS - TYPESCRIPT VERSION
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortingAlgorithmsTest = sortingAlgorithmsTest;
exports.searchAlgorithmsTest = searchAlgorithmsTest;
exports.recursiveAlgorithmsTest = recursiveAlgorithmsTest;
// 1. Sorting Algorithms Performance
function sortingAlgorithmsTest() {
    // Quick Sort with types
    function quickSort(arr) {
        if (arr.length <= 1)
            return arr;
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        return [...quickSort(left), ...middle, ...quickSort(right)];
    }
    const testArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const quickSorted = quickSort([...testArray]);
    return quickSorted.length;
}
// 2. Search Algorithms
function searchAlgorithmsTest() {
    const sortedArray = Array.from({ length: 100000 }, (_, i) => i);
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target)
                return mid;
            else if (arr[mid] < target)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
    let foundCount = 0;
    for (let i = 0; i < 10000; i++) {
        const target = Math.floor(Math.random() * 100000);
        if (binarySearch(sortedArray, target) !== -1)
            foundCount++;
    }
    return foundCount;
}
// 3. Recursive Algorithms
function recursiveAlgorithmsTest() {
    const fibMemo = {};
    function fibonacci(n) {
        if (n in fibMemo)
            return fibMemo[n];
        if (n <= 1)
            return n;
        fibMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fibMemo[n];
    }
    let result = 0;
    for (let i = 1; i <= 30; i++) {
        result += fibonacci(i);
    }
    return result;
}
//# sourceMappingURL=algorithms.js.map
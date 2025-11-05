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
    // Merge Sort with types
    function mergeSort(arr) {
        if (arr.length <= 1)
            return arr;
        const mid = Math.floor(arr.length / 2);
        return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
    }
    function merge(left, right) {
        const result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            result.push(left[i] <= right[j] ? left[i++] : right[j++]);
        }
        return result.concat(left.slice(i), right.slice(j));
    }
    const testArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    const quickSorted = quickSort([...testArray]);
    const mergeSorted = mergeSort([...testArray]);
    return quickSorted.length + mergeSorted.length;
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
    function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target)
                return i;
        }
        return -1;
    }
    let foundCount = 0;
    for (let i = 0; i < 10000; i++) {
        const target = Math.floor(Math.random() * 100000);
        if (binarySearch(sortedArray, target) !== -1)
            foundCount++;
        if (linearSearch(sortedArray.slice(0, 1000), target) !== -1)
            foundCount++;
    }
    return foundCount;
}
// 3. Recursive Algorithms
function recursiveAlgorithmsTest() {
    // Fibonacci with memoization and types
    const fibMemo = {};
    function fibonacci(n) {
        if (n in fibMemo)
            return fibMemo[n];
        if (n <= 1)
            return n;
        fibMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fibMemo[n];
    }
    // Factorial with types
    function factorial(n) {
        if (n <= 1)
            return 1;
        return n * factorial(n - 1);
    }
    let result = 0;
    for (let i = 1; i <= 35; i++) {
        result += fibonacci(i);
    }
    for (let i = 1; i <= 15; i++) {
        result += factorial(i);
    }
    return result;
}
//# sourceMappingURL=benchmark-runner.js.map
// COMPREHENSIVE ALGORITHMS - TYPESCRIPT VERSION

// 1. Sorting Algorithms Performance
function sortingAlgorithmsTest(): number {
    // Quick Sort with types
    function quickSort(arr: number[]): number[] {
        if (arr.length <= 1) return arr;
        const pivot: number = arr[Math.floor(arr.length / 2)];
        const left: number[] = arr.filter(x => x < pivot);
        const middle: number[] = arr.filter(x => x === pivot);
        const right: number[] = arr.filter(x => x > pivot);
        return [...quickSort(left), ...middle, ...quickSort(right)];
    }
    
    const testArray: number[] = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
    const quickSorted: number[] = quickSort([...testArray]);
    
    return quickSorted.length;
}

// 2. Search Algorithms
function searchAlgorithmsTest(): number {
    const sortedArray: number[] = Array.from({length: 100000}, (_, i) => i);
    
    function binarySearch(arr: number[], target: number): number {
        let left: number = 0;
        let right: number = arr.length - 1;
        
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            if (arr[mid] === target) return mid;
            else if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    
    let foundCount: number = 0;
    for(let i: number = 0; i < 10000; i++) {
        const target: number = Math.floor(Math.random() * 100000);
        if(binarySearch(sortedArray, target) !== -1) foundCount++;
    }
    
    return foundCount;
}

// 3. Recursive Algorithms
function recursiveAlgorithmsTest(): number {
    const fibMemo: { [key: number]: number } = {};
    
    function fibonacci(n: number): number {
        if (n in fibMemo) return fibMemo[n];
        if (n <= 1) return n;
        fibMemo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return fibMemo[n];
    }
    
    let result: number = 0;
    for(let i: number = 1; i <= 30; i++) {
        result += fibonacci(i);
    }
    
    return result;
}

export {
    sortingAlgorithmsTest,
    searchAlgorithmsTest,
    recursiveAlgorithmsTest
};
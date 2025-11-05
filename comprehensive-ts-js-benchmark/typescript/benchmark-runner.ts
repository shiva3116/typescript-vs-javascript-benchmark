// COMPREHENSIVE BENCHMARK RUNNER - TYPESCRIPT

import * as basicOps from './basic-operations';
import * as algorithms from './algorithms';
import * as fs from 'fs';

interface BenchmarkResult {
    testName: string;
    times: number[];
    average: number;
    min: number;
    max: number;
}

interface BenchmarkData {
    language: string;
    timestamp: string;
    results: BenchmarkResult[];
}

function runSingleBenchmark(testName: string, testFunction: () => number, iterations: number = 3): BenchmarkResult {
    console.log(Running ${testName}...);
    
    const times: number[] = [];
    
    for(let i: number = 0; i < iterations; i++) {
        const start: number = performance.now();
        const result: number = testFunction();
        const end: number = performance.now();
        
        const duration: number = end - start;
        times.push(duration);
        
        console.log(`  Run ${i + 1}: ${duration.toFixed(3)}ms (result: ${result})`);
    }
    
    const average: number = times.reduce((sum: number, time: number) => sum + time, 0) / times.length;
    const min: number = Math.min(...times);
    const max: number = Math.max(...times);
    
    console.log(`  Average: ${average.toFixed(3)}ms`);
    console.log(`  Min: ${min.toFixed(3)}ms`);
    console.log(`  Max: ${max.toFixed(3)}ms`);
    console.log('---');
    
    return {
        testName,
        times,
        average,
        min,
        max
    };
}

function runAllBenchmarks(): BenchmarkResult[] {
    console.log('=== TYPESCRIPT PERFORMANCE BENCHMARKS ===\n');
    
    const results: BenchmarkResult[] = [];
    
    // Basic Operations Tests
    console.log('BASIC OPERATIONS:');
    results.push(runSingleBenchmark('Array Operations Simple', basicOps.arrayOperationsSimple));
    results.push(runSingleBenchmark('Array Operations Complex', basicOps.arrayOperationsComplex));
    results.push(runSingleBenchmark('Object Creation Simple', basicOps.objectCreationSimple));
    results.push(runSingleBenchmark('Object Creation Complex', basicOps.objectCreationComplex));
    results.push(runSingleBenchmark('Math Operations', basicOps.mathOperationsBasic));
    results.push(runSingleBenchmark('String Processing', basicOps.stringProcessingAdvanced));
    results.push(runSingleBenchmark('Function Calls', basicOps.functionCallTests));
    
    console.log('\nALGORITHMS:');
    results.push(runSingleBenchmark('Sorting Algorithms', algorithms.sortingAlgorithmsTest));
    results.push(runSingleBenchmark('Search Algorithms', algorithms.searchAlgorithmsTest));
    results.push(runSingleBenchmark('Recursive Algorithms', algorithms.recursiveAlgorithmsTest));
    
    // Save results
    const resultsData: BenchmarkData = {
        language: 'TypeScript',
        timestamp: new Date().toISOString(),
        results: results
    };
    
    if (!fs.existsSync('../results')) {
        fs.mkdirSync('../results');
    }
    
    fs.writeFileSync('../results/typescript-results.json', JSON.stringify(resultsData, null, 2));
    
    console.log('\n=== BENCHMARK COMPLETED ===');
    console.log(Results saved to: ../results/typescript-results.json);
    
    return results;
}

if (require.main === module) {
    runAllBenchmarks();
}

export { runAllBenchmarks, runSingleBenchmark, BenchmarkResult, BenchmarkData };
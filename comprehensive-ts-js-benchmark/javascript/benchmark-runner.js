 
// COMPREHENSIVE BENCHMARK RUNNER - JAVASCRIPT

const basicOps = require('./basic-operations');
const algorithms = require('./algorithms');

function runSingleBenchmark(testName, testFunction, iterations = 3) {
    console.log(`Running ${testName}...`);
    
    const times = [];
    
    for(let i = 0; i < iterations; i++) {
        const start = performance.now();
        const result = testFunction();
        const end = performance.now();
        
        const duration = end - start;
        times.push(duration);
        
        console.log(`  Run ${i + 1}: ${duration.toFixed(3)}ms (result: ${result})`);
    }
    
    const average = times.reduce((sum, time) => sum + time, 0) / times.length;
    const min = Math.min(...times);
    const max = Math.max(...times);
    
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

function runAllBenchmarks() {
    console.log('=== JAVASCRIPT PERFORMANCE BENCHMARKS ===\n');
    
    const results = [];
    
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
    const fs = require('fs');
    const resultsData = {
        language: 'JavaScript',
        timestamp: new Date().toISOString(),
        results: results
    };
    
    if (!fs.existsSync('../results')) {
        fs.mkdirSync('../results');
    }
    
    fs.writeFileSync('../results/javascript-results.json', JSON.stringify(resultsData, null, 2));
    
    console.log('\n=== BENCHMARK COMPLETED ===');
    console.log(`Results saved to: ../results/javascript-results.json`);
    
    return results;
}

if (require.main === module) {
    runAllBenchmarks();
}

module.exports = { runAllBenchmarks, runSingleBenchmark };

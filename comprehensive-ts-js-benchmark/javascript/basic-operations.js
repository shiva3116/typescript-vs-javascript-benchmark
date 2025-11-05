 // COMPREHENSIVE BASIC OPERATIONS - JAVASCRIPT VERSION

// 1. Simple Array Operations
function arrayOperationsSimple() {
    const arr = Array.from({length: 100000}, (_, i) => i);
    const filtered = arr.filter(x => x % 2 === 0);
    const mapped = filtered.map(x => x * 2);
    return mapped.reduce((sum, val) => sum + val, 0);
}

// 2. Complex Array Operations  
function arrayOperationsComplex() {
    const arr = Array.from({length: 50000}, (_, i) => ({
        id: i,
        value: Math.random() * 1000,
        category: ['A', 'B', 'C', 'D'][i % 4],
        metadata: {
            created: Date.now(),
            active: i % 3 === 0,
            score: Math.random() * 100
        }
    }));
    
    return arr
        .filter(item => item.metadata.active && item.value > 500)
        .map(item => ({
            ...item,
            computed: item.value * item.metadata.score,
            grade: item.value > 800 ? 'Premium' : 'Standard'
        }))
        .sort((a, b) => b.computed - a.computed)
        .slice(0, 1000)
        .reduce((acc, item) => acc + item.computed, 0);
}

// 3. Object Creation - Simple
function objectCreationSimple() {
    const objects = [];
    for(let i = 0; i < 100000; i++) {
        objects.push({
            id: i,
            name: `Object${i}`,
            value: Math.random(),
            created: new Date()
        });
    }
    return objects.length;
}

// 4. Object Creation - Complex Nested
function objectCreationComplex() {
    const objects = [];
    for(let i = 0; i < 25000; i++) {
        objects.push({
            id: i,
            profile: {
                name: `User${i}`,
                email: `user${i}@example.com`,
                settings: {
                    theme: 'dark',
                    notifications: {
                        email: true,
                        push: i % 2 === 0,
                        sms: false
                    },
                    privacy: {
                        level: ['low', 'medium', 'high'][i % 3],
                        shareData: i % 4 === 0
                    }
                }
            },
            data: Array.from({length: 10}, (_, j) => ({
                index: j,
                value: Math.random() * 100,
                processed: j % 2 === 0,
                tags: ['tag1', 'tag2', 'tag3'].slice(0, j % 3 + 1)
            }))
        });
    }
    return objects.length;
}

// 5. Mathematical Operations
function mathOperationsBasic() {
    let result = 0;
    for(let i = 1; i <= 500000; i++) {
        result += Math.sqrt(i) * Math.sin(i) + Math.cos(i);
    }
    return result;
}

// 6. String Processing
function stringProcessingAdvanced() {
    const texts = Array.from({length: 10000}, (_, i) => 
        `Lorem ipsum dolor sit amet ${i} consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ${i * 2}.`
    );
    
    let processedCount = 0;
    
    for(const text of texts) {
        const processed = text
            .toLowerCase()
            .replace(/\d+/g, 'NUM')
            .split(' ')
            .filter(word => word.length > 3)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-');
        
        if(processed.includes('NUM') && processed.length > 50) {
            processedCount++;
        }
    }
    
    return processedCount;
}

// 7. Function Call Performance
function functionCallTests() {
    function calculate(a, b, c) {
        return (a * b) + (c / 2) - Math.sqrt(a + b + c);
    }
    
    let result = 0;
    for(let i = 1; i <= 1000000; i++) {
        result += calculate(i, i + 1, i * 2);
    }
    return result;
}

module.exports = {
    arrayOperationsSimple,
    arrayOperationsComplex,
    objectCreationSimple,
    objectCreationComplex,
    mathOperationsBasic,
    stringProcessingAdvanced,
    functionCallTests
};


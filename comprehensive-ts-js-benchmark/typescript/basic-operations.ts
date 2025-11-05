// COMPREHENSIVE BASIC OPERATIONS - TYPESCRIPT VERSION

// Type Definitions
interface ComplexItem {
    id: number;
    value: number;
    category: string;
    metadata: {
        created: number;
        active: boolean;
        score: number;
    };
}

interface ProcessedItem extends ComplexItem {
    computed: number;
    grade: 'Premium' | 'Standard';
}

interface UserProfile {
    name: string;
    email: string;
    settings: {
        theme: string;
        notifications: {
            email: boolean;
            push: boolean;
            sms: boolean;
        };
        privacy: {
            level: 'low' | 'medium' | 'high';
            shareData: boolean;
        };
    };
}

interface ComplexObject {
    id: number;
    profile: UserProfile;
    data: Array<{
        index: number;
        value: number;
        processed: boolean;
        tags: string[];
    }>;
}

// 1. Simple Array Operations
function arrayOperationsSimple(): number {
    const arr: number[] = Array.from({length: 100000}, (_, i) => i);
    const filtered: number[] = arr.filter(x => x % 2 === 0);
    const mapped: number[] = filtered.map(x => x * 2);
    return mapped.reduce((sum: number, val: number) => sum + val, 0);
}

// 2. Complex Array Operations  
function arrayOperationsComplex(): number {
    const arr: ComplexItem[] = Array.from({length: 50000}, (_, i) => ({
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
        .filter((item: ComplexItem) => item.metadata.active && item.value > 500)
        .map((item: ComplexItem): ProcessedItem => ({
            ...item,
            computed: item.value * item.metadata.score,
            grade: item.value > 800 ? 'Premium' : 'Standard'
        }))
        .sort((a: ProcessedItem, b: ProcessedItem) => b.computed - a.computed)
        .slice(0, 1000)
        .reduce((acc: number, item: ProcessedItem) => acc + item.computed, 0);
}

// 3. Object Creation - Simple
function objectCreationSimple(): number {
    interface SimpleObject {
        id: number;
        name: string;
        value: number;
        created: Date;
    }
    
    const objects: SimpleObject[] = [];
    for(let i: number = 0; i < 100000; i++) {
        objects.push({
            id: i,
            name: Object${i},
            value: Math.random(),
            created: new Date()
        });
    }
    return objects.length;
}

// 4. Object Creation - Complex Nested
function objectCreationComplex(): number {
    const objects: ComplexObject[] = [];
    for(let i: number = 0; i < 25000; i++) {
        objects.push({
            id: i,
            profile: {
                name: User${i},
                email: user${i}@example.com,
                settings: {
                    theme: 'dark',
                    notifications: {
                        email: true,
                        push: i % 2 === 0,
                        sms: false
                    },
                    privacy: {
                        level: (['low', 'medium', 'high'] as const)[i % 3],
                        shareData: i % 4 === 0
                    }
                }
            },
            data: Array.from({length: 10}, (_, j: number) => ({
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
function mathOperationsBasic(): number {
    let result: number = 0;
    for(let i: number = 1; i <= 500000; i++) {
        result += Math.sqrt(i) * Math.sin(i) + Math.cos(i);
    }
    return result;
}

// 6. String Processing
function stringProcessingAdvanced(): number {
    const texts: string[] = Array.from({length: 10000}, (_, i: number) => 
        Lorem ipsum dolor sit amet ${i} consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ${i * 2}.
    );
    
    let processedCount: number = 0;
    
    for(const text of texts) {
        const processed: string = text
            .toLowerCase()
            .replace(/\d+/g, 'NUM')
            .split(' ')
            .filter((word: string) => word.length > 3)
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-');
        
        if(processed.includes('NUM') && processed.length > 50) {
            processedCount++;
        }
    }
    
    return processedCount;
}

// 7. Function Call Performance
function functionCallTests(): number {
    function calculate(a: number, b: number, c: number): number {
        return (a * b) + (c / 2) - Math.sqrt(a + b + c);
    }
    
    let result: number = 0;
    for(let i: number = 1; i <= 1000000; i++) {
        result += calculate(i, i + 1, i * 2);
    }
    return result;
}

export {
    arrayOperationsSimple,
    arrayOperationsComplex,
    objectCreationSimple,
    objectCreationComplex,
    mathOperationsBasic,
    stringProcessingAdvanced,
    functionCallTests
};
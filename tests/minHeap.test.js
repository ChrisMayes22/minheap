const minHeap = require('../minHeap');
const proHeap = require('heap');

const heap = new minHeap();
const testHeap = new proHeap()

test('addNode method adds node to top of heap, pop removes, minheap property is maintained', () => {
    const testCases = [1, 10, -5, 32, 10000, -4.55, -4.66, 0, 0, 0, 0, 1, 1, 1, 1, -1, 1, -1, 123, 77777777]
    
    debugger;

    testCases.forEach(num => {
        heap.push(num);
        testHeap.push(num);
    })

    while (heap.length > 0){
        const testPoint = heap._arr
        expect(heap.pop()).toEqual(testHeap.pop())
    }
})
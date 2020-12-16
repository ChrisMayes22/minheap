/* 
    Description: Implements a minheap ADT in JS 
    Author: Chris Mayes
    Last Updated: 12/16/2021
*/

class MinHeap {
    constructor(arr){
        this._arr = arr || []
        this.length = arr ? arr.length : 0
    }

    push(data) {
        /** 
         * @param {ANY} data -- data to be added to the heap
         * @return -- returns self for method chaining
         */

        this._arr.push(data);
        this.length += 1;

        let curr = this.length - 1;
        let parent = Math.floor((curr - 1) / 2) 

        while(this._arr[curr] < this._arr[parent]){
            [this._arr[curr], this._arr[parent]] = [this._arr[parent], this._arr[curr]]
            curr = parent
            parent = Math.floor((curr - 1) / 2)
        }

        return this
    }
    
    pop() {
        /**
         * @return -- returns the top value in the heap. If the heap is empty, returns false 
         */
        if(this._arr.length === 0){
            return null
        } else if(this._arr.length === 1) {
            return this._arr.pop()
        } else {
            const payload = this._arr[0]
        
            this._arr[0] = this._arr.pop()
            if(this._arr[0] >= this._arr[1] || (this._arr[2] && this._arr[0] >= this._arr[2])){
                this._percolate(0);
            }            


            return payload
        }
    }

    _percolate(index) {
        const left = Math.floor((2 * index) + 1)
        const right = Math.floor((2 * index) + 2)

        let swapIndex
        if(this._arr[right] !== undefined){
            swapIndex = this._arr[left] < this._arr[right] ? left : right
        } else {
            swapIndex = left
        }

        if(this._arr[swapIndex] !== undefined && (this._arr[swapIndex] < this._arr[index])){
            [this._arr[swapIndex], this._arr[index]] = [this._arr[index], this._arr[swapIndex]]
            return this._percolate(swapIndex);
        } else {
            return
        }

    }
}

module.exports = MinHeap
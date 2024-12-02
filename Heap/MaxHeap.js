class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getMax() {
      return this.heap[0];
    }
  
    insert(node) {
      this.heap.push(node);
      if (this.heap.length > 1) {
        let current = this.heap.length - 1;
  
        while (
          current > 0 &&
          this.heap[Math.floor(current / 2)] < this.heap[current]
        ) {
          [this.heap[Math.floor(current / 2)], this.heap[current]] = [
            this.heap[current],
            this.heap[Math.floor(current / 2)],
          ];
          current = Math.floor(current / 2);
        }
      }
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
      let largest = this.heap[0];
      if (this.heap.length === 1) {
        return this.heap.pop();
      } else {
        this.heap[0] = this.heap.pop();
        if (this.heap.length === 2) {
          if (this.heap[0] < this.heap[1]) {
            [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
          }
          return largest;
        }
        let current = 0;
        let leftChildIndex = current * 2 + 1;
        let rightChildIndex = current * 2 + 2;
        while (
          this.heap[leftChildIndex] &&
          this.heap[rightChildIndex] &&
          (this.heap[current] < this.heap[leftChildIndex] ||
            this.heap[current] < this.heap[rightChildIndex])
        ) {
          if (this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
            [this.heap[current], this.heap[leftChildIndex]] = [
              this.heap[leftChildIndex],
              this.heap[current],
            ];
            current = leftChildIndex;
          } else {
            [this.heap[current], this.heap[rightChildIndex]] = [
              this.heap[rightChildIndex],
              this.heap[current],
            ];
            current = rightChildIndex;
          }
          leftChildIndex = current * 2 + 1;
          rightChildIndex = current * 2 + 2;
        }
      }
      return largest;
    }
    print() {
      console.log(this.heap.join(", "));
    }
  }

const max = new MaxHeap();
max.insert(6);
max.insert(2);
max.insert(1);
max.insert(0);
max.insert(7);
max.insert(3);
max.print();
max.remove();
max.print();
max.remove();
max.print();
max.insert(7);
max.insert(6);
max.print();
function heapSort(arr) {
    let n = arr.length;
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        heapify(arr, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr, i, 0);
    }
    return arr
}

function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let leftChild = 2 * parentIndex + 1;
    let rightChild = 2 * parentIndex + 2;
    
    if (leftChild < length && arr[leftChild] > arr[largest]){
         largest = leftChild;
        }
    if (rightChild < length && arr[rightChild] > arr[largest]){ 
        largest = rightChild;
    }
    
    if (largest != parentIndex) {
        [arr[parentIndex],arr[largest]] = [arr[largest],arr[parentIndex]]
        heapify(arr, length, largest);
    }
}

console.log(heapSort([0,3,8,2,1,5,4]))

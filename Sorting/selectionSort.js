function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let indexOfSmallest = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[indexOfSmallest]){
                indexOfSmallest = j
            }
        }
        if(indexOfSmallest !== i){
            [arr[i],arr[indexOfSmallest]] = [arr[indexOfSmallest],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([-1,3,9,4,-7,2]))
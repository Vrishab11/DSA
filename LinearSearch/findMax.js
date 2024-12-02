function findMax(array){
    let max = array[0]
    for(let i=1; i< array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log(findMax([3,1,2,5,9,5]))
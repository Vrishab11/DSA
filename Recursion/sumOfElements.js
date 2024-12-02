function sumOfElements(array){
    let sum = array[0]
    if(array.length < 2){
        return array[0]
    }
    array.shift()
    sum += sumOfElements(array)
    return sum
}

console.log(sumOfElements([1,2,3,4,5]))
function countMaxOcc(array, element){
    let count =0
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            count++
        }
    }
    return count
}

console.log(countMaxOcc([1,2,4,2,3,2,4,5],2))
console.log(countMaxOcc([1,2,4,2,3,2,4,5],4))
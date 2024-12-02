function arrayRotation(array, count){
    let arr = new Array(array.length);
    for(let i = 0; i < array.length; i++){
        arr[(i+count) % array.length] = array[i]
    }
    return arr
}

console.log(arrayRotation([1,2,3,4,5],3))
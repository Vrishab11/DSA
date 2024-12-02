function filterEvenNumber(array){
    return array.filter((num)=> num%2 === 0)
}

console.log(filterEvenNumber([2,4,3,5,7,1,6]));
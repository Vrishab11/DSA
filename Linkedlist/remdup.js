const LinkedList = require('./singleLinkedlist')

function arrayToList(array) {
    const list = new LinkedList()
    array.forEach(element => {
        list.append(element)
    });
    return list
} 

function remDuplicate(arr){
    const list = arrayToList(arr)
    list.removeDuplicates()
    return list.print()
}

remDuplicate([1,1,2,3,4])
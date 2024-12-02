const LinkedList = require('./singleLinkedlist')

function arrayToList(array) {
    const list = new LinkedList()
    array.forEach(element => {
        list.append(element)
    });
    return list
} 

function printdata(array){
    const list = arrayToList(array)
    list.print()
    list.reverse()
    list.print()
}

printdata([1,2,3,4,5])
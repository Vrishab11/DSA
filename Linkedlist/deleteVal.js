const LinkedList = require('./singleLinkedlist')

function arrayToList(array) {
    const list = new LinkedList()
    array.forEach(element => {
        list.append(element)
    });
    return list
}

function deleteVal(data){
    const listdata = arrayToList([1,2,3,4,5])
    listdata.removeValue(data)
    return listdata
}

const deleted = deleteVal(4)
deleted.print()
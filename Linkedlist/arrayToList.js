const LinkedList = require('./singleLinkedlist')

function arrayToList(array) {
    const list = new LinkedList()
    array.forEach(element => {
        list.append(element)
    })
    return list
}

const listdata = arrayToList([1,2,3,4,5])
console.log(listdata)
listdata.print( )
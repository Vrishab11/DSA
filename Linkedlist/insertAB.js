const LinkedList = require('./singleLinkedlist')

function arrayToList(array) {
    const list = new LinkedList()
    array.forEach(element => {
        list.append(element)
    });
    return list
} 

function addNodeAB(node,data) {
    const list = arrayToList([1,2,3,4,5])
    const index = list.search(data)
    list.insert(node,index)
    list.insert(node, index + 2)
    return list
}

const added = addNodeAB(8,3)
added.print()
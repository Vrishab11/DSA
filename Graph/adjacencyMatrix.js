class Graph{
    constructor(numVertices){
        this.numVertices = numVertices
        this.adjacencyMatrix = new Array(numVertices).fill(null).map(() => new Array(numVertices).fill(0))
    }
    addEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1;
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyMatrix[vertex1][vertex2] = 0;
        this.adjacencyMatrix[vertex2][vertex1] = 0;
    }
    hasEdge(vertex1,vertex2){
        return this.adjacencyMatrix[vertex1][vertex2] == 1
    }
    display(){
        for(let i = 0 ; i < this.numVertices ; i++){
            console.log(i +"=>"+ [...this.adjacencyMatrix[i]])
        }
    }
}
const graph = new Graphph(6)
graph.addEdge(0,3)
graph.addEdge(5,3)
graph.addEdge(0,4)
graph.addEdge(0,2)
graph.addEdge(1,3)
graph.display()
console.log(graph.hasEdge(0,3))
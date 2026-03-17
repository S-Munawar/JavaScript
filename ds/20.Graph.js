class Graph {
    constructor() {
        this.list = {}
    }

    addVertex(vertex) {
        if(!this.list[vertex]) {
            this.list[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }

    removeVertex(vertex) {
        if(!this.list[vertex]) return
        for(const adjvert of this.list[vertex]) {
            this.removeEdge(adjvert, vertex)
        }
        delete this.list[vertex]
    }

    removeEdge(vertex1, vertex2) {
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }

    display() {
        for(const vertex in this.list) { // for...in also loops inherited properties, so it's less safe.
            console.log(`${vertex} => ${[...this.list[vertex]]}`)
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.list[vertex1].has(vertex2)
    }
}

const g1 = new Graph()

g1.addVertex('A')
g1.addVertex('B')
g1.addVertex('C')

g1.addEdge('C', 'A')
g1.addEdge('B', 'A')

g1.display()

console.log(g1.hasEdge('C', 'A'))

g1.removeVertex('B')

g1.display()



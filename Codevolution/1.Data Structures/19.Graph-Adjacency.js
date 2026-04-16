// Graph Adjancency Matrix

const matrix = [
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
console.log(matrix[0][0])

// Graph Adjancency List

const lsit = {
    'A': ['B'],
    'B': ['B', 'C'],
    'C': ['B']
}
console.log(lsit.A)

// Time Complexity (Adjacency Matrix)
// Add Vertex: O(V^2)
// Add Edge: O(1)
// Remove Vertex: O(V^2)
// Remove Edge: O(1)
// Query: O(1)
// Space Complexity: O(V^2)

// Time Complexity (Adjacency List)
// Add Vertex: O(1)
// Add Edge: O(1)
// Remove Vertex: O(V + E)
// Remove Edge: O(E)
// Query: O(V)
// Space Complexity: O(V + E)
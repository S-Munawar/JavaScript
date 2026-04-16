class Node {
    constructor(data) {
        this.value = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(data) {
        const newNode = new Node(data)
        if (this.isEmpty()) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(curr, newNode) {
        if (curr.value > newNode.value) {
            if (!curr.left) {
                curr.left = newNode
            }
            else {
                this.insertNode(curr.left, newNode)
            }
        }
        else {
            if (!curr.right) {
                curr.right = newNode
            }
            else {
                this.insertNode(curr.right, newNode)
            }
        }
    }

    search(root, data) {
        if(!root) {
            return false
        }
        else {
            if(root.value === data) {
            return true
            }
            else if (root.value > data) {
                return this.search(root.left, data)
            }
            else {
                return this.search(root.right, data)
                }
            }
    }

    }

const bst1 = new BST()

console.log(bst1.isEmpty())

bst1.insert(20)
bst1.insert(10)
bst1.insert(5)

console.log(bst1.search(bst1.root, 20))
console.log(bst1.search(bst1.root, 10))
console.log(bst1.search(bst1.root, 50))

// Time Complexity
// insert: O(log n) average, O(n) worst case
// search: O(log n) average, O(n) worst case
// isEmpty: O(1)

// Space Complexity
// O(n)
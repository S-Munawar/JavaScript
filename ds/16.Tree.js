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
} 

const bst1 = new BST()

console.log(bst1.isEmpty())
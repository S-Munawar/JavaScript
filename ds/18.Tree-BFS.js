class Node {
    constructor(data) {
        this.value = data
        this.right = null
        this.left = null
    }
}

class BST{
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if(this.isEmpty()) {
            this.root = newNode
        }
        else {
            return this.insertNode(this.root, newNode)
        }
    }

    insertNode(curr, newNode) {
        if(curr.value > newNode.value) {
            if(curr.left === null) {
                curr.left = newNode
            }
            else{
                this.insertNode(curr.left, newNode)
            } 
        }
        else {
            if(curr.right === null) {
                curr.right = newNode
            }
            else {
                this.insertNode(curr.right, newNode)
            }
        }
    }

    search(root, data) {
        if(!root) {
            console.log("No value")
            return false
        }
        else {
            if(root.value === data) {
                console.log("Got it")
                return true
            }
            else if(root.value > data) {
                return this.search(root.left, data)
            }
            else {
                return this.search(root.right, data)
            }
        }
    }

    isEmpty() {
        return this.root === null
    }

    bfs() {
        let queue = [this.root]
        while (queue.length) {
            let node = queue.shift()
            console.log(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    min(root) {
        if(!root) return null
        if(!root.left) {
            return root.value
        }
        return this.min(root.left)
    }

    max() {
        if(this.isEmpty()) return null
        let curr = this.root
        while(curr.right) {
            curr = curr.right
        }
        return curr.value
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if(!root) {
            return null
        }
        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        }
        else if(root.value < value) {
            root.right = this.deleteNode(root.right, value)
        }
        else {
            if(!root.left && !root.right) {
                return null
            }
            else if(!root.left) return root.right
            else if(!root.right) return root.left
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}

const bst1 = new BST()

console.log(bst1.isEmpty())

bst1.insert(20)
bst1.insert(10)
bst1.insert(5)

bst1.bfs()

console.log(bst1.min())
console.log(bst1.max(bst1.root))

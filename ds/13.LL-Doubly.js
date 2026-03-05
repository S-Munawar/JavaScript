class Node {
    constructor(data) {
        this.prev = null
        this.value = data
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
        console.log(this.tail.value)
    }

    prepend(data) {
        const node = new Node(data)

        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
        console.log(this.head.value)
    }

    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index")
            return null
        }
        if (index === 0) {
            return this.prepend(data)
        }
        if (index === this.size) {
            return this.append(data)
        }
        const node = new Node(data)
        let before = this.head
        for(let i = 0; i < index - 1; i++) {
            before = before.next
        }
        let after = before.next
        before.next = node
        node.prev = before

        node.next = after
        after.prev = node
        
        console.log(before)
        this.size++
    }

    deleteFromFront() {
        if (this.isEmpty()) { return null }
        let removeNode = this.head
        this.head = this.head.next
        if (this.head === null) {
            this.tail = null
        }
        else {
            this.head.prev = null
        }
        this.size--
        return removeNode.value
    }

    deleteFromEnd() {
        if (this.isEmpty()) { return null}
        let removeNode = this.tail
        this.tail = this.tail.prev
        if (this.tail === null) {
            this.head = null
        }
        else {
            this.tail.next = null
        }
        this.size--
        return removeNode.value
    }

    deleteFromIndex(index) {
        if (this.isEmpty() || index < 0 || index >= this.size) { return null }
        if (index === 0) { return this.deleteFromFront() }
        if (index === this.size - 1) { return this.deleteFromEnd() }
        let before = this.head
        for (let i = 0; i < index - 1; i++) {
            before = before.next
        }
        let removeNode = before.next
        before.next = removeNode.next
        removeNode.next.prev = before
        this.size--
        return removeNode.value
    }

    search(data) {
        let curr = this.head
        let count = 0
        while(curr !== null) {
            if (curr.value === data) {
                return count
            }
            curr = curr.next
            count++
        }
        return -1
    }

    getSize() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty")
            return null
        }
        else {
            let curr = this.head
            let str = ""
            while(curr !== null) {
                str += curr.value + " "
                curr = curr.next
            }
            console.log(str)
        }
    }

    printRevese() {
        if (this.isEmpty()) {
            console.log("Empty")
            return null
        }
        else {
            let curr = this.tail
            let str = ""
            while (curr !== null) {
                str += curr.value + " "
                curr = curr.prev
            }
            console.log(str)
        }
    }
}

const dl1 = new DoublyLinkedList()

dl1.append(50)
dl1.append(40)
dl1.append(10)
dl1.insertAtIndex(30, 0)

dl1.print()
dl1.printRevese()

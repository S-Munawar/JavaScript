// empty file
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
        const newNode = new Node(data)
        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    prepend(data) {
        const newNode = new Node(data)
        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    insertAtIndex(data, index) {
        if(index < 0 || index > this.size) {
            return null
        }
        if(index === 0) {
            this.prepend(data)
            return
        }
        if(index === this.size) {
            this.append(data)
            return
        }
        const newNode = new Node(data)
        let curr = this.head
        let count = 0
        while(count < index - 1) {
            curr = curr.next
            count++
        }
        newNode.next = curr.next
        curr.next.prev = newNode
        curr.next = newNode
        newNode.prev = curr
        this.size++
    }

    deleteFromFront() {
        if(this.isEmpty()) return null
        let removed
        if(this.size === 1) {
            removed = this.head
            this.head = null
            this.tail = null
        }
        else{
            removed = this.head
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
        return removed
    }

    deleteFromEnd() {
        if(this.isEmpty()) return null
        let removed
        if(this.size === 1) {
            removed = this.head
            this.head = null
            this.tail = null
        }
        else{
            removed = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return removed
    }

    deleteFromIndex(index) {
        if(index < 0 || index >= this.size) {
            return null
        }
        if(index === 0) {
            return this.deleteFromFront()
        }
        if(index === this.size - 1) {
            return this.deleteFromEnd()
        }
        let removed
        if(index < this.size/2) {
            let curr = this.head
            let count = 0
            while(count < index - 1) {
                curr = curr.next
                count++
            }
            removed = curr.next
            removed.next.prev = curr
            curr.next = removed.next
            }
        else{
            let curr = this.tail
            let count = this.size - 1
            while(count > index + 1) {
                curr = curr.prev
                count--
            }
            removed = curr.prev
            removed.prev.next = curr
            curr.prev = removed.prev
        }
        removed.next = null
        removed.prev = null
        this.size--
        return removed
    }

    search(data) {
        if(this.isEmpty()) return -1
        let curr = this.head
        let index = 0
        while(curr !== null) {
            if(curr.value === data) {
                return index
            }
            curr = curr.next
            index++
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
            return str.trim()
        }
    }

    printReverse() {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.tail
        let str = ""
        while(curr !== null) {
            str += `${curr.value} `
            curr = curr.prev
        }
        return str.trim()
    }
}

const dl1 = new DoublyLinkedList()

dl1.append(50)
dl1.append(40)
dl1.append(10)
dl1.insertAtIndex(30, 0)

console.log(dl1.print())
console.log(dl1.printReverse())

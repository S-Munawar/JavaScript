// With tail

class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LL {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        let newNode = new Node(value)
        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    prepend(value) {
        let newNode = new Node(value)

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.size++
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return null
        }
        else if(index === 0 ){
            this.prepend(value)
            return
        }
        else if(index === this.size) {
            this.append(value)
            return
        }
        else {
            let newNode = new Node(value)
            let curr = this.head
                let count = 0
                while (count < index - 1) {
                    curr = curr.next
                    count++
                }
                newNode.next = curr.next
                curr.next = newNode 
                this.size++
            }
            
    }

    deleteFromStart() {
        if(this.isEmpty()) {
            return null
        }
        this.head = this.head.next
        this.size--
        if (this.size === 0) {
        this.tail = null
        }
    }

    deleteFromEnd() {
        if(this.isEmpty()) {
            return null
        }
        if (this.size === 1) {
        this.head = null
        this.tail = null
        }
        else{
            let curr = this.head
            while(curr.next !== this.tail) {
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
            this.size--
            if (this.size === 0) {
            this.head = null
            }
        }
        
    }

    deleteByValue(value) {
        if(this.isEmpty()) return null
            let curr = this.head
            if (this.head.data === value) {
                return this.deleteFromStart()
            }
            while(curr.next !== null && curr.next.data !== value) {
                curr = curr.next
            }
            if(curr.next === null) {return null}
            if (curr.next === this.tail) {
                this.tail = curr
            }
            let removeNode = curr.next
            curr.next = curr.next.next
            this.size--
            return removeNode
    }

    deleteByIndex(index) {
        if(this.isEmpty()) return null
        if(index < 0 || index >= this.size) return null
        if(index === 0) {
            return this.deleteFromStart()
        }
        if(index === this.size - 1) {
            return this.deleteFromEnd()
        }
        let curr = this.head
        let i = 0
        while(i < index - 1) {
            curr = curr.next
            i++
        }
        let removedNode = curr.next
        curr.next = curr.next.next
        this.size--
        return removedNode.data
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }
    
    clear() {
    this.head = null
    this.tail = null
    this.size = 0
    }

    search(value) {
        if(this.isEmpty()) return -1
        let curr = this.head
        let index = 0
        while(curr !== null) {
            if(curr.data === value) {
                return index
            }
            curr = curr.next
            index++
        }
        return -1
    }

    reverse() {
        if(this.isEmpty()) return null
        let prev = null
        let curr = this.head
        
        while (curr !== null) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.tail = this.head
        this.head = prev
    }

    print() {
        if(this.isEmpty()) return null
        let curr = this.head
        let str = ""
        while(curr !== null) {
            str += `${curr.data} `
            curr = curr.next
        }
        return str
    }
    
}

let ll1 = new LL()
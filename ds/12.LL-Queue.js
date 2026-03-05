import LinkedList from "./10.LinkedList.js"

class LinkedListQueue {
    constructor() {
        this.queue = new LinkedList()
    }

    enqueue(data) {
        this.queue.append(data)
    }

    dequeue() {
        this.queue.deleteFromFront()
    }

    peek(){
        return this.queue.head.value
    }

    isEmpty() {
        return this.queue.isEmpty()
    }   

    getSize() { 
        return this.queue.getSize()
    }

    print() {
        this.queue.print()
    }
}

const s1 = new LinkedListQueue()

s1.enqueue(10)
s1.enqueue(20)
s1.enqueue(30)
s1.enqueue(40)
s1.enqueue(50)

s1.print()

console.log(s1.peek())

console.log(s1.getSize())

console.log(s1.isEmpty())

s1.dequeue(50)

s1.print()
class Queue {

    constructor() {
        this.queue = []
    }

    dequeue(value) {
        this.queue.push(value)
    }

    pop() {
        this.queue.shift()
    }
    
    isEmpty() {
        this.queue.length === 0
    }

    clear() {
        this.queue.length = 0
    }

    display() {
        return this.queue.join(" ")
    }
}

let s1 = new Queue()

s1.dequeue(100)
s1.dequeue(100)
s1.dequeue(100)
s1.dequeue(100)

s1.pop()

console.log(s1.display())
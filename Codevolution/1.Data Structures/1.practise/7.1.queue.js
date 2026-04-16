class Queue {

    constructor() {
        this.queue = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.queue[this.rear] = value
        this.rear++
    }

    dequeue() {
        if (this.isEmpty()) return null
        const item = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return item
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.front]
    }
    
    isEmpty() {
        return this.rear === this.front
    }

    clear() {
        this.queue = {}
        this.front = 0
        this.rear = 0
    }

    display() {
        return Object.values(this.queue).join(" ")
    }
}

let s1 = new Queue()

s1.enqueue(100)
s1.enqueue(200)
s1.enqueue(300)
s1.enqueue(400)

s1.dequeue()

console.log(s1.display())
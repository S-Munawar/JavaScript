class Queue {

    constructor(capacity) {
        this.queue = new Array(capacity).fill(null)
        this.capacity = capacity
        this.size = 0
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        if (this.isFull()) {
        console.log("Queue full")
        return
        }
        this.queue[this.rear] = value
        this.rear = (this.rear + 1) % this.capacity
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) return null
        this.queue[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.size--
    }

    peek() {
        return this.isEmpty() ? null : this.queue[this.front]
    }

    isFull() {
        return (this.rear + 1) % this.capacity === this.front
    }
    
    isEmpty() {
        return this.size === 0
    }

    clear() {
        this.queue.fill(null)
        this.size = 0
        this.front = 0
        this.rear = 0
    }

    display() {
        if (this.isEmpty()) return null

        let str = ''
        let count = 0
        let curr = this.front

        while(count < this.size) {
            str += this.queue[curr]
            curr++
            count++
        }
        console.log(str)
    }
}

let s1 = new Queue(10000)

s1.enqueue(100)
s1.enqueue(200)
s1.enqueue(300)
s1.enqueue(400)

s1.dequeue()

s1.display()
class Queue {
    constructor(){
        this.queue = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.queue[this.rear] = element
        this.rear++ // Key of last element
    }

    dequeue(){
        const item = this.queue[this.front]
        delete this.queue[this.front] // Before: delete this.queue[this.last - this.size()]
        this.front++
        return item
    }

    peek(){
        return this.isEmpty() ? null : this.queue[this.front]
    }

    isEmpty(){
        return this.rear - this.front === 0 // Before: Object.entries(this.queue).length === 0
    }

    size(){
        return this.rear - this.front // Before: Object.entries(this.queue).length
    }

    print(){
        console.log(this.queue) // Before: Object.values(this.queue).join(" ")
    }

    printVariables(){
        console.log(this.rear, this.front)
    }
}

const q1 = new Queue()

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)

q1.print()
q1.printVariables()
console.log(q1.peek())

console.log(q1.dequeue())
q1.printVariables()

q1.print()
console.log(q1.peek())

console.log(q1.isEmpty())
console.log(q1.size())

// Time Complexity
// enqueue: O(1)
// dequeue: O(1)
// peek: O(1)
// isEmpty: O(1)
// size: O(1)
// print: O(n)
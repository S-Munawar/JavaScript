class Queue {
    
    constructor(capacity){
        if (!Number.isInteger(capacity) || capacity <= 0){
            throw new Error("Capacity must be a positive integer")
        }
        this.queue = new Array(capacity).fill(null)
        this.capacity = capacity
        this.size = 0;
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        if (this.isFull()){
            console.warn("Full")
            return false
        }
            this.queue[this.rear] = element
            this.rear = (this.rear + 1) % this.capacity
            this.size++
            return true
    }

    dequeue(){
        if (this.isEmpty()) return null 
        const item = this.queue[this.front]
        this.queue[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.size--
        return item
    }

    peek(){
        return this.isEmpty() ? null : this.queue[this.front]
    }

    isEmpty() { return this.size === 0 }

    isFull()  { return this.size === this.capacity }

    size(){
        return this.size
    }

    print(){
        if (this.isEmpty()) {
            console.log("Empty")
            return
        }
        else{
            let str = ''
            let i = this.front
            let count = 0

            while(count < this.size){
                str += this.queue[i] + '|'
                i = (i + 1) % this.capacity
                count++
            }
            console.log(str)
        }
    }

    printVariables(){
        console.log(this.rear, this.front, this.capacity, this.size)
    }
}

const q1 = new Queue(5)

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)

q1.print()
q1.dequeue()

console.log(q1.peek())
console.log(q1.isFull())
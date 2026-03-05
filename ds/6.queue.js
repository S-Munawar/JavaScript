class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element)
    }

    dequeue(){
        return this.queue.shift()
    }

    peek(){
        if ( !this.isEmpty() ){
            return this.queue[0]
        }
        return null
    }

    isEmpty(){
        return this.queue.length === 0
    }

    size(){
        return this.queue.length
    }

    print(){
        console.log(this.queue.toString())
    }
}

const q1 = new Queue()

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)
q1.enqueue(4)
q1.enqueue(5)

q1.print()
console.log(q1.peek())

console.log(q1.dequeue())

q1.print()
console.log(q1.peek())

console.log(q1.isEmpty())
console.log(q1.size())
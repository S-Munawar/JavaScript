import LinkedList from "./10.LinkedList.js"

class LinkedListStack {
    constructor() {
        this.stack = new LinkedList()
    }

    push(data) {
        this.stack.prepend(data)
    }

    pop() {
        this.stack.deleteFromFront()
    }

    peek(){
        return this.stack.head.value
    }

    isEmpty() {
        return this.stack.isEmpty()
    }   

    getSize() { 
        return this.stack.getSize()
    }

    print() {
        this.stack.print()
    }
}

const s1 = new LinkedListStack()

s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)
s1.push(50)

s1.print()

console.log(s1.peek())

console.log(s1.getSize())

console.log(s1.isEmpty())

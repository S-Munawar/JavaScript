import LL from "./10.1.LinkedList.js"

class Stack {

    constructor() {
        this.stack = new LL()
    }

    push(value) {
        this.stack.prepend(value)
    }

    pop() {
        return this.stack.deleteFromStart()
    }
    
    peek() {
    return this.stack.head?.data ?? null
    }
    
    isEmpty() {
        return this.stack.isEmpty()
    }

    clear() {
        this.stack.clear()
    }

    display() {
        return this.stack.print()
    }
}

let s1 = new Stack()

s1.push(100)
s1.push(100)
s1.push(100)
s1.push(100)

s1.pop()

console.log(s1.display())
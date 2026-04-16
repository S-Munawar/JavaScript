class Stack {

    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        this.stack.pop()
    }
    
    isEmpty() {
        this.stack.length === 0
    }

    clear() {
        this.stack.length = 0
    }

    display() {
        return this.stack.join(" ")
    }
}

let s1 = new Stack()

s1.push(100)
s1.push(100)
s1.push(100)
s1.push(100)

s1.pop()

console.log(s1.display())
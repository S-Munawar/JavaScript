class Stack {
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        return this.stack.pop()
    }

    top(){
        if ( !this.isEmpty() )  {
            return this.stack[this.size() - 1]
        }
        return null
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack.length = 0
    }

    print(){
        return this.stack.join(" ") // Replaced for loop with join(). Same as arr.toString()
    }
}

const s1 = new Stack()

s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.push(5)

console.log(s1.print())
console.log(" ")
console.log(s1.top())
console.log(" ")
console.log(s1.size())
console.log(" ")

s1.pop()
console.log(s1.print())
console.log(" ")

console.log(s1.top())
console.log(" ")

console.log(s1.size())
console.log(" ")

console.log(s1.isEmpty())
console.log(" ")

s1.clear()
console.log(s1.isEmpty())
console.log(" ")
console.log(s1.size())

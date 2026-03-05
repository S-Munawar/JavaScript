class Node {
    constructor(data) {
        this.value = data
        this.next = null 
    }
}

class LinkedList {

    constructor(){
        this.head = null
        this.size = 0
    }

    // Add element to the end of the list - O(n)
    append(data) { 
        let node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.size++
            return
        }
        let temp = this.head
        while (temp.next !== null){
            temp = temp.next
        }
        temp.next = node
        this.size++
        return
    }

    // Add element to the beginning of the list - O(1)
    prepend(data) {
        let node = new Node(data)
        node.next = this.head
        this.head = node
        this.size++
        return
    }

    // Add element at a specific index - O(n)
    insert(data, index){
        let node = new Node(data)
        if ( index < 0 || index > this.size ) {
            console.log("Invalid index")
            return
        }
        if ( index == 0 ) { 
            this.prepend(data) 
            return
        }
        else if ( index == this.size ) { 
            this.append(data) 
            return
        }
        let count = 0
        let curr = this.head
        while (count < index - 1){ // Use while when you don't know the number of iterations
            curr = curr.next
            count++
        }
        node.next = curr.next
        curr.next = node
        this.size++
        return
    }

    // Delete element at a specific index - O(n)
    deleteByIndex(index) {
        if ( index >= this.size || index < 0 ) { return null }
        let removeNode
        if ( index == 0 ){
            removeNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++ ){
            prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode
    }

    // Delete element by value - O(n)
    deleteByValue(data){
        if ( this.isEmpty() ) { return null }
        let removeNode
        if (this.head.value == data ){
            removeNode = this.head
            this.head = this.head.next
        }
        else {
            let prev = this.head
            while(prev.next && prev.next.value !== data){
                prev = prev.next
            }
            if (!prev.next) return null
            removeNode = prev.next
            prev.next = prev.next.next
        }
        this.size--
        return removeNode
    }

    // Search for an element - O(n)
    search(data) {
        if (this.isEmpty()) return null
        let curr = this.head
        let index = 0
        while (curr !== null && curr.value !== data){
            curr = curr.next
            index++
        }
        if (curr == null) return -1
        return index
    }

    // Reverse the linked list - O(n)
    reverse() {
        let prev = null
        let curr = this.head
        while (curr !== null){
            let ahead = curr.next
            curr.next = prev
            prev = curr
            curr = ahead
        }
        this.head = prev
        return this.head
    }

    // Check if the list is empty - O(1)
    isEmpty() {
        return this.size === 0
    }

    // Get the size of the list - O(1)
    getSize() {
        return this.size
    }

    // Print the list - O(n)
    print() {
        if (this.isEmpty()){
            console.log("EMPTY")
            return
        }

        let curr = this.head
        let str = ""
        while (curr !== null) { // Or for loop i < this.size
            str += `${curr.value} `
            curr = curr.next
        }
        console.log(str)
        return
    }

}

const ll1 = new LinkedList()    

ll1.append(50)
ll1.print()

ll1.append(60)
ll1.print()

ll1.insert(70, 1)
ll1.print()

console.log(ll1.search(600))




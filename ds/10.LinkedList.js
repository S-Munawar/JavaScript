class Node {
    constructor(data) {
        this.value = data
        this.next = null 
    }
}

class LinkedList {

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Add element to the end of the list - O(1)
    append(data) { 
        let node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    // Add element to the beginning of the list - O(1)
    prepend(data) {
        let node = new Node(data)
        if (this.isEmpty()){
            this.head = node
            this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }   
        this.size++
    }

    // Add element at a specific index - O(n)
    insert(data, index){
        let node = new Node(data)
        if ( index < 0 || index > this.size ) {
            console.log("Invalid index")
            return
        }
        if ( index === 0 ) { 
            this.prepend(data) 
            return
        }
        else if ( index === this.size ) { 
            this.append(data) 
            return
        }
        let curr = this.head
        for (let i = 0 ; i < index - 1; i++){ // Use while when you don't know the number of iterations
            curr = curr.next
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
        if ( index === 0 ){
            return this.deleteFromStart()
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++ ){
            prev = prev.next
            }
            removeNode = prev.next
            prev.next = prev.next.next
            if (removeNode.next === null){
                this.tail = prev
            }
        }
        this.size--
        return removeNode.value
    }

    // Delete element by value - O(n)
    deleteByValue(data){
        if ( this.isEmpty() ) { return null }
        let removeNode
        if (this.head.value === data ){
            removeNode = this.head
            this.head = this.head.next
            if (this.head === null) {
                this.tail = null
            } 
        }
        else {
            let prev = this.head
            while(prev.next && prev.next.value !== data){
                prev = prev.next
            }
            if (!prev.next) { return null }
            removeNode = prev.next
            prev.next = prev.next.next
            if (prev.next === null) {
                this.tail = prev
            }
        }
        this.size--
        return removeNode.value
    }

    // Delete from end - O(n)
    deleteFromEnd() {
        if (this.isEmpty()) { return null }
        let removeNode = this.tail
        if (this.tail === this.head) {
            this.tail = null
            this.head = null
        }
        else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            this.tail = prev
            prev.next = null
        }
        this.size--
        return removeNode.value
    }

    // Delete from start - O(1)
    deleteFromFront() {
        if (this.isEmpty()) { return null }
        let removeNode = this.head
        this.head = this.head.next
        if (this.head === null) {
            this.tail = null
        }
        this.size--
        return removeNode.value
    }

    // Search for an element - O(n)
    search(data) {
        let curr = this.head
        let index = 0
        while (curr !== null){
            if (curr.value === data) return index
            curr = curr.next
            index++
        }
        return -1
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
        this.tail = this.head
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

export default LinkedList




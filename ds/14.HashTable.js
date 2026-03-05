class Node {
    constructor(data) {
        this.value = data
        this.next = null
    }
}

class HashTable {
    constructor(size) {
        this.hashTable = new Array(size)
        this.size = size
        this.head = null
        
    }

    hash(key) {
        let total = 0
        for (const ch of key) {
            total += ch.charCodeAt(0)
        }
        return total % this.size
    }

    set(key, data) {
        const index = this.hash(key)
        this.hashTable[index] = data
    }

    get(key) {
        const index = this.hash(key)
        return this.hashTable[index]
    }

    remove(key) {
        const index = this.hash(key)
        const item = this.hashTable[index]
        if (item) {
            this.hashTable[index] = undefined
        }   
        else {
            console.log("Remove: Item not found")
        }
        return item
    }

    display() {
        for(let i = 0; i < this.hashTable.length; i++) {
            if (this.hashTable[i]) {
                console.log(`${i}: ${this.hashTable[i]}`)
            }
        }
    }
}

const t1 = new HashTable(5)

t1.set("one", "shaik")
t1.set("two", "abdul")
t1.set("three", "munawar")

console.log(t1.get("two"))

t1.display()
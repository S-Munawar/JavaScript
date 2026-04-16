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
        const bucket = this.hashTable[index]
        if (!bucket) {
            this.hashTable[index] = [[key, data]]
        }
        else {
            const existingItem = bucket.find((item) => item[0] === key )
            if (existingItem) {
                existingItem[1] = data
            }
            else {
                bucket.push([key, data])
            }
        }  
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.hashTable[index]
        if(bucket) {
            const existingItem = bucket.find((item) => item[0] === key)
            if (existingItem){
                return existingItem[1]
            }
        }
        else {
            console.log("Get: Item not found")
            return undefined
        }
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.hashTable[index]
        if (bucket) {
            existingItem = bucket.find((item) => item[i] === key)
            if (existingItem) {
                index = bucket.indexOf(existingItem)
                bucket.splice(index, 1)
                return
            }
        }
        else {
            console.log("Get: Item not found")
            return null
        }
        
    }

    display() {
        for(let i = 0; i < this.hashTable.length; i++) {
            if (this.hashTable[i]) {
                console.log(`${i}: `)
                for (const item of this.hashTable[i]) {
                    console.log(`[${item[0]}: ${item[1]}], `)
                }
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

// Time Complexity (Average Case / Worst Case)
// hash: O(k) where k is string length
// set: O(1) / O(n)
// get: O(1) / O(n)
// remove: O(1) / O(n)
// display: O(n)

// Space Complexity
// O(n)
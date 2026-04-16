// HashMap

class Node {
    constructor(data = -1, key = -1, next = null) {
        this.key = key
        this.value = data
        this.next = next
    }
}

// Linked List
class HashTable1 {

    constructor(capacity) {
        this.map = Array.from({length: capacity}, () => new Node())
        this.size = 0
    }

    hash(key) {
        let total = 0
        for(const ch of key) {
            total += ch.charCodeAt(0)
        }
        return total % this.map.length
    }

    set(key, data) {
        const index = this.hash(key)
            let curr = this.map[index]
            while(curr.next !== null) {
                if(curr.next.key === key) {
                    curr.next.value = data
                    return
                }
                curr = curr.next
            }
            curr.next = new Node(data, key)
            this.size++
    }

    get(key) {
        const index = this.hash(key)
        let curr = this.map[index]
        while(curr.next !== null) {
            if(curr.next.key === key) {
                return curr.next.value
            }
            curr = curr.next
        }
        return -1
    }

    remove(key) {
        const index = this.hash(key)
        let curr = this.map[index]
        let removed
            while(curr.next !== null) {
            if(curr.next.key === key) {
                removed = curr.next.value
                curr.next = curr.next.next
                this.size--
                return removed
            }
            curr = curr.next
            }
        return -1
    }

    display() {
        let result = []
        for (let i = 0; i < this.map.length; i++) {
            let curr = this.map[i].next
            let bucket = []
            while(curr) {
                bucket.push(`(${curr.key}:${curr.value})`)
                curr = curr.next
            }
            result.push(`[${bucket.join(" -> ")}]`)

        }
        return result.join("\n")
    }
}
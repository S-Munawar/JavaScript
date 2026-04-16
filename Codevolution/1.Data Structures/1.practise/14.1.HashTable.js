// HashMap

// Array of fixed size
class HashTable1 {

    constructor(size) {
        this.hash = new Array(size).fill(-1)
        this.size = size

    }

    hash(key) {
        let total = 0
        for(const ch of key) {
            total += ch.charCodeAt(0)
        }
        return total % this.size
    }

    set(key, data) {
        const index = this.hash(key)
        this.hash[index] = data
    }

    get(key) {
        const index = this.hash(key)
        return this.hash[index]
    }

    remove(key) {
        const index = this.hash(key)
        this.hash[index] = -1
    }

    display() {
        let str = ""
        for(const item of this.hash) {
            str += item
        }
        return str
    }
}



class MyHashMap {
    constructor() {
        this.hashMap = new Array(1000001).fill(-1)
        this.size = 0
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */

    put(key, value) {
        this.hashMap[key] = value
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.hashMap[key]
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hashMap[key] = -1
    }
}

class Node {
    constructor(key = -1, val = -1, next = null) {
        this.value = val
        this.key = key
        this.next = next
    }
}

class MyHashMap {
    constructor(size) {
        this.hashMap = Array.from({length: 1000}, () => new Node())
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */

    hash(key) {
        return key % this.hashMap.length
    }

    put(key, value) {
        let curr = this.hashMap[this.hash(key)]
        while(curr.next) {
            if(curr.next.key === key) {
                curr.next.value = value
                return null
            }
            curr = curr.next
        }
        curr.next = new Node(key, value)            
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let curr = this.hashMap[this.hash(key)].next
        while(curr) {
            if(curr.key === key) {
                return curr.value
            }
            curr = curr.next
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let curr = this.hashMap[this.hash(key)]
        while(curr.next) {
            if(curr.next.key === key) {
                curr.next = curr.next.next
                return
            }
            curr = curr.next
        }

    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


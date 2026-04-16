class MyHashSet {
    constructor() {
        this.set = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(!this.set.includes(key)) {
            this.set.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.set.indexOf(key)
        if(index !== -1) {
            this.set.splice(index, 1)
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.set.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


class MyHashSet {
    constructor() {
        this.set = new Array(1000001).fill(false)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[key] = true
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.set[key] = false
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.set[key]
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */



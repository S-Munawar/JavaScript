const obj1 = {
    name: "Shaik",
    "my-age": 20,
    city: "Hyderabad",
    display: function () {
        console.log(this.name)
    }
}

const obj2 = new Object()
obj2.name = "Shaik"
obj2["my-age"] = 20
obj2.city = "Hyderabad"
obj2.display = function () {
    console.log(this.name)
}   

console.log(obj2)

// ------------------------------------------------------

// obj1.country = "india"
// delete obj1.city
// console.log(obj1, obj1.name, obj1["my-age"])
// obj1.display()

// ------------------------------------------------------


const objArr = Object.keys(obj1) // Array of keys
const objVal = Object.values(obj1) // Array of values
const objEnt = Object.entries(obj1) // Array of arrays [key, value]

console.log(objArr, objVal, objEnt)

for (const [key, value] of objEnt) {
    console.log(key, value)
}

// Time Complexity (Object)
// Access: O(1)
// Search: O(n) (for values), O(1) (for keys)
// Insertion: O(1)
// Deletion: O(1)
// Object.keys(), Object.values(), Object.entries(): O(n)

// Space Complexity
// O(n)
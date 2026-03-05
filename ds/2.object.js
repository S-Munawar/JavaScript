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
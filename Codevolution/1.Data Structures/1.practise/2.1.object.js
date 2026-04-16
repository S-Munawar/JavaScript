let obj1 = {
    name: "shaik",
    "my-age": 20,
    display: function() {
        console.log(this.name)
    }
}

let obj2 = new Object()
obj2.name = "shaik"
obj2["my-age"] = 20
obj2.display = () => {
    console.log(this.name)
}

console.log(obj1.name)
delete obj1.name
console.log(obj1.name)

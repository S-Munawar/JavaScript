let map = new Map([['name', 'Shaik'], ['age', 20], ['city', 'Hyderabad']])

map.set(0, "zero")
console.log(map.get(0))
map.delete("age")

for(const [key, value] of map) {
    console.log(key, value)
}

map.clear()

for(const [key, value] of map) {
    console.log(key, value)
}
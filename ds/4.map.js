const map1 = new Map([['name', 'Shaik'], ['age', 20], ['city', 'Hyderabad']])

map1.set(0, 'zero')
map1.delete('age')
console.log(map1.has('name'))
console.log(map1.size)

console.log(map1.get('name'))
console.log(map1)

for (const [key, value] of map1){
    console.log(key, value)
}

map1.clear()
console.log(map1)

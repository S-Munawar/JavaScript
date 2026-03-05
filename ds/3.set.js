const set1 = new Set([1, 2, 3, 4, 5]) // Create a set using new Set() constructor. This constructor accepts an iterable object as an argument
set1.add(6) // Adds an element to the set
set1.delete(1) // Removes an element from the set

for (const item of set1){
    console.log(item)
}

console.log(set1.has(1)) // Checks if the set has the specified element
console.log(set1.size) // Size of the set
console.log(set1.clear()) // Clears the set

for (const item of set1){
    console.log(item)
}
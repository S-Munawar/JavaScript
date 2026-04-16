let set1 = new Set([1, 2, 3, 4, 5])

set1.add(6)
set1.delete(1)

for (const item of set1){
    console.log(item)
}


console.log(set1.has(1))
set1.clear()
console.log(set1.has(6))

// Array literal (recommended)
const num = [1, 2, 3, 4, 5];
const str = ["shaik", "abdul", "munawar"];
const dates = ["14-1-2004", "15-1-2004", "16-1-2004"];

// Strings for later examples
const str2 = "     Hello World ";
const str3 = "123-456-789";

// 2. Creating an Array using the Array constructor
const arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr.name = "Hello"

// 3. Accessing array elements using indexes
index5 = 5;
console.log(arr[index5]); // accessing index using variable

// 4. Arrays are Objects
arr.index5 = 6; // Arrays can have custom properties because they are objects

// 5. Numeric indexes vs object properties
arr[100] = "Numeric 100"; // numeric index
arr["100"] = "String 100"; // numeric keys are converted to strings internally
arr[100] = "Numeric 100"; // both refer to the same key "100"

// 6. Dynamic property assignment
age = "age";
meow = "name fame";
arr[age] = 20; // equivalent to arr["age"] = 20

// 7. Printing the array
console.log(arr); // shows array elements + object properties

// 8. Dot notation
console.log(arr.name); // property must be a valid identifier
console.log(arr["name"]);
// That's why we can't use numeric keys (Keys can only be string/symbol type and even indexes in arrays are string keys)
// fixed property name

// 9. Bracket notation
console.log(arr[100]); // bracket notation expects an expression
console.log(arr.age); // accessing property created earlier

// 10. Key concept
// dot notation → fixed property name
// bracket notation → dynamic property name

// ------------------------------------------------------
// STRING METHODS
// ------------------------------------------------------

// console.log(str2.charAt(6)) // Element at specified index - [charCodeAt(), charCodeAt()]
// console.log(str2.indexOf('W')) // First Index of specified element - [lastIndexOf()]
// console.log(str2.trim()) // Removes whitespace from both ends - [trimStart(), trimEnd()]
// console.log(str2.repeat(2)) // Repeats the string - [repeat()]
// console.log(str2.toUpperCase()) // Converts to uppercase - [toLowerCase()]
// console.log(str2.startsWith(" ")) // Checks if the string starts with the specified string - [endsWith()]
// console.log(str2.includes("hello")) // Checks if the string includes the specified string - [includes()]
// console.log(str3.replaceAll("-", "/")) // Replaces all occurrences of the specified string - [replace()]
// console.log(str3.padStart(15, "0")) // Pads the string with the specified string - [padEnd()]
// console.log(str2.split(" ")) // Splits the string into an array - [split()]
// console.log(str2.concat("Hello")) // Concatenates strings - [concat()]
// console.log(str2.slice(1, str2.indexOf("l"))) // Extracts a section of the string - [slice(), substring(), substr()]

// // console.log(str.match(regex)) // Matches the string with the specified regex - [match()]
// console.log(str2.search("Hello")) // Starting Index of specified element - [includes()]


// ------------------------------------------------------
// STRING PROPERTIES
// ------------------------------------------------------

// console.log(str3.length) // .length is a property not a method

// ------------------------------------------------------
// ARRAY METHODS
// ------------------------------------------------------


// ------------------------------------------------------

// console.log(num.join("")) // Joins the array elements into a string
// console.log(num.includes(1)) // Checks if the array includes the specified element
// console.log(num.indexOf(1)) // Index of specified element

// ------------------------------------------------------

// str.forEach(display)

// function display(element, index, arr){
//     arr[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }

// console.log(str)

// ------------------------------------------------------

// const splice1 = num.splice(2, 2, "meow")
// console.log(splice1)
// console.log(num)

// ------------------------------------------------------

// const slice1 = str2.slice(1, str2.indexOf("l"))
// const slice2 = num.slice(1, num.indexOf(5))
// const slice3 = num.slice(num.indexOf(1) + 1)
// const slice4 = "Hello World".split(" ")[1]
// console.log(slice4)

// ------------------------------------------------------

// const result = num.concat(str, dates)
// console.log(result)

// const str1 = "Hello"
// const str2 = "World"
// const result2 = str1.concat(" ", str2)
// console.log(result2)

// ------------------------------------------------------

// num.push(4);
// num.unshift(9)
// num.pop()
// num.shift()

// for (const item of num) {
//     console.log(item);
// }

// ------------------------------------------------------

// const num2 = num.map((item) => {
//     return Math.pow(item, 2)
// })
// console.log(num2)

// ------------------------------------------------------

// const str2 = str.map((item) => {
//     return item.toUpperCase()
// })
// console.log(str2)

// ------------------------------------------------------

// const dates2 = dates.map((item) => {
//     const parts = item.split('-')
//     return `${parts[1]}-${parts[0]}-${parts[2]}`
// })

// console.log(dates2)

// ------------------------------------------------------

// const even = num.filter((item) => {
//     return item % 2 == 0 // 4 % 2 (0) == 0
// })
// console.log(even)

// ------------------------------------------------------

// const total = num.reduce((accumulator, current) => {
//     console.log(accumulator) 
//     return accumulator + current;
// }, 0)
// console.log(total)

// ------------------------------------------------------


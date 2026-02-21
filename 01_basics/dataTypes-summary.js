// ===============================
// JavaScript Data Types Summary
// ===============================

// JavaScript me data types 2 categories me divide hote hain: df yhi h ki ye data hai memory me kis trh se store hote hai or kis trike se access hote hai 

// 1️⃣ Primitive
// 2️⃣ Reference (Non-Primitive)


// ===============================
// 1️⃣ Primitive Data Types
// ===============================

// Total 7 types:

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt


// Examples:

const score = 100              // Number
const scoreValue = 100.3       // Number

const isLoggedIn = false       // Boolean
const outsideTemp = null       // null

let userEmail;                 // undefined

const id = Symbol('123')

console.log(typeof id);

const anotherId = Symbol('123')
 
// Symbol always unique hota hai
// Even same value pass karne par bhi equal nahi hoga

console.log(id === anotherId); // false

// BigInt (large integers ke liye)
const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);  

// typeof behavior:

// typeof score        → "number"
// typeof isLoggedIn   → "boolean"
// typeof outsideTemp  → "object"  (historical bug in JS)
// typeof userEmail    → "undefined"
// typeof id           → "symbol"
// typeof bigNumber    → "bigint"


// ===============================
// 2️⃣ Reference (Non-Primitive)
// ===============================

// Types:

// 1. Array
// 2. Object
// 3. Function


// Examples:

const heros = ["shaktiman", "naagraj", "dogesh bhai "]  // Array

let myObj = {
    name: "hitesh",
    age: 22,
}  // Object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);

// function ka return hmesha obejctfunction hota hai 




// Function


// typeof behavior:

// typeof heros      → "object"
// typeof myObj      → "object"
// typeof myFunction → "function"


// ===============================
// Memory Concept (Very Important)
// ===============================

// Primitive → Stack memory → Copy milti hai

let myName = "Suraj"
let anotherName = myName

anotherName = "Rahul"

// myName change nahi hoga


// Reference → Heap memory → Address share hota hai

let userOne = {
    email: "suraj@gmail.com"
}

let userTwo = userOne

userTwo.email = "rahul@gmail.com"

// Dono me change reflect hoga 


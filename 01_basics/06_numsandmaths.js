// =====================================================
// 📘 JavaScript Numbers & Math – Complete Notes
// =====================================================
 


// =====================================================
// 1️⃣ Number Basics
// =====================================================

const score = 400
// typeof score → "number"

const balance = new Number(100)
// typeof balance → "object" (Number constructor use kiya hai)


// Convert number to string
console.log(balance.toString())        // "100"
console.log(balance.toString().length) // 3


// toFixed(n) → decimal ke baad n digits
console.log(balance.toFixed(1))  // "100.0"



// =====================================================
// 2️⃣ Precision Handling
// =====================================================

const otherNumber = 123.8966

// toPrecision(n) → total significant digits
console.log(otherNumber.toPrecision(4)) // "123.9"



// =====================================================
// 3️⃣ Number Formatting
// =====================================================

const hundreds = 1000000

// toLocaleString() → commas add karta hai
console.log(hundreds.toLocaleString())        // "1,000,000" (US)
console.log(hundreds.toLocaleString('en-IN')) // "10,00,000" (Indian format)



// =====================================================
// 4️⃣ Math Object Basics
// =====================================================

// Math ek built-in object hai (constructor nahi)

console.log(Math.abs(-4))     // 4
console.log(Math.round(4.6))  // 5
console.log(Math.ceil(4.2))   // 5 celiing mtlb top value
console.log(Math.floor(4.9))  // 4 floor means niche ki value 

console.log(Math.min(4, 3, 6, 8)) // 3
console.log(Math.max(4, 3, 6, 8)) // 8



// =====================================================
// 5️⃣ Random Numbers
// =====================================================

// Random value between 0 and 1
console.log(Math.random())

// Random value between 1 and 10
console.log((Math.random() * 10) + 1)
// to avoid case like 0.01234 so we add +1 to include max value in range 

// Proper integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1)



// =====================================================
// 6️⃣ Random Number Between Custom Range
// =====================================================

const min = 10 
const max = 20

// Formula:
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 


// Explanation:
// (max - min + 1) → total range size
// * Math.random()
// + min → shift range to start from min



// =====================================================
// 7️⃣ Extra Useful Math Methods
// =====================================================

console.log(Math.sqrt(25))   // 5
console.log(Math.pow(2, 3))  // 8
console.log(Math.trunc(4.9)) // 4 (decimal remove)
console.log(Math.sign(-5))   // -1
console.log(Math.PI)         // 3.141592653589793



// =====================================================
// 📌 Important Summary
// =====================================================

// Primitive number → typeof = "number"
// new Number()     → typeof = "object"

// toFixed() → decimal control
// toPrecision() → total significant digits
// toLocaleString() → formatting with commas

// Math.round()  → nearest integer
// Math.ceil()   → upper integer
// Math.floor()  → lower integer
// Math.random() → 0 to 1 random

// Custom Random Formula:
// Math.floor(Math.random() * (max - min + 1)) + min

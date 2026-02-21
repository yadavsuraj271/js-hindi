// =====================================================
// 📘 JavaScript Strings – Complete Combined Notes
// =====================================================



// =====================================================
// 1️⃣ Old vs Modern String Concatenation
// =====================================================

const name = "suraj"
const repoCount = 50

// ❌ Old Way
// console.log(name + repoCount + " Value");

// ✅ Modern Way – Template Literals (String Interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// ✔ Uses backticks ` `
// ✔ More readable than + operator



// =====================================================
// 2️⃣ String Constructor
// =====================================================

// new String() ek String Object banata hai (primitive nahi)

const gameName = new String('suraj-hc-com')

console.log(typeof gameName)           // "object"
console.log(typeof gameName.valueOf()) // "string"



// =====================================================
// 3️⃣ Accessing Characters & Properties
// =====================================================

console.log(gameName[0])        // "s"
console.log(gameName.length)    // 13
console.log(gameName.charAt(2)) // "r"
console.log(gameName.indexOf('r')) // 2



// =====================================================
// 4️⃣ Uppercase / Lowercase
// =====================================================

console.log(gameName.toUpperCase()) // "SURAJ-HC-COM"
console.log(gameName.toLowerCase()) // "suraj-hc-com"



// =====================================================
// 5️⃣ Extracting Parts of String
// =====================================================

// substring(start, end)
// ✔ start include
// ✔ end exclude
// ❌ negative values allowed nahi

const newString = gameName.substring(0, 5)
console.log(newString) // "suraj"


// slice(start, end)
// ✔ start include
// ✔ end exclude
// ✔ negative values allowed

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)
// return empty 12-8=4 so it returns empty string ""



// =====================================================
// 6️⃣ trim() – Remove Extra Spaces
// =====================================================

const newStringOne = "   suraj    "

console.log(newStringOne)        // "   suraj    "
console.log(newStringOne.trim()) // "suraj"



// =====================================================
// 7️⃣ replace() & includes()
// =====================================================

const url = "https://suraj.com/suraj%20yadav"

console.log(url.replace('%20', '-'))
// "https://suraj.com/suraj-yadav"

console.log(url.includes('suraj')) // true
console.log(url.includes('github')) // false



// =====================================================
// 8️⃣ split() – Convert String → Array
// =====================================================

console.log(gameName.split('-'))
// ["suraj", "hc", "com"]



// =====================================================
// 9️⃣ Other Useful String Methods
// =====================================================

console.log(gameName.startsWith('suraj')) // true
console.log(gameName.endsWith('com'))     // true

console.log(gameName.concat("-youtube"))
// "suraj-hc-com-youtube"

console.log(gameName.repeat(2))
// "suraj-hc-comsuraj-hc-com"

console.log(gameName.italics())
// "<i>suraj-hc-com</i>"



// =====================================================
// 🔟 Important Summary
// =====================================================

// Primitive String → typeof = "string"
// new String()     → typeof = "object"

// slice() supports negative indexing
// substring() does NOT support negative values

// trim() removes extra spaces
// replace() replaces first occurrence
// split() converts string to array
// includes() checks existence
// charAt() returns character by index
// indexOf() returns first matching index

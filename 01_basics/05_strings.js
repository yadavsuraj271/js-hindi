// const name ="suraj is ready ";
// const channel="code with suraj";

// console.log(name + " to code with you  so let get started on my channel name " + channel); outdated hai thoda sa

const name = "suraj";
const channel = "code with suraj";
const repoCount = 50;

console.log(`my name is ${name} and my channel name is ${channel} and i have ${repoCount} repo Counts`);  

// this is called string interpolation or template literals  in js  , this is the modern way to do string concatenation in js  , earlier we used to do string concatenation using + operator but now we can use template literals which is more readable and easier to use.




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// new String("free fire") ek String Constructor use karta hai.
// Ye primitive string nahi banata, balki ek String Object create karta hai.
// Isliye:

// typeof gameName → "object"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




const gameName = new String("free fire");

console.log(gameName);                // [String: 'free fire']
console.log(gameName.length);         // 9

console.log(gameName[2]);             // "e"
console.log(gameName.italics());      // "<i>free fire</i>"
console.log(gameName.toUpperCase());  // "FREE FIRE"
console.log(gameName.toLowerCase());  // "free fire"


// 🔥 More String Methods Examples

console.log(gameName.charAt(0));      // "f"
console.log(gameName.indexOf("f"));   // 0
console.log(gameName.lastIndexOf("e"));// 8
console.log(gameName.lastIndexOf("e")); // 8

console.log(gameName.includes("fire")); // true
console.log(gameName.startsWith("free")); // true
console.log(gameName.endsWith("fire"));   // true

console.log(gameName.slice(0, 4));    // "free"

// slice(start, end) , start include hota hai ,end exclude hota hai

console.log(gameName.substring(5, 9)); // "fire"

console.log(gameName.replace("free", "pubg")); // "pubg fire"

console.log(gameName.split(" "));     // ["free", "fire"] //Space pe break → Array ban gaya:

console.log(gameName.concat(" max")); // "free fire max"

console.log(gameName.trim());         // "free fire"

console.log(gameName.repeat(3));      // "free firefree firefree fire"

console.log(typeof gameName);         // "object" //new String().   ek String object banata hai Isliye type "object" aata hai.
console.log(typeof gameName.valueOf()); // "string"






let score = 33
console.log(typeof score );
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber);

// let score= "33abc" isme return hoga NaN (Not a Number) kyuki string me number ke sath kuch aur bhi hai. Agar score me sirf number hota to conversion successful hota aur valueInNumber me uska numeric value aata.



// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "suraj"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "suraj" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " suraj"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");
// Jab tum unary plus (+) kisi string ke aage lagate ho,
// JavaScript us string ko number me convert karne ki koshish karta hai. Agar string me valid number hota hai, to conversion successful hota hai aur uska numeric value aata hai. Agar string me valid number nahi hota, to conversion fail hota hai aur result NaN (Not a Number) hota hai.



/*
console.log(+"5");     // 5
console.log(+"10");    // 10
console.log(+"abc");   // NaN
console.log(+" ");     // 0 (space bhi 0)
console.log(+null);    // 0
console.log(+true);    // 1
console.log(+false);   // 0
*/


// let num1 = num2 = num3 =4;
// console.log(num1, num2, num3);

// output is 4 4 4 kyuki assignment operator right se left me evaluate hota hai. Sabse pehle 4 num3 ko assign hota hai, phir num3 ka value num2 ko assign hota hai, aur finally num2 ka value num1 ko assign hota hai. Is tarah se teeno variables num1, num2, aur num3 me 4 store ho jata hai.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3);


let gameCounter = 100
++gameCounter;
console.log(gameCounter);



let suraj =101
console.log(suraj++);
console.log(suraj);
// postfix increment operator (suraj++) pehle current value ko return karta hai, phir uske baad variable ki value ko increment karta hai. Isliye pehle console.log(suraj++) me 101 print hota hai, aur uske baad suraj ki value 102 ho jati hai. Jab dusre console.log(suraj) me suraj ki value print hoti hai, to wo 102 hoti hai.



let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

// ++a ka matlab sirf value return karna nahi hai.
// Wo original variable ko modify bhi karta hai. 
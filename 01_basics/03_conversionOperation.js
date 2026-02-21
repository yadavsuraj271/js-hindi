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

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

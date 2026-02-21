/* undefined == 0 → false
undefined === 0 → false
undefined != 0 → true
undefined !== 0 → true

// != → value compare (type convert ho sakta hai)
// !== → value + type dono compare (no conversion)

undefined > 0 → false
undefined < 0 → false
undefined >= 0 → false
undefined <= 0 → false

Number(undefined) → NaN

undefined + 0 → NaN
undefined - 0 → NaN
undefined * 0 → NaN
undefined / 0 → NaN

undefined == null → true
undefined === null → false 
*/



// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);
// ================= ARRAYS =================

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);
// Output:
// 1
// ✔ Arrays are 0-indexed



// ================= ARRAY METHODS =================


// myArr.push(6)
// ✔ Adds element at END
// Result: [0,1,2,3,4,5,6]


// myArr.push(7)
// ✔ Adds another element at END


// myArr.pop()
// ✔ Removes last element
// Removes: 7



// myArr.unshift(9)
// ✔ Adds element at START
// Result: [9,0,1,2,3,4,5]


// myArr.shift()
// ✔ Removes first element
// Removes: 9



// console.log(myArr.includes(9));
// Output:
// false
// ✔ Checks if value exists (returns true/false)


// console.log(myArr.indexOf(3));
// Output:
// 3
// ✔ Returns index of element
// ✔ Returns -1 if not found



// const newArr = myArr.join()
// console.log(newArr);
// Output:
// "0,1,2,3,4,5"
// ✔ Converts array → string
// ✔ Type becomes string



// ================= SLICE vs SPLICE =================

console.log("A ", myArr);
// Output:
// A  [0,1,2,3,4,5]



const myn1 = myArr.slice(1, 3)

console.log(myn1);
// Output:
// [1,2]
// ✔ slice(start, end)
// ✔ End index NOT included
// ✔ Does NOT modify original array

console.log("B ", myArr);
// Output:
// B  [0,1,2,3,4,5]
// ✔ Original array unchanged



const myn2 = myArr.splice(1, 3)

console.log("C ", myArr);
// Output:
// C  [0,4,5]
// ✔ splice(start, deleteCount)
// ✔ Removes elements from original array

console.log(myn2);
// Output:
// [1,2,3]
// ✔ Returns removed elements



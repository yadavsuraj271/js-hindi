
// ==============================
// FUNCTION 1 : Basic Function
// ==============================

function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// Concept:
// Ye simple function hai.
// Jab call karoge tab hi execute hoga.
// Function body tab tak run nahi hoti jab tak usko call na karo.


// ==============================
// FUNCTION 2 : Parameters & Return
// ==============================

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

// Concept:
// number1 aur number2 parameters hai.
// 3 aur 5 arguments hai.
// return value function ke bahar store hoti hai.
// return ke baad code execute nahi hota.


// ==============================
// FUNCTION 3 : Default Parameter + Condition
// ==============================

function loginUserMessage(username = "Suraj"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Hitesh"))

// Concept:
// Default value tab use hoti hai jab argument pass nahi karte.
// if(!username) falsy values check karta hai.
// return ke baad function ruk jata hai.


// ==============================
// FUNCTION 4 : Rest Operator
// ==============================

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// Output:
// [500, 2000]

// Concept:
// val1 = 200
// val2 = 400
// ...num1 baaki values ko array me store karta hai.
// Rest operator multiple arguments ko ek array me convert karta hai.


// ==============================
// FUNCTION 5 : Object as Argument
// ==============================

const user = {
    username: "Suraj",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

// Concept:
// Hum object ko direct function me pass kar sakte hain.
// anyobject ek parameter hai jo object receive karta hai.
// Dot notation se values access hoti hain.


// ==============================
// FUNCTION 6 : Array as Argument
// ==============================

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))

// Output:
// 400

// Concept:
// Array function me pass kiya.
// getArray[1] second index return karta hai.
// Index 0 se start hota hai.

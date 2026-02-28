// ======================================================
// OBJECTS IN JAVASCRIPT
// ======================================================


// ======================================================
// 1️⃣ Singleton Object
// ======================================================

// Singleton object using constructor

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Suraj"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// ======================================================
// 2️⃣ Object.create()
// ======================================================

// Creating object with prototype

const userPrototype = {
    greet: function(){
        console.log(`Hello ${this.name}`)
    }
}

const user1 = Object.create(userPrototype)
user1.name = "Suraj"
user1.age = 20

// user1.greet()


// ======================================================
// 3️⃣ Object Literals
// ======================================================

const mySym = Symbol("key1")

const JsUser = {
    name: "Suraj",
    "full name": "Suraj Yadav",
    [mySym]: "mykey1",
    age: 20,
    location: "Gurugram",
    email: "suraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// ======================================================
// 4️⃣ Accessing Object Values
// ======================================================

// Dot notation
// console.log(JsUser.email)

// Bracket notation
// console.log(JsUser["email"])

// Accessing key with space
// console.log(JsUser["full name"])

// Accessing Symbol
// console.log(JsUser[mySym])


// ======================================================
// 5️⃣ Modifying Object Values
// ======================================================

JsUser.email = "suraj@chatgpt.com"

// Freeze object (no changes allowed after this)
// Object.freeze(JsUser)

JsUser.email = "suraj@microsoft.com"

// console.log(JsUser)


// ======================================================
// 6️⃣ Adding Methods in Object
// ======================================================

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


// ======================================================
// 7️⃣ Nested Objects (Extra Example)
// ======================================================

const regularUser = {
    email: "suraj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suraj",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


// ======================================================
// 8️⃣ Merging Objects (Important)
// ======================================================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// Method 1
const obj3 = Object.assign({}, obj1, obj2)

// Method 2 (Spread operator)
const obj4 = {...obj1, ...obj2}

// console.log(obj4)


// ======================================================
// 9️⃣ Object Keys, Values, Entries
// ======================================================

const course = {
    coursename: "JS in Hindi",
    price: "999",
    instructor: "Suraj"
}

// console.log(Object.keys(course))
// console.log(Object.values(course))
// console.log(Object.entries(course))
// console.log(course.hasOwnProperty("price"))


// ======================================================
// 🔟 Object Destructuring
// ======================================================

const { instructor } = course
// console.log(instructor)

// Rename while destructuring
const { instructor: teacher } = course
// console.log(teacher)
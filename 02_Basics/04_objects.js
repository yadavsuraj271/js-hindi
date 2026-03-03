// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "271suraj"
tinderUser.name = "Suraj Yadav"
tinderUser.isLoggedIn = true

// console.log(tinderUser);
// Output:
// { id: '271suraj', name: 'Suraj Yadav', isLoggedIn: true }


const regularUser = {
    email: "surajyadav@gmail.com",
    fullname: {
        userfullname: {
            firstname: "suraj",
            lastname: "yadav"
        }
    },
    mentor: {
        firstname: "hitesh",
        lastname: "choudhary"
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// Output:
// suraj


const obj1 = {1: "html", 2: "css"}
const obj2 = {3: "javascript", 4: "react"}
const obj4 = {5: "node", 6: "mongodb"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// Object.assign() ka use multiple objects merge karne ke liye hota hai

const obj3 = {...obj1, ...obj2, ...obj4}
// spread operator se bhi objects merge kar sakte hai

// console.log(obj3);
// Output:
// { '1': 'html', '2': 'css', '3': 'javascript', '4': 'react', '5': 'node', '6': 'mongodb' }



// -------- NEW METHODS WITH OUTPUT --------

// console.log(Object.keys(regularUser));
// Object.keys() object ki saari keys ka array deta hai
// Output:
// [ 'email', 'fullname', 'mentor' ]


// console.log(Object.values(regularUser));
// Object.values() object ki saari values ka array deta hai
// Output:
// [
//   'surajyadav@gmail.com',
//   { userfullname: { firstname: 'suraj', lastname: 'yadav' } },
//   { firstname: 'hitesh', lastname: 'choudhary' }
// ]


// console.log(Object.entries(regularUser));
// Object.entries() key-value pair ko nested array me convert karta hai
// Output:
// [
//   [ 'email', 'surajyadav@gmail.com' ],
//   [ 'fullname', { userfullname: [Object] } ],
//   [ 'mentor', { firstname: 'hitesh', lastname: 'choudhary' } ]
// ]


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// hasOwnProperty() check karta hai key exist karti hai ya nahi
// Output:
// true


Object.freeze(tinderUser)
// Object.freeze() object ko lock kar deta hai

tinderUser.name = "Changed Name"

// console.log(tinderUser);
// Output:
// { id: '271suraj', name: 'Suraj Yadav', isLoggedIn: true }
// (name change nahi hua kyunki object freeze ho chuka hai)



Object.seal(tinderUser)
// Object.seal() me new property add nahi kar sakte

tinderUser.newProperty = "test"

// console.log(tinderUser);
// Output:
// { id: '271suraj', name: 'Suraj Yadav', isLoggedIn: true }
// (newProperty add nahi hui)



const users = [
    {
        id: 1,
        email: "suraj@gmail.com"
    },
    {
        id: 2,
        email: "hitesh@gmail.com"
    },
    {
        id: 3,
        email: "mentor@gmail.com"
    },
]

// console.log(users[1].email);
// Output:
// hitesh@gmail.com



const course = {
    coursename: "advanced javascript",
    price: "1999",
    courseInstructor: "hitesh choudhary"
}

const {courseInstructor: instructor} = course

// console.log(instructor);
// Output:
// hitesh choudhary 
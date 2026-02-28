// const tinderUser = new Object() // singleton object coz constructor se bna hai 

const tinderUser = {} 
tinderUser.id = "abc123"
tinderUser.name = "Suraj"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
 

const regularUser = {
    email: "suraj@google.com",
    fullname: {
    userFullname: {
        firstName: "suraj"
        lastName: "yadav"
      }
}
}
console.log(regularUser.fullname.userfullname.firstname );

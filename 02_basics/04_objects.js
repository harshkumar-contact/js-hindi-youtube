// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // this is a NON singleton object else the top and this are same

tinderUser.id = "user088"
tinderUser.name = "Harsh Kumar"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "harsh@google.com",
    fullname: {
        userfullname:{
            firstName : "Harsh",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname);
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} is optional but it means we are giving an empty object which is our target and rest all the the sources
const obj3 = {...obj1, ...obj2} // same Spread operator
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")); // tells whether name property exists in object or not
console.log(tinderUser.hasOwnProperty("names"));


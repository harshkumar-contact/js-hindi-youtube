// Singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = { // here name, full name, age.. all are interpreted as strings but if its single word then we have a liberty of not using 
    // double inverted commas to look clean. 
    name: "Harsh",
    "full name" : "Harsh Kumar",
    [mySym] : "myKey1",
    age : 20,
    location : "Jaipur",
    email : "harsh@iiits.in",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email); // you can access one word key with . operator
// console.log(JsUser["email"]); // but here, you need to specify the double inverted commas for getting the values
// console.log(JsUser["full name"]); // only way to access this value. can't use dot operator 
// console.log(JsUser[mySym]);

// JsUser.email = "harsh@google.com"
// Object.freeze(JsUser) // it freezes from doing changes to this object. it will not throw any error but also will not allow you to change is with new values
// JsUser.email = "harsh@nvdia.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user : ${this["full name"]} `); // we use backticks for adding values in between. Its called string interpolation. and this is used to refer to object currently being used
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


const user = {
    username : "harsh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "hitesh"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "beyondbanaras"
//     console.log(this.username); // this does not work in functions, only in objects

//    // console.log(this);
// }
// chai()

// const chai = function (){
//     let username = "beyondbanaras"
//     console.log(this.username); // does'nt work here as well
// }
// chai()
// const chai = () => { // this is only called ARROW FUNCTION | We just removed function keyword and applied arrow after paranthesis
//     let username = "beyondbanaras"
//     console.log(this.username); // does'nt work here as well
//     // console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2 // Its called Explicit Return
// }
const addTwo = (num1, num2) => (num1+num2) // when we use parenthesis instead of curly braces,
// then we do not need return statement. This is very much used in REACT
// Its called Implicit Return
console.log(addTwo(5,4));
const retObj = () => ({username: "harshvns"})
console.log(retObj());


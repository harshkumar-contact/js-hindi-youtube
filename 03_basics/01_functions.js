function sayMyName(){
    console.log("Harsh");
    
}
// sayMyName()

// function add2num(num1, num2){
//     console.log(num1+num2);
// }
// const result = add2num(3,5)
// console.log(result);
// function add2num(num1, num2){
//     console.log(num1+num2);
//     return num1+num2
// }
// const result = add2num(3,5)
// console.log("Result = ",result);

// add2num(5,6)

// function logInUserMessage(username){
function logInUserMessage(username = "sam"){ // this sets a default value
    // if(username === undefined){
    if(!username){ // same meaning as above
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(logInUserMessage("beyondbanaras"))
// console.log(logInUserMessage())

function calculateCartPrice(...num1){ // drop operator
    return num1
}
// console.log(calculateCartPrice(100,300,300,400));

const user = {
    username : "beyondbanars",
    price : 599
}
function handleObject(anyObject){
    console.log(`${anyObject.username} just logged in And price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({
//     username : "harshvns",
//     price : 399
// })

const myArray = [10,30,50,60,79]
function get2ndArrayValue(getArray){
    return getArray[1]
}
// console.log(get2ndArrayValue(myArray));
console.log(get2ndArrayValue([98,85,67,35]));

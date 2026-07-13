// Primitive 

// 7 Types: String, Number, Boolean , null, undefined, Symbol, BigInt

const num = 5
const num1 = 5.34
const isSafe = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const newId = Symbol('123')
// console.log(id === newId);

const bigNumber = 33452367673643n

// Reference (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["shan chi", "deadpool", "iron man"]
let myObj = {
    name: "harsh",
    age: 22,
}

const myFunc = function(){
    console.log("Hellow world");
    
}

console.log(typeof bigNumber);

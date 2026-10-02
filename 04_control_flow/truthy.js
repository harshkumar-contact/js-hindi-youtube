// const userEmail = "harsh@gmail.com"
// const userEmail = "" // empty string is treated as FALSE
const userEmail = [] // but Empty array is treated as TRUE


if(userEmail){
    console.log("Recieved USER EMAIL");
}else{
    console.log("Don't have USER EMAIL");
}

// falsy values
// false, 0, -0, "", BigInt 0n, null, undefined, NaN 

// truthy values
// "0", 'false', " ", [], {}, function(){} 
// anything inside string make it truthy unless its empty. Even a space makes is truthy

// console.log(false == 0);
// console.log(false == "");
// console.log(0 == "");
// all 3 are true

// Nullish coalcesing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // checks, if val1 is null, then it assigns 10
val1 = undefined ?? 12

console.log(val1);

// ternary operator
// condition ?? true : false
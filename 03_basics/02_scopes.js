var c = 200
// all the variable defined outsite are accessible inside if or loop. and its called GLOBAL SCOPE
if(true){
    let a = 10
    const b = 20
    var c = 30 // this gets accessed outsite the scope which is not good.
    // That's why we dont use var datatype.
    // all the variables defines inside if or loop or function should not be accessed outside and its called LOCAL SCOPE
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harshvns"
    
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "harsh"
    if(username == "harsh"){
        const website = " google"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

console.log("Before funtion: ",addOne(5));
function addOne(num){
    return num + 1
}
// console.log("Before expression: ",addTwo(5)); // This will not work because the function is stored in a EXPRESSION which is defines after this line.
// This is called HOISTING 
const addTwo = function(num){ // these are called EXPRESSIONS which are just funtions only
    return num + 2
}
console.log("After funtion: ",addOne(5));
console.log("After expression: ",addTwo(5));

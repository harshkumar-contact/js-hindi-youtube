// for of
// generally applied on arrays, strings, objects
const arr = [1,2,3,4,5]

for(const val of arr){
    console.log(val);
}

const greeting = "Hello programmers!"
for(const greet of greeting){
    // console.log(`Each char = ${greet}`);
    
}
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// console.log(map);

for(const [key,value] of map){
    console.log(key + ":- "+value);
    
}
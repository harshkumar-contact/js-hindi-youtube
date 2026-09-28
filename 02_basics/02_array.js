const marvel_heros = ["thor", "iron man", "spider man"]
const dc_heros = ["flash", "batman", "aquaman"]

// marvel_heros.push(dc_heros) // it modified the marvel_heros array and adds a element containing everything of dc_heros as a single element. 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const heros = marvel_heros.concat(dc_heros) // concat combines 2 array and return a new array
const heros = [...marvel_heros, ...dc_heros] // this i.e(...) is spread operator which is same as concat but can merge more than 2 arrays at a time. 
// remember trick: image you drop a glass cup from top and it gets spread into many pieces. that is what spread operator is all about
// console.log(heros);

const another_array = [1,2,4,[4,5,6], 3,[4,2,6,[9,89,87],3], 77]
console.log("before: ");
console.log(another_array);
const real_another_array = another_array.flat(Infinity) // infinity tells the depth till what it should go.
console.log("after: ");
console.log(real_another_array);

console.log(Array.isArray("harsh"));
console.log(Array.from("harsh"));
console.log(Array.from({name: "harsh"}));

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2));
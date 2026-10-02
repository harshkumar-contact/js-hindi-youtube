if(2 === "2"){
    console.log("executed");
}
// >, <, >=, <=, !=, ==, ===
//  if(5 > 41) console.log("working"), console.log("yeah! it works"); // this is implicit scope, without using curly braces also you can do it but it is highly unredable, so do not use it

// if(2>1){
//     var a = "hi, i am var"; // var has a global scope, that's why we don't use it, rather use let or const
//     console.log(`${a} inside if scope`);
// }
// console.log(`${a} outside if scope`);

 if(5>2 && 5<2){
    console.log("&& if is working");
 }
 if(5>2 || 5<2){
    console.log("|| if is working");
 }
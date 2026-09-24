let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getFullYear());

// let myCreateDate = new Date(2023, 0, 15)
// let myCreateDate = new Date(2023, 0, 15, 5, 3)
// console.log(myCreateDate.toDateString());
// let myCreateDate = new Date("01-26-1950")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // comes in mili seconds
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //now converted to seconds

let newDate = new Date()
console.log(newDate);

console.log(newDate.getDay()); // output comes in numbers from 1-7 indicating Monday to sunday
console.log(newDate.getDate()); 
console.log(newDate.getMonth()); // month comes in numbers from 0-11 from Jan to Dec
// console.log(newDate.getYear()); // it gives year-1900
console.log(newDate.getFullYear()); // better and mordern way

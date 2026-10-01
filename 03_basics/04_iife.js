// Immedieately invoked function expressions
// we need to use ; i.e semicolon after iife because it does not know when to stop which can cause error while priting multiple functions
(function chai(){ // named iife
    console.log(`DB Connected`);
})(); // first () is for defining a function without returning it and second () is for execution
// we did this to prevent this from global scope pollution, so to remove those pollution like variables or declaration, we use iife
( (name) => { // simple/unamed iife
    console.log(`DB Connected ${name}`);
} )("harsh")


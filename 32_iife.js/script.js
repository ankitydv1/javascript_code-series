// immediately Invoked Function Expressions(IIFE)
//global scope ki pollution ko remove krne k liye we use iife

(function chai(){
    console.log(`DB connected`);
})();

( (name) =>{
    console.log(`DB connected two ${name}`)
})("ankit");



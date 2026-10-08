//immediately invoked function expression
(function chai(){
    console.log(`DB connected`);
    //this is named iife 
}) ();

((name)=>{
    console.log(`hello DB connected ${name}`);
    //this is anonymous iife 
    //this is how we pass parameter to iife
    //ther are multiple problem when we are writing multiple iife  of semicolon is used to separate the iife
}) ('neeteesh')
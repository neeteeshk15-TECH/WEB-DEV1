const user={
    username:"neeteesh",
    password:"1234",
    welcome:function(){ 
        console.log(`welcome ${this.username} to the website`);
        console.log(this);
    }
}
// user.welcome()
// user.username="sam"
// user.welcome()
// console.log(this);
// //this keyword is used to refer to the current object in which the code is being executed. In the global context, 'this' refers to the global object (window in browsers, global in Node.js). In the context of an object method, 'this' refers to the object that owns the method.
// function chai(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai() // In this case, 'this' refers to the global object (window in browsers, global in Node.js) because the function is called in the global context.    
// const chai= () =>{
//     username="hitesh";  
//     console.log(this);
// }
// const add = (a,b) => {
//     return a+b ; 
// }
// // console.log(add(5,6));    
// const  add=(a,b)=>(a+b);
// console.log(add(5,6));
const  add=(a,b)=>({username:"neeteesh"});
//we have to wrap the object under paranthisis for return object from arow function

    console.log(add(5,6));
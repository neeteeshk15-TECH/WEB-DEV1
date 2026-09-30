//singleton-when we create object like litral then it is not creatin singleton

//this is singelton because we are creating object using new keyword and it will create a new object in memory and it will not share the same reference with other objects
//object litrals
//here we are declaring symbol nad we can assign value to the symbol
const mysymbol=Symbol("key1");

const jsuser={
    name:'neeteesh',
    "full name":'neeteesh kumar',

    age:22,
    city:'buxar',
    [mysymbol]:'mykey',
    email:"neeteesh@example.com",
    isLoggedIn:false,
    lastLogin: ['monday','tesday'],
};
console.log(jsuser.email);
console.log(jsuser['full name']);
//***********remember syntex */
console.log(typeof jsuser[mysymbol]);
jsuser.name="neeteesh kumar";
console.log(jsuser.name);
//we can freeeze the object using Object.freeze() method and it will not allow to change the properties of the object
//Object.freeze(jsuser);
jsuser.name="raj ratan";
console.log(jsuser.name);

jsuser.greeting= function (){
    console.log("hello jsuser");

}
jsuser.greetingtwo=function(){
    console.log(`hello js user ${this.name}`);
}
// console.log(jsuser.greeting);
 console.log(jsuser.greeting());
 console.log(jsuser.greetingtwo());

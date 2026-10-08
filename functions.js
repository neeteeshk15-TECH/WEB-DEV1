function addtwonum(num1,num2){
    console.log( num1+num2);
}
addtwonum(1,2);
addtwonum("nee","teesh");
// addtwonum(a,b);
function sum(a,b){
    let result=a+b;
    return result;
}
let result=sum(2,6);
//console.log(result);
function loginusermassage(username='sam'){
    if(!username){
        console.log("username not get");
        return;

    }
    return `${username} just logged in`
}
console.log(loginusermassage("neeteeesh"));
console.log(loginusermassage());
//by using spread operator we can pass multiple values in function and it will treat all the values as array
function callculateprice(...num1)
{
    return num1;
}
console.log(callculateprice(199,100,1666))
const user={
    username:"neeteesh",
    price:2000
}
function handleobj(obj){
    console.log(`username is ${obj.username} and price is ${obj.price}`)
}
handleobj(user);
const myarray=[1,2,3,4];
function secondvalue(array)
{
    return array[2];

}
console.log(secondvalue(myarray))
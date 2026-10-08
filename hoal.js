// // //for of
// // // const arr = [1, 2, 3, 4, 5];
// // // for (const num of arr) {
// // //   console.log(num);
// // // }
// // // const greetings="hello world";
// // // for (const char of greetings) {
// // //   console.log(`each character of string is ${char}  of ${greetings}`);
// // // }//maps
// // // const myMap = new Map();
// // // myMap.set('name', 'John');
// // // myMap.set('age', 30);
// // // myMap.set('city', 'New York');
// // // console.log(myMap);
// // // for(const [key,value] of myMap){
// // //     console.log(`key is ${key} and value is ${value}`);
// // // }
// // const myobj = {
// //     name: 'John',
// //     age: 30,
// //     city: 'New York'
// // };
// // for (const [key, value] of Object.entries(myobj)) {
// //     console.log(`key is ${key} and value is ${value}`);
// // }

// // for (const key in myobj) {
// //     console.log(`key is ${key} and value is ${myobj[key]}`);

// // }
// // const lang=['java', 'python', 'c++', 'javascript'];
// // for(const key in lang){
// //     console.log(`key is ${key} and value is ${lang[key]}`);
// // }
// // const myMap = new Map();
// // myMap.set('name', 'John');
// // myMap.set('age', 30);
// // myMap.set('city', 'New York');
// // for(const key in myMap.keys()){
// //     console.log(`key is ${key} and value is ${myMap.get(key)}`);
// // }
// //foreach loop
// const arr = [1, 2, 3, 4, 5];
// // arr.forEach( function (val){
// //     console.log(val);
// // })
// // arr.forEach((val)=>{
// //     console.log(val);
// // })
// // function print(iteam){
// //     console.log(iteam);
// // }
// // arr.forEach(print);
// arr.forEach((val,index,arr)=>{}{
//     console.log(val,index,arr);
// })
const user = {
    name: "Neeteesh",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
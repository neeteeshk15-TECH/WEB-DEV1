const myarr=[0,1,2,'true','neeteesh'];
//here aray are resizebale
//here we can store any type of data in array
// zero base indexing here
/*array copy operation making shallow  copy
shallow copy:shallow copy of an object is a coppy whose properties share the same references (make change in array change in original)
deep copy:deep copy of an object is a copy whose properies do not share the same references (make change in array does not change in original)*/
console.log(myarr[0]);
const myarr1 = new Array(1,2,3,4,5);
console.log(myarr1[4]);
//array methods
 myarr1.push('neteesh');
 console.log(myarr1);
 myarr1.push(7);
 console.log(myarr1);
 // push method is used to add an element at the end of the array
//pop method is used to remove an element at the end of the array
myarr1.pop();
console.log(myarr1);


myarr1.unshift('neeteesh');
console.log(myarr1);
//this method is used to add an element at the start of the array this is wrost method becouse if we are adding value in array at the start then we are shifting the each element . assume if array was 10000 length then it may be time consuming
myarr1.shift('neeteesh');
console.log(myarr1);
//this method is used to remove an given element from the start of the array this is wrost method becouse if we are removing value in array at the start then we are shifting the each element . assume if array was 10000 length then it may be time consuming

console.log(myarr1.includes(5));
console.log(myarr1.includes(9));
//we are asking the array that does it include 5 or 9 if yes then return true else false

console.log(myarr1.indexOf(5));
//this method is used to find the index of the given element if it is present in the array if not then it will return -1

const newarr1=myarr1.join();
console.log(newarr1);
//this method is used to join the array elements and return a string
console.log(myarr1);
console.log(typeof newarr1);



//slice and splice method
console.log('A',newarr1);
const newarr2=myarr.slice(1,4);
console.log(newarr2);
console.log(newarr1);
console.log(newarr2);
//slice method is used to copy the array from given start index to end index and return a new array
console.log('A',newarr1);
console.log("myarr=" + myarr);
const newarr3=myarr.splice(1,4);
console.log(newarr3);
console.log(myarr);
//part2 
const marvel=['ironman','spiderman','thor',];
const dc=['batman','superman'];
const hero=marvel.push(dc);
console.log(marvel);
//basically push method is used to add an element at the end of the array but here we are adding an array in another array so it will add the whole array as a single element at the end of the array
const hero1=marvel.concat(dc);
console.log(marvel);
console.log(marvel);
//concat method is used to add an array in another array but here it will add the elements of the array in another array not as a single element

const marvel1=['ironman','spiderman','thor',];
const dc1=['batman','superman'];
const allhero=[...marvel1,...dc1];
console.log(allhero);
//this is called spread operator it is used to add an array in another array but here it will add the elements of the array in another array not as a single element
const newarray=[1,2,3,4,[5,2,3],[6,[7,3,2,[3,8]]]];
 const newarray1=newarray.flat(4);
 console.log(newarray1);
//flat method is used to flatten the array means it will remove the nested array and return a new array with all the elements in a single array
//WE CAN SOLVE BY USING DEPTH LIKE 1, 2....INFINITY
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
//Array.isArray method is used to check whether the given value is an array or not if it is an array then it will return true else false
//Array.from method is used to convert a string into an array
console.log(Array.from({name:"hitesh"}));  //intresting thing is it will return an empty array because
let score1=1;
let score2=2;
let score3=3;   
console.log(Array.of(score1,score2,score3));
//Array.of method is used to create an array from the given values

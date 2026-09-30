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
//this method is used to add an element at the start of the array this is wrost method becouse if we are addind value in array at the start then we are shifting the each element . assume if array was 10000 length then it may be time consuming
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

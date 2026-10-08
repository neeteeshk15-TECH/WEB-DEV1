const mynums=[1,2,3,4,5,6,7,8,9];
// const newnums=mynums.filter((num)=>num>4);
// console.log(newnums);
//it have same as foreach loop but it will return values
const newnums=mynums.filter((num)=>{
    return num%2==0});
console.log(newnums);
//when we use curly braces then we started here scope then we have to write return keyword;

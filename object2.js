//bothe is way to define object but first one is singleton and second one is not singleton
const tinderUser=new Object();
// const tinderUser1=new {}
console.log(tinderUser);
tinderUser.id="123abc";
tinderUser.name="neeteesh";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);
const regularUser={
    email:"neeteesh@example.com",
    fullname:{
        first_name:"neeteesh",
        last_name:"kumar"
    }
   
}
console.log(regularUser.fullname.first_name);
const obj1={1: "a", 2:"b", 3:"c"};
const obj2={4: "a", 5:"b", 6:"c"};

//const obj3={obj1,obj2};
//console.log(obj3);
//const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2);

//console.log(obj3);
//console.log(obj1);
//in first line obj2->obj1 ->obj3 becouse assign method treat first object passing into  it as target and it will change the value of obj1 and obj2 will be source object and it will not change the value of obj2 but in second method it will not change the value of obj1 and obj2 because we are creating new object and it will not share the reference with other objects
/*but in second method
obj2->
         ->{} (which is blank object)->obj3 
obj1->
here obj 1 will not change*/
//another method is by using spread operator
const obj3={...obj1,...obj2};
console.log(obj3);

const user=[
    {
        id:"123abc",
        name:"neeteesh",
    }
]
console.log(user[0].id);
//ham objects ki keys aur values bhi individually nikal sakte hain
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//yahaan hum object ko array me convert kar rahe hain
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")  );

const course={
    coursename:"js in hindi",
    price:999,
    instructor:"hitesh"
}
const {instructor: imn}=course;

console.log(imn);
/*Destructuring is a JavaScript feature used to extract values from objects or arrays and store them directly in variables.

Object Destructuring:

const course = {
    coursename: "JS in Hindi",
    price: 999,
    instructor: "Hitesh"
};

const { instructor } = course;

console.log(instructor); // Hitesh

Renaming:

const { instructor: imn } = course;

console.log(imn); // Hitesh

Array Destructuring:

const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
// */

// {
//     "name":"neeteesh",
//     "price":"000",
//     "coursename":"javascript"
// }


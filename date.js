let mydate=new Date();
console.log(mydate);
console.log(mydate.getFullYear());
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
let mynewdate=new Date(2021,0,27);
console.log(mynewdate.toDateString());
let date1=new Date("2021-01-27");
console.log(date1.toDateString());
let timestampdate=Date.now();
console.log(timestampdate);
console.log(date1.getTime());
let date3=Date.now();
console.log(date3.toString());
let date4=new Date();
console.log(date4.getDate());
console.log(date4.getFullYear());
console.log(date4.getMonth());
console.log(date4.toString());
console.log(date4.toLocaleString());
console.log(date4.toISOString());
console.log(date4.getMonth()+1);
date4.toLocaleDateString( 'default',{
    weekday:'short',
    year:'2-digit',
    month:'short',
    day:'numeric'

})
console.log(date4);
let date4m=date4.toDateString( 'default',{
    weekday:'short',
    year:'2-digit',
    month:'short',
    day:'numeric'

})
console.log(date4m);
console.log(date4.toLocaleDateString( 'default',{
    weekday:'narrow',
    year:'2-digit',
    month:'long',
    day:'2-digit'

}))
console.log(date4.toLocaleDateString( 'default',{
    weekday:'long',
    year:'2-digit',
    month:'numeric',
    day:'2-digit'

}))

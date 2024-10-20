/*********************** Number **************************/
let score = 30;

// 2nd way to declare number
let nscore = new Number(2000);
console.log(nscore);

//it is 1,2 ,3,4 ch

/******************* Prototype ****************************/

// to access tostring
console.log(nscore.toString())
console.log(nscore.toString().length)

// to access tofixed
console.log(nscore.toFixed(2))

// to access  precession value
let pscore = 23.23232;
console.log(pscore.toPrecision(5))

// to access to localstring
let loscore = 10000000
console.log(loscore.toLocaleString("en-IN"))

/********************************** Maths **********************/

console.log(Math); // maths is a object and have properties
console.log(Math.abs(-589))
console.log(Math.round(1.9313))
console.log(Math.ceil(4.37))
console.log(Math.floor(4.99))
console.log(Math.min(1,2,3,5,6,7))
console.log(Math.max(1,2,3,5,6,7))

console.log(Math.random()) //random number is between 0 and 1

//dice game
console.log((Math.random()*10)+1) //some time value is 0 so we add +1
console.log(Math.floor(Math.random()*10)+1)

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max - min +1))+ min)

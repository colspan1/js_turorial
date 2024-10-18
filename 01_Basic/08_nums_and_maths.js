/*********************** Number **************************/
let score = 30;

// 2nd way to declare number
let nscore = new Number(2000);
console.log(nscore);

/******************* Prototype ****************************/

// to access tostring
console.log(nscore.toString())
console.log(nscore.toString().length)

// to access tofixed
console.log(nscore.toFixed(2))

// to access  precessionv value
let pscore = 23.23232;
console.log(pscore.toPrecision(5))

// to access to localstring
let loscore = 10000000
console.log(loscore.toLocaleString("en-IN"))
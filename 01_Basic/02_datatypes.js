// old javascript and new javascript are both different because new things were added but old js is not fully different
"use strict"; // treat all js code as newer version

/* alert("hello");  alert(3+3); this statement only works in browser not in node js runtime enviroment */

// we usually don't use ; 
// main thing is programming is readability
// example these code have low readavbility
/* consol.log(3
+3);
console.log (3+3); console.log("hello world");
*/

// mozilla MDN is a good documentation for js and ecma org created standered for js (website ECMA Script)

/******************* Dataypes ******************/  
/* these are premitive datatype */
// number --> range 2 to power 53
// bigint --> bigger than number
// string --> "" or ''
// boolean --> true or false
// null --> stand alone value in javascript or empty set 
// undefined --> value not assigned only memory is reserved
// symbol --> used in react and used in uniqueness

 
const username = "priyanshu"; //string               
let userid = 2334; // number
let userWealthy = false //boolean                      //typeof to check the type of the datatype
let userimg = null  //object
let userno = undefined //undefined


console.log(typeof "priyanshu");
console.log(typeof userid);
console.log(typeof userWealthy);
console. log(typeof (userimg));
console. log(typeof userno);
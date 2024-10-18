/*************************************** Strings *************************************/
// strings can be written in '' single quote or "" double quote 

// we can add string like this
let name = "priyanshu"
let age = 21

console.log(name + age +" hello"); // this is  a older synatx i donot recommend you to write in this syntax

// in mordern days we use back thick `` . when we use backthicks then there comes string interpolation
// we create place holder ${ } and inject variables
console.log(`my name is ${name} and my age is ${age}.`) // this is called string interpolation

// 2nd way to declear  string
let nameone = new String("priyanshu");

/************************************* Protoype ******************************************/
// The prototype is a property available with all JavaScript .
// to get to know string we need to know string prototype (method).

let Game =  new String("hello");

// to access key value pair
console.log(Game[1]);

// to access proto
console.log(Game.__proto__);

// to acess length
console.log(Game.length)

// to access uppercase
console.log(Game.toUpperCase())

// to access charaterat
console.log(Game.charAt(3))

// to access indexof
console.log(Game.indexOf("o"))

// to access substring
let subject = new String("maths-d");
console.log(subject.substring(0,5));

// to access slice (if we use -ve value in slice it will start form reverse)
console.log(subject.slice(-6,-5))

// to access trim
let myclass = new String("       first class     ")
console.log(myclass.trim())

//to access replace
let url = new String('https/string.colom')
console.log(url.replace("colom","com"));

//to access include
console.log(myclass.includes("first"));

// to access split
let myname = new String("hello priyanshu negi how are you")
console.log(myname.split(" "))

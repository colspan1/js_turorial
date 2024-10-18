let score = 33;
console.log(typeof score)
console.log (score);

let newscore = "33" ;
console.log(typeof newscore);
console.log(newscore);

/******************** Convert *****************/
let cscore = Number(newscore);   //newscore is converted into number 
console.log(typeof cscore)
console.log(cscore)

/* 
convert into number
1. number 33 --> 33
2. string hello --> NaN(not a number)
3. boolean true --> 1  flase --> 0
4. null  null --> 0 
5. undefined undefined --> NaN
*/

let sscore = String(score);
console.log(sscore)

/*
convert into string
1. number 33 --> 33
2. string hello --> hello
3. booolean true --> true  flase --> flase
4. null null --> null
5. undefined undefined -->  undefined
 */

let bscore = Boolean(score)
console.log(bscore)

/*
convert into boolean
1. number every number is true except 0 is flase
2. string hello --> true   '' or "" --> false
3. boolean true --> true   flase -->false
4. null null -->false
5. undefined undefined --> false */


/************************************ Operations ****************************************/

let number = 2342;
let negativeNumber = -number;
console.log(typeof negativeNumber)
console.log(negativeNumber)


/*
console.log(2+2)  //addition
console.log(2-2)  //subtration
console.log(2*2)  //multiplication
console.log(2**3) //power
console.log(2/2)  //division
console.log(2%3)  //reminder
console.log(++2)  //prefix
console.log(2++)  //postfix
*/


/* we can only add two string */
let str1 = "hello"
let str2 = " world"
console.log(str1+str2)  // hello world


console.log("1" +2 ) // 12 because it will be treated as string
console.log("1"+2+1) // 121 because it will be treated as string
console.log(2+1+"1") //31 beacause first it will treated as number then string


console.log(3+2*4%5); // this is not a  good code because readablitiy is low
console.log((3+2)*4%5); //this is good

console.log(+true);  //1
// console.log(true+) // error   // this also does'nt have high readability
console.log(+"") // 0
// + for conversion


let num1 , num2, num3;
num1=num3= num2= 2 +2 // this also not good 

// in coding main thing is readability

let gamecounter = 200
let gamecounterin = ++gamecounter;
console.log(++gamecounter);

/*
prefix  this will increse the value first before any operations (+1)
postfix  this will increase the value last after every operations is done (+1)
*/
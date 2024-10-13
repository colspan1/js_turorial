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
2. string hello --> true
3. boolean true --> true   flase -->false
4. null null -->false
5. undefined undefined --> false */
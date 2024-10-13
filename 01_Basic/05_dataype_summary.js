// datatype are of two type primitive and non primitive
/*
**************** Primitive Datatype *********************
// these are call by value means when we want data we only get copy not the original data
                                                         type of variable
1. number (range 2 power 53)                                number
2. string                                                   string
3. boolean                                                  boolean
4. null                                                     object
5. undefined                                                undefined
6. symbol  (use to make any value unique)                   symbol
7. bigint (bigger than number)                              bigint
*/

let socre = 324;
let sscore = "hello"
let bsscore = true
let nscore = null
let unscore ;
let sycore = Symbol("123");
let symcore = Symbol("123");    //both are different because it a symbol
let nigscore = 23432423n

/*
***************************** Non-Primitive Datatype or Reference *************************
// these are reference mean when we want data we get original value not copy
                                                type of datatype
1. array                                          object
2. object                                         object
3. function                                       function object
 */

let myarray = ["hell0", 3223, "world", null];
let myobj = {
    name:"priyanshu", 
    class: 2,
    rollno: 23,
    school: "jmps",
}
let myfunction = function(){
    console.log(hello);
}
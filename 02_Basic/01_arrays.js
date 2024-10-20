// declerating array (memory value or elements)
// in array we can store multiple item in single variable
// can contain mix datatype
// js array are resizable
const myarray = [1, 2, "hello", true ]


// array element cannot be accessed through arbitary string
// it can be access like this
// js array are zero indexing
// indexing start from 0 
console.log(myarray[1]);


// js array copy operation create shallow copy (means copy have same reference point hash)
// in 2nd decleration way indexing start from 1
let newarray = ["hello", "my", "name"]

/************************************ Methods of array ************************************************/

newarray.push(3)  // add value in array from end
  
newarray.pop()  // remove last value in array

newarray.unshift(4)  // add value in array from start

newarray.shift()  //remove value addes through unshift

console.log(newarray.includes(9))  //ask array if there is 9 in its element

console.log(newarray.indexOf(2)) // ask array the index of 2  (my)


//convert array into string
const sarray = newarray.join()
console.log(sarray)


// slice and splice
// Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
//Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
const slicearray = [32,42,23,53,99]
console.log(slicearray.slice(1,3))
console.log(slicearray.splice(1,3))


// either we push or concat two array we cannot get a good value we will always get array under array
// concat can work sometime but push will not work in this situation
// in this area we use spread operator
const spreadarray = [...myarray, ...sarray]


// lets talk about flat operator
let hdsjkf = [1,2,3,[33,333,[333,33]]]

let flatnow = hdsjkf.flat(Infinity) ;
console.log(flatnow)

//data scraping 
// when we get data from web get in different format but we need in array format because loop can be done in array
// therefore we convert array like this

let hero = "marvel"
 
console.log(Array.isArray(hero))   // ask if variable is array
console.log(Array.from(hero))     // convert into  part-part array
console.log(Array.of(hero))       // convert into whole array

console.log(Array.from({name:"hello"}))
// when we convert object into array we have to give convert key or value if not given it will give empty scoop

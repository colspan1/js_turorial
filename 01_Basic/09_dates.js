/**************************************** Dates *************************************/
// js data object represent single moment in a time

let mydate = new Date()
console.log(mydate)

/************************** Prototype *****************************/

console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())

// month start from 0 in javascript

console.log(typeof mydate)   // datatype of date is object

// method to decleare date
let createdate = new Date(2004, 8, 11)
// let createdate = new date(2004, 8,11, 5,50)
// let createdate = new date("2024-09-11")  // to local string
//let createdate = new date ("09-11-2004")  // to local string
console.log(createdate.toDateString())


// time stamp
let mytimestamp = Date.now()

console.log(mytimestamp)

// to get month time and date
console.log(createdate.getTime())
console.log(createdate.getMonth())

// to local string more properties
console.log(createdate.toLocaleString('default', {             // tell only things you need
    weekday:"long",
}))
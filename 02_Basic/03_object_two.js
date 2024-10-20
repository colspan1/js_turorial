const olaUser = new Object ()  //singleton object
console.log(olaUser)

const uberUser = {}   //non singleton object
console.log(uberUser)

uberUser.email = "priyanshu negi"
uberUser.number = 23424242
uberUser.isLogin = false

// both are empty object but the main difference is  one is singleton object and the 2nd one is non singleton object


//object inside object nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  // access key value


//combine object
const obj1 ={
    1: "a",
    2: "b",
 }
const obj2 = {
    4:"ewrwr",
    5: "asdf",
 }

const obj3 = obj1 

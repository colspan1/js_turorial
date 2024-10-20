// there is two method to declare object  (litreal and constructor)
// when we make it from constructor then singleton is made


//contructor
//Object.create


// {} it is a empy object
// object have keys and value

// we can add primitve datatype in object as well as array

const mysymbole = Symbol("keyvalue") ;
// Object literal
let myobject = {
    name: "priyanshu",               //name is string datatype
    "full name": "priyanshu negi",         // when we writing more than 1 word then we write key like this
    location: "delhi",
    gmail: "priyanshu@gmail.com",
    islogin:false,
    lastLogIn: ["Monday", "Tuesaday"],
    
    [mysymbole] : "keyvalue"        // adding symbol in object key
}
//access key in object
console.log(myobject.name)
console.log(myobject["name"])
console.log(myobject["full name"])  // this is used more when key have more than 1 word

console.log(myobject[mysymbole])   // access symbole like this


// change key value like this
myobject.name = "negi"

// to lock the key vaule from changing
//Object.freeze(myobject.name)


// we can treat function like variable

myobject.greetings = function(){
    console.log("hello worold")
}
console.log(myobject.greetings())
 
myobject.greetingstwo = function(){                          //now we will access key 
    console.log(`hello world ${this.name}`)                 // we use this to access key 
}
console.log(myobject.greetingstwo())
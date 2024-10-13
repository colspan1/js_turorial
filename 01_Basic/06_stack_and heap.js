// in early days it was programmer work to reserve and free  the memory
// but in newer programming language we dont have much control over memory . there is also automatic garbage collection 

// there are two type of memory stack and heap
/*************** Stack (primitive)*********************
 in this memory we only get copy 
 */
// in this Id value is not changed when we make anotherId value negi because we get a copy 
let Id = "priyanshu";
let anotherId = Id;
anotherId = "negi"
console.log(Id);
console.log(anotherId);


/*************** Heap (npn primitive)*********************
in this memory we get refrence or original 
 */
// but in this name.email is changes when we make anothername.email value  apni because we get original value
let name = {
    email:"hello",
    class:2,
}
let anothername = name;

anothername.email =="apni"
console.log(name.email);


/**************************************** Comparison ***************************************/
// the answer of comparison will be in boolean value

// the comparison is in between same type of datatype
console.log(1 == 2)
console.log(1 > 2)
console.log(1 < 2)
console.log(1 >= 2)
console.log(1 != 2)

//comparison  between different type of datatype
console.log('2'>1) // javascript will automatically convert string into number for comparison

console.log(null == 0)  // false
console.log(null >= 0)  // true
console.log(null < 0)  //false
console.log(undefined == 0) // false
console.log(undefined >= 0 ) //false
console.log(undefined < 0) //false
//the equality check (==) and comparison check work differently in comparison check it will convert null into 0

// comaprison check and equality check both are different

// === strict check
console.log(null === 0) //false

// in typescript we have give datatype before enterining the memory value
// my goal for learning javascript is to build a 3d Portfilio website with animation, contact form, my service booking payment system.
// if we want to store something we need a space in memory
// mainly programming is all about storing , taking and optimize storing of data

//now assign variable in memory (memory reserve)and give memory name and memory value

const accountId = 3234 ;    // they are the type of variable whose name and value cannot be change
let accountName = "priyanshu" ;
var accountclass = "general" ;
accountBranch = "jaipur";  // javascipt is this much safe and secure language that we can reserved memory without giving a variable type but this method we should avoid

let accountState ;//we can reserve memory without giving it a value (undefined)

// accountId = 112  we cannot make changes in this because it is a const

accountName = "negi"
accountclass = "obc"
accountBranch = "delhi"

console.table([accountName, accountclass, accountBranch]);

console.log(accountState);

//console.table([]); use for printing many things together

// let, const and var are keyword whose syntax is written in compiler when we put these variable in compiler then compiler have already syntax of these keyword now it will do the its work
// we have one way to declare constant const and variable have let, var
/* preferred not use var because it creates issues with block scope and functional scope {} */
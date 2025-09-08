// string is used to store and manipulate text 

// strings are immutable cannot be changed once created have to create a new string for storing the changed value 
console.log("hey i am string tutorial");
let a ="Tanu";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
// console.log(a[4]); undefined

console.log(a.length)
let real_name="Tanu"
let friend="Suman"
console.log("Her name is "+real_name+" and her friends name is "+friend);

//  template literal
console.log(`Her name is ${real_name} and her friends name is ${friend} `);
console.log(`Tanu" backtick allowing the addition of double quotes in the string `);
console.log("Tanu\" using escape sequence character \" to add double quotes ");

let b="Rani"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))
console.log(b.slice(1)) // gives all charaters from index 1 to end 
console.log(b.replace("Ra","11"))

let c="tanutanu";
console.log(c.replace("tanu","tater")) // if 2 occurance like tanutanu it only replaces the 1st occurance

// sting concatenation 
console.log(b.concat(a,"Tater","Alia")) //we can also use + operator

// to remove whiteSpaces  create new string let d=a.trim()

let d="   ABCD";
// let e=d.trim()
console.log(d.trim())
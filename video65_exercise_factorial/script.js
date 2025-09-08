// calculate factorial using reduce and for loops 
let a=6;
function factorial(number){
  let arr=Array.from(Array(number+1).keys());
  console.log(arr.slice(1,));
  let c=arr.slice(1,).reduce((a,b)=>{
    return a*b;
  })
  return c;
  console.log(c)
}
factorial(6);
console.log("enter a number")
var b =prompt("enter a number ")
var product=1;
for (let index = 1; index <= b; index++) {
  product=product*index;
}
console.log(product)

// using reduce 
console.log("Hello")

// use let evertime instead of var
var a=5;
let b=6;
let c="Tanu"
console.log(a+b+c)
console.log(typeof(a),typeof(b),typeof(c))

const a1=6;  // cannoot change value a1=a1+1 not possible 

// datatypes
let x="Harry"
let y=22;
let z=3.55;
const p =true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r)
// type of null is object 
console.log(typeof(x),typeof(y),typeof(z),typeof(p),typeof(q),typeof(r))


// object
let o={
  name: "Tanu",
  "job code":5600,
  "is_beautiful":true
}
console.log(o)
o.salary="100crores"
console.log(o)
o.salary="500crores"
console.log(o)
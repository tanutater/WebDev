//  arrays ->collection of multiple datatypes
//  arrays are mutable
let arr =[1,2,4,5,7]
arr[0]=5666
console.log(arr,typeof(arr));
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);


// array method 
console.log(arr.toString())
// join-> commas change to end 
console.log(arr.join(" and "))
//  pop ->
let a=[1,2,3,4,5,6]
let x=a.pop()
console.log(x);
console.log(a);

// push 
// a.push(100)
a.push("Tanu")
console.log(a);

// shift first element ko nikal leta hai and return the first element 
let b=a.shift()
console.log(b);
console.log(a);

// unshift->begining me add
let c=a.unshift("jack")
console.log(c)
console.log(a)

delete a[1]
console.log(a)


// concat do not change the existing array
let a1=[1,2,3]
let a2=[2,3,4,5]
let a3=[6,7,8]
let res =a1.concat(a2,a3)
console.log(res)

let nums=[1,2,3,4,5];
nums.splice(1,2)
console.log(nums)
nums.splice(1,3,222,333)
console.log(nums)


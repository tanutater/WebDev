//  map filter reduce 

let arr=[1,13,5,7,11];
let newarr=[]

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newarr.push(element**2)
}
console.log(newarr)


// map
let newArrMap=arr.map((element)=>{
  return element**2;
})
console.log(newArrMap)

// filter 
const greaterThanSeven=(e)=>{
  if(e>7){
    return true;
  }
  return false;
};
let res=arr.filter(greaterThanSeven)
console.log(res)

// reduce

let a2=[1,2,3,4,5,6]
const red=(a,b)=>{
  return a*b;
}
console.log(a2.reduce(red))

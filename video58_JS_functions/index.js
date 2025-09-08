console.log("I am tutorial for javascript functions");
function nice(name){
  console.log("Hey "+name +" you are nice");
  console.log("Hey "+name +" you are good");
  console.log("Hey "+name +" your tshirt is nice");
  console.log("Hey "+name +" your course is good too!");
}
nice("Tanu")


function sum(a,b,c=2) {
  console.log(a,b,c); 
  return a+b+c;
}
result=sum(3);
result1=sum(3,5);
result2=sum(3,5);
console.log("the sum of these numbers is ",result);
console.log("the sum of these numbers is ",result1);
console.log("the sum of these numbers is ",result2);

// arrow function
const func1= (x)=>{
  console.log("I am a arrow function",x)
}
func1(34);
func1(66);
func1(84);
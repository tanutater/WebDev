function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function expo(a, b) {
  return a ** b;
}

let a = parseInt(prompt("Enter first number: "));
let b = parseInt(prompt("Enter second number: "));
let operation = prompt("Enter operation symbol (+, -, *, /): ");

let num = Math.random();
let result;

if (num < 0.1) {
  if (operation == "+") {
    result = sub(a, b);
  } else if (operation == "-") {
    result = div(a, b);
  } else if (operation == "*") {
    result = sum(a, b);
  } else if (operation == "/") {
    result = expo(a, b);
  }
} else {
  if (operation == "+") {
    result = sum(a, b);
  } else if (operation == "-") {
    result = sub(a, b);
  } else if (operation == "*") {
    result = mul(a, b);
  } else if (operation == "/") {
    result = div(a, b);
  }
}

alert("The result is " + result);
console.log("Result:", result);

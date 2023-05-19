// Global vs Local Scope
let outsideVariable = "I'm outside";

function myfunction() {
  let insideVariable = "I'm inside";
  console.log(insideVariable);
  console.log(outsideVariable);
}

myFunction();
console.log(outsideVariable);
console.log(insideVariable);

// Odd Even Function

function isOddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}

console.log(isOddOrEven(5));
console.log(isOddOrEven(10));

// Calculate Total Function
function CalculateTotalFunction(price, taxRate) {
  const taxAmount = price * taxRate;
  const totalCost = price + taxAmount;
  return totalCost.toFixed(2);
}

console.log(calculateTotal(20, 0.1));

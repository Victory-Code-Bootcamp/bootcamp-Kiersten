// Challenge One
// Create a prompt asking for their name
// Create a Switch statement with 3 different cases, one of those cases should include the expected value
// Use an alert() as the result for each case

// let name = prompt("What is your name?");
// switch (name) {
//   case "Alice":
//     alert("Welcome Alice! How can I assist you?");
//     break;
//   case "Bob":
//     alert("Hi Bob! Nice to meet you");
//     break;
//   case "Charles":
//     alert("Hi Charles! Great to see you again!");
//     break;
//   default:
//     alert("Helloo ${name}! How may I help you");
//     break;
// }

// Challenge 2

// let age = prompt("What is your age?");
// function isUnderage(age) {
//   return age <= 18 ? true : false;
// }
// console.log(`Are you underage? ${isUnderage(age)}`);

// function getCode(chars) {
//   if (chars > 15) {
//     return "AA";
//   } else if (chars > 13 && chars <= 15) {
//     return "AB";
//   } else if (chars > 10 && chars <= 13) {
//     return "BB";
//   } else if (chars > 7 && chars <= 10) {
//     return "BC";
//   } else if (chars > 5 && chars <= 7) {
//     return "CC";
//   } else {
//     return "DD";
//   }
// }
// console.log(getCode(9));

// Challenge 3

// function getCode(chars) {
//   var code;

//   if (chars.length > 15){
//     code = "AA";
//   } else if (chars.length >13 &&chars.length <= 15) {
//     code = "AB";
//   } else if (chars.length >10 &&chars.length <= 13) {
//     code = "BB";
//   }else if (chars.length > 7 &&chars.length <= 10) {
//     code = "BC";
//   } else {
//     code = "DD";
//   }

//   return code;
// }

// Challenge 4

// // Addition
// function add(num1, num2) {
//   return num1 + num2;
// }

// // Subtract
// function Subtraction(num1, num2) {
//   return num1 - num2;
// }

// // Multiplication
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// // Division
// function Divide(num1, num2) {
//   return num1 / num2;
// }

// Challenge 5
function calculateSum(a, b) {
  // Handle undefined and null cases
  if (a === undefined || a === null) {
    a = 0;
  }
  if (b === undefined || b === null) {
    b = 0;
  }

  if (typeof a !== "number" || isNaN(a) || typeof b !== "number" || isNaN(b)) {
    return "Please provide valid numbers";
  }

  a = Math.round(a);
  b = Math.round(b);

  let sum = a + b;

  if (sum > 100) {
    return "Sum is too large";
  }

  return sum;
}

// Or

// console.log(calculateSum(5, 10)); //output: 15
// console.log(calculateSum(7,8, 2.4)); //output: 10;
// console.log(calculateSum(und, 8)); //output:8
// console.log(calculateSum(15, null)); //output: 15
// console.log('hello', 3)); //output: "Please provide valid numbers"
// console.log(calculateSum(60, 50)); //output: "Sum is too large"

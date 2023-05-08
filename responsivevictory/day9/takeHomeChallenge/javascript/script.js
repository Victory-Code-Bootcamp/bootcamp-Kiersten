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

let age = prompt("What is your age?");
function isUnderage(age) {
  return age <= 18 ? true : false;
}
console.log(`Are you underage? ${isUnderage(age)}`);

function getCode(chars) {
  if (chars > 15) {
    return "AA";
  } else if (chars > 13 && chars <= 15) {
    return "AB";
  } else if (chars > 10 && chars <= 13) {
    return "BB";
  } else if (chars > 7 && chars <= 10) {
    return "BC";
  } else if (chars > 5 && chars <= 7) {
    return "CC";
  } else {
    return "DD";
  }
}
console.log(getCode(9));

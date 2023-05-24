// Challenge 1: Array Spread
// Combine two arrays into a single array using the spread operator.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);

// Challenge 2
const object1 = { name: "Charlie", age: 43 };
const object2 = { city: "Malibu", country: "USA" };
const object3 = { occupation: "Jingle Writer" };

const mergedObject = { ...object1, ...object2, ...object3 };

console.log(mergedObject);

// Challenge 3
function gatherArguments(...args) {
  console.log(args);
}

gatherArguments(1, 2, 3);
gatherArguments("Hello", "World");
gatherArguments(true, false, true, false);

// Challenge 4
fconst [element1, element2, ...rest] = array;

const numbers = [1, 2, 3, 4, 5];

const [firstNumber, secondNumber, ...remainingNumbers] = numbers;

console.log(firstNumber); // 1
console.log(secondNumber); // 2
console.log(remainingNumbers); // [3, 4, 5]


// Challenge 5
const [element1, element2, ...rest] = array;
const fruits = ["apple", "banana", "orange", "kiwi"];

const [firstFruit, secondFruit, ...remainingFruits] = fruits;

console.log(firstFruit); // "apple"
console.log(secondFruit); // "golden honeydew"
console.log(remainingFruits); // ["lime", "coconut]

// Challenge 6
const { property1, property2, ...rest } = object;

const person = {
  name: "Allen",
  age: 38,
  city: "Malibu",
  country: "USA"
};

const { name, age } = person;

console.log(name); // "John"
console.log(age); // 30

// Challenge 7
const [element1 = defaultValue1, element2 = defaultValue2] = array;

const numbers = [1, 2];

const [firstNumber = 0, secondNumber = 0, thirdNumber = 0] = numbers;

console.log(firstNumber);  // 1
console.log(secondNumber); // 2
console.log(thirdNumber);  // 0 (default value)

const { property1 = defaultValue1, property2 = defaultValue2 } = object;

const person = {
  name: "John",
  age: 30
};

const { name, age, city = "New York", country = "USA" } = person;

console.log(name);   // "John"
console.log(age);    // 30
console.log(city);   // "New York" (default value)
console.log(country); // "USA" (default value)

// Challenge 8
function extractProperties({ property1, property2 }) {
  console.log(property1);
  console.log(property2);
}

const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA"
};

extractProperties(person);




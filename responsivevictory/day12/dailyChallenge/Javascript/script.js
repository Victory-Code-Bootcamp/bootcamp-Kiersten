// // JavaScript
// const button = document.getElementById("pokemon-button");
// const container = document.getElementById("pokemon-container");

// function fetchPokemon() {
//   const id = Math.floor(Math.random() * 151) + 1; // generate a random number between 1 and 151
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const name = data.name;
//       const heading = document.createElement("h1");
//       heading.textContent = name;
//       container.appendChild(heading);
//     })
//     .catch((error) => console.error(error));
// }

// button.addEventListener("click", fetchPokemon);

// Challenge 2

// Get references to the button and output div
const button = document.getElementById("myButton");
const outputDiv = document.getElementById("output");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Change the text of the output div
  outputDiv.textContent = "Button was clicked!";
});

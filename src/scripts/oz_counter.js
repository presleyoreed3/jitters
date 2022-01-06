
let counter = document.querySelector("#current-oz-tracker");
let waveElement = document.querySelector("#wave-div");
let submitNewDrink = document.querySelector("#add-drink-button")
drawCounter();

// Function to draw the counter of your current mg count
function drawCounter() {
	let amount = 0;
	let countDisplay = document.createElement("h4");
	countDisplay.innerHTML = `Current Amount: ${amount.toFixed(2)} mg`;
	countDisplay.id = "display";
	counter.appendChild(countDisplay);
}
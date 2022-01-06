
let counter = document.querySelector("#current-oz-tracker");
let waveElement = document.querySelector("#wave-div");
let submitNewDrink = document.querySelector("#add-drink-button")
drawCounter();

function drawCounter() {
	let amount = 0;
	let countDisplay = document.createElement("h4");
	console.log(amount)
	countDisplay.innerHTML = `Current Amount: ${amount.toFixed(2)} mg`;
	countDisplay.id = "display";
	counter.appendChild(countDisplay);
}

let counter = document.querySelector("#current-oz-tracker");
let waveElement = document.querySelector("#wave-div");
let submitNewDrink = document.querySelector("#add-drink-button")
drawCounter();

function drawCounter() {
	console.log("Building the counter")
	let amount = 0;
	let countDisplay = document.createElement("h4");
	countDisplay.innerHTML = `Current Amount: ${amount}Mg`;
	countDisplay.id = "display";
	counter.appendChild(countDisplay);
}

function updateCounter() {

}
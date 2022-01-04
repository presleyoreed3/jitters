const Wave = require("./waves.js")
const data = require('../data/raw_data.json');

let form = document.getElementsByClassName("input-form")[0];
let startButton = document.getElementById("addDrinkModalBtn");
let wave = new Wave();
let knowToStart = startButton.addEventListener("click", (event) => {
	startForm();
})

// Checks to make sure a limit is set before adding a drink
function checkLimit(){
	let waveElement = document.querySelector("#wave-div");
	var finalMgCount = waveElement.dataset.currentMg;
	if (0 === parseInt(finalMgCount)){
		alert("You must set a daily limit before adding a drink!");
	}
}

function startForm(){

	// Makes the Type for the form
	let label = document.createElement("label")
	label.innerHTML = "Drink Type: "
	form.appendChild(label);
	
	let type = document.createElement("select");
	type.classList.add("type-options")
	
	
	// Adds a default value to the top of list
	var defaultValue = document.createElement("option");
	defaultValue.innerHTML = "Select Category";
	defaultValue.selected = true;
	defaultValue.disabled = true;
	type.appendChild(defaultValue);
	
	// Adds the category to the list
	Object.entries(data).forEach(arr => {
		let typeField = document.createElement("option");
		typeField.innerHTML = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1);
		type.appendChild(typeField);
	})
	
	form.appendChild(type)
	var lineBreak = document.createElement("br")
	form.appendChild(lineBreak);
	
	// Listener for the type of drink
	let typeListener = type.addEventListener("change", (event)=> {
		let typeValue = event.target.value;
		makeOptionsField(typeValue);
	})
}



// Function to draw the drink options once type is selected
function makeOptionsField(type){

	//Clears elements if one is already selected
	if (document.querySelector("#drink-options")){
		console.log("Im updating")
		updateOptionsField(type);
	} else {
	
		// Label for the next line of the form
		let drinkLabel = document.createElement("label")
		drinkLabel.id = "drink-options"
		drinkLabel.innerHTML = "Drink: "
		form.appendChild(drinkLabel);
	
		// Fills in drink options
		let option = document.createElement("select");
		option.classList.add("selection");
		option.id = "drinks-selector";
		let types = Object.values(data);
		let options;
		if (type === "Coffee"){
			options = types[0];
		} else if (type === "Tea"){
			options = types[1];
		} else if (type === "Soda"){
			options = types[2];
		} else {
			options = types[3];
		}
	
		// Populates the list of drinks
		var defaultValue = document.createElement("option");
		defaultValue.innerHTML = "Select Drink";
		defaultValue.selected = true;
		defaultValue.disabled = true;
		option.appendChild(defaultValue);
		Object.keys(options).forEach(el => {
			let typeField = document.createElement("option");
			typeField.id = "drink-option"
			typeField.innerHTML = el;
			option.appendChild(typeField);
		});
		
		// Adds drinks to form with line breaks;
		form.appendChild(option)
		var lineBreak = document.createElement("br")
		lineBreak.id = "options-break"
		form.appendChild(lineBreak);
	
		// Passes the drink name along to generate the slider
		let typeListener = option.addEventListener("change", (event)=> {
			let typeValue = event.target.value;
			makeDrinkSlider(typeValue, options);
		})
	}
}

// Function to update the drink option if the category changes
function updateOptionsField(type){
	// Fills in drink options
	let option = document.createElement("select");
	option.classList.add("selection");
	option.id = "drinks-selector";
	let types = Object.values(data);
	let options;
	if (type === "Coffee"){
		options = types[0];
	} else if (type === "Tea"){
		options = types[1];
	} else if (type === "Soda"){
		options = types[2];
	} else {
		options = types[3];
	}

	// Populates the list of drinks with default and drinks
	var defaultValue = document.createElement("option");
	defaultValue.innerHTML = "Select Drink";
	defaultValue.selected = true;
	defaultValue.disabled = true;
	option.appendChild(defaultValue);
	Object.keys(options).forEach(el => {
		let typeField = document.createElement("option");
		typeField.id = "drink-option"
		typeField.innerHTML = el;
		option.appendChild(typeField);
	});
	let oldOption = document.querySelector("#drinks-selector");
	form.replaceChild(option, oldOption);

	// Passes the drink name along to generate the slider
	let typeListener = option.addEventListener("change", (event)=> {
		let typeValue = event.target.value;
		makeDrinkSlider(typeValue, options);
	})
}

// Adds the slider to the form for selecting ozs
function makeDrinkSlider(drink, category){

	let node = document.getElementsByClassName("slidecontainer")[0]
	if (node){
		node.querySelectorAll('*').forEach(el => {
			el.remove();
		});
		let button = document.getElementById("add-drink-button");
		button.remove();
		node.remove();
	}

	//Makes the slider to select oz
	let ozSlider = document.createElement("div")
	ozSlider.classList.add("slidecontainer");
	let sliderLabel = document.createElement("label");
	sliderLabel.innerHTML = "How many Oz. did you have?";
	ozSlider.appendChild(sliderLabel);
	
	// Makes the slider to determine oz
	let slideValues = document.createElement("input");
	slideValues.classList.add("slider");
	slideValues.id = "ozRange";
	slideValues.type = "range";
	slideValues.min = "1";
	slideValues.max = "64";
	slideValues.value = "16";
	ozSlider.appendChild(slideValues);

	//Makes the label to display current slider value in oz
	let ozLabel = document.createElement("p");
	ozLabel.id = "oz-label";
	ozLabel.innerHTML = `${slideValues.value} Oz.`;
	let finalValue = slideValues.value
	slideValues.oninput = function() {
		ozLabel.innerHTML = `${this.value} Oz.`;
		finalValue = slideValues.value
	}
	ozSlider.appendChild(ozLabel);
	form.appendChild(ozSlider);

	addSubmit(drink, finalValue, category);

}

// Button that does the math and raises the wave
function addSubmit(drink, ozs, category){

	// Adds the submit button to the base of the form
	let submitButton = document.createElement("input");
	submitButton.value = "Add to your Jitters";
	submitButton.type = "submit";
	submitButton.id = "add-drink-button"
	form.appendChild(submitButton);

	// Intercepts the HTTP request and will do the math
	let submitClick = submitButton.addEventListener("click", (event) => {
		event.preventDefault();

		let setLimit = document.getElementsByClassName("mgMax")[0];
		let limitMg;
		if (!setLimit){
			checkLimit();
			modal = document.getElementById("addDrinkModal");
			modal.style.display = "none";
			clearSubmittion();
			return;
		} else {
			limitMg = setLimit.dataset.mgValue;
		}
		let mgPerOz;

		// Gets the mg/oz of a drink
		for (const drinkData in category) {
			if (drinkData === drink){
				mgPerOz = category[drinkData].mgPerOz;
			}
		}

		// Does the math and raises the wave by the appropriate amount
		let finalMgCount = ozs * mgPerOz;
		let waveRaiseAmount = (finalMgCount/limitMg);
		let percentage = Math.floor(waveRaiseAmount * .75 * 100);
		let waveElement = document.querySelector("#wave-div");
		let currentCount = waveElement.dataset.currentMg
		currentCount = parseInt(currentCount);
		currentCount += finalMgCount;
		waveElement.dataset.currentMg = currentCount;

		let counter = document.querySelector("#display");
		counter.innerHTML = `Current Amount: ${currentCount}Mg`;

		// Makes wave to raise;
		wave.raise(percentage);
		let modal = document.getElementById("addDrinkModal");
		modal.style.display = "none";
		clearSubmittion();
	})

}

// Function that clears the form
function clearSubmittion(){
	let node = document.getElementsByClassName("input-form")[0];
	node.querySelectorAll('*').forEach(el => {
		el.remove();
	});
}

// listener on the close button to clear the form
let closeButton = document.querySelector("#closeAddModal");
closeButton.addEventListener("click", (event) => {
	clearSubmittion();
});


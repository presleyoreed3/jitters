const Wave = require("./waves.js")
const data = require('../data/raw_data.json');

let form = document.getElementsByClassName("input-form")[0];
let startButton = document.getElementById("addDrinkModalBtn");
let wave = new Wave();
let knowToStart = startButton.addEventListener("click", (event) => {
	startForm();
})

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
}

function makeDrinkSlider(drink, category){

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

function addSubmit(drink, ozs, category){

	// Adds the submit button to the base of the form
	let submitButton = document.createElement("input");
	submitButton.value = "Add to your Jitters";
	submitButton.type = "submit";
	form.appendChild(submitButton);

	// Intercepts the HTTP request and will do the math
	let submitClick = submitButton.addEventListener("click", (event) => {
		event.preventDefault();
		let setLimit = document.getElementsByClassName("mgMax")[0];
		let limitMg = setLimit.dataset.mgValue;
		let mgPerOz;

		// Gets the mg/oz of a drink
		for (const drinkData in category) {
			mgPerOz = category[drinkData].mgPerOz;
		}

		// Does the math and raises the wave by the appropriate amount
		let finalMgCount = ozs * mgPerOz;
		let waveRaiseAmount = (finalMgCount/limitMg);
		let percentage = Math.floor(waveRaiseAmount * .75 * 100);
		let waveElement = document.querySelector("#wave-div");
		waveElement.dataset.currentMg = finalMgCount;

		// Makes wave to raise;
		console.log("I submitted a wave")
		wave.raise(percentage);
	})

}

// Function to clear form when the close button is pressed on the modal
let closeButton = document.querySelector("#closeAddModal");
closeButton.addEventListener("click", (event) => {
	let node = document.getElementsByClassName("input-form")[0];
	node.querySelectorAll('*').forEach(el => {
		el.remove();
	});
});


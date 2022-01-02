
const data = require('../data/raw_data.json');

let form = document.getElementsByClassName("input-form")[0];


// Makes the Type for the form
let label = document.createElement("label")
label.innerHTML = "Drink Type: "
form.appendChild(label);

let type = document.createElement("select");
type.classList.add("type-options")
Object.entries(data).forEach(arr => {
	let typeField = document.createElement("option");
	typeField.innerHTML = arr[0];
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

// Function to draw the drink options once type is selected
function makeOptionsField(type){

	//Clears elements if one is already selected
	if (document.querySelector("#drink-options")){
		let clear = document.querySelector("#drink-options")
		form.removeChild(clear);
		let dropdown = document.querySelector("#drinks-selector");
		form.removeChild(dropdown);
		var lineBreak = document.querySelector("#options-break");
		form.removeChild(lineBreak);
	}
	
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
	if (type === "coffee"){
		options = types[0];
	} else if (type === "tea"){
		options = types[1];
	} else if (type === "soda"){
		options = types[2];
	} else {
		options = types[3];
	}

	// Populates the list of drinks
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

function makeDrinkSlider(drink, category){

	console.log(category);

	// //Makes the slider to select oz
	// let ozSlider = document.createElement("div")
	// ozSlider.classList.add("slidecontainer");
	// let slideValues = document.createElement("input")
	// slideValues.classList.add("slider")
	// slideValues.id = "ozRange";
	// slideValues.type = "range";
	// slideValues.min = "1";
	// slideValues.max = "64";
	
}


module.exports = Form;
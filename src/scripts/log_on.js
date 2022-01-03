
let form = document.getElementsByClassName("logon-form")[0];

let welcome = document.createElement("h3");
welcome.innerHTML = "Please set your daily caffeine limit:"
form.appendChild(welcome);
let max = dailyMax();

function dailyMax(){

	// Makes the slider to select daily mg
	let mgSlider = document.createElement("div");
	mgSlider.classList.add("mgSlideContainer");

	// Makes the slider to determine mg
	let slideValues = document.createElement("input");
	slideValues.classList.add("slider");
	slideValues.id = "mgRange";
	slideValues.type = "range";
	slideValues.min = "20";
	slideValues.max = "500";
	slideValues.value = "100";
	mgSlider.appendChild(slideValues);

	//Makes the label to display current slider value in mg
	let mgLabel = document.createElement("h3");
	mgLabel.id = "mg-label";
	mgLabel.innerHTML = `${slideValues.value} mg.`;
	let finalValue = slideValues.value
	slideValues.oninput = function() {
		mgLabel.innerHTML = `${this.value} mg.`;
		finalValue = slideValues.value
	}
	mgSlider.appendChild(mgLabel);
	form.appendChild(mgSlider);

	// Button to submit value
	let setLimit = document.createElement("input");
	setLimit.value = "Set you Daily Limit";
	setLimit.type = "submit";
	form.appendChild(setLimit);

	setLine(finalValue);
	return finalValue;

}

function setLine(maxValue){

	let valueLabel = document.createElement("h4")
	valueLabel.innerHTML = maxValue;
	valueLabel.classList.add("mgMax")
	let line = document.createElement("hr");
	let location = document.querySelector("#limit-line");
	location.appendChild(valueLabel);
	location.appendChild(line);

}
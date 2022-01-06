
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
	slideValues.max = "700";
	slideValues.value = "200";
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
	setLimit.value = "Set your Daily Limit";
	setLimit.type = "submit";
	setLimit.id = "set-limit-button"
	form.appendChild(setLimit);

	// Draws the line with specified limit on click
	let drawLine = setLimit.addEventListener("click", (event) => {
		event.preventDefault();
		// Checks to see if line is already drawn
		let existingLine = document.querySelector("#line");
		if (existingLine){
			updateLine(finalValue);
		} else {
			setLine(finalValue);
		}
		let limitModal = document.getElementById("logonModal");
		let nextSpan = document.getElementById("closeLoginModal");
		limitModal.style.display = "none";
	})
	
	return finalValue;

}

function setLine(maxValue){

	let valueLabel = document.createElement("h4")
	valueLabel.innerHTML = `Your Daily Max: ${maxValue} mg`;
	valueLabel.classList.add("mgMax")
	valueLabel.dataset.mgValue = maxValue
	let line = document.createElement("hr");
	line.id = "line"
	let location = document.querySelector("#limit-line");
	location.appendChild(line);
	location.appendChild(valueLabel);

}

function updateLine(newMax){

	let oldLabel = document.getElementsByClassName("mgMax")[0];
	oldLabel.innerHTML = `Your Daily Max: ${newMax}Mg`;
	let location = document.querySelector("#limit-line");
	oldLabel.dataset.mgValue = newMax;
	location.appendChild(oldLabel);

	let wave = document.getElementById("wave-div");

}
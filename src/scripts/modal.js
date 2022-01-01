const Wave = require("./waves.js")

class Modal {
	
}

// Get the modal
let modal = document.getElementById("addDrinkModal");
// Get the button that opens the modal
let btn = document.getElementById("addDrinkModalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  let wave = new Wave();
  wave.raise();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

module.exports = Modal;
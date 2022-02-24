

// Get the modal
let modal = document.getElementById("addDrinkModal");
// Get the button that opens the modal
let btn = document.getElementById("addDrinkModalBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// Displays the modal
display(btn, modal, span);

// For Limit modal
// Get the modal
let limitModal = document.getElementById("logonModal");
// Get the button that opens the limitModal
let limitButton = document.getElementById("logonBtn");
// Get the <span> element that closes the limitModal
let nextSpan = document.getElementById("closeLoginModal");
// Displays the limit modal
display(limitButton, limitModal, nextSpan);

// For info Modal
// Get the modal
let infoModal = document.getElementById("infoModal");
// Get the button that opens the limitModal
let infoButton = document.getElementById("infoBtn");
// Get the <span> element that closes the limitModal
let infoSpan = document.getElementById("closeInfoModal");
// Displays the limit modal
// display(infoButton, infoModal, infoSpan);

// For info Modal
// Get the modal
let listModal = document.getElementById("drinkListModal");
// Get the button that opens the limitModal
let listButton = document.getElementById("drinkListBtn");
// Get the <span> element that closes the limitModal
let listSpan = document.getElementById("closeListModal");
// Displays the limit modal
display(listButton, listModal, listSpan);


function display(btn, modal, span) {
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
    console.log("testing")
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
}

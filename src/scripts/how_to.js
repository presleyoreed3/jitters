
// let pageLoaded = window.addEventListener('load', (event) => {
// 	popInfoModal();
// })

let infoButton = document.getElementById("infoBtn");
let infoWatcher = infoButton.addEventListener("click", (event) => {
	popInfoModal();
})

function popInfoModal(){
	let infoModal = document.getElementById("infoModal");
	let closeButton = document.getElementsByClassName('close')[0];
	infoModal.style.display = "block"
	closeButton.onclick = function(){
		infoModal.style.display = "none";
	}

}
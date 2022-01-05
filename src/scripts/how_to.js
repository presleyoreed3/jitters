
let pageLoaded = window.addEventListener('load', (event) => {
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
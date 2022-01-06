class List {

	constructor(){
		this.drinks = [];
	}

	addDrink(drink, ozs, totalMg){
		let drinkToAdd = {
			drinkName: drink,
			oz: ozs,
			total: totalMg,
		}
		this.drinks.push(drinkToAdd);
	}

	display(){
		let listButton = document.getElementById("drinkListBtn");
		let listDiv = document.getElementById("drinkListDiv");
		listDiv.style.display = "block"

		let popUp = listButton.addEventListener("click", (event) => {
			this.renderList();
		})
	}

	renderList(){
		let listModal = document.getElementById("drinkListModal");
		let drinkList = document.getElementById("drinkUL");
		this.clearList();
		for (let i = 0; i < this.drinks.length; i++){
			let oneDrink = document.createElement("p");
			let drinkMg = parseFloat(this.drinks[i].total);
			drinkMg = drinkMg.toFixed(2);
			oneDrink.innerHTML = `${this.drinks[i].drinkName}:<br />` + ` ${this.drinks[i].oz} oz.` + ` which amounts to ${drinkMg} mg. of Caffeine`;
			drinkList.appendChild(oneDrink);
		}
	}

	clearList(){
		let drinkList = document.getElementById("drinkUL");
		drinkList.querySelectorAll('*').forEach(el => {
			el.remove();
		});
	}

}

export default List;
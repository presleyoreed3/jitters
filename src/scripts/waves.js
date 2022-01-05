class Wave {

    constructor(){
        this.height = 0;
    }

    raise(percentage) { 
        let waves = document.getElementsByClassName("waves")[0];
        this.height += percentage;
        waves.style.height = `${this.height}%`
        waves.style.maxHeight = `${this.height}%`
        this.checkHeight();
    }

    checkHeight(){
        let maxHeight = document.getElementsByClassName("mgMax")[0];
        let maxValue = maxHeight.dataset.mgValue;
        let currentHeight = document.querySelector("#wave-div");
        let currentValue = currentHeight.dataset.currentMg;
        maxValue = parseInt(maxValue);
        currentValue = parseInt(currentValue);
        if (currentValue >= maxValue){
            maxHeight.style.color = "#f2f2f2"
            maxHeight.style.textShadow = "2px 2px #6A44F2";
        }
    }

    adjustWave(){
        
    }

}

export default Wave;
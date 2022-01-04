class Wave {

    constructor(){
        this.height = 0;
    }

    raise(percentage) { 
        let waves = document.getElementsByClassName("waves")[0];
        this.height += percentage;
        waves.style.height = `${this.height}%`
        waves.style.maxHeight = `${this.height}%`
    }

}

module.exports = Wave;
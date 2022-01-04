class Wave {

    raise(percentage) { 
        let waves = document.getElementsByClassName("waves")[0];
        waves.style.height = `${percentage}%`
        waves.style.maxHeight = `${percentage}%`
    }

}

module.exports = Wave;
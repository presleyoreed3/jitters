export default function raise() { 
    e.preventDefault();
    let waves = document.getElementsByClassName("waves")[0];
    console.log(waves.height);
    waves.style.height = "100%"
    waves.style.maxHeight = "100%"
}
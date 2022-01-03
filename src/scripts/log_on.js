console.log("I got here")
let form = document.getElementsByClassName("logon-form")[0];
console.log(form)

let welcome = document.createElement("h1");
welcome.innerHTML = "Welcome to Jitters \n Please set your daily caffeine limit:"
form.appendChild(welcome);


module.exports = Form;
var Mango = localStorage.getItem("Mango");
var MangoesPerSecond = localStorage.getItem("MangoesPerSecond");


window.setInterval(function(){


Mango = localStorage.getItem("Mango");
MangoesPerSecond = localStorage.getItem("MangoesPerSecond");  
document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes" + "   ( " + MangoesPerSecond + " MPS)";


}, 50);
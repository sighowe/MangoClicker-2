var Mango = localStorage.getItem("Mango");
var MangoInt = localStorage.getItem("MangoInt");


window.setInterval(function(){


Mango = localStorage.getItem("Mango");
MangoInt = localStorage.getItem("MangoInt");  
document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes" + "   ( " + MangoInt + " MPS)";


}, 50);
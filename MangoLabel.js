var Mango = localStorage.getItem("Mango");

window.setInterval(function(){


Mango = localStorage.getItem("Mango");  
document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}, 50);
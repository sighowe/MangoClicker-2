var Mango = localStorage.getItem("Mango");

setInterval(function() {
	Mango = localStorage.getItem("Mango");
	document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes."

}, 50);
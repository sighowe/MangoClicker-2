var Mango = localStorage.getItem("Mango")
var MangoInt = localStorage.getItem("MangoInt");
var MangoesPerSec = localStorage.getItem("MangoesPerSec");
var AddMango = function(){
  Mango = +MangoInt + +Mango;
  localStorage.setItem("Mango", Mango);
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}


  Mango = localStorage.getItem("Mango")
  MangoInt = localStorage.getItem("MangoInt");
  MangoesPerSec = localStorage.getItem("MangoesPerSec");
var AddMango = function(){
  Mango = +MangoInt + +Mango;
  localStorage.setItem("Mango", Mango);
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}


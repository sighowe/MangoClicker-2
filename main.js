//Init
var Reset = function(){
  var Mango = 0;
  var MangoInt = 1;
  var MangoesPerSec = 0;
}
var TrueReset = function(){
  var Mango = 0;
  var MangoInt = 1;
  var MangoesPerSec = 0;
  localStorage.setItem("save", 1);
  localStorage.setItem("Mango", 0);
  localStorage.setItem("MangoesPerSec", 0);
  localStorage.setItem("MangoInt", 1);
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
  Reset();
  Mango = localStorage.getItem("Mango")
  MangoInt = localStorage.getItem("MangoInt");
  MangoesPerSec = localStorage.getItem("MangoesPerSec");
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
  location.reload();
}
var AddMango = function(){
  Mango = +MangoInt + +Mango;
  localStorage.setItem("Mango", Mango);
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}
Reset();
document.getElementById("MangoLabel").textContent = "You Have " + Mango + " Mangoes";
Mango = +localStorage.getItem("Mango");
MangoInt = +localStorage.getItem("MangoInt");
MangoesPerSec = +localStorage.getItem("MangoesPerSec");
document.getElementById("MangoLabel").textContent = "You Have " + Mango + " Mangoes";
//Call
if(localStorage.getItem("save") == 1){
  Reset();
  Mango = localStorage.getItem("Mango")
  MangoInt = localStorage.getItem("MangoInt");
  MangoesPerSec = localStorage.getItem("MangoesPerSec");
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}
else{
  Reset();
  localStorage.setItem("save", 1);
  localStorage.setItem("Mango", 0);
  localStorage.setItem("MangoesPerSec", 0);
  localStorage.setItem("MangoInt", 1);
  document.getElementById("MangoLabel").textContent = "You have " + Mango + " Mangoes";
}

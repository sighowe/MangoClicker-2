var Reset = function(){
  var Mango = 0;
  var MangoInt= 1;
  var MangoesPerSec = 0;
}
var AddMango = function(){
  Mango = Mango + MangoInt;
  localStorage.setItem("Mango", Mango);
  document.getElementById("MangoLabel").textContent = "You Have " + Mango + " Mangoes";
}
if(localStorage.getItem("save") == 1){
  Reset();
  Mango = localStorage.getItem("Mango")
  MangoInt = localStorage.getItem("MangoInt");
  MangoesPerSec = localStorage.getItem("MangoesPerSec");
}
else{
  Reset();
  localStorage.setItem("save", 1);
  localStorage.setItem("Mango", 0);
  localStorage.setItem("MangoesPerSec", 0);
  localStorage.setItem("MangoInt", 1);
}

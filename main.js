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
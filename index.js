
var myVar;

function myFunction() {
 myVar = setTimeout(showPage, 20);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function vibr(){
  navigator.vibrate(40);
}


function shFunction() {
var x = document.getElementById("fooo");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}


makeDummy();

var dummyDiv = document.getElementById("dummy");

makeHam();

var hamburger = document.getElementById("hamburger");
var topLine = document.getElementById("topLine");
var middleLine = document.getElementById("middleLine");
var bottomLine = document.getElementById("bottomLine");

swapProperties(dummyDiv, hamburger);

function makeDummy() {
  var du = document.createElement("div");
  du.id = "dummy";
  document.body.appendChild(du);
}

// --- Create the div #hamburger
function makeHam() {


// --- Create container div
  var ham = document.createElement("div");
  ham.id = "hamburger";
  document.body.appendChild(ham);

// --- Create the top line
  var ln1 = document.createElement("span");
  ln1.id = "topLine";
  ln1.style.position = "absolute";
  ln1.style.width = "100%";
  ln1.style.height = "20%";
  ln1.style.top = "0%";
  ln1.style.backgroundColor = "black";
  ham.appendChild(ln1);

// --- Create the middle line
  var ln2 = document.createElement("span");
  ln2.id = "middleLine";
  ln2.style.position = "absolute";
  ln2.style.width = "100%";
  ln2.style.height = "20%";
  ln2.style.top = "40%";
  ln2.style.backgroundColor = "black";
  ham.appendChild(ln2);

// --- Create the bottom line
  var ln3 = document.createElement("span");
  ln3.id = "bottomLine";
  ln3.style.position = "absolute";
  ln3.style.width = "100%";
  ln3.style.height = "20%";
  ln3.style.top = "80%";
  ln3.style.backgroundColor = "black";
  ham.appendChild(ln3);
}

function swapProperties(x, y) {
  var swapP = window.getComputedStyle(x, null).getPropertyValue("position");
  var swapW = window.getComputedStyle(x, null).getPropertyValue("width");
  var swapH = window.getComputedStyle(x, null).getPropertyValue("height");
  var swapBC = window.getComputedStyle(x, null).getPropertyValue("background-color");
  var swapT = window.getComputedStyle(x, null).getPropertyValue("top");
  var swapL = window.getComputedStyle(x, null).getPropertyValue("left");
  var swapO = window.getComputedStyle(x, null).getPropertyValue("opacity");
  var swapB = window.getComputedStyle(x, null).getPropertyValue("border");
  var swapBW = window.getComputedStyle(x, null).getPropertyValue("border-width");
  var swapBR = window.getComputedStyle(x, null).getPropertyValue("border-radius");

  y.style.position = swapP;
  y.style.width = swapW;
  y.style.height = swapH;
  y.style.top = swapT;
  y.style.left = swapL;
  y.style.opacity = swapO;

  topLine.style.backgroundColor = swapBC;
  topLine.style.border = swapB;
  topLine.style.borderWidth = swapBW;
  topLine.style.borderRadius = swapBR;

  middleLine.style.backgroundColor = swapBC;
  middleLine.style.border = swapB;
  middleLine.style.borderWidth = swapBW;
  middleLine.style.borderRadius = swapBR;

  bottomLine.style.backgroundColor = swapBC;
  bottomLine.style.border = swapB;
  bottomLine.style.borderWidth = swapBW;
  bottomLine.style.borderRadius = swapBR;

  x.style.display = "none";
}

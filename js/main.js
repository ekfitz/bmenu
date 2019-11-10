makeHam();
hamburger.style.backgroundColor = "yellow";
var line1 = document.getElementById("ln1");

invertColor(line1);



// --- css property backgroundColor changes
// --- background of the three lines, instead of
// --- container div background




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
//  ln1.style.backgroundColor = "black";
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

function invertColor(x) {
  var hamburger = document.getElementById("hamburger");

  if (hamburger.style.backgroundColor == "yellow") {
    x.style.backgroundColor = "red";
  } else {
    x.style.backgroundColor = "green";
  }
}

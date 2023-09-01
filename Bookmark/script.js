

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}




//  localStorage.clear();

function addLink() {

  let webname = document.getElementById("fname").value;
  let webURL = document.getElementById("URL").value;

  let model1 = document.getElementById("myModal");  // for stopping the display of model 
  model1.style.display = "none";

  document.getElementById("fname").value = " ";
  document.getElementById("URL").value = " ";

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "myDIV");
  newDiv.style.position = "relative";

  const closeDiv = document.createElement("div");
  closeDiv.setAttribute("class", "close1");
  const closeSpan = document.createElement("span");
  closeSpan.setAttribute("class", "close");
  closeSpan.innerHTML = "&times;";

 

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
  }
}
  closeDiv.appendChild(closeSpan);

  const newParagraph = document.createElement("p");
  newParagraph.setAttribute("id", "Data");

  newDiv.appendChild(newParagraph);
  newDiv.appendChild(closeDiv);

  let link = document.createElement('a');
  // set href attribute
  link.href = webURL;
  // set link text
  link.text = webname;
  newParagraph.appendChild(link);
  container.appendChild(newDiv);

}

function dislpayBlock() {


}
function manageData() {

}

function deleteData() {

}

function loadData() {

}





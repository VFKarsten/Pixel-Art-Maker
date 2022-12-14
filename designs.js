// Select color input
let colorButtom = document.getElementById("colorPicker");

// Select size input
const HeightChoose = document.getElementById("inputHeight");
const WidthChoose = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById("pixelCanvas");

//Prevent a default and use picker submit
sizePicker.addEventListener("submit", function(pixelArtMaker) {
	pixelArtMaker.preventDefault();
	while (pixelCanvas.hasChildNodes()) {
		pixelCanvas.removeChild(pixelCanvas.lastChild);
	}
	makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	for (var a = 0; a < HeightChoose.value; a++) {
		let line = pixelCanvas.insertRow();
		for (var b = 0; b < WidthChoose.value; b++) {
			let box = line.insertCell();
			box.addEventListener("click", function() {
				box.style.backgroundColor = colorButtom.value;
				colorButtom.addEventListener("click", function() {});
			});
		}
	}
}
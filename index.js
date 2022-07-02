var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
let color = "#000";
let brushthickness = 7;
document.querySelector(".color-btn div").style.backgroundColor = color;

//*************************************************************************************************
//******************************************* RESIZE CANVAS ***************************************
//*************************************************************************************************

function resize() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

resize();

//*************************************************************************************************
//************************************** DOWNLOAD CANVAS ******************************************
//*************************************************************************************************

function onSave() {
  const link = document.createElement('a');
  link.download = 'sketch.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}

//*************************************************************************************************
//***************************************** EVENT LISTENERS ***************************************
//*************************************************************************************************

// add window event listener to trigger when window is resized
window.addEventListener("resize", resize);
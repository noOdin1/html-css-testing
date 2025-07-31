// Originally this code was written for jQuery.
//   src: https://stackoverflow.com/questions/36032863/how-can-i-check-how-long-a-click-was-held
// Date: 2025-07-31 23:52
// author: R Mowe
//
// var timeout;
// //var clicker = $("#clicker");
// var count = 0;
//
// document.addEventListenter("mousedown", function () {
//   timeout = setInterval(function () {
//     clicker.text(count++);
//     console.log("[mousedown] count: " + count);
//   }, 500);
//
//   return false;
// });
//
// $(document).mouseup(function () {
//   clearInterval(timeout);
//   return false;
// });

function mouseDown(event) {
  console.log("[mouseDown] click, mouse down");
  timeout = setInterval(function () {
    console.log("[mouseDown] counter: " + counter++);
  }, 500);
}
function mouseUp(event) {
  console.log("[mouseUp] click, mouse up");
  clearInterval(timeout);
  // counter = 0; // Here you can choose to reset the counter
}

var timeout,
  counter = 0;
var btn = document.querySelector("button");
btn.addEventListener("mousedown", mouseDown);
btn.addEventListener("mouseup", mouseUp);

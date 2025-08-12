const leftContainerWidth = document.querySelector("#lhsMainContainerInfo");
const rightContainerWidth = document.querySelector("#rhsMainContainerInfo");
const left1stItem = document.querySelector("#first_left_item_info");
const left2ndItem = document.querySelector("#second_left_item_info");
var windowWidth = 0;

function printMainCntChanges() {
  var lhsWidth = document.getElementById("lhsMainContainer").offsetWidth;
  var rhsWidth = document.getElementById("rhsMainContainer").offsetWidth;
  leftContainerWidth.textContent =
    "[width=" +
    lhsWidth +
    ", " +
    Number.parseFloat((lhsWidth / windowWidth) * 100).toFixed(2) +
    "%]";
  rightContainerWidth.textContent =
    "[width=" +
    rhsWidth +
    ", " +
    Number.parseFloat((rhsWidth / windowWidth) * 100).toFixed(2) +
    "%]";
}

function printLeftItemInfo() {
  printLeft1stSubMainInfo();
  printLeft2ndSubMainInfo();
}

function printLeft1stSubMainInfo() {
  var left1stItem = document.getElementById("first_left_item").offsetWidth;
  var left2ndItem = document.getElementById("second_left_item").offsetWidth;
  first_left_item_info.textContent =
    "[" +
    left1stItem +
    ", " +
    Number.parseFloat((left1stItem / windowWidth) * 100).toFixed(2) +
    "%]";

  second_left_item_info.textContent =
    "[" +
    left2ndItem +
    ", " +
    Number.parseFloat((left2ndItem / windowWidth) * 100).toFixed(2) +
    "%]";
}

function printLeft2ndSubMainInfo() {
  var left3rdItem = document.getElementById("third_left_item").offsetWidth;
  var left4thItem = document.getElementById("fourth_left_item").offsetWidth;
  third_left_item_info.textContent =
    "[" +
    left3rdItem +
    ", " +
    Number.parseFloat((left3rdItem / windowWidth) * 100).toFixed(2) +
    "%]";

  fourth_left_item_info.textContent =
    "[" +
    left4thItem +
    ", " +
    Number.parseFloat((left4thItem / windowWidth) * 100).toFixed(2) +
    "%]";
}

function printWidthChanges() {
  windowWidth = window.innerWidth;
  // console.log("[printWidthChanges] windowWidth: " + windowWidth);
  printMainCntChanges();
  printLeftItemInfo();
}

window.onresize = printWidthChanges;

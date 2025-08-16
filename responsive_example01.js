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
  printLeft3rdSubMainInfo();
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

function printLeft3rdSubMainInfo() {
  var left5thItem = document.getElementById("fifth_left_item").offsetWidth;
  var left6thItem = document.getElementById("sixth_left_item").offsetWidth;
  var mainCntWidth = document.getElementById("left_3rd_sub_main").clientWidth;
  var thirdSub_100px = document.getElementById("thridSubMain_100px");
  var thirdSub_35pct = document.getElementById("thridSubMain_35pct");
  fifth_left_item_info.textContent =
    "[" +
    left5thItem +
    ", " +
    Number.parseFloat((left5thItem / mainCntWidth) * 100).toFixed(2) +
    "%]";

  sixth_left_item_info.textContent =
    "[" +
    left6thItem +
    ", " +
    Number.parseFloat((left6thItem / mainCntWidth) * 100).toFixed(2) +
    "%]";
  if (left5thItem > 100) {
    thirdSub_35pct.classList.add("yellow_bg");
    thirdSub_100px.classList.remove("yellow_bg");
  }
  if (left5thItem <= 100) {
    thirdSub_35pct.classList.remove("yellow_bg");
    thirdSub_100px.classList.add("yellow_bg");
  }
}

function printWidthChanges() {
  windowWidth = window.innerWidth;
  // console.log("[printWidthChanges] windowWidth: " + windowWidth);
  printMainCntChanges();
  printLeftItemInfo();
}

window.onresize = printWidthChanges;

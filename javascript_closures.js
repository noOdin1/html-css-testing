function makeFunc() {
  // const name = "Mozilla";
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function makeSizer(size) {
  return () => {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

// console.log(counter.value()); // 0.
//
// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.
//
// counter.decrement();
// console.log(counter.value()); // 1.
function makeCounter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

// Closure Scope chain
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// global scope
const e1 = 10;
function add(a) {
  return function add2(b) {
    return function add3(c) {
      // outer functions scope
      return function add4(d) {
        // local scope
        return a + b + c + d + e1;
      };
    };
  };
}

const add2 = add(1);
const add3 = add2(2);
const add4 = add3(3);
const result = add4(4);
console.log(result); // 20

function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();

/* To run this part successfully you need the following:
 *   1. in html, the <script src="javascript_closures.js"></script>
 *      must have the following <script src="javascript_closures.js" type="module">
 *      </script>
 *   2. navigate to where this file is located, and then run the python
 *      SimpleHTTPServer module:
 *        python -m http.server 8080
 *   3. On your web browser, navigate to: http://localhost:8080/
 *      and select the filename "javascript_closures.html"
 **/
// import { getX, setX } from "./myModule.js";
// console.log("getX = " + getX());
// setX(6);
// console.log("getX = " + getX());

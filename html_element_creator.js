/* This is a test for the element creator prototype that I had in mind */

/* The following is the function that will create an element with the most common
 * attribute found,
 *   1. element type: div, p, button, input
 *   2. element class
 *   3. element name
 *   4. element textContent
 **/
function createElement(elemType, class_list, unique_id, text_content) {
  let element = document.createElement(elemType);

  /* Add class to the element */
  if (!(class_list instanceof Array) && class_list != "") {
    class_list = [class_list];
  }
  if (class_list != "") {
    class_list.forEach((elem) => element.classList.add(elem));
  }

  /* Add id to the element */
  if (unique_id !== "" && !(unique_id === undefined || unique_id === null)) {
    element.setAttribute("id", unique_id);
  }

  /* Add textContent/innerHTML/innerText value */
  if (
    text_content !== "" &&
    text_content !== undefined &&
    text_content !== null
  ) {
    element.textContent = text_content;
  }

  return element;
}

createElement("div", ["side_container", "slim"], "sideBar", "");
createElement("div", "slim", "", "");
createElement("div", "wide", null);
createElement("div", "", "sideBar", "");

let tmpDiv = document.getElementById("mainDiv");
tmpDiv.appendChild(createElement("p", "", "sideBar", "This is a test"));

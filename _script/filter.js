// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add selected class to the current control button (highlight it)
var btnContainer = document.getElementById("filterContainer");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("subsidiary-cel");
  if (c == "all") c = "";
  // Add the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
filterSelection("all");

function filterImage(d) {
  var img, j;
  img = document.getElementsByClassName("sector-img");
  if (d == "all") {
    var img = document.getElementsByClassName("sector-img");
    img[0].className = img[0].className.replace(" show-img", "");
  }
  // Add the "show-img" class to the filtered elements, and remove the "show-img" class from the elements that are not selected
  for (j = 0; j < img.length; j++) {
    w3RemoveClass(img[j], "show-img");
    if (img[j].className.indexOf(d) > -1) w3AddClass(img[j], "show-img");
  }
}

function filterTitle(d) {
  var title, k;
  title = document.getElementsByClassName("sector-title");
  if (d == "all") {
    var title = document.getElementsByClassName("sector-title");
    title[0].className = title[0].className.replace(" show-title", "");
  }
  // Add the "show-title" class to the filtered elements, and remove the "show-title" class from the elements that are not selected
  for (k = 0; k < title.length; k++) {
    w3RemoveClass(title[k], "show-title");
    if (title[k].className.indexOf(d) > -1) w3AddClass(title[k], "show-title");
  }
}

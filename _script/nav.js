// navigation toggle
const x = document.getElementById("navMenu");
const y = document.getElementById("navContainer");

function navMenu() {
  "use strict";
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
  if (y.className === "nav-container") {
    y.className += " dropdown";
  } else {
    y.className = "nav-container";
  }
}

// ABOUT US
function openPage(pageHead, pageName, elmnt, bg) {
  var i, tabhead, tabcontent, tablinks;
  tabhead = document.getElementsByClassName("hero-320");
  for (i = 0; i < tabhead.length; i++) {
    tabhead[i].style.display = "none";
    document.getElementById(pageHead).style.display = "flex";
  }
  document.getElementById("tabbg").className = bg;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundImage = "";
    tablinks[i].className = "tablink";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.className = "tablink active";
}
document.getElementById("defaultOpen").click();

// SUBSIDIARIES
function myFunction() {
  document.getElementById("filterContainer").classList.toggle("show-list");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("filter-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show-list")) {
        openDropdown.classList.remove("show-list");
      }
    }
  }
};

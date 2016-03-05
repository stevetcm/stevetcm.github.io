window.onload = function() { 
  var nav = document.getElementById("small-nav-bar");
  var elem1 = document.getElementById('introduction');
  var elem2 = document.getElementById('projects');

  var height = nav.offsetHeight+5;

  elem1.style.paddingTop = height + "px"
  elem2.style.paddingTop = height + "px"
  
  var btn1 = document.getElementById("menu1");
  var btn2 = document.getElementById("menu2");
  var btn3 = document.getElementById("menu3");
  var btn4 = document.getElementById("menu4");

  btn1.onclick = function() {
    if (getComputedStyle(menu2).display == "block") {
      menu2.style.display = "none";
      menu3.style.display = "none";
      menu4.style.display = "none";
    } else {
      menu2.style.display = "block";
      menu3.style.display = "block";
      menu4.style.display = "block";
    }
  }

  btn2.onclick = function() {
    if (getComputedStyle(menu1).display == "block") {
      menu2.style.display = "none";
      menu3.style.display = "none";
      menu4.style.display = "none";
    }
  }

  btn3.onclick = function() {
    if (getComputedStyle(menu1).display == "block") {
      menu2.style.display = "none";
      menu3.style.display = "none";
      menu4.style.display = "none";
    }
  }

  btn4.onclick = function() {
    if (getComputedStyle(menu1).display == "block") {
      menu2.style.display = "none";
      menu3.style.display = "none";
      menu4.style.display = "none";
    }
  }
};

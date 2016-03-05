window.onload = function() { 
  var nav = document.getElementById("small-nav-bar");
  var elem1 = document.getElementById('introduction');
  var elem2 = document.getElementById('projects');

  var height = nav.offsetHeight+5;

  elem1.style.paddingTop = height + "px"
  elem2.style.paddingTop = height + "px"
};

/* function myFunction() {
    document.getElementById("demo").innerHTML = "<h2>test</h2>";
}
    */


document.write('<a href="home.html" class="nav1">home</a>');
document.write('<a href="extra.html" id="border-left-niche">extras</a>');
document.write('<a href="about.html" id="border-left-niche">about</a>');
document.write('<a href="links.html" id="border-left-niche">link</a>');

//tabs for the About page bc idk where to put it

function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 
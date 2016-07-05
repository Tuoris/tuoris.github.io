var splash = document.getElementById('splash');
var size = 0.5
var factor = 1.8
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  var width = document.documentElement.clientWidth;
  var csize = 1 - (1 - size) * scrolled / width * factor;
  if(csize > 0.1) {
    var property_string = 'scale(' + csize + ')';
    splash.style.transform = property_string;
    splash.style.WebkitTransform = property_string;
    splash.style.MozTransform = property_string;
  }
}

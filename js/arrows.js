var left = 0;
var right = 1;
var selected = left;

document.onkeydown = checkKey;

function checkKey(e) {

   e = e || window.event;

   if (e.keyCode == '37' && selected == right) {
      // left arrow
      alert('Right -> Left');
      selected = left;
   }
   else if (e.keyCode == '39' && selected == left) {
      // right arrow
      alert('Left -> Right');
      selected = right;
   }
   else if (e.keyCode == '13') {
      // enter
      alert('Enter');
   }
}
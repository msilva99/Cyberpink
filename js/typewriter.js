var i = 0;
var counter = 0;
previousCounter = 3;
var txt = ['Hello...','How are ya?', 'Nice to meet ya!', '<3 <3 <3'];
var time = 100;

function typeWriter() {
   if (i < txt[counter].length) {
      document.getElementsByClassName("type")[previousCounter].innerHTML = "";
      document.getElementsByClassName("type")[counter].innerHTML += txt[counter].charAt(i);
      i++;
      
      setTimeout(typeWriter, time);
   }
   else if (i == txt[counter].length) {
      i = 0;
      if (counter < 3) {
         previousCounter = counter;
         counter++;
      } else if (counter == 3) {
         counter = 0;
         previousCounter = 3;
      }
   }
}

var j = 0;
var txt_mobile = 'Desktop pls... <3';
var time_mobile = 60;

function typeWriter_mobile() {
   if (j < txt_mobile.length) {
      document.getElementById("type_mobile").innerHTML += txt_mobile.charAt(j);
      j++;
      setTimeout(typeWriter_mobile, time_mobile);
   }
   else {
      j = 0;
   }
}

function is_md(screensize) {
   if (!screensize.matches) {
      document.getElementById("type_mobile").innerHTML = "";
      typeWriter_mobile();
   }
   else {
      counter = 0;
      previousCounter = 3;
      document.getElementsByClassName("type")[counter].innerHTML = "";
      typeWriter();
   }
 }
 
var md = window.matchMedia("(min-width: 768px)");
is_md(md);
md.addListener(is_md);
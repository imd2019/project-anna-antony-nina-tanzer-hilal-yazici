var score = localStorage.getItem("scoreAmount");

var answer1 = document.getElementById("antwort1");
var answer2 = document.getElementById("antwort2");
var answer3 = document.getElementById("antwort3");
var answer4 = document.getElementById("antwort4");
var answer5 = document.getElementById("antwort5");
var answer6 = document.getElementById("antwort6");
var answer7 = document.getElementById("antwort7");
var answer8 = document.getElementById("antwort8");

(function () {
  if (score <= -63) {
    answer1.style.display = "block";
    answer2.style.display = "block";
  } else {
    answer1.style.display = "none";
    answer2.style.display = "none";
  }

  if (score <= -1 && score >= -62) {
    answer3.style.display = "block";
    answer4.style.display = "block";
  } else {
    answer3.style.display = "none";
    answer4.style.display = "none";
  }
  var answer5 = document.getElementById("antwort5");
  var answer6 = document.getElementById("antwort6");
  if (score <= 12 && score >= 0) {
    answer5.style.display = "block";
    answer6.style.display = "block";
  } else {
    answer5.style.display = "none";
    answer6.style.display = "none";
  }
  var answer7 = document.getElementById("antwort7");
  var answer8 = document.getElementById("antwort8");
  if (score >= 13) {
    answer7.style.display = "block";
    answer8.style.display = "block";
  } else {
    answer7.style.display = "none";
    answer8.style.display = "none";
  }
})();

function checkantwort(button) {
  var text1 = document.getElementById("text1");
  text1.style.display = "block";
  if (button === "antwort1") {
    text1.style.display = "block";
    answer1.style.display = "none";
    answer2.style.display = "none";
  } else {
    text1.style.display = "none";
  }
  var text2 = document.getElementById("text2");
  if (button === "antwort2") {
    text2.style.display = "block";
    answer1.style.display = "none";
    answer2.style.display = "none";
  } else {
    text2.style.display = "none";
  }
  var text3 = document.getElementById("text3");
  if (button === "antwort3") {
    text3.style.display = "block";
    answer4.style.display = "none";
    answer3.style.display = "none";
  } else {
    text3.style.display = "none";
  }
  var text4 = document.getElementById("text4");
  if (button === "antwort4") {
    text4.style.display = "block";
    answer3.style.display = "none";
    answer4.style.display = "none";
  } else {
    text4.style.display = "none";
  }
  var text5 = document.getElementById("text5");
  if (button === "antwort5") {
    text5.style.display = "block";
    answer5.style.display = "none";
    answer6.style.display = "none";
  } else {
    text5.style.display = "none";
  }
  var text6 = document.getElementById("text6");
  if (button === "antwort6") {
    text6.style.display = "block";
    answer5.style.display = "none";
    answer6.style.display = "none";
  } else {
    text6.style.display = "none";
  }
  var text7 = document.getElementById("text7");
  if (button === "antwort7") {
    text7.style.display = "block";
    answer7.style.display = "none";
    answer8.style.display = "none";
  } else {
    text7.style.display = "none";
  }
  var text8 = document.getElementById("text8");
  if (button === "antwort8") {
    text8.style.display = "block";
    answer7.style.display = "none";
    answer8.style.display = "none";
  } else {
    text8.style.display = "none";
  }
}

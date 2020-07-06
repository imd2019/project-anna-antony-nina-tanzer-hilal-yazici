var score = localStorage.getItem("scoreAmount");
var week = parseInt(localStorage.getItem("currentWeek"));

var answer1 = document.getElementById("antwort1");
var answer2 = document.getElementById("antwort2");
var answer3 = document.getElementById("antwort3");
var answer4 = document.getElementById("antwort4");
var answer5 = document.getElementById("antwort5");
var answer6 = document.getElementById("antwort6");
var answer7 = document.getElementById("antwort7");
var answer8 = document.getElementById("antwort8");
var week2 = document.getElementById("woche2");
var mob5 = document.getElementById("mob5");
var mob6 = document.getElementById("mob6");
var mob7 = document.getElementById("mob7");
var mob8 = document.getElementById("mob8");
var mob9 = document.getElementById("mob9");

(function () {
  if (score <= -73) {
    answer1.style.display = "block";
    answer2.style.display = "block";
  } else {
    answer1.style.display = "none";
    answer2.style.display = "none";
  }

  if (score <= -1 && score >= -72) {
    answer3.style.display = "block";
    answer4.style.display = "block";
    mob5.style.display = "none";
    mob10.style.display = "none";
  } else {
    answer3.style.display = "none";
    answer4.style.display = "none";
  }

  if (score <= 22 && score >= 0) {
    answer5.style.display = "block";
    answer6.style.display = "block";
    mob5.style.display = "none";
    mob6.style.display = "none";
    mob7.style.display = "none";
  } else {
    answer5.style.display = "none";
    answer6.style.display = "none";
  }

  if (score >= 23) {
    answer7.style.display = "block";
    answer8.style.display = "block";
    mob5.style.display = "none";
    mob6.style.display = "none";
    mob7.style.display = "none";
    mob8.style.display = "none";
    mob9.style.display = "none";
  } else {
    answer7.style.display = "none";
    answer8.style.display = "none";
  }
})();

function checkantwort(button) {
  var text1 = document.getElementById("text1");

  if (button === "antwort1") {
    text1.style.display = "block";
    week2.style.display = "block";
    answer1.style.display = "none";
    answer2.style.display = "none";
    score = score + 5;
  } else {
    text1.style.display = "none";
  }
  var text2 = document.getElementById("text2");
  if (button === "antwort2") {
    text2.style.display = "block";
    week2.style.display = "block";
    answer1.style.display = "none";
    answer2.style.display = "none";
    score = score - 5;
  } else {
    text2.style.display = "none";
  }
  var text3 = document.getElementById("text3");
  if (button === "antwort3") {
    text3.style.display = "block";
    week2.style.display = "block";
    answer4.style.display = "none";
    answer3.style.display = "none";
    score = score + 5;
  } else {
    text3.style.display = "none";
  }
  var text4 = document.getElementById("text4");
  if (button === "antwort4") {
    text4.style.display = "block";
    week2.style.display = "block";
    answer3.style.display = "none";
    answer4.style.display = "none";
    score = score - 5;
  } else {
    text4.style.display = "none";
  }
  var text5 = document.getElementById("text5");
  if (button === "antwort5") {
    text5.style.display = "block";
    week2.style.display = "block";
    answer5.style.display = "none";
    answer6.style.display = "none";
    score = score + 5;
  } else {
    text5.style.display = "none";
  }
  var text6 = document.getElementById("text6");
  if (button === "antwort6") {
    text6.style.display = "block";
    week2.style.display = "block";
    answer5.style.display = "none";
    answer6.style.display = "none";
    score = score - 5;
  } else {
    text6.style.display = "none";
  }
  var text7 = document.getElementById("text7");
  if (button === "antwort7") {
    text7.style.display = "block";
    week2.style.display = "block";
    answer7.style.display = "none";
    answer8.style.display = "none";
    score = score + 5;
  } else {
    text7.style.display = "none";
  }
  var text8 = document.getElementById("text8");
  if (button === "antwort8") {
    text8.style.display = "block";
    week2.style.display = "block";
    answer7.style.display = "none";
    answer8.style.display = "none";
    score = score - 5;
  } else {
    text8.style.display = "none";
  }
  localStorage.setItem("scoreAmount", score);
}
function startNextWeek() {
  localStorage.setItem("currentWeek", week + 1);
  if (week <= 3) {
    window.location = "office.html";
  }
  if (week === 4 && score < 0) {
    window.location = "end_good.html";
  }
  if (week === 4 && score > 0) {
    window.location = "bad-ending.html";
  }
}

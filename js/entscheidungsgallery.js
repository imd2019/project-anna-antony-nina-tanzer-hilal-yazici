if (localStorage.getItem("currentWeek") === null) {
  localStorage.setItem("currentWeek", "1");
}

var currentWeek = localStorage.getItem("currentWeek");

// Standort Entscheidung
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "../assets/standort.png";
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("gps"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg").style.display = "none";
}

function saveDecision(checkBoxId, textBoxId, key, itterPost) {
  var checkBox = document.getElementById(checkBoxId);
  var text = document.getElementById(textBoxId);

  if (checkBox.checked === true) {
    text.style.display = "block";
    if (!!key && !!itterPost) {
      localStorage.setItem(
        key,
        JSON.stringify({ itterPost, week: currentWeek })
      );
    }
  } else {
    text.style.display = "none";
    localStorage.removeItem(key);
  }
}

function checktracking() {
  saveDecision("gps", "gpstext", "gps", "gpspost");
  saveDecision(
    "datenhinterlegung",
    "datenhinterlegungtext",
    "datenhinterlegung",
    "datenpost"
  );
  saveDecision("keins", "keintrackingtext");

  getScore();
}

function checkpost() {
  var post = document.getElementById("gpspost");
  if (window.getComputedStyle(text).display === "block") {
    post.style.display = "block";
  } else {
    post.style.display = "none";
  }
}

// Krankenkasse Entscheidung
var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = "../assets/krankenkassen.png";
};
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function () {
  modal2.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("jakrankenkasse"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg2").style.display = "none";
}

function checkkrankenkasse() {
  saveDecision("neinkrankenkasse", "neinkkstext");
  saveDecision(
    "jakrankenkasse",
    "jakkstext",
    "jakrankenkasse",
    "krankenkassepost"
  );
  getScore();
}

// Konzerne Entscheidung
var modal3 = document.getElementById("myModal3");
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = "../assets/konzerne.png";
};
var span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function () {
  modal3.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("jakonzerne"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg3").style.display = "none";
}

function checkkonzerne() {
  saveDecision("neinkonzerne", "neinkonzernetext");
  saveDecision("jakonzerne", "jakonzernetext", "jakonzerne", "konzernepost");
  getScore();
}

// Reisedienstleister Entscheidung
var modal4 = document.getElementById("myModal4");
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
img4.onclick = function () {
  modal4.style.display = "block";
  modalImg4.src = "../assets/reisedienstleister.png";
};
var span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function () {
  modal4.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("jareise"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg4").style.display = "none";
}

function checkreise() {
  saveDecision("neinreise", "neinreisetext");
  saveDecision("jareise", "jareisetext", "jareise", "reisepost");
  getScore();
}

// Kameras Entscheidung
var modal5 = document.getElementById("myModal5");
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
img5.onclick = function () {
  modal5.style.display = "block";
  modalImg5.src = "../assets/kameras.png";
};
var span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function () {
  modal5.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("jakameras"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg5").style.display = "none";
}

function checkkameras() {
  saveDecision("neinkameras", "neinkamerastext");
  saveDecision(
    "jagesichtserkennung",
    "jagesichtserkennungtext",
    "jagesichtserkennung",
    "gesichtserkennungpost"
  );
  saveDecision(
    "jawaermebild",
    "jawaermebildtext",
    "jawaermebild",
    "waermebildpost"
  );
  saveDecision(
    "waermebildgesichtserkennung",
    "waermebildgesichtserkennungtext",
    "waermebildgesichtserkennung",
    "waermebildgesichtserkennungpost"
  );
  saveDecision("jakameras", "jakamerastext", "jakameras", "kamerapost");
  getScore();
}

function checkbureaucracy() {
  saveDecision(
    "yesbureaucracy",
    "yesbureaucracytext",
    "bureaucracy",
    "bureaucracypost"
  );
  saveDecision("nobureaucracy", "nobureaucracytext");
  getScore();
}

function getScore() {
  var score = 0;

  if (document.getElementById("gps").checked === true) {
    score = score - 10;
  }
  if (document.getElementById("datenhinterlegung").checked === true) {
    score = score - 5;
  }
  if (document.getElementById("jakrankenkasse").checked === true) {
    score = score - 3;
  }
  if (document.getElementById("jakonzerne").checked === true) {
    score = score - 10;
  }

  if (document.getElementById("jareise").checked === true) {
    score = score - 7;
  }

  /* Kamera */
  if (document.getElementById("jagesichtserkennung").checked === true) {
    score = score - 6;
  }
  if (document.getElementById("jawaermebild").checked === true) {
    score = score - 8;
  }
  if (document.getElementById("jakameras").checked === true) {
    score = score - 10;
  }

  localStorage.setItem("scoreAmount", score);
}

function checkboxes() {
  var inputElems = document.getElementsByTagName("input"),
    count = 0;

  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
      count++;
    }
  }
  var woche1 = document.getElementById("weiter");
  if (count == 4) {
    woche1.style.display = "block";
  } else {
    woche1.style.display = "none";
  }
}

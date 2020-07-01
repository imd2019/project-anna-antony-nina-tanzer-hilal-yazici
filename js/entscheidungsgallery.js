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

// Realestate Entscheidung
var modal6 = document.getElementById("myModal6");
var img6 = document.getElementById("myImg6");
var modalImg6 = document.getElementById("img06");
img6.onclick = function () {
  modal6.style.display = "block";
  modalImg6.src = "../assets/immobilienberater.png";
};
var span6 = document.getElementsByClassName("close6")[0];
span6.onclick = function () {
  modal6.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesrealestate"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg6").style.display = "none";
}

function checkrealestate() {
  saveDecision(
    "yesrealestate",
    "yesrealestatetext",
    "realestate",
    "realestatepost"
  );
  saveDecision("norealestate", "norealestatetext");
  getScore();
}

// Berufsgruppen Entscheidung
var modal7 = document.getElementById("myModal7");
var img7 = document.getElementById("myImg7");
var modalImg7 = document.getElementById("img07");
img7.onclick = function () {
  modal7.style.display = "block";
  modalImg7.src = "../assets/berufsgruppen.png";
};
var span7 = document.getElementsByClassName("close7")[0];
span7.onclick = function () {
  modal7.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesjobfield"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg7").style.display = "none";
}

function checkjobfield() {
  saveDecision("yesjobfield", "yesjobfieldtext", "jobfield", "jobfieldpost");
  saveDecision("nojobfield", "nojobfieldtext");
  getScore();
}

// Kaution Entscheidung
var modal8 = document.getElementById("myModal8");
var img8 = document.getElementById("myImg8");
var modalImg8 = document.getElementById("img08");
img8.onclick = function () {
  modal8.style.display = "block";
  modalImg8.src = "../assets/kaution.png";
};
var span8 = document.getElementsByClassName("close8")[0];
span8.onclick = function () {
  modal8.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesdeposit"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg8").style.display = "none";
}

function checkjobfield() {
  saveDecision("yesdeposit", "yesdeposittext", "deposit", "depositpost");
  saveDecision("nodeposit", "nodeposittext");
  getScore();
}

// Cybertracking Entscheidung
var modal9 = document.getElementById("myModal9");
var img9 = document.getElementById("myImg9");
var modalImg9 = document.getElementById("img09");
img9.onclick = function () {
  modal9.style.display = "block";
  modalImg9.src = "../assets/cybertracking.png";
};
var span9 = document.getElementsByClassName("close9")[0];
span9.onclick = function () {
  modal9.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yescybertracking"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg9").style.display = "none";
}

function checkcybertracking() {
  saveDecision(
    "yescybertracking",
    "yescybertrackingtext",
    "cybertracking",
    "cybertrackingpost"
  );
  saveDecision(
    "cybertrackingandscore",
    "cybertrackingandscoretext",
    "cybertrackingandscore",
    "cybertrackingandscorepost"
  );
  saveDecision("nocybertracking", "nocybertrackingtext");
  getScore();
}

// VPN Entscheidung
var modal10 = document.getElementById("myModal10");
var img10 = document.getElementById("myImg10");
var modalImg10 = document.getElementById("img10");
img10.onclick = function () {
  modal10.style.display = "block";
  modalImg10.src = "../assets/vpn.png";
};
var span10 = document.getElementsByClassName("close10")[0];
span10.onclick = function () {
  modal10.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesvpn"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg10").style.display = "none";
}

function checkvpn() {
  saveDecision("yesvpn", "yesvpntext", "vpn", "vpnpost");
  saveDecision("novpn", "novpntext");
  getScore();
}

// Haustiere Entscheidung
var modal11 = document.getElementById("myModal11");
var img11 = document.getElementById("myImg11");
var modalImg11 = document.getElementById("img11");
img11.onclick = function () {
  modal11.style.display = "block";
  modalImg11.src = "../assets/haustiere.png";
};
var span11 = document.getElementsByClassName("close11")[0];
span11.onclick = function () {
  modal11.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yespets"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg11").style.display = "none";
}

function checkpets() {
  saveDecision("yespets", "yespetstext", "pets", "petpost");
  saveDecision("nopets", "nopetstext");
  getScore();
}

// Sicherheitsdienste und Polizei Entscheidung
var modal12 = document.getElementById("myModal12");
var img12 = document.getElementById("myImg12");
var modalImg12 = document.getElementById("img12");
img12.onclick = function () {
  modal12.style.display = "block";
  modalImg12.src = "../assets/security.png";
};
var span12 = document.getElementsByClassName("close12")[0];
span12.onclick = function () {
  modal12.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yessecurity"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg12").style.display = "none";
}

function checkpets() {
  saveDecision(
    "yessecurity",
    "yessecuritytext",
    "securitypolice",
    "securitypolicepost"
  );
  saveDecision("nosecurity", "nosecuritystext");
  getScore();
}

// Bildung Entscheidung
var modal13 = document.getElementById("myModal13");
var img13 = document.getElementById("myImg13");
var modalImg13 = document.getElementById("img13");
img13.onclick = function () {
  modal13.style.display = "block";
  modalImg13.src = "../assets/bildung.png";
};
var span13 = document.getElementsByClassName("close13")[0];
span13.onclick = function () {
  modal13.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yeseducation"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg13").style.display = "none";
}

function checkeducation() {
  saveDecision(
    "yeseducation",
    "yeseducationtext",
    "education",
    "educationpost"
  );
  saveDecision("noeducation", "noeducationtext");
  getScore();
}

// Kredite Entscheidung
var modal14 = document.getElementById("myModal14");
var img14 = document.getElementById("myImg14");
var modalImg14 = document.getElementById("img14");
img14.onclick = function () {
  modal14.style.display = "block";
  modalImg14.src = "../assets/kredite.png";
};
var span14 = document.getElementsByClassName("close14")[0];
span14.onclick = function () {
  modal14.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesloan"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg14").style.display = "none";
}

function checkloan() {
  saveDecision("yesloan", "yesloantext", "loans", "loanpost");
  saveDecision("noloan", "noloantext");
  getScore();
}

// Schwarze Liste Entscheidung
var modal15 = document.getElementById("myModal15");
var img15 = document.getElementById("myImg15");
var modalImg15 = document.getElementById("img15");
img15.onclick = function () {
  modal15.style.display = "block";
  modalImg15.src = "../assets/blacklist.png";
};
var span15 = document.getElementsByClassName("close15")[0];
span15.onclick = function () {
  modal15.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesloan"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg15").style.display = "none";
}

function checkloan() {
  saveDecision(
    "yesblacklist",
    "yesblacklisttext",
    "blacklist",
    "blacklistpost"
  );
  saveDecision("noblacklist", "noblacklisttext");
  getScore();
}

// Bürokratie Entscheidung
var modal16 = document.getElementById("myModal16");
var img16 = document.getElementById("myImg16");
var modalImg16 = document.getElementById("img16");
img16.onclick = function () {
  modal16.style.display = "block";
  modalImg16.src = "../assets/buerokratie.png";
};
var span16 = document.getElementsByClassName("close16")[0];
span16.onclick = function () {
  modal16.style.display = "none";
};

var displayPaper = JSON.parse(localStorage.getItem("yesbureaucracy"));
if (!!displayPaper && displayPaper.week <= currentWeek) {
  document.getElementById("myImg16").style.display = "none";
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

if (document.getElementById("yesrealestate").checked === true) {
  score = score - 2;
}
if (document.getElementById("yesjobfield").checked === true) {
  score = score + 3;
}
if (document.getElementById("yesdeposit").checked === true) {
  score = score + 6;
}
if (document.getElementById("yescybertracking").checked === true) {
  score = score - 9;
}
if (document.getElementById("cybertrackingandscore").checked === true) {
  score = score - 10;
}
if (document.getElementById("yesvpn").checked === true) {
  score = score - 7;
}
if (document.getElementById("yespets").checked === true) {
  score = score - 3;
}
if (document.getElementById("yessecurity").checked === true) {
  score = score - 7;
}
if (document.getElementById("yeseducation").checked === true) {
  score = score - 4;
}
if (document.getElementById("yesloan").checked === true) {
  score = score - 5;
}
if (document.getElementById("yesblacklist").checked === true) {
  score = score - 4;
}
if (document.getElementById("yesbureaucracy").checked === true) {
  score = score - 3;
}
if (document.getElementById("jareise").checked === true) {
  score = score - 7;
}
if (document.getElementById("keins").checked === true) {
  score = score + 1;
}
if (document.getElementById("neinkrankenkasse").checked === true) {
  score = score + 1;
}
if (document.getElementById("neinkonzerne").checked === true) {
  score = score + 1;
}
if (document.getElementById("neinreise").checked === true) {
  score = score + 1;
}
if (document.getElementById("neinkameras").checked === true) {
  score = score + 1;
}
if (document.getElementById("norealestate").checked === true) {
  score = score + 1;
}
if (document.getElementById("nojobfield").checked === true) {
  score = score + 1;
}
if (document.getElementById("nodeposit").checked === true) {
  score = score + 1;
}
if (document.getElementById("nocybertracking").checked === true) {
  score = score + 1;
}
if (document.getElementById("novpn").checked === true) {
  score = score + 1;
}
if (document.getElementById("nopets").checked === true) {
  score = score + 1;
}
if (document.getElementById("nosecurity").checked === true) {
  score = score + 1;
}
if (document.getElementById("noeducation").checked === true) {
  score = score + 1;
}
if (document.getElementById("noloan").checked === true) {
  score = score + 1;
}
if (document.getElementById("noblacklist").checked === true) {
  score = score + 1;
}
if (document.getElementById("nobureaucracy").checked === true) {
  score = score + 1;
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

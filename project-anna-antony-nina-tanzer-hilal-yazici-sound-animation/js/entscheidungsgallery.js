if (localStorage.getItem("currentWeek") === null) {
  localStorage.setItem("currentWeek", "1");
}

var currentWeek = localStorage.getItem("currentWeek");

if (localStorage.getItem("scoreAmount") === null) {
  localStorage.setItem("scoreAmount", "0");
}

// Postit White

var postitmodal1 = document.getElementById("PostIt1Modal");
var imgP1 = document.getElementById("PostIt1");
var modalImgP1 = document.getElementById("Post01");
imgP1.onclick = function () {
  postitmodal1.style.display = "block";
  modalImgP1.src = "../assets/pinboard/pw1.png";
};
var spanP1 = document.getElementsByClassName("closepostit1")[0];
spanP1.onclick = function () {
  postitmodal1.style.display = "none";
};

//2
var postitmodal4 = document.getElementById("PostIt4Modal");
var imgP4 = document.getElementById("PostIt4");
var modalImgP4 = document.getElementById("Post04");
imgP4.onclick = function () {
  postitmodal4.style.display = "block";
  modalImgP4.src = "../assets/pinboard/pw4.png";
};
var spanP4 = document.getElementsByClassName("closepostit4")[0];
spanP4.onclick = function () {
  postitmodal4.style.display = "none";
};
//3
var postitmodal5 = document.getElementById("PostIt5Modal");
var imgP5 = document.getElementById("PostIt5");
var modalImgP5 = document.getElementById("Post05");
imgP5.onclick = function () {
  postitmodal5.style.display = "block";
  modalImgP5.src = "../assets/pinboard/pw5.png";
};
var spanP5 = document.getElementsByClassName("closepostit5")[0];
spanP5.onclick = function () {
  postitmodal5.style.display = "none";
};
//4
var postitmodal6 = document.getElementById("PostIt6Modal");
var imgP6 = document.getElementById("PostIt6");
var modalImgP6 = document.getElementById("Post06");
imgP6.onclick = function () {
  postitmodal6.style.display = "block";
  modalImgP6.src = "../assets/pinboard/pw6.png";
};
var spanP6 = document.getElementsByClassName("closepostit6")[0];
spanP6.onclick = function () {
  postitmodal6.style.display = "none";
};
//5
var postitmodal7 = document.getElementById("PostIt7Modal");
var imgP7 = document.getElementById("PostIt7");
var modalImgP7 = document.getElementById("Post07");
imgP7.onclick = function () {
  postitmodal7.style.display = "block";
  modalImgP7.src = "../assets/pinboard/pw7.png";
};
var spanP7 = document.getElementsByClassName("closepostit7")[0];
spanP7.onclick = function () {
  postitmodal7.style.display = "none";
};
// Postit 'Green
var postitmodal2 = document.getElementById("PostIt2Modal");
var imgP2 = document.getElementById("PostIt2");
var modalImgP2 = document.getElementById("Post02");
imgP2.onclick = function () {
  postitmodal2.style.display = "block";
  modalImgP2.src = "../assets/pinboard/pw2.png";
};
var spanP2 = document.getElementsByClassName("closepostit2")[0];
spanP2.onclick = function () {
  postitmodal2.style.display = "none";
};

// PostIt Red
var postitmodal3 = document.getElementById("PostIt3Modal");
var imgP3 = document.getElementById("PostIt3");
var modalImgP3 = document.getElementById("Post03");
imgP3.onclick = function () {
  postitmodal3.style.display = "block";
  modalImgP3.src = "../assets/pinboard/pw3.png";
};
var spanP3 = document.getElementsByClassName("closepostit3")[0];
spanP3.onclick = function () {
  postitmodal3.style.display = "none";
};
// Postit End

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

/**
 * Diese Funktion schaut, ob der currentWeek Wert einer gewählten Entscheidung kleiner ist,
 * als der aktuelle Wert. Wenn das der Fall ist, soll das Papier hidden sein.
 * @param {Array<string>} keys localStorage keys der zum Paper gehörigen Entscheidungen
 * @param {string} elementId Die ID des Paper HTML Element
 */
function checkPaper(keys, elementId) {
  var paperShouldBeHidden = false;
  for (const key of keys) {
    // lade localstorage item mit dem key string
    var displayPaper = JSON.parse(localStorage.getItem(key));
    // überprüfe ob die week des items kleiner current week ist
    if (!!displayPaper && parseInt(displayPaper.week) < currentWeek) {
      paperShouldBeHidden = true;
    }
    // wenn ja setze die boolean variable true
  }
  if (paperShouldBeHidden === true)
    // setze HTML item mit der Funktion übergebener elementId display none
    document.getElementById(elementId).style.display = "none";
}

checkPaper(["gps", "datenhinterlegung", "keintracking"], "myImg");
checkPaper(["jakrankenkasse", "keinkks"], "myImg2");
checkPaper(["jakonzerne", "keinkonzerne"], "myImg3");
checkPaper(["jareise", "keinreise"], "myImg4");
checkPaper(
  [
    "jakameras",
    "jagesichtserkennung",
    "jawaermebild",
    "waermebildgesichtserkennung",
    "keinkameras",
  ],
  "myImg5"
);
checkPaper(["yesrealestate", "norealestate"], "myImg6");
checkPaper(["yesjobfield", "nojobfield"], "myImg7");
checkPaper(["yesdeposit", "nodeposit"], "myImg8");
checkPaper(
  ["yescybertracking", "cybertrackingandscore", "nocybertracking"],
  "myImg9"
);
checkPaper(["yesvpn", "novpn"], "myImg10");
checkPaper(["yespets", "nopets"], "myImg11");
checkPaper(["yessecurity", "nosecurity"], "myImg12");
checkPaper(["yeseducation", "noeducation"], "myImg13");
checkPaper(["yesloan", "noloan"], "myImg14");
checkPaper(["yesblacklist", "noblacklist"], "myImg15");
checkPaper(["yesbureaucracy", "nobureaucracy"], "myImg16");

var button1 = new CheckBox("gps", "gpstext", "gps", "gpspost", -10);
var button2 = new CheckBox(
  "datenhinterlegung",
  "datenhinterlegungtext",
  "datenhinterlegung",
  "datenpost",
  -5
);
var button3 = new CheckBox("keins", "keintrackingtext", "keintracking", "", 1);

button1.initEventListener([button2, button3]);
button2.initEventListener([button1, button3]);
button3.initEventListener([button2, button1]);

var button4 = new CheckBox("neinkrankenkasse", "neinkkstext", "keinkks", "", 1);
var button5 = new CheckBox(
  "jakrankenkasse",
  "jakkstext",
  "jakrankenkasse",
  "krankenkassepost",
  -3
);
button4.initEventListener([button5]);
button5.initEventListener([button4]);

var button6 = new CheckBox(
  "neinkonzerne",
  "neinkonzernetext",
  "keinkonzerne",
  "",
  1
);

var button7 = new CheckBox(
  "jakonzerne",
  "jakonzernetext",
  "jakonzerne",
  "konzernepost",
  -10
);
button6.initEventListener([button7]);
button7.initEventListener([button6]);

var button8 = new CheckBox("neinreise", "neinreisetext", "keinreise", "", 1);
var button9 = new CheckBox(
  "jareise",
  "jareisetext",
  "jareise",
  "reisepost",
  -7
);
button8.initEventListener([button9]);
button9.initEventListener([button8]);

var button10 = new CheckBox(
  "neinkameras",
  "neinkamerastext",
  "keinkameras",
  "",
  1
);
var button11 = new CheckBox(
  "jagesichtserkennung",
  "jagesichtserkennungtext",
  "jagesichtserkennung",
  "gesichtserkennungpost",
  -6
);
var button12 = new CheckBox(
  "jawaermebild",
  "jawaermebildtext",
  "jawaermebild",
  "waermebildpost",
  -8
);
var button13 = new CheckBox(
  "waermebildgesichtserkennung",
  "waermebildgesichtserkennungtext",
  "waermebildgesichtserkennung",
  "waermebildgesichtserkennungpost",
  -10
);
var button14 = new CheckBox(
  "jakameras",
  "jakamerastext",
  "jakameras",
  "kamerapost",
  -9
);
button10.initEventListener([button11, button12, button13, button14]);
button11.initEventListener([button10, button12, button13, button14]);
button12.initEventListener([button11, button10, button13, button14]);
button13.initEventListener([button11, button10, button12, button14]);
button14.initEventListener([button11, button10, button12, button13]);

var button15 = new CheckBox(
  "yesrealestate",
  "yesrealestatetext",
  "realestate",
  "realestatepost",
  -2
);
var button16 = new CheckBox(
  "norealestate",
  "norealestatetext",
  "norealestate",
  "",
  1
);
button15.initEventListener([button16]);
button16.initEventListener([button15]);

var button17 = new CheckBox(
  "yesjobfield",
  "yesjobfieldtext",
  "jobfield",
  "jobfieldpost",
  3
);
var button18 = new CheckBox(
  "nojobfield",
  "nojobfieldtext",
  "nojobfield",
  "",
  1
);
button17.initEventListener([button18]);
button18.initEventListener([button17]);

var button19 = new CheckBox(
  "yesdeposit",
  "yesdeposittext",
  "deposit",
  "depositpost",
  6
);
var button20 = new CheckBox("nodeposit", "nodeposittext", "nodeposit", "", 1);
button19.initEventListener([button20]);
button20.initEventListener([button19]);

var button21 = new CheckBox(
  "yescybertracking",
  "yescybertrackingtext",
  "cybertracking",
  "cybertrackingpost",
  -9
);
var button22 = new CheckBox(
  "cybertrackingandscore",
  "cybertrackingandscoretext",
  "cybertrackingandscore",
  "cybertrackingandscorepost",
  -10
);
var button23 = new CheckBox(
  "nocybertracking",
  "nocybertrackingtext",
  "nocybertracking",
  "",
  1
);
button21.initEventListener([button22, button23]);
button22.initEventListener([button21, button23]);
button23.initEventListener([button21, button22]);

var button24 = new CheckBox("yesvpn", "yesvpntext", "vpn", "vpnpost", -7);
var button25 = new CheckBox("novpn", "novpntext", "novpn", "", 1);
button24.initEventListener([button25]);
button25.initEventListener([button24]);

var button26 = new CheckBox("yespets", "yespetstext", "pets", "petpost", -3);
var button27 = new CheckBox("nopets", "nopetstext", "nopets", "", 1);
button26.initEventListener([button27]);
button27.initEventListener([button26]);

var button28 = new CheckBox(
  "yessecurity",
  "yessecuritytext",
  "securitypolice",
  "securitypolicepost",
  -7
);
var button29 = new CheckBox(
  "nosecurity",
  "nosecuritystext",
  "nosecurity",
  "",
  1
);
button28.initEventListener([button29]);
button29.initEventListener([button28]);

var button30 = new CheckBox(
  "yeseducation",
  "yeseducationtext",
  "education",
  "educationpost",
  -4
);
var button31 = new CheckBox(
  "noeducation",
  "noeducationtext",
  "noeducation",
  "",
  1
);
button30.initEventListener([button31]);
button31.initEventListener([button30]);

var button32 = new CheckBox("yesloan", "yesloantext", "loans", "loanpost", -5);
var button33 = new CheckBox("noloan", "noloantext", "noloans", "", 1);
button32.initEventListener([button33]);
button33.initEventListener([button32]);

var button34 = new CheckBox(
  "yesblacklist",
  "yesblacklisttext",
  "blacklist",
  "blacklistpost",
  -4
);
var button35 = new CheckBox(
  "noblacklist",
  "noblacklisttext",
  "noblacklists",
  "",
  1
);
button34.initEventListener([button35]);
button35.initEventListener([button34]);

var button36 = new CheckBox(
  "yesbureaucracy",
  "yesbureaucracytext",
  "bureaucracy",
  "bureaucracypost",
  -3
);
var button37 = new CheckBox(
  "nobureaucracy",
  "nobureaucracytext",
  "nobureaucracy",
  "",
  1
);
button36.initEventListener([button37]);
button37.initEventListener([button36]);

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

function checkboxes() {
  var inputElems = document.getElementsByTagName("input"),
    count = 0;

  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type == "radio" && inputElems[i].checked == true) {
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

//Bar

//button1
const gps = document.getElementById("gps");
gps.addEventListener("click", () => {
  health.value -= 10;
});

//button2
const datenhinterlegung = document.getElementById("datenhinterlegung");
datenhinterlegung.addEventListener("click", () => {
  health.value -= 5;
});

//button3
const keins = document.getElementById("keins");
keins.addEventListener("click", () => {
  health.value += 1;
});

//button4
const neinkrankenkasse = document.getElementById("neinkrankenkasse");
neinkrankenkasse.addEventListener("click", () => {
  health.value += 1;
});

//button5
const jakrankenkasse = document.getElementById("jakrankenkasse");
jakrankenkasse.addEventListener("click", () => {
  health.value -= 3;
});

//button6
const neinkonzerne = document.getElementById("neinkonzerne");
neinkonzerne.addEventListener("click", () => {
  health.value += 1;
});

//button7
const jakonzerne = document.getElementById("jakonzerne");
jakonzerne.addEventListener("click", () => {
  health.value -= 10;
});

//button8
const neinreise = document.getElementById("neinreise");
neinreise.addEventListener("click", () => {
  health.value += 1;
});

//button9
const jareise = document.getElementById("jareise");
jareise.addEventListener("click", () => {
  health.value -= 7;
});

//button10
const neinkameras = document.getElementById("neinkameras");
neinkameras.addEventListener("click", () => {
  health.value += 1;
});

//button11
const jagesichtserkennung = document.getElementById("jagesichtserkennung");
jagesichtserkennung.addEventListener("click", () => {
  health.value -= 6;
});

//button12
const jawaermebild = document.getElementById("jawaermebild");
jawaermebild.addEventListener("click", () => {
  health.value -= 8;
});

//button13
const waermebildgesichtserkennung = document.getElementById(
  "waermebildgesichtserkennung"
);
waermebildgesichtserkennung.addEventListener("click", () => {
  health.value -= 10;
});

//button14
const jakameras = document.getElementById("jakameras");
jakameras.addEventListener("click", () => {
  health.value -= 9;
});

//button15
const yesrealestate = document.getElementById("yesrealestate");
yesrealestate.addEventListener("click", () => {
  health.value -= 2;
});

//button16
const norealestate = document.getElementById("norealestate");
norealestate.addEventListener("click", () => {
  health.value += 1;
});

//button17
const yesjobfield = document.getElementById("yesjobfield");
yesjobfield.addEventListener("click", () => {
  health.value += 3;
});

//button18
const nojobfield = document.getElementById("nojobfield");
nojobfield.addEventListener("click", () => {
  health.value += 1;
});

//button19
const yesdeposit = document.getElementById("yesdeposit");
yesdeposit.addEventListener("click", () => {
  health.value += 6;
});

//button20
const nodeposit = document.getElementById("nodeposit");
nodeposit.addEventListener("click", () => {
  health.value += 1;
});

//button21
const yescybertracking = document.getElementById("yescybertracking");
yescybertracking.addEventListener("click", () => {
  health.value -= 9;
});

//button22
const cybertrackingandscore = document.getElementById("cybertrackingandscore");
cybertrackingandscore.addEventListener("click", () => {
  health.value -= 10;
});

//button23
const nocybertracking = document.getElementById("nocybertracking");
nocybertracking.addEventListener("click", () => {
  health.value += 1;
});

//button24
const yesvpn = document.getElementById("yesvpn");
yesvpn.addEventListener("click", () => {
  health.value -= 7;
});

//button25
const novpn = document.getElementById("novpn");
novpn.addEventListener("click", () => {
  health.value += 1;
});

//button26
const yespets = document.getElementById("yespets");
yespets.addEventListener("click", () => {
  health.value -= 3;
});

//button27
const nopets = document.getElementById("nopets");
nopets.addEventListener("click", () => {
  health.value += 1;
});

//button28
const yessecurity = document.getElementById("yessecurity");
yessecurity.addEventListener("click", () => {
  health.value -= 7;
});

//button29
const nosecurity = document.getElementById("nosecurity");
nosecurity.addEventListener("click", () => {
  health.value += 1;
});

//button30
const yeseducation = document.getElementById("yeseducation");
yeseducation.addEventListener("click", () => {
  health.value -= 4;
});

//button31
const noeducation = document.getElementById("noeducation");
noeducation.addEventListener("click", () => {
  health.value += 1;
});

//button32
const yesloan = document.getElementById("yesloan");
yesloan.addEventListener("click", () => {
  health.value -= 5;
});

//button33
const noloan = document.getElementById("noloan");
noloan.addEventListener("click", () => {
  health.value += 1;
});

//button34
const yesblacklist = document.getElementById("yesblacklist");
yesblacklist.addEventListener("click", () => {
  health.value -= 4;
});

//button35
const noblacklist = document.getElementById("noblacklist");
noblacklist.addEventListener("click", () => {
  health.value += 1;
});

//button36
const yesbureaucracy = document.getElementById("yesbureaucracy");
yesbureaucracy.addEventListener("click", () => {
  health.value -= 3;
});

//button37
const nobureaucracy = document.getElementById("nobureaucracy");
nobureaucracy.addEventListener("click", () => {
  health.value += 1;
});

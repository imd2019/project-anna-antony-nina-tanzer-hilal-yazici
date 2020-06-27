var gpspost = localStorage.getItem("gps");
if (gpspost === "gpspost") {
  document.getElementById("gpspost").style.display = "block";
} else {
  document.getElementById("gpspost").style.display = "none";
}
var datenpost = localStorage.getItem("datenhinterlegung");
if (datenpost === "datenpost") {
  document.getElementById("datenpost").style.display = "block";
} else {
  document.getElementById("datenpost").style.display = "none";
}
var krankenkassepost = localStorage.getItem("jakrankenkasse");
if (krankenkassepost === "krankenkassepost") {
  document.getElementById("krankenkassepost").style.display = "block";
} else {
  document.getElementById("krankenkassepost").style.display = "none";
}
var konzernepost = localStorage.getItem("jakonzerne");
if (konzernepost === "konzernepost") {
  document.getElementById("konzernepost").style.display = "block";
} else {
  document.getElementById("konzernepost").style.display = "none";
}
var reisepost = localStorage.getItem("jareise");
if (reisepost === "reisepost") {
  document.getElementById("reisepost").style.display = "block";
} else {
  document.getElementById("reisepost").style.display = "none";
}
var gesichtserkennungpost = localStorage.getItem("jagesichtserkennung");
if (gesichtserkennungpost === "gesichtserkennungpost") {
  document.getElementById("gesichtserkennungpost").style.display = "block";
} else {
  document.getElementById("gesichtserkennungpost").style.display = "none";
}
var waermebildpost = localStorage.getItem("jawaermebild");
if (waermebildpost === "waermebildpost") {
  document.getElementById("waermebildpost").style.display = "block";
} else {
  document.getElementById("waermebildpost").style.display = "none";
}
var kamerapost = localStorage.getItem("jakameras");
if (kamerapost === "kamerapost") {
  document.getElementById("kamerapost").style.display = "block";
} else {
  document.getElementById("kamerapost").style.display = "none";
}
var waermebildgesichtserkennungpost = localStorage.getItem(
  "waermebildgesichtserkennung"
);
if (waermebildgesichtserkennungpost === "waermebildgesichtserkennungpost") {
  document.getElementById("waermebildgesichtserkennungpost").style.display =
    "block";
} else {
  document.getElementById("waermebildgesichtserkennungpost").style.display =
    "none";
}

/**
 * Zeige die End-Sätze der in den 4 Wochen gewählten Entscheidungen.
 * @param {*} key localStorage key der gewählten Entscheidung
 * @param {*} elementId ID des jeweiligen Textes
 */
function checkEnd(key, elementId) {
  var displayEnd = JSON.parse(localStorage.getItem(key));
  if (!!displayEnd) {
    document.getElementById(elementId).style.display = "block";
  }
}

checkEnd("gps", "gpsend");
checkEnd("datenhinterlegung", "datenhinterlegungend");
checkEnd("jakrankenkasse", "jakrankenkasseend");
checkEnd("jakonzerne", "jakonzerneend");
checkEnd("jareise", "jareiseend");
checkEnd("jagesichtserkennung", "jagesichtserkennungend");
checkEnd("jawaermebild", "jawaermebildend");
checkEnd("waermebildgesichtserkennung", "waermebildgesichtserkennungend");
checkEnd("jakameras", "jakamerasend");
checkEnd("yesrealestate", "yesrealestateend");
checkEnd("yesjobfield", "yesjobfieldend");
checkEnd("yesdeposit", "yesdepositend");
checkEnd("yescybertracking", "yescybertrackingend");
checkEnd("cybertrackingandscore", "cybertrackingandscoreend");
checkEnd("yesvpn", "yesvpnend");
checkEnd("yespets", "yespetsend");
checkEnd("yessecurity", "yessecurityend");
checkEnd("yeseducation", "yeseducationend");
checkEnd("yesloan", "yesloanend");
checkEnd("yesblacklist", "yesblacklistend");
checkEnd("yesbureaucracy", "yesbureaucracyend");

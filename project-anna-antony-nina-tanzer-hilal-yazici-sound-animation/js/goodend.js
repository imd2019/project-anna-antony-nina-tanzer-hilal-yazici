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
checkEnd("personaldata", "personaldataend");
checkEnd("healthinsurance", "healthinsuranceend");
checkEnd("corporation", "corporationend");
checkEnd("travel", "travelend");
checkEnd("facialrecognition", "facialrecognitionend");
checkEnd("thermalimage", "thermalimageend");
checkEnd("thermalimagefacialrecognition", "thermalimagefacialrecognitionend");
checkEnd("cameras", "camerasend");
checkEnd("realestate", "realestateend");
checkEnd("jobfield", "jobfieldend");
checkEnd("deposit", "depositend");
checkEnd("cybertracking", "cybertrackingend");
checkEnd("cybertrackingandscore", "cybertrackingandscoreend");
checkEnd("vpn", "vpnend");
checkEnd("pets", "petsend");
checkEnd("security", "securityend");
checkEnd("education", "educationend");
checkEnd("loan", "loanend");
checkEnd("blacklist", "blacklistend");
checkEnd("bureaucracy", "bureaucracyend");

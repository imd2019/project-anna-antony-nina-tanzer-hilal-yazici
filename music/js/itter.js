/**
 *
 * @param {*} key
 * @param {*} elementId
 */
function checkPost(key, elementId) {
  var displayPost = JSON.parse(localStorage.getItem(key));
  if (!!displayPost && parseInt(displayPost.week) === currentWeek) {
    document.getElementById(elementId).style.display = "block";
  }
}

var currentWeek = parseInt(localStorage.getItem("currentWeek"));

checkPost("gps", "gpspost");
checkPost("datenhinterlegung", "datenpost");
checkPost("jakrankenkasse", "krankenkassepost");
checkPost("jakonzerne", "konzernepost");
checkPost("jareise", "reisepost");
checkPost("jagesichtserkennung", "gesichtserkennungpost");
checkPost("jawaermebild", "waermebildpost");
checkPost("kamerapost", "jakameras");
checkPost("waermebildgesichtserkennung", "waermebildgesichtserkennungpost");
checkPost("realestate", "realestatepost");
checkPost("jobfield", "jobfieldpost");
checkPost("deposit", "depositpost");
checkPost("cybertracking", "cybertrackingpost");
checkPost("cybertrackingandscore", "cybertrackingandscorepost");
checkPost("vpn", "vpnpost");
checkPost("pets", "petpost");
checkPost("securitypolice", "securitypolicepost");
checkPost("education", "educationpost");
checkPost("loans", "loanpost");
checkPost("blacklist", "blacklistpost");
checkPost("bureaucracy", "bureaucracypost");

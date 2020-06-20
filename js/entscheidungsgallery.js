// Standort Entscheidung
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = "../assets/standort.png";
};
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

function checktracking() {
    var checkBox = document.getElementById("gps");
    var text = document.getElementById("gpstext");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

    var checkBox2 = document.getElementById("datenhinterlegung");
    var text2 = document.getElementById("datenhinterlegungtext");
    if (checkBox2.checked == true) {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }

    var checkBox3 = document.getElementById("keins");
    var text3 = document.getElementById("keintrackingtext");
    if (checkBox3.checked == true) {
        text3.style.display = "block";
    } else {
        text3.style.display = "none";
    }
}
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
img2.onclick = function() {
    modal2.style.display = "block";
    modalImg2.src = "../assets/krankenkassen.png";
};
var span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() {
    modal2.style.display = "none";
};

function checkkrankenkasse() {
    var checkBox4 = document.getElementById("neinkrankenkasse");
    var text4 = document.getElementById("neinkkstext");
    if (checkBox4.checked == true) {
        text4.style.display = "block";
    } else {
        text4.style.display = "none";
    }

    var checkBox5 = document.getElementById("jakrankenkasse");
    var text5 = document.getElementById("jakkstext");
    if (checkBox5.checked == true) {
        text5.style.display = "block";
    } else {
        text5.style.display = "none";
    }
}
// Konzerne Entscheidung
var modal3 = document.getElementById("myModal3");
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
img3.onclick = function() {
    modal3.style.display = "block";
    modalImg3.src = "../assets/konzerne.png";
};
var span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() {
    modal3.style.display = "none";
};

function checkkonzerne() {
    var checkBox6 = document.getElementById("neinkonzerne");
    var text6 = document.getElementById("neinkonzernetext");
    if (checkBox6.checked == true) {
        text6.style.display = "block";
    } else {
        text6.style.display = "none";
    }

    var checkBox7 = document.getElementById("jakonzerne");
    var text7 = document.getElementById("jakonzernetext");
    if (checkBox7.checked == true) {
        text7.style.display = "block";
    } else {
        text7.style.display = "none";
    }
}
// Reisedienstleister Entscheidung
var modal4 = document.getElementById("myModal4");
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
img4.onclick = function() {
    modal4.style.display = "block";
    modalImg4.src = "../assets/reisedienstleister.png";
};
var span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function() {
    modal4.style.display = "none";
};

function checkreise() {
    var checkBox8 = document.getElementById("neinreise");
    var text8 = document.getElementById("neinreisetext");
    if (checkBox8.checked == true) {
        text8.style.display = "block";
    } else {
        text8.style.display = "none";
    }

    var checkBox9 = document.getElementById("jareise");
    var text9 = document.getElementById("jareisetext");
    if (checkBox9.checked == true) {
        text9.style.display = "block";
    } else {
        text9.style.display = "none";
    }
}
// Kameras Entscheidung
var modal5 = document.getElementById("myModal5");
var img5 = document.getElementById("myImg5");
var modalImg5 = document.getElementById("img05");
img5.onclick = function() {
    modal5.style.display = "block";
    modalImg5.src = "../assets/kameras.png";
};
var span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function() {
    modal5.style.display = "none";
};

function checkkameras() {
    var checkBox10 = document.getElementById("neinkameras");
    var text10 = document.getElementById("neinkamerastext");
    if (checkBox10.checked == true) {
        text10.style.display = "block";
    } else {
        text10.style.display = "none";
    }
    var checkBox11 = document.getElementById("jagesichtserkennung");
    var text11 = document.getElementById("jagesichtserkennungtext");
    if (checkBox11.checked == true) {
        text11.style.display = "block";
    } else {
        text11.style.display = "none";
    }
    var checkBox12 = document.getElementById("jawaermebild");
    var text12 = document.getElementById("jawaermebildtext");
    if (checkBox12.checked == true) {
        text12.style.display = "block";
    } else {
        text12.style.display = "none";
    }
    var checkBox13 = document.getElementById("jakameras");
    var text13 = document.getElementById("jakamerastext");
    if (checkBox13.checked == true) {
        text13.style.display = "block";
    } else {
        text13.style.display = "none";
    }
}

function checkboxes() {
    var inputElems = document.getElementsByTagName("input"),
        count = 0;

    for (var i = 0; i < inputElems.length; i++) {
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true) {
            count++;
            console.log(count);
        }
    }
    var woche1 = document.getElementById("weiter");
    if (count == 4) {
        woche1.style.display = "block";
    } else {
        woche1.style.display = "none";
    }
}
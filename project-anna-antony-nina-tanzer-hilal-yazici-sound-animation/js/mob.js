var score = parseInt(localStorage.getItem("scoreAmount"));

(function () {
  if (score <= -1 && score >= -72) {
    mob5.style.display = "none";
    mob10.style.display = "none";
  }

  if (score <= 22 && score >= 0) {
    mob5.style.display = "none";
    mob6.style.display = "none";
    mob7.style.display = "none";
  }

  if (score >= 23) {
    answer7.style.display = "block";
    answer8.style.display = "block";
  }
})();

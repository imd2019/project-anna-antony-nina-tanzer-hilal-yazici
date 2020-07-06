health = document.getElementById("health");
const addHp = document.getElementById("addHp");
const loseHp = document.getElementById("loseHp");
loseHp.addEventListener("click", () => {
  health.value -= 1;
});
addHp.addEventListener("click", () => {
  health.value += 1;
});

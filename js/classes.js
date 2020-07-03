class Decision {
  constructor(key, itterPost, diff) {
    this.key = key;
    this.itterPost = itterPost;
    this.diff = diff;
  }

  save() {
    localStorage.setItem(
      this.key,
      JSON.stringify({
        itterPost: this.itterPost,
        week: localStorage.getItem("currentWeek"),
      })
    );
    this.changeScore(this.diff);
  }

  delete() {
    localStorage.removeItem(this.key);
    this.changeScore(-this.diff);
  }

  changeScore(diff) {
    localStorage.setItem(
      "scoreAmount",
      parseInt(localStorage.getItem("scoreAmount")) + diff
    );
  }
}

class CheckBox {
  /**
   * Diese Funktion speichert die gewählten Entscheidungen und den dazugehörigen Itterpost (falls vorhanden) mit der jeweiligen Woche, in der es ausgewählt wurde.
   * @param {*} checkBoxId ID der Checkbox
   * @param {*} textBoxId ID des <li>, das auf dem PC Bildschirm erscheint
   * @param {*} key localStorage key der gewählten Entscheidung
   * @param {*} itterPost Speichert, welcher Itterpost angezeigt werden soll und in welcher Woche dieser angezeigt wird.
   */
  constructor(checkBoxId, textBoxId, key, itterPost, diff) {
    this.decision = new Decision(key, itterPost, diff);
    this.checkBox = document.getElementById(checkBoxId);
    this.textBox = document.getElementById(textBoxId);
    this.checkBox.addEventListener(
      "click",
      function () {
        this.saveDecision();
      }.bind(this)
    );
  }

  saveDecision() {
    if (this.checkBox.checked === true) {
      this.textBox.style.display = "block";
      this.decision.save();
    } else {
      this.textBox.style.display = "none";
      this.decision.delete();
    }
  }
}

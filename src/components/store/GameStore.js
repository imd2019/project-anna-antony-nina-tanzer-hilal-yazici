import { extendObservable } from "mobx";
import { decorate, observable, computed } from "mobx";

class GameStore {
  constructor() {
    extendObservable(this, {
      gameState: "office",
      score: 0,
      decisions: {
        gpsText: false,
        datenhinterlegungText: false,
        keintrackingText: false,
        neinkksText: false,
        jakksText: false,
        neinkonzerneText: false,
        jakonzerneText: false,
        neinreiseText: false,
        jareiseText: false,
        neinkamerasText: false,
        jakamerasText: false,
        jagesichtserkennungText: false,
        jawaermebildText: false,
      },
    });
  }

  setGameState(value) {
    this.gameState = value;
  }

  get getDecisionsAmount() {
    let count = 0;

    Object.keys(this.decisions).forEach((key, index) => {
      if (this.decisions[key] === true) {
        count++;
      }
    });
    return count;
  }
}
decorate(GameStore, {
  getDecisionsAmount: computed,
});
export default GameStore;

import React from "react";
import GameStore from "../../store/GameStore";

const gs = new GameStore();

const storesContext = React.createContext(gs);

export function useStores() {
  return React.useContext(storesContext);
}

import React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

import Office from "./office/Office";
import Itter from "./itter/Itter";
import { useStores } from "./util/hooks/useStores";

const GameContainer = styled.div`
  height: 820px;
  width: 1440px;
  position: relative;
  z-index: 1;
`;

const Simulation = observer(() => {
  const gs = useStores();

  return (
    <GameContainer>
      {gs.gameState === "office" && <Office />}
      {gs.gameState === "itter" && <Itter />}
    </GameContainer>
  );
});

export default Simulation;

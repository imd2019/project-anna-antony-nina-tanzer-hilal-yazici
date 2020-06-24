import React, { useState } from "react";
import styled from "styled-components";
import { useStores } from "../util/hooks/useStores";
import { observer } from "mobx-react";

const PcList = styled.ul`
  position: absolute;
  top: 320px;
  left: 600px;
  list-style-type: none;
  z-index: 99;
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 300px;
`;

const AuswahlButton = styled.button`
  color: red;
`;

const Checkliste = observer(() => {
  const gs = useStores();
  return (
    <PcList>
      {gs.decisions.gpsText && <li id="gpsText">GPS-Tracking ✓</li>}
      {gs.decisions.datenhinterlegungText && (
        <li id="datenhinterlegungText">Datenhinterlegung ✓</li>
      )}
      {gs.decisions.keintrackingText && (
        <li id="keintrackingText">Kein Tracking ✖</li>
      )}
      {gs.decisions.neinkksText && <li id="neinkksText">Krankenkasse ✖</li>}
      {gs.decisions.jakksText && <li id="jakksText">Krankenkasse ✓</li>}
      {gs.decisions.neinkonzerneText && (
        <li id="neinkonzerneText">Konzerne ✖</li>
      )}
      {gs.decisions.jakonzerneText && <li id="jakonzerneText">Konzerne ✓</li>}
      {gs.decisions.neinreiseText && (
        <li id="neinreiseText">Reisedienstleister ✖</li>
      )}
      {gs.decisions.jareiseText && (
        <li id="jareiseText">Reisedienstleister ✓</li>
      )}
      {gs.decisions.neinkamerasText && (
        <li id="neinkamerasText">Kameras installieren ✖</li>
      )}
      {gs.decisions.jakamerasText && (
        <li id="jakamerasText">Kameras installieren ✓</li>
      )}
      {gs.decisions.jagesichtserkennungText && (
        <li id="jagesichtserkennungText">Gesichtserkennung ✓</li>
      )}
      {gs.decisions.jawaermebildText && (
        <li id="jawaermebildText">Wärmebildfunktion ✓</li>
      )}
      {gs.getDecisionsAmount === 4 && (
        <AuswahlButton onClick={() => gs.setGameState("itter")}>
          Auswahl bestätigen {gs.getDecisionsAmount}
        </AuswahlButton>
      )}
    </PcList>
  );
});

export default Checkliste;

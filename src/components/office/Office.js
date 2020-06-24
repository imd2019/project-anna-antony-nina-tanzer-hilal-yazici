import React from "react";
import OfficeBG from "../../assets/bg_desk_empty.png";
import { useStores } from "../util/hooks/useStores";

import Paper1 from "../../assets/paper1.png";
import Paper2 from "../../assets/paper2.png";
import Paper3 from "../../assets/paper3.png";
import Paper4 from "../../assets/paper4.png";
import Paper5 from "../../assets/paper5.png";

import Kameras from "../../assets/kameras.png";
import Konzerne from "../../assets/konzerne.png";
import Krankenkassen from "../../assets/krankenkassen.png";
import Reisedienstleister from "../../assets/reisedienstleister.png";
import Tracking from "../../assets/standort.png";

import styled from "styled-components";
import Paper from "./Paper";
import Ordner from "./Ordner";
import Checkliste from "./List";

const OfficeContainer = styled.div`
  background-image: url(${OfficeBG});
  height: 820px;
  width: 1440px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const PaperContainer = styled.div`
  position: absolute;
  top: 520px;
  left: 1000px;
`;

const OrdnerContainer = styled.div`
  position: absolute;
  top: 350px;
  left: 990px;
`;

const Office = ({ setState }) => {
  const gs = useStores();
  return (
    <OfficeContainer>
      <PaperContainer>
        <Paper
          left={"0px"}
          top={"30px"}
          width={"120px"}
          height={"70px"}
          img={Paper1}
          modalImage={Tracking}
          decisions={[
            { text: "ja", fn: (value) => (gs.decisions.gpsText = value) },
            {
              text: "jap",
              fn: (value) => (gs.decisions.datenhinterlegungText = value),
            },
            {
              text: "nein",
              fn: (value) => (gs.decisions.keintrackingText = value),
            },
          ]}
        />
        <Paper
          left={"20px"}
          top={"0px"}
          width={"110px"}
          height={"90px"}
          img={Paper2}
          modalImage={Konzerne}
          decisions={[
            {
              text: "ja",
              fn: (value) => (gs.decisions.jakonzerneText = value),
            },
            {
              text: "nein",
              fn: (value) => (gs.decisions.neinkonzerneText = value),
            },
          ]}
        />
        <Paper
          left={"150px"}
          top={"25px"}
          width={"70px"}
          height={"80px"}
          img={Paper3}
          modalImage={Krankenkassen}
          decisions={[
            { text: "ja", fn: (value) => (gs.decisions.jakksText = value) },
            {
              text: "nein",
              fn: (value) => (gs.decisions.neinkksText = value),
            },
          ]}
        />
        <Paper
          left={"200px"}
          top={"30px"}
          width={"90px"}
          height={"80px"}
          img={Paper4}
          modalImage={Reisedienstleister}
          decisions={[
            { text: "ja", fn: (value) => (gs.decisions.jareiseText = value) },
            {
              text: "nein",
              fn: (value) => (gs.decisions.neinreiseText = value),
            },
          ]}
        />
        <Paper
          left={"220px"}
          top={"40px"}
          width={"100px"}
          height={"80px"}
          img={Paper5}
          modalImage={Kameras}
          decisions={[
            { text: "Ja", fn: (value) => (gs.decisions.jakamerasText = value) },
            {
              text: "jap",
              fn: (value) => (gs.decisions.jagesichtserkennungText = value),
            },
            {
              text: "Japp",
              fn: (value) => (gs.decisions.jawaermebildText = value),
            },
            {
              text: "Nein",
              fn: (value) => (gs.decisions.neinkamerasText = value),
            },
          ]}
        />
      </PaperContainer>
      <OrdnerContainer>
        <Ordner left={0} />
        <Ordner left={60} />
        <Ordner left={120} />
        <Ordner left={180} />
        <Ordner left={240} />
      </OrdnerContainer>
      <Checkliste></Checkliste>
    </OfficeContainer>
  );
};

export default Office;

import React, { useState } from "react";
import styled from "styled-components";
import Ordner1 from "../../assets/ordner_1.png";

const OfficeOrdner = styled.div`
  position: absolute;
  z-index: 99;
  background-image: url(${Ordner1});
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px;
  width: 50px;
`;

const Ordner = ({ left }) => {
  const [fellOver, setFellOver] = useState(false);

  return (
    <OfficeOrdner
      onClick={() => setFellOver(true)}
      style={{
        left: `${left + (fellOver ? -20 : 0)}px`,
        top: `${10 + (fellOver ? 55 : 0)}px`,
        transform: `rotate(${fellOver ? 90 : 0}deg)`,
      }}
    />
  );
};

export default Ordner;

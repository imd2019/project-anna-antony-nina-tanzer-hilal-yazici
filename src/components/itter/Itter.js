import React from "react";
import styled from "styled-components";

import ItterBG from "../../assets/itter.png";

const ItterContainer = styled.div`
  background-image: url(${ItterBG});
  height: 820px;
  width: 1440px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const Itter = () => {
  return <ItterContainer />;
};

export default Itter;

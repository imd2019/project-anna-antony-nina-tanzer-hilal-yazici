import React from "react";
import styled from "styled-components";

import angryBG from "../../assets/pressconference_bg.png";

const AngryContainer = styled.div`
  background-image: url(${angryBG});
  height: 820px;
  width: 1440px;
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;
`;

const Conference = () => {
  return <AngryContainer />;
};

export default Conference;

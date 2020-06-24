import React, { useState } from "react";
import styled from "styled-components";
import PaperModal from "./PaperModal";

const PaperJoghurt = styled.div`
  position: absolute;
  z-index: 100;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

const Paper = ({ left, top, width, height, img, modalImage, decisions }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <PaperJoghurt
        onClick={() => setShowModal(true)}
        style={{ left, top, width, height, backgroundImage: `url(${img})` }}
      />
      {showModal && (
        <PaperModal
          closeModal={() => setShowModal(false)}
          modalImage={modalImage}
          decisions={decisions}
        />
      )}
    </>
  );
};

export default Paper;

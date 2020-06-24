import React from "react";
import styled from "styled-components";
import { useStores } from "../util/hooks/useStores";

const Modal = styled.div`
  height: 820px;
  width: 1440px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
`;

const RadioButton = styled.input``;

const RadioButtonLabel = styled.label`
  position: absolute;
  left: 40px;
  bottom: ${(props) => props.bottom}px;
  color: black;
`;

const Decision = styled.div`
  height: 700px;
  width: 570px;
  position: relative;
  display: inline-block;
`;

const DecisionImage = styled.img`
  height: 700px;
`;

const PaperModal = ({ closeModal, modalImage, decisions }) => {
  const gs = useStores();
  return (
    <Modal>
      <CloseButton onClick={() => closeModal()}>&times;</CloseButton>
      <Decision>
        <DecisionImage src={modalImage} />

        {decisions.map((dec, i) => (
          <RadioButtonLabel htmlFor="abc" bottom={150 - i * 42}>
            <RadioButton
              type="radio"
              name="checkcheck"
              id="abc"
              onChange={(e) => {
                dec.fn(e.target.value);
                console.log(e.target.value);
              }}
            />
            {dec.text}
          </RadioButtonLabel>
        ))}
      </Decision>
    </Modal>
  );
};

export default PaperModal;

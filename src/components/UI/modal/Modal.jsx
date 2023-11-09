import React from "react";
import styled from "styled-components";
import { Modal, Box } from "@mui/material";

export const Modalka = ({ children, onClick, toggle }) => {
  return (
    <>
      <StyledModal onClose={onClick} open={toggle}>
        <BoxStyled>{children}</BoxStyled>
      </StyledModal>
    </>
  );
};

const BoxStyled = styled(Box)`
  position: fixed;
  top: 22vh;
  left: 4%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 42rem;
  left: calc(50% - 20rem);

  z-index: 999;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-4rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.75);
`;

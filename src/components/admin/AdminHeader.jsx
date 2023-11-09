import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../../store/auth/authSlice";
import { Button } from "../UI/button/Button";

export const AdminHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const headerNavigate = () => {
    navigate("/");
  };

  const logoutHandler = () => {
    return dispatch(authActions.logout());
  };

  return (
    <HeaderStyle>
      <Container>
        <MealsText onClick={headerNavigate}>React Meals</MealsText>
        <StyledButton
          variant="contained"
          onClick={logoutHandler}
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "#5a1f08",
            border: "2px solid  #7b2807",
          }}>
          Log Out
        </StyledButton>
      </Container>
    </HeaderStyle>
  );
};

const StyledButton = styled(Button)`
  background-color: #5a1f08;
  &:hover {
    background-color: #bc5932;
  }
`;

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 22px 120px;
  color: #ffffff;
  top: 0;
  z-index: 998;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MealsText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  cursor: pointer;
`;

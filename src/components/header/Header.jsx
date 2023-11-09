import React, { useEffect, useState } from "react";
import { OrderBasket } from "./OrderBasket";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { authActions } from "../../store/auth/authSlice";

export const Header = ({ toggleHandler }) => {
  const [animationClass, setAnimationClass] = useState("");
  const { items } = useSelector((state) => state.basket);
  const { isAuthorization } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plusAnimation = () => {
    setAnimationClass("bump");

    const animationTimePlus = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(animationTimePlus);
    };
  };

  useEffect(() => {
    plusAnimation();
  }, [items]);

  const navigateToSignIn = () => {
    navigate("signin");
  };
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
        <OrderBasket className={animationClass} toggleHandler={toggleHandler}>
          Your Cart
        </OrderBasket>
        {isAuthorization ? (
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
        ) : (
          <StyledButton
            variant="contained"
            onClick={navigateToSignIn}
            style={{
              width: "200px",
              height: "50px",
              borderRadius: "8px",
              backgroundColor: "#5a1f08",
              border: "2px solid  #7b2807",
            }}>
            Log in
          </StyledButton>
        )}
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

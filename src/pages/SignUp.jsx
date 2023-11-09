import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { USERS_ROLE } from "../constants";
import { useDispatch } from "react-redux";
import { signUpRequest } from "../store/auth/authThunk";
import { Button } from "../components/UI/button/Button";
import { snackBarAction } from "../store/snackBar";

export const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      role: USERS_ROLE.USER,
    };

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    dispatch(signUpRequest(data))
      .unwrap()
      .then(() => navigate("/signin"))
      .catch((error) => console.log(error));
    dispatch(snackBarAction.doSuccess("Successfully"));
  };

  return (
    <div>
      <FormStyled onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}>
          <TextField
            sx={{ width: "100%" }}
            type="text"
            label="Name"
            variant="outlined"
            value={name}
            onChange={nameChangeHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={emailChangeHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={passwordChangeHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            type="password"
            label="Confirm password"
            variant="outlined"
            value={confirmPassword}
            onChange={confirmPasswordHandler}
          />
          <Button
            type="submit"
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#7b2807",
              border: "2px solid  #7b2807",
            }}>
            Sign up
          </Button>
          <div>
            You have an account ? <Link to="/signin">sign in</Link>
          </div>
        </Box>
      </FormStyled>
    </div>
  );
};

const FormStyled = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 450px;
  background-color: aliceblue;
  margin-top: 200px;
  padding: 30px;
  border-radius: 15px;
  background: linear-gradient(to top left, #f12711, #f5af19);
  border-radius: 15px 20% 15px 20%;
  &:hover {
    width: 505px;
    height: 455px;
    box-shadow: 14px 3px 8px 6px #f12711;
  }
`;
